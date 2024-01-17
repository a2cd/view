import dayjs from 'dayjs'

/**
 * Whether to generate package preview
 * 是否生成打包报告
 */
export default {}

export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

export function genDistVersion(): string {
  // return `<meta name="version" content="${dayjs(Date.now()).format(
  //   'YYYYMMDDHHmmss'
  // )}"/>`
  return `${dayjs(Date.now()).format('YYYYMMDDHHmmss')}`
}
