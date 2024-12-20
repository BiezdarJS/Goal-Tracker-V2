import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, Signal } from '@angular/core';
import { MyActivityOptionsConfig } from './const/my-activity-options.config';
import { SelectComponent } from '@gtSharedComponents/select/select.component';
import { ChartMyActivityComponent } from './components/chart-my-activity/chart-my-activity.component';
import { MyActivityDataStoreService } from './services/my-activity-data-store.service';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';
/** Komponent widgetu MyActivity w dashboard */
@Component({
  selector: 'gt-widget-my-activity',
  standalone: true,
  imports: [SelectComponent, ChartMyActivityComponent],
  providers: [MyActivityDataStoreService, ChartDataStoreService],
  templateUrl: './widget-my-activity.component.html',
  styleUrl: './widget-my-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetMyActivityComponent {
  /** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
  private myActivityDataStoreService = inject(MyActivityDataStoreService);
  /** Config dla widgetu */
  protected readonly myActivityOptionsConfig = MyActivityOptionsConfig;
  /** Obecnie My Activity - publiczne */
  public myActivityCurrentSelectValue: Signal<CurrentSelectValueEnum | null> = computed(() => this.myActivityDataStoreService.myActivityCurrentSelectValue());

  /** Inicjalizuje indywidualną instację Select */
  public initializeSelect(elementRef: ElementRef) {
    new (window as any).Select(elementRef, {
      placeholder: 'Week'
    });
  }

  /** Ustawia wartość dla MyActivity Select */
  public setMyActivityCurrentSelectValueOnSelectChange(event: Event) {
    this.myActivityDataStoreService.setMyActivityCurrentSelectValue(+(event.target as HTMLSelectElement).value);
  }
}
