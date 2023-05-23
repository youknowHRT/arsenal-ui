import { App } from 'vue'
import SButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

const allComponents = [
  SButton,
  SFCButton,
  JSXButton
]
export { SButton, SFCButton, JSXButton}

export default {
  install(app: App) {
    allComponents.forEach(component => {
      app.component(component.name, component)
    })
  }
}