import axios from 'axios'
import { resourceUrl } from '@/utils/env'

const instance = axios.create({
  baseURL: resourceUrl,
  timeout: 600000,
})

instance.interceptors.request.use(req => {
  // console.log('req:', req)
  return req
})
instance.interceptors.response.use(res => {
  // console.log('res:', res)
  return res
})

export default function getCurrentYearLunarCalendar() {
  return instance.get<any>('/json/current_year_lunar_calendar.json')
}
