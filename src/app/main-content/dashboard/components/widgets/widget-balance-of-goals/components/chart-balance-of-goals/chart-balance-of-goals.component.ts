import { Component, computed, effect, inject, Signal } from '@angular/core';
import { BalanceOfGoalsChartConfig } from './const/balance-of-goals-chart.config';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfigService } from '@gtSharedServices/chart-config.service';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { IGoalCategoryCount } from '../../interfaces/goal-category-count.interface';
/** Komponent wykresu wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-chart-balance-of-goals',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartConfigService, ChartDataStoreService, DataStoreService],
  templateUrl: './chart-balance-of-goals.component.html',
  styleUrl: './chart-balance-of-goals.component.scss'
})
export class ChartBalanceOfGoalsComponent {
  /** Serwis przechowujący dane dla celów, tasków, itd. */
  private dataStoreService = inject(DataStoreService);
  /** Serwis konfiguracji dla wykresów */
  chartConfigService = inject(ChartConfigService);
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Liczba obecnie występujących celów - publiczne */
  public goalsNumber: Signal<number> = computed(() => this.dataStoreService.goalsNumber());
  /** Liczba zadań w poszczególnych kategoriach */
  public goalCategoriesCounts: Signal<IGoalCategoryCount[] | null> = computed(() => this.dataStoreService.goalCategoriesCounts());
  /** Obecnie wyświetlany motyw */
  activeTheme!: string | null;
  /** Obecnie wyświetlany motyw */
  currentActiveTheme!: string | null;
  /** Config dla wykresu */
  protected readonly balanceOfGoalsChartConfig = BalanceOfGoalsChartConfig;
  /** Dane dla wykresu BalanceOfGoals */
  balanceOfGoalsData!: ChartData<'doughnut'>;
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());


  constructor() {
    effect(() => {
      if (this.goalsNumber() && this.goalCategoriesCounts()) {
        this.initBalanceOfGoalsData();
      }
    });
  }

  /** Dane dla wykresu BalanceOfGoals */
  private initBalanceOfGoalsData(): void {
    const chartValues = Object.values(this.goalCategoriesCounts() ?? {}) as unknown as number[];
    this.balanceOfGoalsData = {
      labels: [this.goalsNumber(), 'GOALS'],
      datasets: [
        {
          data: chartValues,
          backgroundColor: [
            this.chartColors()?.green,
            this.chartColors()?.yellow,
            this.chartColors()?.red,
            this.chartColors()?.orange,
            this.chartColors()?.blue,
          ],
          hoverOffset: 4
        }
      ]
    };
  }

  /** ngAfterViewChecked */
  ngAfterViewChecked():void {
   this.currentActiveTheme = this.activeTheme;
  }
}
