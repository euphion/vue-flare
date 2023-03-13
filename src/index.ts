import { App, Plugin } from "vue";
import { createPinia } from "pinia";
import { useFlareStore } from "./stores/FlareStore";
import Flares from './components/Flares.vue'
import Flare from './components/Flare.vue'

export default {
    install: (app: App) => {
        app.use(createPinia())

        app.config.globalProperties.$flare = useFlareStore()
        app.provide("flare", useFlareStore());

        app.component("Flares", Flares)
        app.component("Flare", Flare)
    }
}

export { Flares, Flare }
