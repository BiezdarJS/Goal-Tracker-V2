import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent dla widoku zadań, które są wewnątrz poszczególnych celów */
@Component({
  selector: 'gt-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

}
