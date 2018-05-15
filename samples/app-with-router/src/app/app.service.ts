import { Injectable } from '@angular/core';
import {appStore} from '../app.store';

@Injectable()
export class AppService {
  constructor() { }

  setActiveContact(id: number) {
    appStore.activeContact = appStore.contacts.find(c => c.id == id);
  }
}
