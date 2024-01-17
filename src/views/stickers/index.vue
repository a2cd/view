<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Stickers"
        subtitle=""
        @back="handleBack"
      ></a-page-header>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

const nowDate = dayjs(Date.now()).format('YYYY-MM-DD')
const router = useRouter()
const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}
</script>

<style lang="less" scoped>
.container {
}
</style>
