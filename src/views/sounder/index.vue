<template>
  <div>
    <div class="container">
      <a-page-header
          :style="{ background: 'var(--color-bg-2)' }"
          title="Sounder"
          subtitle=""
          @back="handleBack"
      ></a-page-header>
      <a-card :style="{ width: '100%' }"> 111 </a-card>
      <Sounder class="music-player" :musicList="musicList" :index="8" :lyrics="true" />
      <icon-swap />
      <icon-refresh />
      <icon-close />
      <icon-font type="icon-tianqi" :size="64" />
      <icon-font type="icon-zhuye" :size="64"/>
      <icon-font type="icon-fensedemeiguihua" :size="64" :spin=true />
      <div v-for="(tag, index) in [1,2,3,4]" :key="tag"> 1</div>
      <!--<tab-item v-for="(tag, index) in [1,2,3,4]" :key="tag" :index="index" :item-data="tag" />-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleBack = () => {
  router.push({
    name: 'Home',
    query: {},
  })
}

const musicList = [
  {
    name: '海底',
    author: '一支榴莲',
    url: 'https://music.163.com/song/media/outer/url?id=1430583016.mp3',
    img: 'https://p1.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg',
    lrc: `[00:01.935]混音：小黑Voc
		[00:24.104]散落的月光穿过了云\n
		[00:33.073]躲着人群\n
		[00:37.493]铺成大海的鳞\n
		[00:41.549]海浪打湿白裙\n
		[00:44.061]试图推你回去\n
		[00:50.225]海浪清洗血迹\n
		[00:53.099]妄想温暖你\n
		[00:58.784]往海的深处听\n
		[01:03.107]谁的哀鸣在指引\n
		[01:08.156]灵魂没入寂静\n
		[01:10.945]无人将你吵醒\n
		[01:15.715]\n
		[01:16.825]你喜欢海风咸咸的气息\n
		[01:19.727]踩着湿湿的沙砾\n
		[01:22.111]你说人们的骨灰应该撒进海里\n
		[01:25.823]你问我死后会去哪里\n
		[01:28.593]有没有人爱你\n
		[01:30.807]世界能否不再\n
		[01:34.907]总爱对凉薄的人扯着笑脸\n
		[01:39.132]岸上人们脸上都挂着无关\n
		[01:43.875]人间毫无留恋\n
		[01:46.393]一切散为烟\n
		[01:51.403]\n
		[02:24.079]散落的月光穿过了云\n
		[02:33.253]躲着人群\n
		[02:37.412]溜进海底\n
		[02:41.538]海浪清洗血迹\n
		[02:44.119]妄想温暖你\n
		[02:50.149]灵魂没入寂静\n
		[02:52.902]无人将你吵醒\n
		[02:57.263]\n
		[02:59.083]你喜欢海风咸咸的气息\n
		[03:01.949]踩着湿湿的沙砾\n
		[03:04.256]你说人们的骨灰应该撒进海里\n
		[03:07.777]你问我死后会去哪里\n
		[03:10.830]有没有人爱你\n
		[03:13.080]世界已然将你抛弃\n
		[03:17.050]总爱对凉薄的人扯着笑脸\n
		[03:21.252]岸上人们脸上都挂着无关\n
		[03:25.746]人间毫无留恋\n
		[03:28.514]一切散为烟\n
		[03:32.461]\n
		[03:34.241]来不及来不及\n
		[03:38.556]你曾笑着哭泣\n
		[03:43.078]来不及来不及\n
		[03:47.684]你颤抖的手臂\n
		[03:51.923]来不及来不及\n
		[03:56.428]无人将你打捞起\n
		[04:00.828]来不及来不及\n
		[04:05.127]你明明讨厌窒息`
  },
  {
    name: '第三人称',
    author: '买辣条也用券',
    url: 'https://music.163.com/song/media/outer/url?id=502043537.mp3',
    img: 'http://myblog.fgimaxl2.vipnps.vip/getUpload/94v3QwVp3HI7LAW3VXC-TD_P.jpg',
    lrc: `[00:08.670]原唱：Hush\n
		[00:11.670]他想知道那是谁\n
		[00:18.770]为何总沉默寡言\n
		[00:25.520]人群中也算抢眼\n
		[00:32.670]抢眼的孤独难免\n
		[00:40.240]快乐当然有一点\n
		[00:47.050]不过寂寞更强烈\n
		[00:53.840]难过时候不流泪\n
		[01:01.069]流泪也不算伤悲\n
		[01:09.269]天真以为是他的独特品味\n
		[01:14.867]殊不知是他\n
		[01:17.968]难以言喻的对决\n
		[01:23.947]子母画面分割上演谍对谍\n
		[01:29.718]而谁是谁\n
		[01:38.400]对于第三人称的角度而言\n
		[01:43.968]也明白其实\n
		[01:46.888]每个人都有缺陷\n
		[01:52.870]不自觉遮掩 多少也算\n
		[01:58.989]自然的行为\n
		[02:20.619]\n
		[02:34.739]快乐当然有一点\n
		[02:42.028]不过寂寞更强烈\n
		[02:49.139]难过时候不流泪\n
		[02:56.110]流泪也不算伤悲\n
		[03:04.149]天真以为是他的独特品味\n
		[03:09.929]殊不知是他\n
		[03:12.679]难以言喻的对决\n
		[03:18.669]子母画面分割上演谍对谍\n
		[03:24.989]而谁是谁\n
		[03:32.399]对于第三人称的角度而言\n
		[03:38.718]也明白其实\n
		[03:41.360]每个人都有缺陷\n
		[03:46.568]才不断的追寻 更好的自己\n
		[03:53.818]直到青春一定程度的浪费\n
		[03:59.889]才觉得可贵\n
		[04:07.859]他想知道那是谁\n
		[04:27.858]OP: 海边的卡夫卡有限公司 (Admin By EMI MPT）\n
		[04:28.858]SP:百代音乐代理（北京）有限公司\n`
  },
  {
    name: '午夜心碎俱乐部2.0',
    author: '大D(DLyn)',
    url: 'https://music.163.com/song/media/outer/url?id=565794655.mp3',
    img: 'https://p2.music.126.net/NSg1X6Qpc-oi5WAMg3U3ag==/109951163311151254.jpg',
    lrc: `[00:02.41]（以上作词作曲是指中文段落部分,而HOOK中find并不是错词,而是故意改编的）\n[00:02.58]编曲&原词曲：Sapientdream - walls\n[00:03.05]Walls Remix\n[00:03.14]\n[00:03.71]If we fight\n[00:05.59]that the walls we built so high are falling so low\n[00:11.65]falling so low\n[00:14.78]If we fight\n[00:17.94]that the walls we built so high are falling so low\n[00:24.01]Oh oh\n[00:27.02]If we fight\n[00:30.17]that the walls we built so high are falling so low\n[00:36.24]falling so low\n[00:39.31]If we fight\n[00:42.40]that the walls we built so high are falling so low\n[00:48.62]Oh oh\n[00:50.97]\n[00:53.51]If we fight\n[00:53.90]If you gone\n[00:54.89]到了午夜俱乐部的分岔路口\n[00:57.90]继续偷偷\n[00:59.15]我继续偷偷心碎\n[01:00.69]我躲进了被窝\n[01:02.09]悄悄露出头和手\n[01:04.04]期待着Phone call\n[01:05.28]哎 I wanna you你总不wanna me\n[01:07.14]唉 哎 can you feeling the remix\n[01:10.18]外面良辰美景但是除了你我都没兴趣\n[01:13.57]满电的手机照亮头顶灰白的墙壁\n[01:16.80]我也不知道为谁难过\n[01:20.32]我也不知道为谁难过\n[01:29.90]If we fight\n[01:30.58]If you gone\n[01:33.20]\n[01:40.94]If we fight\n[01:44.04]that the walls we built so high are falling so low\n[01:50.07]falling so low\n[01:53.67]If we fight\n[01:56.29]that the walls we built so high are falling so low\n[02:02.44]Oh oh\n[02:05.55]If we fight\n[02:08.69]that the walls we built so high are falling so low\n[02:14.74]falling so low\n[02:17.81]If we fight\n[02:20.92]that the walls we built so high are falling so low\n[02:27.08]Oh oh\n[02:31.01]\n[02:31.71]*PopDan Roll This ****!!*\n[02:32.21]\n`
  },
  {
    name: '只爱西经',
    author: '林一',
    url: 'https://music.163.com/song/media/outer/url?id=1401924960.mp3',
    img: 'https://p1.music.126.net/uGhAshNwI9wCWn8--pKJvg==/109951164475926641.jpg',
    lrc: `[00:02.41]（以上作词作曲是指中文段落部分,而HOOK中find并不是错词,而是故意改编的）\n[00:02.58]编曲&原词曲：Sapientdream - walls\n[00:03.05]Walls Remix\n[00:03.14]\n[00:03.71]If we fight\n[00:05.59]that the walls we built so high are falling so low\n[00:11.65]falling so low\n[00:14.78]If we fight\n[00:17.94]that the walls we built so high are falling so low\n[00:24.01]Oh oh\n[00:27.02]If we fight\n[00:30.17]that the walls we built so high are falling so low\n[00:36.24]falling so low\n[00:39.31]If we fight\n[00:42.40]that the walls we built so high are falling so low\n[00:48.62]Oh oh\n[00:50.97]\n[00:53.51]If we fight\n[00:53.90]If you gone\n[00:54.89]到了午夜俱乐部的分岔路口\n[00:57.90]继续偷偷\n[00:59.15]我继续偷偷心碎\n[01:00.69]我躲进了被窝\n[01:02.09]悄悄露出头和手\n[01:04.04]期待着Phone call\n[01:05.28]哎 I wanna you你总不wanna me\n[01:07.14]唉 哎 can you feeling the remix\n[01:10.18]外面良辰美景但是除了你我都没兴趣\n[01:13.57]满电的手机照亮头顶灰白的墙壁\n[01:16.80]我也不知道为谁难过\n[01:20.32]我也不知道为谁难过\n[01:29.90]If we fight\n[01:30.58]If you gone\n[01:33.20]\n[01:40.94]If we fight\n[01:44.04]that the walls we built so high are falling so low\n[01:50.07]falling so low\n[01:53.67]If we fight\n[01:56.29]that the walls we built so high are falling so low\n[02:02.44]Oh oh\n[02:05.55]If we fight\n[02:08.69]that the walls we built so high are falling so low\n[02:14.74]falling so low\n[02:17.81]If we fight\n[02:20.92]that the walls we built so high are falling so low\n[02:27.08]Oh oh\n[02:31.01]\n[02:31.71]*PopDan Roll This ****!!*\n[02:32.21]\n`
  },
  {
    name: '野孩子',
    author: '杨千嬅',
    url: 'https://music.163.com/song/media/outer/url?id=316486.mp3',
    img: 'https://p1.music.126.net/cANzxO2ixBKq_DJhSPOQ9Q==/109951163447787666.jpg',
    lrc: `[00:08.41]\n[00:11.70]就算只谈一场感情\n[00:15.70]除外都是一时虚荣\n[00:19.54]不等于在蜜月套房游玩过\n[00:23.77]就可自入自出仙境\n[00:27.75]情愿获得你的尊敬\n[00:31.63]承受太高傲的罪名\n[00:35.53]挤得进你臂弯 如情怀渐冷\n[00:39.59]未算孤苦也伶仃\n[00:42.76]明知爱\n[00:44.27]这种男孩子\n[00:45.98]也许只能如此\n[00:48.15]但我会成为你\n[00:49.27]最牵挂的一个女子\n[00:52.14]朝朝暮暮让你\n[00:53.71]猜想如何驯服我\n[00:55.88]若果亲手抱住\n[00:57.93]或者不必如此\n[01:00.21]许多旁人说我\n[01:01.74]不太明了男孩子\n[01:04.22]不受命令就是\n[01:05.52]一种最坏名字\n[01:08.24]笑我这个毫无办法\n[01:10.25]管束的野孩子\n[01:13.67]连没有幸福都不介意\n[01:27.76]若我依然坚持忠诚\n[01:31.58]难道你又适合安定\n[01:35.74]真可惜\n[01:36.64]说要吻我的还未吻\n[01:39.84]自己就自梦中苏醒\n[01:43.77]离场是否有点失敬\n[01:47.81]还是更轰烈的剧情\n[01:51.55]必需有这结果\n[01:53.76]才能怀念我\n[01:55.41]让我于荒野驰骋\n[01:58.74]明知爱\n[01:59.68]这种男孩子\n[02:01.93]也许只能如此\n[02:04.07]但我会成为\n[02:05.16]你最牵挂的一个女子\n[02:08.17]朝朝暮暮\n[02:09.22]让你猜想如何驯服我\n[02:11.99]若果亲手抱住\n[02:13.88]或者不必如此\n[02:16.21]许多旁人\n[02:17.25]说我不太明了男孩子\n[02:20.15]不受命令\n[02:21.29]就是一种最坏名字\n[02:24.16]笑我这个毫无办法\n[02:26.25]管束的野孩子\n[02:29.66]连没有幸福都不介意\n[02:46.75]明知爱\n[02:47.88]这种男孩子\n[02:49.92]也许只能如此\n[02:52.00]但我会成为\n[02:53.27]你最牵挂的一个女子\n[02:56.16]朝朝暮暮\n[02:57.24]让你猜想如何驯服我\n[03:00.00]若果亲手抱住\n[03:01.95]或者不必如此\n[03:04.16]许多旁人\n[03:05.12]说我不太明了男孩子\n[03:08.13]不受命令\n[03:09.10]就是一种最坏名字\n[03:12.14]我也笑我原来\n[03:13.62]是个天生的野孩子\n[03:17.81]连没有幸福都不介意\n`
  },
  {
    name: '易燃易爆炸',
    author: '陈粒',
    url: 'https://music.163.com/song/media/outer/url?id=30431376.mp3',
    img: 'https://p2.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg',
    lrc: `[00:15.820]盼我疯魔还盼我孑孓不独活\n[00:20.160]想我冷艳还想我轻佻又下贱\n[00:24.230]要我阳光还要我风情不摇晃\n[00:28.450]戏我哭笑无主还戏我心如枯木\n[00:32.440]赐我梦境还赐我很快就清醒\n[00:36.700]与我沉睡还与我蹉跎无慈悲\n[00:40.830]爱我纯粹还爱我赤裸不靡颓\n[00:44.960]看我自弹自唱还看我痛心断肠\n[00:49.600]愿我如烟还愿我曼丽又懒倦\n[00:53.320]看我痴狂还看我风趣又端庄\n[00:57.500]要我美艳还要我杀人不眨眼\n[01:01.570]祝我从此幸福还祝我枯萎不渡\n[01:05.860]为我撩人还为我双眸失神\n[01:09.880]图我情真还图我眼波销魂\n[01:14.090]与我私奔还与我做不贰臣\n[01:18.180]夸我含苞待放还夸我欲盖弥彰\n[01:23.220]\n[01:39.140]赐我梦境还赐我很快就清醒\n[01:43.330]与我沉睡还与我蹉跎无慈悲\n[01:47.500]爱我纯粹还爱我赤裸不靡颓\n[01:51.630]看我自弹自唱还看我痛心断肠\n[01:56.010]为我撩人还为我双眸失神\n[02:00.090]图我情真还图我眼波销魂\n[02:04.210]与我私奔还与我做不贰臣\n[02:08.290]夸我含苞待放还夸我欲盖弥彰\n[02:13.490]\n[02:29.210]请我迷人还请我艳情透渗\n[02:33.520]似我盛放还似我缺氧乖张\n[02:37.770]由我美丽还由我贪恋着迷\n[02:41.800]怨我百岁无忧还怨我徒有泪流`
  },
  {
    name: '白羊',
    author: '徐秉龙/沈以诚',
    url: 'https://music.163.com/song/media/outer/url?id=514761281.mp3',
    img: 'https://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg',
    lrc: `[00:04.290]编曲：徐秉龙\n[00:05.290]你有多少胜算\n[00:07.250]把我困在里面\n[00:09.450]你设计的城堡太糟糕\n[00:13.990]我一起飞 就能逃跑\n[00:18.570]可你粲然一笑\n[00:20.600]我心事就潦草\n[00:23.170]你裙下的人间太美妙\n[00:27.690]好想把你 一口气全部吃掉\n[00:33.350]\n[00:34.940]多热烈的白羊\n[00:37.270]多善良多抽象\n[00:39.410]多完美的她呀\n[00:41.400]却是下落不详\n[00:44.100]心好空荡\n[00:46.230]都快要 失去形状\n[00:52.960]青春一记荒唐\n[00:55.230]亦然学着疯狂\n[00:57.510]这声色太张扬\n[00:59.620]这欢愉太理想\n[01:02.170]先熄灭心跳\n[01:05.060]才能拥抱\n[01:08.950]\n[01:31.170]几千几万个你\n[01:33.490]几千几万个我\n[01:35.520]一起躲进 这浪漫的回合\n[01:40.090]然后沉迷 你诗写一般的身体\n[01:47.490]多热烈的白羊\n[01:49.480]热烈得好抽象\n[01:51.700]抽象掩盖欲望\n[01:53.870]却又欲盖弥彰\n[01:56.520]我要嚣张\n[01:58.770]嚣张到 失去形状\n[02:05.250]青春一记荒唐\n[02:07.610]亦然学着疯狂\n[02:09.900]这声色太张扬\n[02:12.060]这欢愉太理想\n[02:14.850]先熄灭心跳\n[02:17.570]才能拥抱\n[02:22.090]\n[02:23.630]青春一记荒唐\n[02:25.820]亦然学着疯狂\n[02:28.050]这声色太张扬\n[02:30.260]这欢愉太理想\n[02:33.060]这归途太远\n[02:35.830]要迷人且倔强\n[02:41.240]制作人：徐秉龙\n[02:41.500]和声编写：徐秉龙\n[02:42.000]和声配唱：徐秉龙\n[02:42.400]吉他：徐秉龙\n[02:42.800]鼓：徐秉龙\n[02:43.200]B-Box:陆颢哲\n[02:43.600]Program：周果亦\n[02:44.400]吉他编写：徐秉龙 武言圣\n[02:45.000]混音：谭聪\n[02:45.400]封面设计：徐秉龙\n[02:46.240]母带：谭聪\n[02:47.999]发行公司：亚合娱乐`
  },
  {
    name: '借',
    author: '毛不易',
    url: 'https://music.163.com/song/media/outer/url?id=569214250.mp3',
    img: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
    lrc: `[00:12.110]\n[00:24.810]借一盏午夜街头 昏黄灯光\n[00:31.160]照亮那坎坷路上人影一双\n[00:37.430]借一寸三九天里 冽冽暖阳\n[00:43.800]融这茫茫人间刺骨凉\n[00:50.410]借一泓古老河水 九曲回肠\n[00:56.430]带着那摇晃烛火 漂往远方\n[01:02.738]借一段往日旋律 婉转悠扬\n[01:08.939]把这不能说的轻轻唱\n[01:15.539]被这风吹散的人说他爱得不深\n[01:22.239]被这雨淋湿的人说他不会冷\n[01:28.149]无边夜色到底还要蒙住多少人\n[01:35.489]它写进眼里 他不敢承认\n[02:05.977]借一抹临别黄昏悠悠斜阳\n[02:12.369]为这漫漫余生添一道光\n[02:18.629]借一句刻骨铭心来日方长\n[02:25.259]倘若不得不天各一方\n[02:31.259]被这风吹散的人说他爱得不深\n[02:37.938]被这雨淋湿的人说他不会冷\n[02:43.789]无边夜色到底还要蒙住多少人\n[02:51.210]它写进眼里 他不敢承认\n[02:56.910]可是啊 总有那风吹不散的认真\n[03:03.449]总有大雨也不能抹去的泪痕\n[03:09.039]有一天太阳会升起在某个清晨\n[03:20.009]一道彩虹 两个人\n[03:28.528]借一方乐土让他容身\n[03:35.938]借他平凡一生\n`
  },
  {
    name: '水星记',
    author: '郭顶',
    url: 'https://music.163.com/song/media/outer/url?id=441491828.mp3',
    img: 'https://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg',
    lrc: `[00:19.200]着迷于你眼睛\n[00:21.510]\n[00:22.910]银河有迹可循\n[00:25.040]\n[00:26.160]穿过时间的缝隙\n[00:28.980]\n[00:29.740]它依然真实地\n[00:32.750]\n[00:33.460]吸引我轨迹\n[00:36.230]\n[00:40.440]这瞬眼的光景\n[00:42.950]\n[00:43.970]最亲密的距离\n[00:46.550]\n[00:47.470]沿着你皮肤纹理 \n[00:51.380]走过曲折手臂\n[00:54.040]\n[00:54.960]做个梦给你\n[00:57.230]\n[00:58.580]做个梦给你\n[01:01.249]\n[01:03.668]等到看你银色满际\n[01:06.260]\n[01:07.069]等到分不清季节更替\n[01:11.590]\n[01:12.938]才敢说沉溺\n[01:16.078]\n[01:19.980]还要多远才能进入你的心\n[01:26.200]\n[01:27.170]还要多久才能和你接近\n[01:33.310]\n[01:34.328]咫尺远近却\n[01:36.780]无法靠近的那个人\n[01:42.000]也等着和你相遇\n[01:47.610]\n[01:49.030]环游的行星\n[01:51.750]\n[01:52.269]怎么可以\n[01:55.170]\n[01:56.129]拥有你\n[01:57.989]\n[02:13.728]这瞬眼的光景\n[02:16.269]\n[02:17.119]最亲密的距离\n[02:19.679]\n[02:20.628]沿着你皮肤纹理\n[02:24.310]走过曲折手臂\n[02:27.359]\n[02:28.060]做个梦给你\n[02:30.478]\n[02:31.579]做个梦给你\n[02:34.619]\n[02:36.589]等到看你银色满际\n[02:40.288]等到分不清季节更替\n[02:44.660]\n[02:45.869]才敢说沉溺\n[02:53.138]还要多远才能进入你的心\n[02:59.399]\n[03:00.329]还要多久才能和你接近\n[03:06.478]\n[03:07.429]咫尺远近却\n[03:09.560]无法靠近的那个人\n[03:15.128]也等着和你相遇\n[03:20.638]\n[03:21.829]环游的行星\n[03:24.739]\n[03:25.388]怎么可以\n[03:29.079]拥有你\n[03:35.530]\n[04:05.218]还要多远才能进入你的心\n[04:10.869]\n[04:11.929]还要多久才能和你接近\n[04:18.028]\n[04:19.050]咫尺远近却无法靠近的那个人\n[04:26.687]要怎么探寻\n[04:30.319]要多么幸运\n[04:33.538]才敢让你发觉你并不孤寂\n[04:39.778]\n[04:40.509]当我还可以再跟你飞行\n[04:46.579]\n[04:47.690]环游是无趣\n[04:50.569]\n[04:51.339]至少可以\n[04:54.639]\n[04:55.240]陪着你`
  },
];

</script>

<style lang="less" scoped>
.container {
}
</style>
