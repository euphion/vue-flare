import { Ref } from "vue"
import { FlareInterface } from "./FlareInterface"
import { FlareTypeEnum } from "../enums/FlareTypeEnum"
import {ShowInput} from "./ShowInterface";
import {FlareSettingsInterface} from "./FlareSettingsInterface";

export interface FlareStoreInterface {
  settings: Ref<FlareSettingsInterface>
  setSettings(newSettings: FlareSettingsInterface): void
  flares: Ref<FlareInterface[]>
  show (input: ShowInput): void
  hide (id: string): void
  success (input: Omit<ShowInput, 'type'>): void
  info (input: Omit<ShowInput, 'type'>): void
  error (input: Omit<ShowInput, 'type'>): void
  warning (input: Omit<ShowInput, 'type'>): void
}
