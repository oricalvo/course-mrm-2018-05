import { Component, Inject } from '@angular/core';
import {APP_STORE_TOKEN, AppState} from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers
  // viewProviders: [],
})
export class AppComponent {
  constructor() {
  }

  // constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) {
  // }

  // get contacts() {
  //   return this.appStore.contacts;
  // }
}
