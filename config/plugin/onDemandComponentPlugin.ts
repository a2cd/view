/**
 * 按需引入
 * 按需引用适合引入UI框架组件，没使用到的不打包到dist中
 * 自己写的组件使用import引用即可，不需要按需引用
 * 自己写的组件如果对外，想让别人按需引用，则在dirs中定义对外组件目录
 */
import Components from 'unplugin-vue-components/vite'
import {ArcoResolver} from 'unplugin-vue-components/resolvers'

export default function onDemandComponentPlugin() {
    return Components({
        dirs: [], // 如果有别人按需引用的需求，在这里定义组件位置，默认会在项目根目录生成components.d.ts文件
        deep: true,
        resolvers: [ArcoResolver({sideEffect: true})]
    })
}
