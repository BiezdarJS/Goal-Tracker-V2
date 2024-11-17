import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartHealthAndSportsComponent } from './components/chart-health-and-sports/chart-health-and-sports.component';
import { SelectComponent } from '@gtSharedComponents/select/select.component';
import { HealthAndSportsOptionsConfig } from './const/health-and-sports-options.config';
/** Komponent widgetu HealthAndSports w dashboard */
@Component({
  selector: 'gt-widget-health-and-sports',
  standalone: true,
  imports: [SelectComponent, ChartHealthAndSportsComponent],
  templateUrl: './widget-health-and-sports.component.html',
  styleUrl: './widget-health-and-sports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetHealthAndSportsComponent {
/** Config dla widgetu */
protected readonly healthAndSportsOptionsConfig = HealthAndSportsOptionsConfig;
}
