// 如果第三方包偷懒没有ts版本，就需要进行以下设置
// 1. src文件夹下创建types文件夹；

// 2. 创建一个index.d.ts文件

// 3. index.d.ts文件中添加以下代码
declare module 'aplayer' {
  const content: any
  /// 这里的 content 可以根据自己的需要，添加需要的类型，这的话可以让 ts 更好的提示
  /**
     type content = {
      test: string
    }
     */
  export = content
}
// 直接在ts文件中引入js文件也会报红，添加这行代码解决
declare module '*.js'
// 4. 找到tsconfig.json中"include"项并添加 "types"
// "include":["types"]
