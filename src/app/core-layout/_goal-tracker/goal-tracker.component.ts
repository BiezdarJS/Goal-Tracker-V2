import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'gt-goal-tracker',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, FooterComponent],
  templateUrl: './goal-tracker.component.html',
  styleUrl: './goal-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalTrackerComponent {

}
