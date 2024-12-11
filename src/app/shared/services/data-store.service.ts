import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from '@gtCoreServices/api.service';
import { combineLatest, map, Observable } from 'rxjs';
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

  constructor() {
    this.getAllGoals().subscribe((data:any) => {
      this._goalsList.set(data);
    });
    this.getAllTasks().subscribe((data:any) => {
      this._tasksList.set(data);
    });
  }

  /** Zapytanie do BE o wszystkie dostępne cele */
  public getAllGoals(): Observable<any> {
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
  public getAllTasks(): Observable<any> {
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
}
