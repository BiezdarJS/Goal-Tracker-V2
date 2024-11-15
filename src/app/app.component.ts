import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
/** Główny komponent aplikacji */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'goal-tracker-v2';
}
