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
        <a-timeline :style="{ margin: '30px' }" :reverse="true">
          <a-timeline-item label="2022-01-16">
            <template #dot>
              <icon-heart-fill
                :style="{
                  color: '#FF576F',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                }"
              />
            </template>
            第一次见面
          </a-timeline-item>
          <a-timeline-item label="2022-02-15">
            <template #dot>
              <IconCheck
                :style="{
                  color: 'green',
                  fontSize: '16px',
                  padding: '2px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-light-1)',
                }"
              />
            </template>
            Confession
          </a-timeline-item>
          <a-timeline-item label="2022-03-06">
            <template #dot>
              <IconCheck
                :style="{
                  color: 'green',
                  fontSize: '16px',
                  padding: '2px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-light-1)',
                }"
              />
            </template>
            拉手手
          </a-timeline-item>
          <a-timeline-item label="2022-03-13">
            <template #dot>
              <IconCheck
                :style="{
                  color: 'green',
                  fontSize: '16px',
                  padding: '2px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-light-1)',
                }"
              />
            </template>
            hug & kiss
          </a-timeline-item>
          <a-timeline-item label="2022-05-21">
            <template #dot>
              <icon-face-meh-fill
                :style="{
                  color: 'red',
                  fontSize: '15px',
                  padding: '1px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-danger-light-1)',
                }"
              />
            </template>
            angry
          </a-timeline-item>
          <a-timeline-item label="2023-01-16" dot-color="#00B42A">
            <template #dot>
              <icon-tag
                :style="{
                  color: '#FF7F27',
                  fontSize: '16px',
                  padding: '2px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-warning-light-1)',
                }"
              />
            </template>
            满一年
          </a-timeline-item>
          <a-timeline-item label="2023-04-16">
            <template #dot>
              <IconCheck
                :style="{
                  color: 'green',
                  fontSize: '16px',
                  padding: '2px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-light-1)',
                }"
              />
            </template>
            一起搬家
          </a-timeline-item>
          <a-timeline-item :label="nowDate" dot-color="#00B42A">
            <template #dot>
              <icon-pushpin
                type="icon-flag"
                :style="{
                  color: '#AC40F3',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                }"
              />
            </template>
            现在
          </a-timeline-item>
        </a-timeline>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

const nowDate = dayjs(Date.now()).format()
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
