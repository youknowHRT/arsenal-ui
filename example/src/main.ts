import { createApp } from 'vue'
import App from './App.vue'
// import ArsenalUI from '@arsenal-ui/components'
import ArsenalPlus from 'arsenal-plus'

const app = createApp(App)
// app.use(ArsenalUI)
app.use(ArsenalPlus)
app.mount('#app')