import {Inject, Injectable} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from './app.store';
import {ContactService} from './contact.service';
import {CustomerService} from './customer.service';
import {Activity} from './common/annotations';

@Injectable()
export class AppService {
  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState,
              private contactService: ContactService,
              private customerService: CustomerService) {

  }

  @Activity()
  async reload() {
    this.appStore.loading = true;

    await Promise.all([
      this.contactService.reload(),
      this.customerService.reload()
    ]);

    this.appStore.loading = false;
  }
}
