import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {APP_STORE_PROVIDER} from './app.store';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    APP_STORE_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
