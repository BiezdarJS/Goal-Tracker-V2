import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '@gtCoreServices/api.service';
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('goals').subscribe(data => console.log('To są dane: ', data));
  }
}
