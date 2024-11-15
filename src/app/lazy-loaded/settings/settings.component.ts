import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent dla widoku ustawień użytkownika */
@Component({
  selector: 'gt-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {

}
