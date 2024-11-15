import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BalanceListComponent } from './components/balance-list/balance-list.component';
import { ChartBalanceOfGoalsComponent } from './components/chart-balance-of-goals/chart-balance-of-goals.component';
/** Komponent widgetu BalanceOfGoals w dashboard */
@Component({
  selector: 'gt-widget-balance-of-goals',
  standalone: true,
  imports: [ChartBalanceOfGoalsComponent, BalanceListComponent],
  templateUrl: './widget-balance-of-goals.component.html',
  styleUrl: './widget-balance-of-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetBalanceOfGoalsComponent {

}
