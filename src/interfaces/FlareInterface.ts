import { FlareTypeEnum } from "~/enums/FlareTypeEnum"

export interface FlareInterface {
  id: string
  title: string
  message: string
  type: FlareTypeEnum
}
