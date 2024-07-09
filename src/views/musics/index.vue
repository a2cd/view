<template>
  <div class="html">
    <div class="body">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Musics"
        subtitle=""
        @back="handleBack"
      ></a-page-header>
      <div id="aplayer" ref="aplayerRef"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const aplayerRef = ref<HTMLElement>()
onMounted(() => {
  const aplayerEl = aplayerRef.value
  if (aplayerEl) {
    const ap = new APlayer({
      container: aplayerEl,
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      mini: false,
      theme: '#41B883',
      preload: 'auto',
      volume: 0.6,
      mutex: true,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 3,
      audio: [
        {
          name: 'All Too Well',
          artist: 'Taylor Swift',
          url: 'http://a2cd.cn/musics/Taylor%20Swift-All%20Too%20Well.mp3',
          cover: '',
        },
      ],
    })
  }
})

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
</style>
