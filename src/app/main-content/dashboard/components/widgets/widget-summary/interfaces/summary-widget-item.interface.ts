import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";

export interface ISummaryWidgetItem {
  itemType: SummaryItemNameEnum;
  iconName: GT_ICONS_BASIC;
  iconColor: string;
  itemName: string;
  additionalText: string;
  arrowRightColor: string;
}


export enum SummaryItemNameEnum {
  GOALS,
  TASKS,
  HABITS
}
