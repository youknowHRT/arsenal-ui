import { createApp } from 'vue'
import App from './App.vue'
// import ArsenalUI from '@arsenal-ui/components'
import ArsenalPlus from 'arsenal-plus'
import '/src/assets/icon-js/iconfont.js'
// import '/src/assets/icons/index.ts'
const app = createApp(App)
// app.use(ArsenalUI)
app.use(ArsenalPlus)
app.mount('#app')