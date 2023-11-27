import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    title: 'Forecast',
    loadComponent: () => import('../pages/dashboard/dashboard.component'),
  },
  {
    path: 'weather/LWX',
    title: 'Forecast Columbia',
    loadComponent: () => import('../pages/columbia/columbia.component'),
  },
  {
    path: 'weather/TOP',
    title: 'Forecast Kansas',
    loadComponent: () => import('../pages/kansas/kansas.component'),
  },
  {
      path: 'weather',
      redirectTo: 'weather',
      pathMatch: 'full'
  }
];
