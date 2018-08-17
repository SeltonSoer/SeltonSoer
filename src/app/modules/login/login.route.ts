import { Routes } from "@angular/router"
import { LoginComponent } from './login.component';

export const routesLogin: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LoginComponent,
    children: []
    // {
    //   path: '',
    //   component: MatchingComponent,
    //   pathMatch: 'full'
    // },
  }];
