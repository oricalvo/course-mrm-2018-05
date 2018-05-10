import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';


import {AppComponent, PrivateService} from './app.component';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PrivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    console.log("module injector", injector);

    injector.get(PrivateService);
  }
}
