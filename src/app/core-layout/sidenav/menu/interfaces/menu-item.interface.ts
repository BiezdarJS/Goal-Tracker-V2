import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";

export interface IMenuItem {
  name: string;
  icon: GT_ICONS_BASIC;
  routerLink: string;
  iconFillType: iconFillTypeEnum;
}

export enum iconFillTypeEnum {
  FILL,
  STROKE
}
