import { Component, computed, inject, Input, OnInit, Signal } from '@angular/core';
import { BalanceOfGoalsChartConfig } from './const/balance-of-goals-chart.config';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfigService } from '@gtSharedServices/chart-config.service';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
/** Komponent wykresu wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-chart-balance-of-goals',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartConfigService, ChartDataStoreService],
  templateUrl: './chart-balance-of-goals.component.html',
  styleUrl: './chart-balance-of-goals.component.scss'
})
export class ChartBalanceOfGoalsComponent implements OnInit {
  /** Obiekt zawierający wszystkie cele */
  @Input() allGoals: any;
  /** Obecnie wyświetlany motyw */
  activeTheme!: string | null;
  /** Obecnie wyświetlany motyw */
  currentActiveTheme!: string | null;
  /** Config dla wykresu */
  protected readonly balanceOfGoalsChartConfig = BalanceOfGoalsChartConfig;
  /** Dane dla wykresu BalanceOfGoals */
  balanceOfGoalsData!: ChartData<'doughnut'>;
  /** Serwis konfiguracji dla wykresów */
  chartConfigService = inject(ChartConfigService);
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());


  ngOnInit(): void {
    this.initBalanceOfGoalsData();
  }

  /** Dane dla wykresu BalanceOfGoals */
  private initBalanceOfGoalsData(): void {
    this.balanceOfGoalsData = {
      labels: [3, 'GOALS'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            this.chartColors()?.green,
            this.chartColors()?.yellow,
            this.chartColors()?.red
          ],
          hoverOffset: 4
        }
      ]
    };
  }

  ngAfterViewChecked():void {
   this.currentActiveTheme = this.activeTheme;
  }
}
