import * as icons from './components'

import type { App } from 'vue'

export interface InstallOptions {
  /** @default `OoIcon` */
  prefix?: string
}
export default (app: App, { prefix = 'OoIcon' }: InstallOptions = {}) => {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export { icons }
export * from './components'
