import { Injectable } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement } from 'chart.js';
/** Serwis konfiguracji dla wykresów  */
@Injectable()
export class ChartConfigService {


  constructor() {
    this.registerChartComponents();
  }

  /** Rejestracja rodzajów dostępnych wykresów */
  private registerChartComponents() {
    Chart.register(
      DoughnutController,
      ArcElement,
      BarController,
      LineController,
      BarElement,
      LineElement,
      PointElement,
      CategoryScale,
      LinearScale,
      Title,
      Tooltip,
      Legend
  );
  }
}
