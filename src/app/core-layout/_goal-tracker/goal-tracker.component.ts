import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
/** Komponent corowy wyświetlający główne elementy layoutu tj. header, sidebar, main oraz footer */
@Component({
  selector: 'gt-goal-tracker',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, MainComponent, FooterComponent, RouterModule],
  templateUrl: './goal-tracker.component.html',
  styleUrl: './goal-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalTrackerComponent {
}
