import {Component, Inject, OnInit} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from '../app.store';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) { }

  ngOnInit() {
  }

  get customers() {
    return this.appStore.customers;
  }
}
