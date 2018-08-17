import { Routes } from "@angular/router"
import { MatchingComponent } from './matching.component';
import { AuthGuard } from '../../guards/auth.guard';


export const routesMatching: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MatchingComponent,
    children: []
    // {
    //   path: '',
    //   component: MatchingComponent,
    //   pathMatch: 'full'
    // },
  }];
