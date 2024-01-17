<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Random Number"
        subtitle=""
        @back="handleBack"
      ></a-page-header>
      <a-row>
        <a-col :xs="22" :sm="20" :md="20" :lg="12" :xl="10" :xxl="10" style="margin: auto">
          <div style="padding: 10px">
            <div style="margin: 10px 0; font-size: 16px; font-weight: 500; color: gray">
              生成随机数[a, b]:&emsp;
              <span v-if="randomNumber.show" style="font-weight: 500; color: #ed1c24">{{ randomNumber.num }}</span>
            </div>
            <div>
              <a-space>
                <a-input-number v-model="randomNumber.left" style="width: 130px" size="small" />
                <a-input-number v-model="randomNumber.right" :default-value="10" style="width: 130px" size="small" />
                <a-button type="primary" size="small" :loading="randomNumber.loading" @click="handleGenRandom">
                  Go
                </a-button>
              </a-space>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="22" :sm="20" :md="20" :lg="12" :xl="10" :xxl="10" style="margin: auto">
          <div style="padding: 10px">
            <div style="margin: 10px 0; font-size: 16px; font-weight: 500; color: gray">
              生成端口号[5001, 65535];&emsp;
              <span v-if="port.show" style="font-weight: 500; color: #ed1c24">{{ port.num }}</span>
            </div>
            <div>
              <a-space>
                <a-input-number :default-value="5001" style="width: 130px" size="small" disabled />
                <a-input-number :default-value="65535" style="width: 130px" size="small" disabled />
                <a-button type="primary" size="small" @click="handleGenRandomPort">Go</a-button>
              </a-space>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const randomNumber = ref({
  left: 0,
  right: 10,
  num: 0,
  show: false,
  loading: false,
})
const port = ref({
  left: 0,
  right: 10,
  num: 0,
  show: false,
  loading: false,
})

const handleGenRandom = () => {
  randomNumber.value.show = true
  randomNumber.value.loading = true

  const timer = setInterval(() => {
    const l = randomNumber.value.left
    const r = randomNumber.value.right
    randomNumber.value.num = Math.floor(Math.random() * (r - l + 1)) + l
  }, 100)

  setTimeout(() => {
    randomNumber.value.loading = false
    clearInterval(timer)
  }, 2000)
}

const handleGenRandomPort = () => {
  port.value.show = true
  port.value.loading = true

  const timer = setInterval(() => {
    const l = 5001
    const r = 65535
    port.value.num = Math.floor(Math.random() * (r - l + 1)) + l
  }, 100)

  setTimeout(() => {
    port.value.loading = false
    clearInterval(timer)
  }, 2000)
}

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
