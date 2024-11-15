import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardWidgetTypeEnum } from './enums/dashboard-widget-type.enum';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetSummaryComponent } from './components/widgets/widget-summary/widget-summary.component';
/** Komponent dla widoku dashboard zawierający widgety do monitorowania celów */
@Component({
  selector: 'gt-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    CommonModule,
    WidgetComponent,
    WidgetSummaryComponent
  ],
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  /** Dostępne typy widgetów w dashboard */
  public readonly DashboardWidgetTypeEnum = DashboardWidgetTypeEnum;
}
