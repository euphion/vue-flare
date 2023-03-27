import { ref } from 'vue'
import { FlareTypeEnum } from '~/enums/FlareTypeEnum'
import { FlareItemInterface } from '~/interfaces/FlareItemInterface'
import { ShowInput } from '~/interfaces/ShowInterface'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'

export function useFlare () {
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

  const flares = ref<FlareItemInterface[]>([])

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
}
