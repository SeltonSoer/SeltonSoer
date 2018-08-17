import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchingComponent } from './matching.component';
import { RouterModule } from '@angular/router';
import { routesMatching } from './matching.route';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routesMatching),
  ],
  declarations:[
    MatchingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class MatchingModule { }
