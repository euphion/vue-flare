import { Ref } from 'vue'
import { FlareInterface } from '~/interfaces/FlareInterface'
import { ShowInput } from '~/interfaces/ShowInterface'
import { FlareSettingsInterface } from '~/interfaces/FlareSettingsInterface'

export interface FlareStoreInterface {
  settings: Ref<FlareSettingsInterface>
  setSettings (newSettings: FlareSettingsInterface): void
  flares: Ref<FlareInterface[]>
  show (input: ShowInput): void
  hide (id: string): void
  success (input: Omit<ShowInput, 'type'>): void
  info (input: Omit<ShowInput, 'type'>): void
  error (input: Omit<ShowInput, 'type'>): void
  warning (input: Omit<ShowInput, 'type'>): void
}
