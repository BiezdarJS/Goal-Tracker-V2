import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@gtSharedComponents/button/button.component';
import { IconColorEnum } from '@gtShared/enums/icon-color.enum';
import { GT_ICONS_BASIC } from '@gtSharedComponents/icon/enums/gt-icons.basic';
import { IconComponent } from '@gtSharedComponents/icon/icon.component';
import { SummaryWidgetConfig } from './const/widget-summary.config';

/** Komponent widgetu Summary w dashboard */
@Component({
  selector: 'gt-widget-summary',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './widget-summary.component.html',
  styleUrl: './widget-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetSummaryComponent {
/** Enum dla dostępnych ikon */
protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
/** Enum dla dostępnych kolorów ikon */
protected readonly IconColorEnum = IconColorEnum;
/** Config dla widgetu */
protected readonly summaryWidgetConfig = SummaryWidgetConfig;


// Goals
allGoals: Array<any> = [];
}
