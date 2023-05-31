// import Theme from 'vitepress/theme'
// import Theme from 'vitepress/dist/client/theme-default'
import Theme from 'vitepress/theme'
import ArsenalUI from '@arsenal-ui/components'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
 ...Theme,
  enhanceApp: async ({ app}) => {
    app.use(ArsenalUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
