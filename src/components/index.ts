import { App } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
} from 'echarts/components'
import Footer from '@/components/footer/index.vue'
import Chart from './chart/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import Sounder from './sounder/index.vue'
import { Icon } from '@arco-design/web-vue';

// 获得iconfont.js文件的网络位置
const iconfontUrl = new URL('@/assets/iconfont.js', import.meta.url).href
const IconFont = Icon.addFromIconFontCn({ src: iconfontUrl });
// console.log('iconfontUrl=', iconfontUrl)

// Manually introduce ECharts modules to reduce packing size
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
])

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart)
    Vue.component('Breadcrumb', Breadcrumb)
    Vue.component('Sounder', Sounder)
    Vue.component('IconFont', IconFont)
    Vue.component('Footer', Footer)
  },
}
