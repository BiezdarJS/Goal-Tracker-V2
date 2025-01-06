import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardWidgetTypeEnum } from './enums/dashboard-widget-type.enum';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetSummaryComponent } from './components/widgets/widget-summary/widget-summary.component';
import { WidgetBalanceOfGoalsComponent } from "./components/widgets/widget-balance-of-goals/widget-balance-of-goals.component";
import { WidgetMiniCalendarComponent } from './components/widgets/widget-mini-calendar/widget-mini-calendar.component';
import { WidgetProgressTowardsTheGoalComponent } from './components/widgets/widget-progress-towards-the-goal/widget-progress-towards-the-goal.component';
import { WidgetMyActivityComponent } from "./components/widgets/widget-my-activity/widget-my-activity.component";
import { WidgetHealthAndSportsComponent } from './components/widgets/widget-health-and-sports/widget-health-and-sports.component';
import { WidgetTodayTasksComponent } from "./components/widgets/widget-today-tasks/widget-today-tasks.component";
import { WidgetPortionOfMotivationComponent } from './components/widgets/widget-portion-of-motivation/widget-portion-of-motivation.component';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { ChartDataStoreService } from '@gtSharedServices/chart-data-store.service';
/** Komponent dla widoku dashboard zawierający widgety do monitorowania celów */
@Component({
  selector: 'gt-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    CommonModule,
    WidgetComponent,
    WidgetSummaryComponent,
    WidgetBalanceOfGoalsComponent,
    WidgetMiniCalendarComponent,
    WidgetProgressTowardsTheGoalComponent,
    WidgetPortionOfMotivationComponent,
    WidgetMyActivityComponent,
    WidgetMyActivityComponent,
    WidgetHealthAndSportsComponent,
    WidgetTodayTasksComponent
  ],
  providers: [DataStoreService, ChartDataStoreService],
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  /** Dostępne typy widgetów w dashboard */
  public readonly DashboardWidgetTypeEnum = DashboardWidgetTypeEnum;
}
