import { CurrentSelectValueEnum } from "@gtSharedComponents/select/enums/current-select-value.enum";
import { ISelectOption } from "@gtSharedComponents/select/interfaces/select-option.interface";
/** Config dla wykresu Health and Sports */
export const HealthAndSportsOptionsConfig: ISelectOption[] = [
  {
    value: CurrentSelectValueEnum.WEEK,
    content: 'Week'
  },
  {
    value: CurrentSelectValueEnum.MONTH,
    content: 'Month'
  },
]
