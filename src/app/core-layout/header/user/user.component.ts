import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent dla ikonki usera w aplikacji */
@Component({
  selector: 'gt-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

}
