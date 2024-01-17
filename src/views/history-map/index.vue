<template>
  <div class="container">
    <a-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="历史时间轴"
      subtitle=""
      @back="handleBack"
    ></a-page-header>

    <a-card :style="{ width: '100%' }">
      <a-timeline :style="{ margin: '30px' }" :reverse="true" mode="alternate" label-position="relative">
        <div v-for="(item, index) in data" :key="index">
          <a-timeline-item :label="item.year" dot-color="#C9CDD4">
            <div>{{ item.name }}</div>
            <div style="color: gray; font-size: 12px">{{ item.desc }}</div>
          </a-timeline-item>
        </div>
      </a-timeline>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}
const data = [
  { name: '黄帝', year: '公元前2500年', desc: '...' },
  { name: '周文王-姬昌', year: '', desc: '...' },
  { name: '周武王-姬发', year: '', desc: '...' },
  { name: '褒姒', year: '', desc: '不详, 前779年活动' },
  { name: '春秋', year: '', desc: '春秋开始' },
  { name: '齐桓公', year: '', desc: '?~公元前643年' },
  { name: '管仲', year: '', desc: '' },
  { name: '文姜', year: '', desc: '?~公元前673年' },
  {
    name: '孔子',
    year: '公元前551年',
    desc: '公元前551年9月28日-公元前479年4月11日',
  },
  { name: '战国', year: '', desc: '孔子去世标志春秋结束战国开始' },
  {
    name: '墨子',
    year: '',
    desc: '公元前476或480年—公元前390或420年',
  },
  {
    name: '勾践',
    year: '',
    desc: '?~公元前464年',
  },
  { name: '西施', year: '', desc: '' },
  { name: '赵雍', year: '', desc: '约公元前340年－公元前295年' },
  { name: '扁鹊', year: '', desc: '不详, 前361年活动' },
  { name: '乐毅', year: '', desc: '不详, 前284年燕国活动' },
  { name: '商鞅', year: '', desc: '车裂' },
  { name: '秦始皇', year: '前259年', desc: '前259年—前210年' },
  { name: '陈胜', year: '', desc: '?—前208年' },
  { name: '刘邦', year: '', desc: '前256年/前247年前195年6月1日' },
  { name: '贾谊', year: '前200年', desc: '前200年－前168年' },
  { name: '李自成', year: '1606年', desc: '1606年—1645年' },
  { name: '陈圆圆', year: '1623年', desc: '1623年―1695年' },
]
</script>

<style lang="less" scoped>
.container {
}
</style>
