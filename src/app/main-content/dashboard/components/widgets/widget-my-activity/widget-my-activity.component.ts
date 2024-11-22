import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { MyActivityOptionsConfig } from './const/my-activity-options.config';
import { SelectComponent } from '@gtSharedComponents/select/select.component';
import { ChartMyActivityComponent } from './components/chart-my-activity/chart-my-activity.component';

/** Komponent widgetu MyActivity w dashboard */
@Component({
  selector: 'gt-widget-my-activity',
  standalone: true,
  imports: [SelectComponent, ChartMyActivityComponent],
  templateUrl: './widget-my-activity.component.html',
  styleUrl: './widget-my-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetMyActivityComponent {
  /** Config dla widgetu */
  protected readonly myActivityOptionsConfig = MyActivityOptionsConfig;

  public initializeSelect(elementRef: ElementRef) {
    new (window as any).Select(elementRef, {
      placeholder: 'Week'
    });
  }

}
