import { Component, inject, Input } from '@angular/core';
import { ActiveThemeService } from '@gtCoreServices/active-theme.service';
import { chartColors } from '@gtShared/const/chart-colors';
import { Subscription } from 'rxjs';
import { BalanceOfGoalsChartConfig } from './const/balance-of-goals-chart.config';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfigService } from '@gtSharedServices/chart-config.service';
/** Komponent wykresu wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-chart-balance-of-goals',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartConfigService],
  templateUrl: './chart-balance-of-goals.component.html',
  styleUrl: './chart-balance-of-goals.component.scss'
})
export class ChartBalanceOfGoalsComponent {
  /** Obiekt zawierający wszystkie cele */
  @Input() allGoals: any;
  /** Obecnie wyświetlany motyw */
  activeTheme!: string | null;
  /** Obecnie wyświetlany motyw */
  currentActiveTheme!: string | null;
  /** Subskrypcja dla aktywnie wyświetlanego motywu */
  subscription!: Subscription;
  /** Config dla wykresu */
  protected readonly balanceOfGoalsChartConfig = BalanceOfGoalsChartConfig;
  /** Dane dla wykresu BalanceOfGoals */
  balanceOfGoalsData!: ChartData<'doughnut'>;
  /** Dane dla wykresu BalanceOfGoals */
  chartColors: any = sessionStorage.getItem('theme') === 'theme-light' ? chartColors.themeLight : chartColors.themeDark;
  /** Serwis konfiguracji dla wykresów */
  chartConfigService = inject(ChartConfigService);
  /** Serwis do zmiany i przechowywania danch o obecnie wyświetlanym motywie aplikacji -> light/dark */
  setThemeService = inject(ActiveThemeService);


  ngOnInit(): void {
    // this.subscription = this.setThemeService.activeTheme.subscribe(themeName => this.themeName = themeName);
    this.chartColors = sessionStorage.getItem('theme') === 'theme-light' ? chartColors.themeLight : chartColors.themeDark;
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
            this.chartColors.green,
            this.chartColors.yellow,
            this.chartColors.red
          ],
          hoverOffset: 4
        }
      ]
    };
  }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  ngAfterViewChecked():void {
   this.currentActiveTheme = this.activeTheme;
  }
}
