import { CurrentSelectValueEnum } from "@gtSharedComponents/select/enums/current-select-value.enum";
import { ISelectOption } from "@gtSharedComponents/select/interfaces/select-option.interface";


export const MyActivityOptionsConfig: ISelectOption[] = [
  {
    value: CurrentSelectValueEnum.WEEK,
    content: 'Week'
  },
  {
    value: CurrentSelectValueEnum.MONTH,
    content: 'Month'
  },
]
