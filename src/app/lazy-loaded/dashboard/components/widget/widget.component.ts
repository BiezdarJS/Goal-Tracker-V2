import { ChangeDetectionStrategy, Component, computed, HostBinding, input, InputSignal, Signal } from '@angular/core';
import { DashboardWidgetTypeEnum } from '../../enums/dashboard-widget-type.enum';
/** Komponent pojedynczego widgetu w dashboard */
@Component({
  selector: 'gt-widget',
  templateUrl: './widget.component.html',
  standalone: true,
  styleUrl: './widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent {
  /** Input przyjmujący informację o obecnie wyświetlanym widgecie */
  public dashboardWidgetType: InputSignal<DashboardWidgetTypeEnum | undefined> = input();
  /** Dodatkowe klasy dla obecnie wyświetlanego widgetu */
  public currentClasses: Signal<string> = computed(() => {
    switch(this.dashboardWidgetType()) {
      case(DashboardWidgetTypeEnum.SUMMARY) :
        return 'widget--summary widget--28';
      case(DashboardWidgetTypeEnum.BALANCE_OF_GOALS) :
        return 'widget--44';
      case(DashboardWidgetTypeEnum.CALENDAR) :
        return 'widget--28 flex center-all'
      case(DashboardWidgetTypeEnum.PROGRESS_TOWARDS_THE_GOAL) :
        return 'widget--progress-towards-the-goal'
      case(DashboardWidgetTypeEnum.MY_ACTIVITY) :
        return 'widget--my-activity'
      case(DashboardWidgetTypeEnum.HEALTH_AND_SPORTS) :
        return 'widget--health-and-sports'
      case(DashboardWidgetTypeEnum.TODAY_TASKS) :
        return 'widget--today-tasks'
    }
    return '';
  });

  @HostBinding('class') get hostClasses(): string {
    return this.currentClasses();
  }
}
