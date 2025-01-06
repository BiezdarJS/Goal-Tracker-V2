import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconColorEnum } from '@gtShared/enums/icon-color.enum';
import { ButtonComponent } from '@gtSharedComponents/button/button.component';
import { GT_ICONS_BASIC } from '@gtSharedComponents/icon/enums/gt-icons.basic';
import { IconComponent } from '@gtSharedComponents/icon/icon.component';
/** Komponent widgetu TodayTasks w dashboard */
@Component({
  selector: 'gt-widget-today-tasks',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './widget-today-tasks.component.html',
  styleUrl: './widget-today-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetTodayTasksComponent {
  /** Enum dla dostępnych ikon */
  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly IconColorEnum = IconColorEnum;

  createNewTask() {
  }
}
