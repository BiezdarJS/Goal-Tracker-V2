import { Component, inject, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MyActivityDataStoreService } from '../../services/my-activity-data-store.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';

@Component({
  selector: 'gt-chart-my-activity',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartDataStoreService, MyActivityDataStoreService],
  templateUrl: './chart-my-activity.component.html',
  styleUrl: './chart-my-activity.component.scss'
})
export class ChartMyActivityComponent {
  @Input('myActicitySelectValue') myActicitySelectValue!:string;

  private myActivityDataStoreService = inject(MyActivityDataStoreService);
  public myActicityChartConfig: ChartConfiguration<'line'>['options'] = this.myActivityDataStoreService.myActicityChartConfig;
  // public myActivityDataWeek: ChartData<'line'> | undefined = this.myActivityDataStoreService.myActivityDataWeek;
  public myActivityDataMonth: ChartData<'line'> | undefined = this.myActivityDataStoreService.myActivityDataMonth;
}
