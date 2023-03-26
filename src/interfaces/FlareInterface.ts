import { Ref } from 'vue'
import { FlareItemInterface } from '~/interfaces/FlareItemInterface'
import { ShowInput } from '~/interfaces/ShowInterface'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'

export interface FlareInterface {
  settings: Ref<FlareSettingsInterface>
  setSettings (newSettings: FlareSettingsInterface): void
  flares: Ref<FlareItemInterface[]>
  hide (id: string): void
  success (input: Omit<ShowInput, 'type'>): void
  info (input: Omit<ShowInput, 'type'>): void
  error (input: Omit<ShowInput, 'type'>): void
  warning (input: Omit<ShowInput, 'type'>): void
}
