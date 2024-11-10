import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'gt-sidenav',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

}
