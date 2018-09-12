import { Routes } from "@angular/router"
import { AuthGuard } from '../../guards/auth.guard';
import { ProductComponent } from './product.component';


export const routesProduct: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ProductComponent,
    children: []
  }];
