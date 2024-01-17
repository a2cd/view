<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="item.poetryName"
        subtitle="'[' + item.poetEpoch + ']' + item.poet"
        @back="handleBack"
      ></a-page-header>
      {{ params }}
      <!--<a-page-header-->
      <!--  :style="{ background: 'var(&#45;&#45;color-bg-2)' }"-->
      <!--  :title="item.poetryName"-->
      <!--  :subtitle="'[' + item.poetEpoch + ']' + item.poet"-->
      <!--  @back="handleBack"-->
      <!--&gt;</a-page-header>-->
      <!--<div>{{ item.text }}</div>-->
      <!--<div>{{ item.notes }}</div>-->
      <!--<div>{{ item.translate }}</div>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

import { onMounted } from 'vue'

const { params } = useRoute()
console.log('params: ', params)
// this.$route.query.id
// defineProps({
//   item: {
//     type: Object as PropType<PoetryItem>,
//     default() {
//       return {
//         poetryName: '请返回上级选择',
//         poetEpoch: '无',
//         poet: '无',
//         text: '无',
//         notes: ['无'],
//         translate: '无',
//       } as PoetryItem
//     },
//   },
// })

const router = useRouter()

onMounted(() => {})
const handleBack = () => {
  router.push({
    name: 'Poetry',
    query: {},
  })
}
</script>

<style lang="less" scoped>
.container {
}
</style>
