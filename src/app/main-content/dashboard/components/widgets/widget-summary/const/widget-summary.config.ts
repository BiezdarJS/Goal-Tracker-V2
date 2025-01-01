import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";
import { ISummaryWidgetItem } from "../interfaces/summary-widget-item.interface";
import { SummaryItemNameEnum } from "../enums/summary-item.enum";
/** Config dla widgetu SummaryItem */
export const SummaryWidgetConfig: ISummaryWidgetItem[] = [
  {
    itemType: SummaryItemNameEnum.GOALS,
    iconName: GT_ICONS_BASIC.TARGET_WITH_ARROW,
    iconColor: '#51e2ae',
    itemName: 'Goals',
    additionalText: 'completed',
    arrowRightColor: '#1A1926'
  },
  {
    itemType: SummaryItemNameEnum.TASKS,
    iconName: GT_ICONS_BASIC.TASK,
    iconColor: '#a7b8ff',
    itemName: 'Tasks',
    additionalText: 'subtasks',
    arrowRightColor: '#1A1926'
  },
  {
    itemType: SummaryItemNameEnum.HABITS,
    iconName: GT_ICONS_BASIC.LOOP,
    iconColor: '#ffa38f',
    itemName: 'Habits',
    additionalText: 'new habits',
    arrowRightColor: '#1A1926'
  }
]



