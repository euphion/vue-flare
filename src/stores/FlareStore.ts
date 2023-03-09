import { defineStore } from "pinia"
import { ref } from "vue"
import { FlareStoreInterface } from "../interfaces/FlareStoreInterface"
import { FlareTypeEnum } from "../enums/FlareTypeEnum"
import { FlareInterface } from "../interfaces/FlareInterface"

export const useFlareStore = defineStore("FlareStore", (): FlareStoreInterface => {
  const flares = ref<FlareInterface[]>([
    {
      id: "1",
      message: "message",
      type: FlareTypeEnum.INFO
    },
    {
      id: "2",
      message: "message",
      type: FlareTypeEnum.ERROR
    }
  ])

  function show (id: string, message: string, type: FlareTypeEnum, duration: number) {
    flares.value.push({ id, message, type })

    setTimeout(() => {
      hide(id)
    }, duration * 1000)
  }

  function hide (id: string) {
    flares.value = flares.value.filter(flare => flare.id !== id)
  }

  return { flares, show, hide }
})
