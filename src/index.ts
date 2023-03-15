import { App, } from 'vue'
import { createPinia } from 'pinia'
import { useFlareStore } from './stores/FlareStore'
import Flares from './components/Flares.vue'
import Flare from './components/Flare.vue'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'

export default {
  install: (app: App, options: FlareSettingsInterface) => {
    app.use(createPinia())

    const flareStore = useFlareStore()
    flareStore.setSettings(options)

    app.config.globalProperties.$flare = flareStore
    app.provide('flare', flareStore)

    app.component('flares', Flares)
    app.component('flare', Flare)
  }
}

export { Flares, Flare }
