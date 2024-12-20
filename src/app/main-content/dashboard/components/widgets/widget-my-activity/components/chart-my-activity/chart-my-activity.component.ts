import { Component, inject, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MyActivityDataStoreService } from '../../services/my-activity-data-store.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';
/** Komponent wykresu MyActivity */
@Component({
  selector: 'gt-chart-my-activity',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartDataStoreService, MyActivityDataStoreService],
  templateUrl: './chart-my-activity.component.html',
  styleUrl: './chart-my-activity.component.scss'
})
export class ChartMyActivityComponent {
  /** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
  @Input() myActivityCurrentSelectValue: CurrentSelectValueEnum | null = CurrentSelectValueEnum.WEEK;
  /** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
  private myActivityDataStoreService = inject(MyActivityDataStoreService);
  public myActicityChartConfig: ChartConfiguration<'line'>['options'] = this.myActivityDataStoreService.myActicityChartConfig;
  /** Dostępne wartości select dla MyActivity chart  */
  protected readonly CurrentSelectValueEnum = CurrentSelectValueEnum;

  public myActivityDataMonth: ChartData<'line'> | undefined = this.myActivityDataStoreService.myActivityDataMonth;

  public myActivityDataWeek: ChartData<'line'> | undefined = this.myActivityDataStoreService.myActivityDataWeek;
}
