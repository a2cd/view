import { CountdownItem, TYPE } from '@/store/modules/memo/types'

const now = Date.now()
const SelfBirthday = {
  id: 1,
  title: 'Kk生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '冬月初九',
    birthday: '1999-12-16',
  },
} as CountdownItem

const MingLiangBirthday = {
  id: 2,
  title: 'Mm生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '八月廿九',
    birthday: '1998-10-19',
  },
} as CountdownItem

const HaoChenBirthday = {
  id: 3,
  title: '皓晨生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '正月初三',
    birthday: '2013-02-12',
  },
} as CountdownItem

const HaoYuBirthday = {
  id: 4,
  title: '皓宇生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '八月初四',
    birthday: '2019-09-02',
  },
} as CountdownItem

const SisterBirthday = {
  id: 5,
  title: '姐生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '九月初一',
    birthday: '1989-09-30',
  },
} as CountdownItem

const FatherBirthday = {
  id: 6,
  title: '爸生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '十月初四',
    birthday: '1967-10-03',
  },
} as CountdownItem

const MotherBirthday = {
  id: 6,
  title: '妈生日',
  from: now,
  to: now,
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.BIRTHDAY,
  order: 999,
  meta: {
    lunarCalendar: '八月十二',
    birthday: '1966-09-26',
  },
} as CountdownItem

const SignUpArchitectureEvent = {
  id: 100,
  title: '软考报名',
  from: now,
  to: new Date(2023, 8, 1, 10).getTime(),
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.EVENT,
  order: 999,
  meta: {
    detail: '直到9月6号',
  },
} as CountdownItem

const ExamArchitectureEvent = {
  id: 101,
  title: '软考考试',
  from: now,
  to: new Date(2023, 10, 4, 8).getTime(),
  format: 'D天 H时m分s秒',
  week: 'NA',
  type: TYPE.EVENT,
  order: 999,
  meta: {
    detail: '考试',
  },
} as CountdownItem

export {
  SelfBirthday,
  MingLiangBirthday,
  SignUpArchitectureEvent,
  ExamArchitectureEvent,
  HaoChenBirthday,
  HaoYuBirthday,
  SisterBirthday,
  FatherBirthday,
  MotherBirthday,
}
