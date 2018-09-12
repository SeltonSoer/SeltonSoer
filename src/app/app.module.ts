import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { MatchingService } from './services/matching.service';
import { RestService } from './services/rest.service';
import { Checks, ProductC } from './models/matching.model';
import { MaterialModule } from './modules/material/material.module';
import { appRoutes } from './routers.register';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { MessageService } from './services/message.service';
import { ErrorWinComponent } from './modules/shared/components/error-win/error-win.component';
import { FinishMatchingComponent } from './modules/shared/components/finish-matching/finish-matching.component';
import { ModalWinComponent } from './modules/shared/components/modal-win/modal-win.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorWinComponent,
    FinishMatchingComponent,
    ModalWinComponent
  ],

  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    BrowserAnimationsModule,
  ],

  entryComponents: [
    ErrorWinComponent,
    FinishMatchingComponent,
    ModalWinComponent
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
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
