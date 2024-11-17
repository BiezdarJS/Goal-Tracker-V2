import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";
import { ISummaryWidgetItem } from "../interfaces/summary-widget-item.interface";

export const SummaryWidgetConfig: ISummaryWidgetItem[] = [
  {
    iconName: GT_ICONS_BASIC.TARGET_WITH_ARROW,
    iconColor: '#51e2ae',
    itemName: 'Goals',
    additionalText: 'completed',
    arrowRightColor: '#1A1926'
  },
  {
    iconName: GT_ICONS_BASIC.TASK,
    iconColor: '#a7b8ff',
    itemName: 'Tasks',
    additionalText: 'subtasks',
    arrowRightColor: '#1A1926'
  },
  {
    iconName: GT_ICONS_BASIC.LOOP,
    iconColor: '#ffa38f',
    itemName: 'Habits',
    additionalText: 'new habits',
    arrowRightColor: '#1A1926'
  }
]