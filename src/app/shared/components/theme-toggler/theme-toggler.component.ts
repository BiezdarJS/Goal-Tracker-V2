import { Component } from '@angular/core';
import { SetThemeService } from '../../../core/services/set-theme.service';

@Component({
  selector: 'gt-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {

  constructor(
    private setThemeService: SetThemeService,
  ) {}

  toggleTheme() {
    this.setThemeService.toggleTheme();
  }
}
