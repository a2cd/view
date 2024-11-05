<template>
  <div>
    <a-row justify="center" align="center">
      <a-col v-for="(item, index) in apps" :key="index" :xs="10" :sm="8" :md="5" :lg="4" :xl="3" :xxl="2"
        style="display: flex; justify-content: center; align-items: center; margin-top: 20px">
        <div class="menu-wrapper" @click="handleForward(item)">
          <div style="width: 60px; height: 60px; margin: 10px auto 0 auto; overflow: hidden">
            <img :src="resourceUrl + item.iconPath" style="width: 100%" alt="ml" />
          </div>

          <div style="position: relative; bottom: 0">
            <div style="width: 100px; height: 30px; font-size: 10px; text-align: center; line-height: 30px">
              {{ item.name }}
            </div>
          </div>
          <a-badge v-if="item.externalLink !== undefined" text="E"
            :dot-style="{ background: '#7BC616', color: 'white' }" :offset="[-20, -20]"></a-badge>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const docsUrl = import.meta.env.VITE_DOCS_URL
const resourceUrl = import.meta.env.VITE_RESOURCES_URL

const router = useRouter()

interface AppItemInfo {
  name: string
  routeName: string
  iconPath: string
  externalLink: string
  params: any
}

const handleForward = (info: AppItemInfo) => {
  if (info.externalLink) {
    const a = document.createElement('a')
    a.setAttribute('href', info.externalLink)
    a.setAttribute('target', '_blank')
    document.body.appendChild(a)
    a.click()
    a.remove()
    return
  }
  router.push({
    name: info.routeName,
    params: info.params,
  })
}

const apps: AppItemInfo[] = [
  {
    name: '工具室',
    iconPath: '/img/icon/tool-room.svg',
    routeName: 'ToolRoom',
  } as AppItemInfo,
  {
    name: '黑洞',
    iconPath: '/img/icon/black-hole.svg',
    routeName: 'Absorber',
  } as AppItemInfo,
  {
    name: '加密',
    iconPath: '/img/icon/lock.svg',
    routeName: 'Encryption',
  } as AppItemInfo,
  {
    name: '音乐播放器',
    iconPath: '/img/icon/music.svg',
    routeName: 'Sounder',
  } as AppItemInfo,
  {
    name: 'Theme Clock',
    iconPath: '/img/icon/clock.svg',
    routeName: 'ThemeClock',
  } as AppItemInfo,
  {
    name: '历史时间轴',
    iconPath: '/img/icon/timeline.svg',
    routeName: 'HistoryMap',
  } as AppItemInfo,
  {
    name: '诗歌',
    iconPath: '/img/icon/poetry.svg',
    routeName: 'Poetry',
  } as AppItemInfo,
  {
    name: '菜谱',
    iconPath: '/img/icon/recipe.svg',
    routeName: 'HistoryMap',
  } as AppItemInfo,
  {
    name: '词汇',
    iconPath: '/img/icon/vocabulary.svg',
    routeName: 'HistoryMap',
  } as AppItemInfo,
  {
    name: '相册',
    iconPath: '/img/icon/album.svg',
    routeName: 'Album',
  } as AppItemInfo,
  {
    name: 'Love Story',
    iconPath: '/img/icon/rose.svg',
    routeName: 'LoveStory',
  } as AppItemInfo,
  {
    name: 'Memo',
    iconPath: '/img/icon/memo.svg',
    routeName: 'Memo',
  } as AppItemInfo,
  {
    name: 'Random Number',
    iconPath: '/img/icon/dice.svg',
    routeName: 'RandomNumber',
  } as AppItemInfo,
  {
    name: 'Movies',
    iconPath: '/img/icon/movie.svg',
    routeName: 'Movies',
  } as AppItemInfo,
  {
    name: 'Books',
    iconPath: '/img/icon/book.svg',
    routeName: 'Movies',
  } as AppItemInfo,
  {
    name: 'Stickers',
    iconPath: '/img/icon/sticker.svg',
    routeName: 'Stickers',
  } as AppItemInfo,
  {
    name: 'Blogs',
    iconPath: '/img/icon/blog.svg',
    externalLink: 'https://www.cnblogs.com/caseor/',
  } as AppItemInfo,
  { name: 'Docs', iconPath: '/img/icon/doc.svg', externalLink: docsUrl } as AppItemInfo,
  {
    name: 'Static Resources',
    iconPath: '/img/icon/earth.svg',
    externalLink: resourceUrl,
  } as AppItemInfo,
  {
    name: 'Login',
    iconPath: '/img/icon/user.svg',
    routeName: 'Login',
  } as AppItemInfo,
]
</script>

<style lang="less" scoped>
.menu-wrapper {
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
}

.menu-wrapper:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 8px 2px rgba(180, 180, 180, 0.3);
  cursor: pointer;
}
</style>
