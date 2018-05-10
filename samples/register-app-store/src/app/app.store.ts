import {InjectionToken} from '@angular/core';

// export interface AppState {
//   contacts: Contact[];
// }

export abstract class AppState {
  abstract get contacts(): Contact[];
}

export interface Contact {
  id: number;
  name: string;
}

const appStore: AppState = {
  contacts: [
    {id:1, name: "Ori"},
  ],
};

appStore.contacts = [];

//export const APP_STORE_TOKEN = new InjectionToken<AppState>("APP_STORE_TOKEN");
//export const APP_STORE_PROVIDER = {provide: APP_STORE_TOKEN, useValue: appStore};

export const APP_STORE_PROVIDER = {provide: AppState, useValue: appStore};
