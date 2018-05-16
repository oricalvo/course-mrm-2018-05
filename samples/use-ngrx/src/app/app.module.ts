import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from '../app.store';
import { CounterComponent } from './counter/counter.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from './counter.effects';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }, {
      initialState: {
        counter: 0,
      }
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    const tick = appRef.tick;
    appRef.tick = function() {
      console.log("TICK");

      return tick.apply(this, arguments);
    }
  }
}
