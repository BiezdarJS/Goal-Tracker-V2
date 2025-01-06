import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, Signal } from '@angular/core';
import { ChartHealthAndSportsComponent } from './components/chart-health-and-sports/chart-health-and-sports.component';
import { SelectComponent } from '@gtSharedComponents/select/select.component';
import { HealthAndSportsOptionsConfig } from './const/health-and-sports-options.config';
import { HealthAndSportsDataStoreService } from './services/health-and-sports-data-store.service';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';
/** Komponent widgetu HealthAndSports w dashboard */
@Component({
  selector: 'gt-widget-health-and-sports',
  standalone: true,
  imports: [SelectComponent, ChartHealthAndSportsComponent],
  providers: [HealthAndSportsDataStoreService],
  templateUrl: './widget-health-and-sports.component.html',
  styleUrl: './widget-health-and-sports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetHealthAndSportsComponent {
  /** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
  private myActivityDataStoreService = inject(HealthAndSportsDataStoreService);
  /** Config dla widgetu */
  protected readonly healthAndSportsOptionsConfig = HealthAndSportsOptionsConfig;
  /** Obecnie My Activity - publiczne */
  public healthAndSportsCurrentSelectValue: Signal<CurrentSelectValueEnum | null> = computed(() => this.myActivityDataStoreService.healthAndSportsCurrentSelectValue());

  /** Inicjalizuje indywidualną instację Select */
  public initializeSelect(elementRef: ElementRef) {
    new (window as any).Select(elementRef, {
      placeholder: 'Month'
    });
  }

  /** Ustawia wartość dla Select HealthAndSports  */
  public setHealthAndSportsCurrentSelectValueOnSelectChange(event: Event) {
    this.myActivityDataStoreService.setHealthAndSportsCurrentSelectValue(+(event.target as HTMLSelectElement).value);
  }
}
