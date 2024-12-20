import { Component, inject, input, InputSignal } from '@angular/core';
import { drawCirclePlugin } from '@gtShared/utils/chart-utils';
import { ChartConfigService } from '@gtSharedServices/chart-config.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
/** Komponent wykresu ProgressTowardsTheGoal */
@Component({
  selector: 'gt-chart-progress-towards-the-goal',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartConfigService],
  templateUrl: './chart-progress-towards-the-goal.component.html',
  styleUrl: './chart-progress-towards-the-goal.component.scss'
})
export class ChartProgressTowardsTheGoalComponent {
  progressTowardsTheGoalConfig: InputSignal<ChartConfiguration<'doughnut'>['options']> = input();
  progressTowardsTheGoalType: InputSignal<ChartType | undefined> = input();
  progressTowardsTheGoalData: InputSignal<ChartData<'doughnut'> | undefined> = input();
  /** Serwis konfiguracji dla wykresów */
  chartConfigService = inject(ChartConfigService);

  public drawCirclePlugin = [drawCirclePlugin];
}
