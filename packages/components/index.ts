import {App} from "vue"
import OoButton from "./button"
export {OoButton}
export default {
  install(app: App) {
    app.component(OoButton.name, OoButton)
  }
}