import { Routes } from '@angular/router';
import { GoalTrackerComponent } from './core-layout/_goal-tracker/goal-tracker.component';

export const routes: Routes = [
  // Ścieżka dla głównego widoku aplikacji z wszystkimi elementami dashboarda
  {
    path: '',
    component: GoalTrackerComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./lazy-loaded/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'my-goals',
        loadComponent: () => import('./lazy-loaded/goals/goals.component').then(m => m.GoalsComponent)
      },
      {
        path: 'calendar',
        loadComponent: () => import('./lazy-loaded/calendar/calendar.component').then(m => m.CalendarComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./lazy-loaded/settings/settings.component').then(m => m.SettingsComponent)
      },
    ]
  }
];
