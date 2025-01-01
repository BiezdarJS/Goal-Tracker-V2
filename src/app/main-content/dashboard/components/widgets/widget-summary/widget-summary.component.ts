import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal } from '@angular/core';
import { ButtonComponent } from '@gtSharedComponents/button/button.component';
import { IconColorEnum } from '@gtShared/enums/icon-color.enum';
import { GT_ICONS_BASIC } from '@gtSharedComponents/icon/enums/gt-icons.basic';
import { IconComponent } from '@gtSharedComponents/icon/icon.component';
import { SummaryWidgetConfig } from './const/widget-summary.config';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { SummaryItemNameEnum } from './enums/summary-item.enum';
/** Komponent widgetu Summary w dashboard */
@Component({
  selector: 'gt-widget-summary',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  providers: [DataStoreService],
  templateUrl: './widget-summary.component.html',
  styleUrl: './widget-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetSummaryComponent {
private dataStoreService = inject(DataStoreService);
/** Enum dla dostępnych ikon */
protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
/** Enum dla dostępnych kolorów ikon */
protected readonly IconColorEnum = IconColorEnum;
/** Enum dla dostępnych rodzajów Summary */
protected readonly SummaryItemNameEnum = SummaryItemNameEnum;
/** Config dla widgetu */
protected readonly summaryWidgetConfig = SummaryWidgetConfig;
/** Liczba obecnie występujących celów - publiczne */
public goalsNumber: Signal<number> = computed(() => this.dataStoreService.goalsNumber());
/** Liczba obecnie występujących tasków - publiczne */
public tasksNumber: Signal<number> = computed(() => this.dataStoreService.tasksNumber());
}
