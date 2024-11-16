import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { ChartProgressTowardsTheGoalComponent } from './components/chart-progress-towards-the-goal/chart-progress-towards-the-goal.component';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ProgressTowardsTheGoalDataStoreService } from './services/progress-towards-the-goal-data-store.service';

/** Komponent widgetu ProgressTowardsTheGoal w dashboard */
@Component({
  selector: 'gt-widget-progress-towards-the-goal',
  standalone: true,
  imports: [ChartProgressTowardsTheGoalComponent],
  providers: [
    ChartDataStoreService,
    ProgressTowardsTheGoalDataStoreService
  ],
  templateUrl: './widget-progress-towards-the-goal.component.html',
  styleUrl: './widget-progress-towards-the-goal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetProgressTowardsTheGoalComponent {
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());
  private progressTowardsTheGoalDataStoreService = inject(ProgressTowardsTheGoalDataStoreService);

  public progressTowardsTheGoalConfig: ChartConfiguration<'doughnut'>['options'] = this.progressTowardsTheGoalDataStoreService.progressTowardsTheGoalConfig;
  public progressTowardsTheGoalData1: ChartData<'doughnut'> | undefined = this.progressTowardsTheGoalDataStoreService.progressTowardsTheGoalData1;
  public progressTowardsTheGoalData2: ChartData<'doughnut'> | undefined = this.progressTowardsTheGoalDataStoreService.progressTowardsTheGoalData2;
  public progressTowardsTheGoalData3: ChartData<'doughnut'> | undefined = this.progressTowardsTheGoalDataStoreService.progressTowardsTheGoalData3;
  public progressTowardsTheGoalData4: ChartData<'doughnut'> | undefined = this.progressTowardsTheGoalDataStoreService.progressTowardsTheGoalData4;
}
