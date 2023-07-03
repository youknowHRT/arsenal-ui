import { createApp } from 'vue'
import App from './App.vue'
// import ArsenalUI from '@arsenal-ui/components'
import ArsenalPlus from 'arsenal-plus'
// import 'arsenal-plus/dist/style.css'
import '/src/assets/icon-js/iconfont.js'
// import '/src/assets/icons/index.ts'
// import * as OoSvg from '@arsenal-ui/icons-vue'
// console.log(OoSvg,'🥭🥭🥭')

const app = createApp(App)
app.use(ArsenalPlus)
app.mount('#app')