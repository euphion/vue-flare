import { FlareTypeEnum } from "../enums/FlareTypeEnum";

export interface ShowInput {
  id?: string;
  title: string;
  message?: string;
  type: FlareTypeEnum;
  duration?: number;
}
