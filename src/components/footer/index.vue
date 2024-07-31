<template>
  <a-layout-footer class="footer">
    <span>备案号: <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2023017815号-1</a></span>
    &emsp;&emsp;
    <span>Version: {{ version }}</span>
  </a-layout-footer>
</template>

<script lang="ts" setup>
let version = 'NA'
const tag: any = document.querySelector('meta[name="version"]')
if (tag) {
  version = tag.content
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-text-2);
  text-align: center;
}
a {
  color: var(--color-text-2);
}
</style>
