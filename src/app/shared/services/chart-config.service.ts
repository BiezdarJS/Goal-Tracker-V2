import { Injectable } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

@Injectable()
export class ChartConfigService {
  constructor() {
    this.registerChartComponents();
  }

  private registerChartComponents() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  }
}
