import { ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal } from '@angular/core';
import { BalanceListComponent } from './components/balance-list/balance-list.component';
import { ChartBalanceOfGoalsComponent } from './components/chart-balance-of-goals/chart-balance-of-goals.component';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { combineLatest, map } from 'rxjs';
import { IGoalCategoryCount } from './interfaces/goal-category-count.interface';
/** Komponent widgetu BalanceOfGoals w dashboard */
@Component({
  selector: 'gt-widget-balance-of-goals',
  standalone: true,
  imports: [ChartBalanceOfGoalsComponent, BalanceListComponent],
  providers: [DataStoreService],
  templateUrl: './widget-balance-of-goals.component.html',
  styleUrl: './widget-balance-of-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetBalanceOfGoalsComponent {
}
