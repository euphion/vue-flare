import { App, } from 'vue'
import Flares from './components/Flares.vue'
import Flare from './components/Flare.vue'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'
import { FlareInterface } from '~/interfaces/FlareInterface'
import { useFlare } from '~/composables/useFlare'

export default {
  install: (app: App, options: FlareSettingsInterface = {}) => {
    const flare = useFlare() as FlareInterface
    flare.setSettings(options)

    app.config.globalProperties.$flare = flare
    app.provide('flare', flare)

    app.component('flares', Flares)
    app.component('flare', Flare)
  }
}

export { Flares, Flare }
export type { FlareInterface }
