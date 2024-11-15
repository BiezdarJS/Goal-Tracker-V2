import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BalanceListComponent } from './balance-list/balance-list.component';
/** Komponent widgetu BalanceOfGoals w dashboard */
@Component({
  selector: 'gt-widget-balance-of-goals',
  standalone: true,
  imports: [BalanceListComponent],
  templateUrl: './widget-balance-of-goals.component.html',
  styleUrl: './widget-balance-of-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetBalanceOfGoalsComponent {

}
