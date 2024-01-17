<template>
  <div>
    <div class="container">
      <a-page-header
        :style="{ background: 'var(--color-bg-2)' }"
        title="Movies"
        subtitle=""
        @back="handleBack"
      ></a-page-header>
      <a-card :style="{ width: '80%' }" title="电影:">
        指环王123✔️ 湮灭✔️、地心引力✔️ 、银翼杀手✔️、月球✔️、蝴蝶效应✔️ 2001太空漫游✔️
        钢琴师✔️、海蒂与爷爷✔️、驯龙高手3✔️ 美丽心灵✔️ 本杰明巴顿✔️ 老有所依✔️ 教父123✔️ 国王的演讲✔️ 你的名字✔️
        星际穿越✔️ 超脱✔️ 禁闭岛✔️ 猫鼠游戏✔️ 魔鬼代言人✔️ 绿皮书✔️ 我们的父辈123✔️ 重返17岁✔️ 无姓之人✔️ 致命魔术✔️
        完美的世界✔️ 罗马假日✔️ 好好先生✔️ 爱乐之城✔️ 了不起的盖茨比✔️ 大侦探福尔摩斯12✔️ 辛德勒的名单✔️ 利刃出鞘(I'm
        not eat one iota of shit)✔️ 美丽人生(早安公主)✔️ 闻香识女人✔️ 降临 小鞋子 无人生还✔️ 人体蜈蚣 阿西莫夫 大都会
        人工智能 终结者 云图 超时空接触 异次元骇客 黑天鹅 v字仇杀队 回到未来
        遗愿清单(即便是电影也会很现实,最后两个人都没坚持到去爬山)✔️ 怦然心动✔️ 我是传奇✔️ 生死狙击✔️ 荒野猎人✔️
        华尔街之狼✔️ 血钻✔️ 幸福终点站✔️ 荒岛余生✔️ 森林 何以为家✔️ mirage(海市蜃楼)✔️ 蝙蝠侠:黑暗骑士✔️ 实习生✔️ 守望者
        蝙蝠侠:黑暗骑士崛起✔️ 昆虫总动员 爆笑虫子无人岛✔️ 调音师✔️ 兰戈✔️ 蝙蝠侠:影侠之谜✔️困在时间里的父亲✔️ 毕业生(The
        Graduate 有追求的东西，让生活不再迷茫)✔️ 雨人✔️ 波斯语课✔️ 1917✔️ 沙丘✔️ 切尔诺贝利 碟中谍1✔️ 碟中谍2✔️ 功夫✔️
        星际迷航123456✔️ 东方快车谋杀案✔️ 你丫闭嘴✔️ 尼罗河上的惨案✔️ 乐高大电影 阿凡达2✔️ 沉默的羔羊✔️ 愤怒的小鸟
        疯狂的原始人 银河系漫游指南
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

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
.container {
}
</style>
