import { Routes } from "@angular/router"
import { LoginComponent } from './login.component';

export const routesLogin: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: []
  }];
