import { Component } from '@angular/core';
import {appStore} from '../../app.store';
import {inc} from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }

  dec() {
    appStore.dispatch({
      type: "DEC",
    });
  }

  inc() {
    appStore.dispatch(inc(2));
  }

  get counter() {
    return appStore.getState().counter;
  }
}
