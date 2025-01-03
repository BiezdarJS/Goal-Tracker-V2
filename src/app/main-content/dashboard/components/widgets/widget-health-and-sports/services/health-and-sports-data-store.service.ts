import { computed, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration } from 'chart.js';
/** Serwis z danymi dla wykresu wewnątrz widgetu HealthAndSports */
@Injectable()
export class HealthAndSportsDataStoreService {
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());
  /** Obecna wartość select dla MyActivity - prywatne */
  private _healthAndSportsCurrentSelectValue: WritableSignal<CurrentSelectValueEnum | null> = signal(null);
  /** Obecna wartość select dla MyActivity - publiczne */
  public healthAndSportsCurrentSelectValue: Signal<CurrentSelectValueEnum | null> = computed(() => this._healthAndSportsCurrentSelectValue());

  /** Config dla wykresu MyActivity */
  public healthAndSportsChartConfig: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: this.chartColors()?.lightDark
        }
      },
      y: {
        stacked: true,
        type: 'linear',
        ticks: {
          color: this.chartColors()?.lightDark
        }
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    events: [],
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: this.chartColors()?.lightDark
        }
      },

    }
  };


  public healthAndSportsDataWeek = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: 'Run',
      backgroundColor: this.chartColors()?.red,
      data: [1, 59, 5, 56, 58, 12, 59]
    }, {
      label: 'Yoga',
      backgroundColor: this.chartColors()?.yellow,
      data: [12, 59, 5, 56, 58, 12, 59]
    }, {
      label: 'Workout',
      backgroundColor: this.chartColors()?.green,
      data: [12, 59, 5, 56, 58, 12, 59]
    }, {
      label: 'Swim',
      backgroundColor: '#ddd',
      data: [12, 59, 5, 56, 58, 12, 59]
    }]
  };

  public healthAndSportsDataMonth = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'Run',
      backgroundColor: this.chartColors()?.red,
      data: [12, 59, 5, 56, 58, 12, 59, 87, 45, 40, 50, 12]
    }, {
      label: 'Yoga',
      backgroundColor: this.chartColors()?.yellow,
      data: [12, 59, 5, 56, 58, 12, 59, 85, 23, 12, 56, 43]
    }, {
      label: 'Workout',
      backgroundColor: this.chartColors()?.green,
      data: [12, 59, 5, 56, 58, 12, 59, 65, 51, 12, 56, 22]
    }, {
      label: 'Swim',
      backgroundColor: '#ddd',
      data: [12, 59, 5, 56, 58, 12, 59, 12, 74, 12, 23, 43]
    }]
  };

  /** Ustawia wartość selecta dla wykresu HealthAndSports */
  public setHealthAndSportsCurrentSelectValue(value: CurrentSelectValueEnum) {
    this._healthAndSportsCurrentSelectValue.set(value);
  }
}
