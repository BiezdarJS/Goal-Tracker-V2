import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { GT_ICONS_BASIC } from '../../../shared/components/icon/enums/gt-icons.basic';
import { ICON_COLOR } from '../../../shared/enums/icon-color.enum';

@Component({
  selector: 'gt-header-dropdown',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.scss'
})
export class HeaderDropdownComponent {

  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  protected readonly ICON_COLOR = ICON_COLOR;

  constructor(
    private authService: AuthService,
  ) {}

  logout() {
    this.authService.logout();
  }
}
