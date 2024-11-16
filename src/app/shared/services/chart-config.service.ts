import { Injectable } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
/** Serwis konfiguracji dla wykresów  */
@Injectable()
export class ChartConfigService {


  constructor() {
    this.registerChartComponents();
  }

  /** Rejestracja rodzajów dostępnych wykresów */
  private registerChartComponents() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  }
}
