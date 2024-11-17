import { Component, inject } from '@angular/core';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HealthAndSportsDataStoreService } from '../../services/health-and-sports-data-store.service';

@Component({
  selector: 'gt-chart-health-and-sports',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartDataStoreService, HealthAndSportsDataStoreService],
  templateUrl: './chart-health-and-sports.component.html',
  styleUrl: './chart-health-and-sports.component.scss'
})
export class ChartHealthAndSportsComponent {

  private healthAndSportsDataStoreService = inject(HealthAndSportsDataStoreService);
  public healthAndSportsChartConfig: ChartConfiguration<'bar'>['options'] = this.healthAndSportsDataStoreService.healthAndSportsChartConfig;
  // public myActivityDataWeek: ChartData<'line'> | undefined = this.myActivityDataStoreService.myActivityDataWeek;
  public healthAndSportsDataMonth: ChartData<'bar'> | undefined = this.healthAndSportsDataStoreService.healthAndSportsDataMonth;
}
