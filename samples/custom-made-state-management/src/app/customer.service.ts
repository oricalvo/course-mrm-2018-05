import {Inject, Injectable} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from './app.store';
import {delay} from './common/timer.helpers';

@Injectable()
export class CustomerService {
  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) { }

  async reload(): Promise<void> {
    await delay(1500);
    this.appStore.customers = [
      {id:1, name: "Banana"},
      {id:2, name: "Apple"},
    ];
  }
}
