<template>
  <div class="container">
    <div id="info">Description</div>
    <div id="three"></div>
  </div>
</template>

<script lang="ts" setup>
import WebGL from 'three/examples/jsm/capabilities/WebGL'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue'
import * as THREE from 'three'
import { Th } from '@arco-design/web-vue';


if (WebGL.isWebGL2Available()) {
  console.log('WebGL OK');
} else {
  console.log('WebGL NOT Support!');
}

//创建一个三维场景
const scene = new THREE.Scene()

//添加光源 这里添加了两个光源
//AmbientLight：环境光源，均匀照亮所有物体，防止有些光源照射不到呈现不出来
//PointLight：点光源，类似灯泡发出的光，可以投射阴影，使模型更加立体
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
const pointLight = new THREE.PointLight(0xffffff, 0.4)
pointLight.position.set(200, 300, 400) //设置点光源所在位置
//每创建一个object都需要将其添加到三维场景中
scene.add(ambientLight)
scene.add(pointLight)

//创建一个透视相机 这里的width、height是整个画布的宽高度
const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
//设置相机位置
camera.position.set(20, 20, 20)
//设置相机方向
camera.lookAt(0, 0, 0)


//创建辅助坐标轴
const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

//创建一个物体（形状）
const geometry = new THREE.BoxGeometry(200, 100, 100)
//创建材质（外观）
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,//设置材质颜色
  transparent: true,//开启透明度
  opacity: 0.5 //设置透明度
})
//创建一个网格模型对象,将上面设置好的物体及其材质注入到模型对象中
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)





const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7b83eb })
const points = [
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(0, 10, 0),
  new THREE.Vector3(0, 0, 10),
  new THREE.Vector3(10, 10, 10),
  new THREE.Vector3(-10, -10, -10),
]
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)



//创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)

//vue3的生命周期钩子函数，渲染后执行(这是为了拿到dom节点)
onMounted(() => {
  //将渲染器绘制出的canvas添加到页面中
  document.getElementById('three')?.appendChild(renderer.domElement)
})


//创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
//添加事件监听 当事件发生改变时触发
controls.addEventListener('change', () => {
  //重新渲染
  renderer.render(scene, camera)
})



</script>

<style lang="less" scoped>
#info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}

</style>
