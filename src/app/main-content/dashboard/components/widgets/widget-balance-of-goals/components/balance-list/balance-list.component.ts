import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';
import { DataStoreService } from '@gtSharedServices/data-store.service';
import { IGoalCategoryCount } from '../../interfaces/goal-category-count.interface';
import { KeyValuePipe, NgClass } from '@angular/common';
import { BalanceItemTypeEnum } from '../../enums/balance-item-types.enum';
/** Komponent listy wewnątrz BalanceOfGoals */
@Component({
  selector: 'gt-balance-list',
  standalone: true,
  imports: [NgClass, KeyValuePipe],
  providers: [DataStoreService],
  templateUrl: './balance-list.component.html',
  styleUrl: './balance-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceListComponent {
  /** Liczba zadań w poszczególnych kategoriach */
  public goalCategoriesCounts: Signal<IGoalCategoryCount[] | null> = computed(() => this.dataStoreService.goalCategoriesCounts());

  constructor(
    private dataStoreService: DataStoreService
  ) {}

  /** Ustawia klasę dla danego Balance Item */
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
