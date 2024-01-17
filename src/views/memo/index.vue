<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Memo"
        subtitle=""
        @back="handleBack"
      ></a-page-header>

      <a-row v-for="(item, index) in memoStore.getList" :key="index">
        <a-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="12"
          :xl="10"
          :xxl="10"
          style="position: relative; margin: 10px auto; padding: 10px; box-shadow: 0 0 8px 2px rgba(180, 180, 180, 0.3)"
        >
          <a-tag v-if="item.type === TYPE.BIRTHDAY" color="green" style="position: absolute; right: 10px">
            <template #icon>
              <icon-gift />
            </template>
            生日
          </a-tag>
          <a-tag v-else-if="item.type === TYPE.EVENT" color="arcoblue" style="position: absolute; right: 10px">
            <template #icon>
              <icon-calendar-clock />
            </template>
            事件
          </a-tag>
          <a-countdown
            v-if="memoStore.countdownStatus(item.id) === STATUS.ONGOING"
            :title="joinCountdownTitle(item)"
            :now="item.from"
            :value="item.to"
            :format="item.format"
            @finish="handleFinish(item)"
          />
          <div v-else-if="memoStore.countdownStatus(item.id) === STATUS.DONE">
            <div style="margin: 5px 0; font-weight: 500; color: var(--color-text-2)">{{ item.title }}</div>
            <div v-if="item.type === TYPE.BIRTHDAY">
              <div style="margin: 10px 0; font-size: 26px; font-weight: 500; color: #ed1c24">生快!</div>
              <img :src="resourceUrl + '/img/illustrations/laugh.svg'" style="width: 80%" alt="ml" />
            </div>
            <div v-else-if="item.type === TYPE.EVENT">
              <div style="margin: 10px 0; font-size: 26px; font-weight: 500; color: #ed1c24">Done!</div>
            </div>
          </div>
          <div v-else-if="memoStore.countdownStatus(item.id) === STATUS.TIMEOUT">
            <div style="margin: 5px 0; font-weight: 500; color: var(--color-text-2)">{{ item.title }}</div>
            <div style="margin: 10px 0; font-size: 26px; font-weight: 500; color: gray">
              <div v-if="item.type === TYPE.BIRTHDAY">{{ dayjs(new Date(item.to)).format('YYYY/MM/DD') }} 生日已过</div>
              <div v-else-if="item.type === TYPE.EVENT">已过期</div>
            </div>
          </div>
          <div v-if="item.meta" style="color: gray">
            <div v-if="item.meta.lunarCalendar" style="padding: 3px">破壳日: {{ item.meta.birthday }}</div>
            <div v-if="item.meta.lunarCalendar" style="padding: 3px">农历: {{ item.meta.lunarCalendar }}</div>
            <div v-if="item.meta.detail" style="padding: 3px">备注: {{ item.meta.detail }}</div>
          </div>
        </a-col>
      </a-row>
      <div style="position: relative; width: 100%">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import dayjs from 'dayjs'
import { CountdownItem, STATUS, TYPE } from '@/store/modules/memo/types'
import { useMemoStore } from '@/store'
import { resourceUrl } from '@/utils/env'
import Footer from '@/components/footer/index.vue'

const router = useRouter()
const memoStore = useMemoStore()

const handleFinish = (item: CountdownItem) => {
  memoStore.setCountdownStatus(item.id, STATUS.DONE)
}

const joinCountdownTitle = (item: CountdownItem) => {
  const to = dayjs(new Date(item.to)).format('YYYY/MM/DD')
  return `${item.title} - ${to} - ${item.week}`
}

const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}

onMounted(() => {
  memoStore.init()
})

// onUnmounted(() => {
//   memoStore.reset()
// })
</script>

<style lang="less" scoped>
.container {
}
</style>
