import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { IGoalCategoryCount } from '../../interfaces/goal-category-count.interface';
import { AsyncPipe, JsonPipe, KeyValuePipe, NgClass } from '@angular/common';
import { BalanceItemTypeEnum } from '../../enums/balance-item-types.enum';
/** Komponent listy wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-balance-list',
  standalone: true,
  imports: [NgClass, AsyncPipe, KeyValuePipe],
  providers: [DataStoreService],
  templateUrl: './balance-list.component.html',
  styleUrl: './balance-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceListComponent {

  goalCategoriesCounts$: BehaviorSubject<IGoalCategoryCount[] | null> = new BehaviorSubject<IGoalCategoryCount[] | null>(null);

  constructor(
    private dataStoreService: DataStoreService
  ) {}


  ngOnInit() {
    this.getGoalCategoriesCounts();
  }

  private getGoalCategoriesCounts() {
    combineLatest([
      this.dataStoreService.getAllTasks(),
      this.dataStoreService.getAllGoals(),
    ])
    .pipe(
      map(([tasks, goals]) => {
        // Utwórz mapę dla goalId do kategorii
        const goalCategoryMap = goals.reduce((acc: any, goal: any) => {
          acc[goal.goalId] = goal.category;
          return acc;
        }, {});
        // Użyj funkcji Reduce, do zliczenia zadania według kategorii
        return tasks.reduce((acc: any, task: any) => {
          const category = goalCategoryMap[task.goal_id];
          if (category) {
              acc[category] = (acc[category] || 0) + 1;
          }
          return acc;
        }, {});
      })
    )
    .subscribe((data:any) => {
      this.goalCategoriesCounts$.next(data);
    });
  }

  public getBalanceListItemClass(item: string): string {
    switch(item) {
      case(BalanceItemTypeEnum.HEALTH_AND_SPORTS) :
        return 'balance-list__dot--health';
      case(BalanceItemTypeEnum.MONEY) :
        return 'balance-list__dot--money';
      case(BalanceItemTypeEnum.SELF_KNOWLEDGE) :
        return 'balance-list__dot--self'
      case(BalanceItemTypeEnum.TRAVELS) :
        return 'balance-list__dot--inspirations'
      case(BalanceItemTypeEnum.WORK_AND_CAREER) :
        return 'balance-list__dot--career'
      case(BalanceItemTypeEnum.FAMILY_AND_COMMUNICATION) :
        return 'balance-list__dot--family'
    }
    return '';
  };
}
