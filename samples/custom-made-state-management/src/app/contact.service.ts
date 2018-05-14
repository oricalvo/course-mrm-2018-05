import {Inject, Injectable} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from './app.store';
import {delay} from './common/timer.helpers';

@Injectable()
export class ContactService {

  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) { }

  async reload(): Promise<void> {
    await delay(2500);

    this.appStore.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
    ];
  }
}
