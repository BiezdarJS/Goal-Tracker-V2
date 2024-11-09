import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'gt-header-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.scss'
})
export class HeaderDropdownComponent {


  constructor(
    private authService: AuthService,
  ) {}

  logout() {
    this.authService.logout();
  }
}
