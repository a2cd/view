<template>
  <div>
    <div class="container">
      <div class="mask">
        <AppMenus />
        <div style="height: 500px"></div>
        <div style="position: fixed; bottom: 20px; width: 100%">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { resourceUrl } from '@/utils/env'
import Footer from '@/components/footer/index.vue'
import AppMenus from './components/app-menus.vue'

// const data = reactive({})

const bgUrl = `url(${resourceUrl}/img/bg/bg2.min.jpg)`

onMounted(() => {})
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: v-bind(bgUrl) no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

.mask {
  width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
