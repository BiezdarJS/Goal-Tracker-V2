import { Component } from '@angular/core';
import { GoalTrackerComponent } from './core-layout/_goal-tracker/goal-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoalTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'goal-tracker-v2';
}
