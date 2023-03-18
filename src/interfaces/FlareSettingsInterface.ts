import { FlarePositionType } from '~/types/FlarePositionType'
import { FlareAnimationType } from '~/types/FlareAnimationType'

export interface FlareSettingsInterface {
  position?: FlarePositionType;
  animation?: FlareAnimationType
  borderRadius?: boolean
  backdropFilterBlur?: boolean,
  duration?: number,
  maxWidth?: string,
}
