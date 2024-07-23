<template>
  <div class="container">
    encryption
  </div>
</template>

<script lang="ts" setup>
import c from 'crypto-js'
import {onMounted, onUnmounted} from 'vue'
import router from '@/router'

const text = c.enc.Utf8.parse('');
const key = c.enc.Utf8.parse('');
const iv = c.enc.Utf8.parse('');
const encryptedText = c.AES.encrypt(text, key, {
  iv: iv,
  mode: c.mode.CBC,
  padding: c.pad.Pkcs7
}).toString() // 默认输出Base64，如需Hex则.toString(c.enc.Hex)

console.log('encryptedText: '+encryptedText)
const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}


onMounted(() => {
})
onUnmounted(() => {
})
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
