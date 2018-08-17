import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";
import { MatchingService } from './services/matching.service';
import { RestService } from './services/rest.service';
import {Checks, ProductC} from './models/matching.model';
import { MaterialModule } from './modules/material/material.module';
import { appRoutes } from './routers.register';
import { LoginComponent } from './modules/login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ModalWinComponent } from './modules/shared/components/modal-win/modal-win.component';
import { MessageService } from './services/message.service';
import { ResultWinComponent } from './modules/shared/components/result-win/result-win.component';
import { MatchingProductComponent } from './modules/shared/components/matching-product/matching-product.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ModalWinComponent,
    ResultWinComponent,
    MatchingProductComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    BrowserAnimationsModule,
  ],

  entryComponents: [
    ModalWinComponent,
    ResultWinComponent,
    MatchingProductComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuard,
    RestService,
    MatchingService,
    Checks,
    ProductC,
    LoginService,
    MessageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
