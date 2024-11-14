import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
/** Komponent nawigacji wewnątrz sidenav */
@Component({
  selector: 'gt-nav-bar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

}
