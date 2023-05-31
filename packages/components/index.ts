import {App} from "vue"
import OoButton from "./button"
import OoJsxButton from "./jsxButton"

export {OoButton,OoJsxButton}
export default {
  install(app: App) {
    app.component(OoButton.name, OoButton)
    app.component(OoJsxButton.name, OoJsxButton)
  }
}