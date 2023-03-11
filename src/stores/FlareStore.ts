import { defineStore } from "pinia"
import { ref } from "vue"
import { FlareStoreInterface } from "../interfaces/FlareStoreInterface"
import { FlareTypeEnum } from "../enums/FlareTypeEnum"
import { FlareInterface } from "../interfaces/FlareInterface"

export const useFlareStore = defineStore("FlareStore", (): FlareStoreInterface => {
  const flares = ref<FlareInterface[]>([
    {
      id: "1",
      title: "Title",
      message: "",
      type: FlareTypeEnum.SUCCESS
    },
    {
      id: "2",
      title: "Title",
      message: "message",
      type: FlareTypeEnum.INFO
    },
    {
      id: "3",
      title: "Title",
      message: "message",
      type: FlareTypeEnum.ERROR
    },
    {
      id: "4",
      title: "Title",
      message: "message",
      type: FlareTypeEnum.WARNING
    }
  ])

  function show (id: string, title: string, message: string, type: FlareTypeEnum, duration: number) {
    flares.value.push({ id, title, message, type })

    setTimeout(() => {
      hide(id)
    }, duration * 1000)
  }

  function hide (id: string) {
    flares.value = flares.value.filter(flare => flare.id !== id)
  }

  return { flares, show, hide }
})
