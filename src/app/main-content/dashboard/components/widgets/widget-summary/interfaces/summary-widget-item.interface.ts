import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";
import { SummaryItemNameEnum } from "../enums/summary-item.enum";
/** Iterfejs dla pojedynczego itemu w widgecie SummaryItem */
export interface ISummaryWidgetItem {
  itemType: SummaryItemNameEnum;
  iconName: GT_ICONS_BASIC;
  iconColor: string;
  itemName: string;
  additionalText: string;
  arrowRightColor: string;
}
