import { createApp } from 'vue'
import App from './App.vue'
import ArsenalUI from '@arsenal-ui/components'

const app = createApp(App)
app.use(ArsenalUI)
app.mount('#app')