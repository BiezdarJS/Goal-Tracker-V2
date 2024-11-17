import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent dla widoku celów */
@Component({
  selector: 'gt-goals',
  standalone: true,
  imports: [],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent {

}
