import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './lib.routes';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes)],
  declarations: [CrudComponent],
})
export class LoginModule {}
