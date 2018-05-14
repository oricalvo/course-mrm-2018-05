import {Component, Inject, OnInit} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from '../app.store';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.css']
})
export class ContactIndexComponent {
  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) {
  }

  get contacts() {
    return this.appStore.contacts;
  }
}
