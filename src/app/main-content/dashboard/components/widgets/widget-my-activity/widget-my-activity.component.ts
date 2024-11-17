import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyActivityOptionsConfig } from './const/my-activity-options.config';
import { SelectComponent } from '@gtSharedComponents/select/select.component';
/** Komponent widgetu MyActivity w dashboard */
@Component({
  selector: 'gt-widget-my-activity',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './widget-my-activity.component.html',
  styleUrl: './widget-my-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetMyActivityComponent {
  /** Config dla widgetu */
  protected readonly myActivityOptionsConfig = MyActivityOptionsConfig;


}
