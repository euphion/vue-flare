import {defineStore} from "pinia"
import {reactive, ref} from "vue"
import {FlareStoreInterface} from "../interfaces/FlareStoreInterface"
import {FlareTypeEnum} from "../enums/FlareTypeEnum"
import {FlareInterface} from "../interfaces/FlareInterface"
import {ShowInput} from "../interfaces/ShowInterface";
import {FlareSettingsInterface} from "../interfaces/FlareSettingsInterface";

export const useFlareStore = defineStore("FlareStore", (): FlareStoreInterface => {
  const settings = ref<FlareSettingsInterface>({
    duration: 5000
  })

  function setSettings(newSettings: FlareSettingsInterface) {
    settings.value = {...settings.value, ...newSettings}
  }

  const flares = ref<FlareInterface[]>([
    {
      id: "1",
      title: "Success",
      message: "",
      type: FlareTypeEnum.SUCCESS
    },
    {
      id: "2",
      title: "Info",
      message: "Message",
      type: FlareTypeEnum.INFO
    },
    {
      id: "3",
      title: "Error",
      message: "Message",
      type: FlareTypeEnum.ERROR
    },
    {
      id: "4",
      title: "Warning",
      message: "Message",
      type: FlareTypeEnum.WARNING
    }
  ])

  function show ({
        id = self.crypto.randomUUID(),
        title, message = "",
        type,
        duration = settings.value.duration
  }: ShowInput) {
    flares.value.push({ id, title, message, type })

    setTimeout(() => {
      hide(id)
    }, duration)
  }

  function hide (id: string) {
    flares.value = flares.value.filter(flare => flare.id !== id)
  }

  function success (input: Omit<ShowInput, 'type'>) {
    show({...input, type: FlareTypeEnum.SUCCESS })
  }

  function info (input: Omit<ShowInput, 'type'>) {
    show({...input, type: FlareTypeEnum.INFO })
  }

  function error (input: Omit<ShowInput, 'type'>) {
    show({...input, type: FlareTypeEnum.ERROR })
  }

  function warning (input: Omit<ShowInput, 'type'>) {
    show({...input, type: FlareTypeEnum.WARNING })
  }

  return { settings, setSettings, flares, show, hide, success, info, error, warning }
})
