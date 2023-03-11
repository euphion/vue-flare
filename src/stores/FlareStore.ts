import { defineStore } from "pinia"
import { ref } from "vue"
import { FlareStoreInterface } from "../interfaces/FlareStoreInterface"
import { FlareTypeEnum } from "../enums/FlareTypeEnum"
import { FlareInterface } from "../interfaces/FlareInterface"

export const useFlareStore = defineStore("FlareStore", (): FlareStoreInterface => {
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

  function show (id: string, title: string, message: string, type: FlareTypeEnum , duration: number) {
    flares.value.push({ id, title, message, type })

    setTimeout(() => {
      console.log("skdhskdhs")
      hide(id)
    }, duration * 1000)
  }

  function hide (id: string) {
    flares.value = flares.value.filter(flare => flare.id !== id)
  }

  return { flares, show, hide }
})
