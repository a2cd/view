<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Poetry"
        subtitle=""
        @back="handleBack"
      ></a-page-header>
      <a-list size="small">
        <a-list-item v-for="(item, index) in poetryStore.getList" :key="index" @click="handleForward(item.id)">
          {{ item.id }}. {{ item.poetryName }} - [{{ item.poetEpoch }}]{{ item.poet }}
        </a-list-item>
        <a-list-item>逍遥游 - 庄周</a-list-item>
        <a-list-item>送东阳马生序 - 宋濂</a-list-item>
        <a-list-item>劝学 - 荀子</a-list-item>
        <a-list-item>师说 - 韩愈</a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { usePoetryStore } from '@/store'
import { onMounted } from 'vue'

const poetryStore = usePoetryStore()
const nowDate = dayjs(Date.now()).format('YYYY-MM-DD')
const router = useRouter()

onMounted(() => {
  poetryStore.init()
})
const handleForward = (id: number) => {
  router.push({
    name: 'PoetryDetail',
    params: { id },
  })
}
const handleBack = () => {
  router.push({
    name: 'Home',
  })
}
</script>

<style lang="less" scoped>
.container {
}
</style>
