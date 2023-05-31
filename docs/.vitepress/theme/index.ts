import Theme from 'vitepress/theme'
import ArsenalUI from '@arsenal-ui/components'
// import ArsenalUI from '../../../packages/components/index'
import ElementPlus from 'element-plus'
// import '@element-plus/theme-chalk'
import "element-plus/dist/index.css";

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
 ...Theme,
//  enhanceApp({ app }) {
//     // app.use(ArsenalUI)
//     app.use(ElementPlus)
//     app.component('Demo', Demo)
//     app.component('DemoBlock', DemoBlock)
//   },
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // import("element-plus").then((module) => {
    //   app.use(module);
    // });
    // import("@arsenal-ui/components").then((module) => {
    //   app.use(module);
    // });
    app.use(ArsenalUI)
    app.use(ElementPlus)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
