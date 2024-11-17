import { computed, inject, Injectable, Signal } from '@angular/core';
import { textInCenter } from '@gtShared/utils/chart-utils';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration } from 'chart.js';

@Injectable()
export class ProgressTowardsTheGoalDataStoreService {
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());

  public progressTowardsTheGoalConfig: ChartConfiguration<'doughnut'>['options'] = {
    layout: {
      padding: {
          top: -20,
      }
  },
    cutout: "95%",
    radius: 45,
    responsive: true,
    // clip: {left: 0, top: 0, right: 0, bottom: 50},
    elements: {
      arc: {
        borderAlign: 'center',
        borderWidth: 0,
        borderJoinStyle: "round",
      }
    },

    animation: {
      animateRotate: true,
      onComplete: function() {
        textInCenter(this, '60%');
      },
    },
    events: []
  };

  public progressTowardsTheGoalData1 = {
    datasets: [{
      label: '60%',
      data: [60, 40],
      backgroundColor: [this.chartColors()?.orange, this.chartColors()?.transparent]
    }]
  };
  public progressTowardsTheGoalData2 = {
    datasets: [{
      label: '30%',
      data: [30, 70],
      backgroundColor: [this.chartColors()?.green, this.chartColors()?.transparent]
    }]
  };
  public progressTowardsTheGoalData3 = {
    datasets: [{
      label: '10%',
      data: [10, 90],
      backgroundColor: [this.chartColors()?.blue, this.chartColors()?.transparent]
    }]
  };
  public progressTowardsTheGoalData4 = {
    datasets: [{
    label: '65%',
    data: [65, 35],
    backgroundColor: [this.chartColors()?.yellow, this.chartColors()?.transparent]
    }]
  };
}
