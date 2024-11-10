import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { GT_ICONS_BASIC } from '../../../shared/components/icon/enums/gt-icons.basic';
import { IconColorEnum } from '../../../shared/enums/icon-color.enum';
/** Globalny komponent dla menu usera w headerze */
@Component({
  selector: 'gt-header-dropdown',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDropdownComponent {
  /** Enum dla dostępnych ikon */
  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly IconColorEnum = IconColorEnum;

  /** Konstruktor klasy */
  constructor(
    private authService: AuthService,
  ) {}

  /** Obsługa wylogowania */
  public logout(): void {
    this.authService.logout();
  }
}
