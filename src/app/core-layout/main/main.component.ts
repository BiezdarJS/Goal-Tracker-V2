import { ChangeDetectionStrategy, Component } from '@angular/core';
/** Komponent main aplikacji */
@Component({
  selector: 'gt-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
