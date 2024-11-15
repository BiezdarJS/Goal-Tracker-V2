import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent listy wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-balance-list',
  standalone: true,
  imports: [],
  templateUrl: './balance-list.component.html',
  styleUrl: './balance-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceListComponent {

}
