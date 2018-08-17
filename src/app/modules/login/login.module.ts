import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { RouterModule } from "@angular/router"
import { routesLogin } from './login.route';
import { MaterialModule } from "../material/material.module"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routesLogin)
  ],
  exports: [
    RouterModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
