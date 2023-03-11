import { Ref } from "vue"
import { FlareInterface } from "./FlareInterface"
import { FlareTypeEnum } from "../enums/FlareTypeEnum"

export interface FlareStoreInterface {
  flares: Ref<FlareInterface[]>
  show (id: string, title: string, message: string, type: FlareTypeEnum, duration: number): void
  hide (id: string): void
}
