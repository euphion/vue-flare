import { FlarePositionEnum } from '~/enums/FlarePositionEnum'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'

export interface FlareSettingsInterface {
  position?: FlarePositionEnum;
  animation?: FlareAnimationEnum
  borderRadius?: Boolean
  backdropFilterBlur?: Boolean,
  duration?: number,
  maxWidth?: number,
  iconsPath?: string
}
