import { FlareTypeEnum } from '~/enums/FlareTypeEnum'

export interface FlareItemInterface {
  id: string
  title: string
  message: string
  type: FlareTypeEnum
  duration: number
  closable: boolean
  hasIcon: boolean
  hasLoading: boolean
}
