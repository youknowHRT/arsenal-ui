// import Theme from 'vitepress/theme'
import Theme from 'vitepress/dist/client/theme-default'
import ArsenalUI from '@arsenal-ui/components'
import {OoButton,OoJsxButton} from '@arsenal-ui/components'
// import ArsenalUI from '../../../packages/components/index'
import ElementPlus from 'element-plus'
// import '@element-plus/theme-chalk'
import "element-plus/dist/index.css";

// 主题样式
// import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// // 插件的组件，主要是demo组件
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
 ...Theme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(ArsenalUI)
    app.use(ElementPlus)
    console.log({app,ArsenalUI,ElementPlus,OoButton, OoJsxButton},'🎈🍊')
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
