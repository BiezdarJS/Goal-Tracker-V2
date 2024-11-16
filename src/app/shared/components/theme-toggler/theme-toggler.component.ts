import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveThemeService } from '@gtCoreServices/active-theme.service';
/** Komponent do zmiany motywu light/dark */
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
    private activeThemeService: ActiveThemeService,
  ) {}

  /** Obsługa przełączamia motywu light/dark */
  public toggleTheme() {
    this.activeThemeService.toggleTheme();
  }
}
