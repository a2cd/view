import { defineStore } from 'pinia'
import MemoState, { CountdownItem, LunarCalendarItem, STATUS, TYPE } from '@/store/modules/memo/types'
import lunarCalendarResponseBody from '@/assets/2023_lunar_calendar.json'
import {
  ExamArchitectureEvent,
  FatherBirthday,
  HaoChenBirthday,
  HaoYuBirthday,
  MingLiangBirthday,
  MotherBirthday,
  SelfBirthday,
  SignUpArchitectureEvent,
  SisterBirthday,
} from '@/store/modules/memo/data'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const weekZh: string[] = ['日', '一', '二', '三', '四', '五', '六']

const weekTitle = (weekIdx: number) => {
  if (weekIdx < 0 || weekIdx > 6) {
    return ''
  }
  return `星期${weekZh[weekIdx]}`
}

// 边界类 防腐层
const genLunarDateMap = (): Map<string, LunarCalendarItem> => {
  const { data } = lunarCalendarResponseBody
  const lunarDateMap = new Map<string, LunarCalendarItem>()
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].days.length; j += 1) {
      const item: LunarCalendarItem = {
        lunarCalendar: data[i].days[j].lunarCalendar,
        date: data[i].days[j].date,
        typeDes: data[i].days[j].typeDes,
        solarTerms: data[i].days[j].solarTerms,
      }
      lunarDateMap.set(data[i].days[j].lunarCalendar, item)
    }
  }
  return lunarDateMap
}

const genList = (lunarDateMap: Map<string, LunarCalendarItem>): CountdownItem[] => {
  const list: CountdownItem[] = []
  list.push(SelfBirthday)
  list.push(MingLiangBirthday)
  list.push(SignUpArchitectureEvent)
  list.push(ExamArchitectureEvent)
  list.push(HaoChenBirthday)
  list.push(HaoYuBirthday)
  list.push(SisterBirthday)
  list.push(FatherBirthday)
  list.push(MotherBirthday)
  dayjs.extend(customParseFormat)
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i]
    if (!item.id) {
      console.error("memo genList 'id' cannot be undefined")
      // eslint-disable-next-line no-continue
      continue
    }
    if (item.type === TYPE.BIRTHDAY) {
      if (item.meta) {
        const lunarDate = lunarDateMap.get(item.meta.lunarCalendar) || ({} as LunarCalendarItem)
        item.to = dayjs(lunarDate.date, 'YYYY-MM-DD').toDate().getTime()
        const dayOfWeek = dayjs(item.to).day() // 获取星期
        item.week = weekTitle(dayOfWeek)
        item.meta.detail = `${lunarDate.typeDes}, ${lunarDate.solarTerms} ${item.meta.detail || ''}`
      }
    } else if (item.type === TYPE.EVENT) {
      const dayOfWeek = dayjs(item.to).day() // 获取星期
      item.week = weekTitle(dayOfWeek)
    }
    if (item.from > item.to + 86_400_000) {
      item.order = 99999
    }
  }
  // console.log('sort before:', list)
  // 先根据到期时间排序, 最近的到期时间排最上面
  list.sort((a, b) => a.to - b.to)
  // console.log('after sorting:', list)
  // 再根据order优先级排序, 根据order升序排序
  list.sort((a, b) => a.order - b.order)
  return list
}

// 判断倒计时是否过期
const genCountdownStatusMap = (list: CountdownItem[]): Map<number, number> => {
  const countdownStatusMap = new Map<number, number>()
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i]
    if (item.from < item.to) {
      countdownStatusMap.set(item.id, STATUS.ONGOING)
    } else if (item.from >= item.to && item.from <= item.to + 86_400_000) {
      countdownStatusMap.set(item.id, STATUS.DONE)
    } else if (item.from > item.to + 86_400_000) {
      countdownStatusMap.set(item.id, STATUS.TIMEOUT)
    }
  }
  return countdownStatusMap
}

const useMemoStore = defineStore('memo', {
  state: (): MemoState => ({
    list: [],
    lunarDateMap: new Map<string, LunarCalendarItem>(),
    countdownStatusMap: new Map<number, number>(),
  }),

  getters: {
    getList(state: MemoState): CountdownItem[] {
      return state.list
    },
    getCountdownStatusMap(state: MemoState): Map<number, number> {
      return state.countdownStatusMap
    },
  },

  actions: {
    setMemoState(partial: Partial<MemoState>) {
      this.$patch(partial)
    },

    init() {
      // 如果state存在则不需要重新加载
      if (this.list.length > 0) {
        this.refreshCountdownStatus()
        return
      }
      // 先加载农历
      const lunarDateMap = genLunarDateMap()
      // 生成倒计时列表
      const list = genList(lunarDateMap)
      const countdownStatusMap = genCountdownStatusMap(list)
      const memoState: MemoState = { list, lunarDateMap, countdownStatusMap }
      this.setMemoState(memoState)
    },
    setCountdownStatus(id: number, status: number) {
      this.countdownStatusMap.set(id, status)
    },
    countdownStatus(id: number): number {
      return this.countdownStatusMap.get(id) || 0
    },
    // 如果倒计时完成置为已完成状态
    // 1天以内展示done
    // 超过一天展示timeout
    refreshCountdownStatus() {
      for (let i = 0; i < this.list.length; i += 1) {
        const item = this.list[i]
        if (item.from >= item.to && item.from <= item.to + 86_400_000) {
          this.countdownStatusMap.set(item.id, STATUS.DONE)
        } else if (item.from > item.to + 86_400_000) {
          // 过期的放最下面
          item.order = 99999
          this.countdownStatusMap.set(item.id, STATUS.TIMEOUT)
        }
      }
      // 先根据到期时间排序, 最近的到期时间排最上面
      this.list.sort((a, b) => a.to - b.to)
      // 再根据order优先级排序, 根据order升序排序
      this.list.sort((a, b) => a.order - b.order)
    },
    reset() {
      this.$reset()
    },
  },
})

export default useMemoStore
