import { computed, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { CurrentSelectValueEnum } from '@gtSharedComponents/select/enums/current-select-value.enum';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
import { ChartConfiguration } from 'chart.js';

/** Serwis z danymi dla wykresu wewnątrz widgetu MyActivity */
@Injectable()
export class MyActivityDataStoreService {
  /** Serwis przechowywujący globalne dane dla wykresów  */
  private chartDataStoreService = inject(ChartDataStoreService);
  /** Obecnie wybrane kolory  */
  public chartColors: Signal<IChartColorPalette | null> = computed(() => this.chartDataStoreService.chartColors());
  /** Obecnie My Activity - prywatne */
  private _myActivityCurrentSelectValue: WritableSignal<CurrentSelectValueEnum | null> = signal(null);
  /** Obecnie My Activity - publiczne */
  public myActivityCurrentSelectValue: Signal<CurrentSelectValueEnum | null> = computed(() => this._myActivityCurrentSelectValue());


  /** Config dla wykresu MyActivity */
  public myActicityChartConfig: ChartConfiguration<'line'>['options'] = {
    scales: {
      x: {
        grid: {
          display: false,
          circular: true,
        },
        ticks: {
          color: this.chartColors()?.lightDark
        }
      },
      y: {
        min: 0,
        max: 9,
        ticks: {
          stepSize: 1,
          color: this.chartColors()?.lightDark
        }
      },
    },
    elements: {
      line: {
        tension: 0.4,
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: this.chartColors()?.lightDark
        }
      },
      tooltip: {
        backgroundColor: this.chartColors()?.lightDark,
        displayColors: false,
        titleColor: this.chartColors()?.lightDark
      },
    }
  };


  /** Dane dla wykresu MyActivity - widok 'tydzień' */
  public myActivityDataWeek = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Work/Career",
      backgroundColor: this.chartColors()?.green,
      borderColor: this.chartColors()?.green,
      data: [3, 1, 2, 3, 2, 5, 8],
      pointHitRadius: 16,
    }, {
      label: "Self Knowledge",
      backgroundColor: this.chartColors()?.red,
      borderColor: this.chartColors()?.red,
      data: [4, 5, 1, 5, 7, 5, 2]
    }, {
      label: "Health and sports",
      backgroundColor: this.chartColors()?.yellow,
      borderColor: this.chartColors()?.yellow,
      data: [3, 1, 2, 3, 2, 5, 8],
    }]
  }

  /** Dane dla wykresu MyActivity - widok 'miesiące' */
  public myActivityDataMonth = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Income",
      backgroundColor: this.chartColors()?.green,
      borderColor: this.chartColors()?.green,
      data: [2, 1, 3, 2, 1, 3, 2, 2,5, 7, 5, 3],
      pointHitRadius: 16,
    }, {
      label: "More data",
      backgroundColor: this.chartColors()?.red,
      borderColor: this.chartColors()?.red,
      data: [6, 4, 2, 5, 1, 2, 6, 2, 1, 5, 2, 4]
    }]
  }

  /** Ustawia wartość selecta wewnątrz myActivity */
  public setMyActivityCurrentSelectValue(value: CurrentSelectValueEnum) {
    this._myActivityCurrentSelectValue.set(value);
  }
}
