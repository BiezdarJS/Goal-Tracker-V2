import { Injectable } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
/** Serwis konfiguracji dla wykresów  */
@Injectable()
export class ChartConfigService {


  constructor() {
    this.registerChartComponents();
  }

  /** Rejestracja rodzajów dostępnych wykresów */
  private registerChartComponents() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);
  }
}
