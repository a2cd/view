export const GROUP = {
  DEFAULT: 0,
  KAI_FU: 1,
  MING_LIANG: 2,
}

export const TYPE = {
  BIRTHDAY: 1,
  EVENT: 2,
}

export const STATUS = {
  ONGOING: 1,
  DONE: 2,
  TIMEOUT: 3,
}

export interface CountdownMeta {
  // 农历
  lunarCalendar: string
  // 出生日期
  birthday: string
  // 备注
  detail: string
}

export interface CountdownItem {
  id: number
  title: string
  from: number
  to: number
  format: string
  // 星期几
  week: string
  // 分组: 0'default';
  group: number
  // 类型: 1'birthday', 2'event'
  type: number
  show: boolean
  // 排序
  order: number
  meta?: CountdownMeta
}

export interface LunarCalendarItem {
  lunarCalendar: string
  date: string
  typeDes: string
  solarTerms: string
}

export default interface MemoState {
  list: CountdownItem[]
  lunarDateMap: Map<string, LunarCalendarItem>
  countdownStatusMap: Map<number, number>
}
