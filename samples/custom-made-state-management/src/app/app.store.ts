import {InjectionToken} from '@angular/core';

export interface AppState {
  contacts: Contact[];
  customers: Customer[];
  loading: boolean;
}

export interface Contact {
  id: number;
  name: string;
}

export interface Customer {
  id: number;
  name: string;
}

const appStore: AppState = {
  contacts: null,
  customers: null,
  loading: false,
};

export const APP_STORE_TOKEN = new InjectionToken("APP_STORE_TOKEN");
export const APP_STORE_PROVIDER = {provide: APP_STORE_TOKEN, useValue: appStore};
