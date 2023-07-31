import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('@escola-ti/login').then((m) => m.LoginModule),
  },
];
