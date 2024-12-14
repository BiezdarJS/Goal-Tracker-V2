import { Component, inject, Input } from '@angular/core';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HealthAndSportsDataStoreService } from '../../services/health-and-sports-data-store.service';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';

@Component({
  selector: 'gt-chart-health-and-sports',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartDataStoreService, HealthAndSportsDataStoreService],
  templateUrl: './chart-health-and-sports.component.html',
  styleUrl: './chart-health-and-sports.component.scss'
})
export class ChartHealthAndSportsComponent {
  /** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
  @Input('healthAndSportsCurrentSelectValue') healthAndSportsCurrentSelectValue: CurrentSelectValueEnum | null = CurrentSelectValueEnum.WEEK;
  private healthAndSportsDataStoreService = inject(HealthAndSportsDataStoreService);
  public healthAndSportsChartConfig: ChartConfiguration<'bar'>['options'] = this.healthAndSportsDataStoreService.healthAndSportsChartConfig;
  /** Dane dla */
  public healthAndSportsDataWeek: ChartData<'bar'> | undefined = this.healthAndSportsDataStoreService.healthAndSportsDataWeek;
  /** Serwis z danymi dla wykresu wewnątrz widgetu HealthAndSports */
  public healthAndSportsDataMonth: ChartData<'bar'> | undefined = this.healthAndSportsDataStoreService.healthAndSportsDataMonth;
  /** Dostępne wartości select dla HealthAndSports chart  */
  protected readonly CurrentSelectValueEnum = CurrentSelectValueEnum;
}
