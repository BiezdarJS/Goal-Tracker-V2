import { GT_ICONS_BASIC } from "@gtSharedComponents/icon/enums/gt-icons.basic";
import { iconFillTypeEnum, IMenuItem } from "../interfaces/menu-item.interface";

export const MenuConfig: IMenuItem[] = [
  {
    name: 'Dashboard',
    icon: GT_ICONS_BASIC.GRID,
    routerLink: '/',
    iconFillType: iconFillTypeEnum.FILL
  },
  {
    name: 'My goals',
    icon: GT_ICONS_BASIC.TARGET,
    routerLink: '/my-goals',
    iconFillType: iconFillTypeEnum.STROKE
  },
  {
    name: 'Calendar',
    icon: GT_ICONS_BASIC.CALENDAR,
    routerLink: '/calendar',
    iconFillType: iconFillTypeEnum.FILL
  },
  {
    name: 'Settings',
    icon: GT_ICONS_BASIC.GEAR,
    routerLink: '/settings',
    iconFillType: iconFillTypeEnum.STROKE
  },
];
