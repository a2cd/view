<template>
  <div>
    <a-row justify="center" align="center">
      <a-col
          v-for="(item, index) in apps"
          :key="index"
          :xs="10"
          :sm="8"
          :md="5"
          :lg="4"
          :xl="3"
          :xxl="2"
          style="display: flex; justify-content: center; align-items: center; margin-top: 20px"
      >
        <a-badge
            v-if="item.externalLink !== ''"
            text="E"
            :dot-style="{ background: '#7BC616', color: 'white' }"
            :offset="[-12, 12]"
        >
          <div class="menu-wrapper" @click="handleForward(item)">
            <div style="width: 60px; height: 60px; margin: 10px auto 0 auto; overflow: hidden">
              <img :src="resourceUrl + item.iconPath" style="width: 100%" alt="ml"/>
            </div>
            <div style="position: relative; bottom: 0">
              <div style="width: 100px; height: 30px; font-size: 10px; text-align: center; line-height: 30px">
                {{ item.name }}
              </div>
            </div>
          </div>
        </a-badge>
        <div v-else class="menu-wrapper" @click="handleForward(item)">
          <div style="width: 60px; height: 60px; margin: 10px auto 0 auto; overflow: hidden">
            <img :src="resourceUrl + item.iconPath" style="width: 100%" alt="ml"/>
          </div>
          <div style="position: relative; bottom: 0">
            <div style="width: 100px; height: 30px; font-size: 10px; text-align: center; line-height: 30px">
              {{ item.name }}
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

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
  if (info.externalLink !== '') {
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
    name: '加密',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Encryption',
    params: {},
  } as AppItemInfo,
  {
    name: '音乐播放器',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Sounder',
    params: {},
  } as AppItemInfo,
  {
    name: 'Theme Clock',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'ThemeClock',
    params: {},
  } as AppItemInfo,
  {
    name: 'History Timeline',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'HistoryMap',
    params: {},
  } as AppItemInfo,
  {
    name: 'Poetry',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Poetry',
    params: {},
  } as AppItemInfo,
  {
    name: 'Recipe',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'HistoryMap',
    params: {},
  } as AppItemInfo,
  {
    name: 'Vocabularies',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'HistoryMap',
    params: {},
  } as AppItemInfo,
  {
    name: 'Album',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'HistoryMap',
    params: {},
  } as AppItemInfo,
  {
    name: 'Love Story',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'LoveStory',
    params: {},
  } as AppItemInfo,
  {
    name: 'Memo',
    iconPath: '/img/avatar/rick.min.jpg',
    externalLink: '',
    routeName: 'Memo',
    params: {},
  } as AppItemInfo,
  {
    name: 'Random Number',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'RandomNumber',
    params: {},
  } as AppItemInfo,
  {
    name: 'Movies',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Movies',
    params: {},
  } as AppItemInfo,
  {
    name: 'Books',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Movies',
    params: {},
  } as AppItemInfo,
  {
    name: 'Stickers',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Stickers',
    params: {},
  } as AppItemInfo,
  {
    name: 'Blogs',
    iconPath: '/img/avatar/ml.png',
    externalLink: 'https://www.cnblogs.com/caseor/',
    routeName: '',
    params: {},
  } as AppItemInfo,
  {name: 'Docs', iconPath: '/img/avatar/ml.png', externalLink: docsUrl, routeName: '', params: {}} as AppItemInfo,
  {
    name: 'Static Resources',
    iconPath: '/img/avatar/ml.png',
    externalLink: resourceUrl,
    routeName: '',
    params: {},
  } as AppItemInfo,
  {
    name: 'Login',
    iconPath: '/img/avatar/ml.png',
    externalLink: '',
    routeName: 'Login',
    params: {},
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
