import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import {DialogService} from './dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogComponent
  ],
  entryComponents: [
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
