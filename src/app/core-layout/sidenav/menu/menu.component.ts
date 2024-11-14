import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { GT_ICONS_BASIC } from '../../../shared/components/icon/enums/gt-icons.basic';
import { IconColorEnum } from '../../../shared/enums/icon-color.enum';
/** Komponent menu wewnątrz nav-bar */
@Component({
  selector: 'gt-menu',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  /** Enum dla dostępnych ikon */
  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly IconColorEnum = IconColorEnum;
}
