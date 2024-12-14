import { CurrentSelectValueEnum } from "../enums/current-select-value.enum";

/** Opcja select */
export interface ISelectOption {
  value: CurrentSelectValueEnum;
  content: string;
}
