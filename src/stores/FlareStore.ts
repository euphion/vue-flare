import { defineStore } from 'pinia'
import { ref } from 'vue'
import { FlareStoreInterface } from '~/interfaces/FlareStoreInterface'
import { FlareTypeEnum } from '~/enums/FlareTypeEnum'
import { FlareInterface } from '~/interfaces/FlareInterface'
import { ShowInput } from '~/interfaces/ShowInterface'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'

export const useFlareStore = defineStore('FlareStore', (): FlareStoreInterface => {
  const settings = ref<FlareSettingsInterface>({
    position: FlarePositionEnum.TOP_RIGHT,
    animation: FlareAnimationEnum.FADE_IN,
    borderRadius: false,
    backdropFilterBlur: false,
    duration: 5000,
    maxWidth: '400px',
    displayFromTop: true,
    duplicationEnabled: true,
  })

  function setSettings(newSettings: FlareSettingsInterface) {
    settings.value = { ...settings.value, ...newSettings }
  }

  const flares = ref<FlareInterface[]>([
    {
      id: '1',
      title: 'Success',
      message: '',
      type: FlareTypeEnum.SUCCESS,
      duration: 5000,
      closable: true,
      hasIcon: true,
      hasLoading: true
    },
    {
      id: '2',
      title: 'Info',
      message: 'Message',
      type: FlareTypeEnum.INFO,
      duration: 5000,
      closable: true,
      hasIcon: true,
      hasLoading: true
    },
    {
      id: '3',
      title: 'Error',
      message: 'Message',
      type: FlareTypeEnum.ERROR,
      duration: 5000,
      closable: true,
      hasIcon: true,
      hasLoading: true
    },
    {
      id: '4',
      title: 'Warning',
      message: 'Message',
      type: FlareTypeEnum.WARNING,
      duration: 5000,
      closable: true,
      hasIcon: true,
      hasLoading: true
    }
  ])

  function show ({
    id = self.crypto.randomUUID(),
    title,
    message = '',
    type,
    duration = settings.value.duration!,
    closable = true,
    hasIcon = true,
    hasLoading = true,
  }: ShowInput) {
    if (!settings.value.duplicationEnabled) {
      flares.value = flares.value.filter(flare => flare.type !== type)
    }

    if (settings.value.displayFromTop) {
      flares.value.unshift({ id, title, message, type, duration, closable, hasIcon, hasLoading })
    } else {
      flares.value.push({ id, title, message, type, duration, closable, hasIcon, hasLoading })
    }

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

  return { settings, setSettings, flares, hide, success, info, error, warning }
})
