import { Route } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

export const loginRoutes: Route[] = [
  { path: 'crud', pathMatch: 'prefix', component: CrudComponent },
];
