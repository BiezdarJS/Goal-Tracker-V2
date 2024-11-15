import { Component, inject, Input } from '@angular/core';
import { SetThemeService } from '@gtCoreServices/set-theme.service';
import { chartColors } from '@gtShared/const/chart-colors';
import { Subscription } from 'rxjs';
import { BalanceOfGoalsChartConfig } from './const/balance-of-goals-chart.config';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfigService } from '@gtSharedServices/chart-config.service';

@Component({
  selector: 'gt-chart-balance-of-goals',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [ChartConfigService],
  templateUrl: './chart-balance-of-goals.component.html',
  styleUrl: './chart-balance-of-goals.component.scss'
})
export class ChartBalanceOfGoalsComponent {
  @Input() allGoals: any;
  themeName!: string | null;
  subscription!: Subscription;
  balanceOfGoalsData!: ChartData<'doughnut'>;
  currentThemeName!: string | null;
  colors: any = sessionStorage.getItem('theme') === 'theme-light' ? chartColors.themeLight : chartColors.themeDark;
  /** Config dla wykresu */
  protected readonly balanceOfGoalsChartConfig = BalanceOfGoalsChartConfig;

  constructor(
    private setThemeService: SetThemeService,
    private chartConfigService: ChartConfigService
  ) {

  }

  ngOnInit():void {
    // this.subscription = this.setThemeService.activeTheme.subscribe(themeName => this.themeName = themeName);
  }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  ngAfterViewChecked():void {
   this.currentThemeName = this.themeName;
  }

  ngAfterContentChecked():void {
    this.colors = sessionStorage.getItem('theme') === 'theme-light' ? chartColors.themeLight : chartColors.themeDark;
    this.balanceOfGoalsData = {
      labels: [3, 'GOALS'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            this.colors.green,
            this.colors.yellow,
            this.colors.red
          ],
          hoverOffset: 4
        }
      ]
    };
    console.log('balanceOfGoalsData: ', this.balanceOfGoalsData);
  }

}
