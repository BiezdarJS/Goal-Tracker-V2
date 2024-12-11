import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from '@gtCoreServices/api.service';
import { combineLatest, map, Observable } from 'rxjs';
import { IGoalCategoryCount } from 'src/app/main-content/dashboard/components/widgets/widget-balance-of-goals/interfaces/goal-category-count.interface';
/** Serwis przechowujący dane dla celów, tasków, itd. */
@Injectable()
export class DataStoreService {
  /** Serwis API */
  private apiService = inject(ApiService);
  /** Lista wszystkich celów - prywatne */
  private _goalsList: WritableSignal<any> = signal(null);
  /** Lista wszystkich celów - publiczne */
  public goalsList: Signal<any> = computed(() => this._goalsList());
  /** Lista wszystkich celów - publiczne */
  public goalsNumber: Signal<number> = computed(() => {
    if (this._goalsList()) {
      return Object.keys(this._goalsList()).length
    }
    return 0;
  });
  /** Lista wszystkich zadań(tasków) - prywatne */
  private _tasksList: WritableSignal<any> = signal(null);
  /** Lista wszystkich zadań(tasków)- publiczne */
  public tasksList: Signal<any> = computed(() => this._tasksList());
  /** Liczba wszystkich zadań(tasków) - publiczne */
  public tasksNumber: Signal<number> = computed(() => {
    if (this._tasksList()) {
      return Object.keys(this._tasksList()).length
    }
    return 0;
  });
  /** Liczba zadań w poszczególnych kategoriach celów - prywatne */
  private _goalCategoriesCounts: WritableSignal<IGoalCategoryCount[] | null> = signal(null);
  /** Liczba zadań w poszczególnych kategoriach celów - publiczne */
  public goalCategoriesCounts: Signal<IGoalCategoryCount[] | null> = computed(() => this._goalCategoriesCounts());

  constructor() {
    this.getAllGoals().subscribe((data:any) => {
      this._goalsList.set(data);
    });
    this.getAllTasks().subscribe((data:any) => {
      this._tasksList.set(data);
    });
    this.getGoalCategoriesTasksCounts().subscribe((data: IGoalCategoryCount[]) => {
      this._goalCategoriesCounts.set(data);
    });
  }

  /** Zapytanie do BE o wszystkie dostępne cele */
  private getAllGoals(): Observable<any> {
    return this.apiService.getData('goals')
      .pipe(
        map((data: any) => {
          return Object.keys(data).map((key: any) => {
            const goal = data[key];
            return {
              goalId: key,
              ...goal
            }
          })
        })
      );
  }

  /** Zapytanie do BE o wszystkie dostępne zadania (taski) */
  private getAllTasks(): Observable<any> {
    return this.apiService.getData('tasks')
    .pipe(
      map((data: any) => {
        return Object.keys(data).map((key: any) => {
          const task = data[key];
          return {
            taskId: key,
            ...task
          }
        })
      })
    );
  }

  /** Liczba zadań w poszczególnych kategoriach celów */
  public getGoalCategoriesTasksCounts(): Observable<IGoalCategoryCount[]> {
    return combineLatest([
      this.getAllTasks(),
      this.getAllGoals(),
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
  }
}
