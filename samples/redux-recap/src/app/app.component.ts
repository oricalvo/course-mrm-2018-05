import { Component } from '@angular/core';
import {Contact} from '../app.state';
import {appStore} from '../../app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // contacts: Contact[];

  constructor() {
    // appStore.subscribe(() => {
    //   this.contacts = appStore.getState().contacts;
    // });

    //  Should not Do !!!
    //appStore.getState().contacts = [];
    // this.contacts.push({});
  }

  get contacts() {
    return appStore.getState().contacts;
  }
}
