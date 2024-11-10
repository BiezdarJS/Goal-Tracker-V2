import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SetThemeService } from '../../../core/services/set-theme.service';

/** Globalny komponent do zmiany motywu light/dark */
@Component({
  selector: 'gt-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeTogglerComponent {

  /** Konstruktor klasy */
  constructor(
    private setThemeService: SetThemeService,
  ) {}

  /** Obsługa przełączamia motywu light/dark */
  public toggleTheme() {
    this.setThemeService.toggleTheme();
  }
}
