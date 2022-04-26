/// <reference types="vite/client" />

//  报错原因是：typescript 只能理解 .ts 文件，无法理解 .vue文件

// 因此需要给.vue文件加上类型说明文件  如下
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
