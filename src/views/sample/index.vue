<template>
  <div>
    <div class="container">
      <a-page-header
          :style="{ background: 'var(--color-bg-2)' }"
          title="Love Story"
          subtitle=""
          @back="handleBack"
      ></a-page-header>
      <a-card :style="{ width: '100%' }">
        111
      </a-card>
    </div>
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
</script>

<style lang="less" scoped>
.container {
}
</style>
