<template>
  <div ref="htmlRef" class="html">
    <div class="body">
      <div class="toggle-bar">
        <a-space size="large">
          <a-button class="toggle-btn" type="text" size="large" shape="circle" @click="handleBack">
            <icon-arrow-left />
          </a-button>

          <a-button class="toggle-btn" type="text" size="large" shape="circle" @click="handleToggleMode">
            <icon-moon-fill v-if="dark" />
            <icon-sun-fill v-else />
          </a-button>

          <a-button class="toggle-btn" type="text" size="large" shape="circle" @click="handleToggleFullscreen">
            <icon-expand v-if="!fullscreen" />
            <icon-shrink v-else />
          </a-button>
        </a-space>
      </div>

      <div class="clock-container">
        <div class="clock">
          <div ref="hourRef" class="needle hour"></div>
          <div ref="minuteRef" class="needle minute"></div>
          <div ref="secondRef" class="needle second"></div>
          <div class="center-point"></div>
        </div>
        <div ref="timeRef" class="time"></div>
        <div ref="dateRef" class="date"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'
import router from '@/router'

const hourRef = ref<HTMLElement>()
const minuteRef = ref<HTMLElement>()
const secondRef = ref<HTMLElement>()
const timeRef = ref<HTMLElement>()
const dateRef = ref<HTMLElement>()
const htmlRef = ref<HTMLElement>()

const dark = ref(false)
const fullscreen = ref(false)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const handleToggleFullscreen = () => {
  screenfull.toggle()
}

const handleToggleMode = () => {
  const htmlEl = htmlRef.value
  if (htmlEl) {
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark')
      dark.value = false
    } else {
      htmlEl.classList.add('dark')
      dark.value = true
    }
  }
}

const scale = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

const setTime = () => {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const hourEl = hourRef.value
  if (hourEl) {
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  }

  const minuteEl = minuteRef.value
  if (minuteEl) {
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  }

  const secondEl = secondRef.value
  if (secondEl) {
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  }

  const timeEl = timeRef.value
  if (timeEl) {
    const leftPaddingZeroMin = `0${minutes}`
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? leftPaddingZeroMin : minutes} ${ampm}`
  }

  const dateEl = dateRef.value
  if (dateEl) {
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
  }
}
const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}

// 监听全屏变化
const change = () => {
  fullscreen.value = screenfull.isFullscreen
}
onMounted(() => {
  screenfull.on('change', change)
  setTime()
  setInterval(setTime, 1000)
})

onUnmounted(() => {
  screenfull.off('change', change)
})

// onUnmounted(() => {
//   memoStore.reset()
// })
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.html {
  --primary-color: #000;
  --secondary-color: #fff;

  transition: all 0.5s ease-in;
}

.html.dark {
  --primary-color: #fff;
  --secondary-color: #333;
  background-color: #111;
  color: var(--primary-color);
}

.body {
  font-family: 'Heebo', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.toggle-bar {
  position: absolute;
  top: 100px;
}

.toggle-btn {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.toggle-btn:focus {
  outline: none;
}

.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.clock {
  position: relative;
  width: 200px;
  height: 200px;
}

.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}

.center-point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.center-point::after {
  content: '';
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.time {
  font-size: 60px;
}

.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.date .circle {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}
</style>
