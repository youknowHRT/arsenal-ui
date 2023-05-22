import { App } from 'vue'
import OoButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

const allComponents = [
  OoButton,
  SFCButton,
  JSXButton
]
export { OoButton, SFCButton, JSXButton}

export default {
  install(app: App) {
    allComponents.forEach(component => {
      app.component(component.name, component)
    })
  }
}