import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ContactService} from './contact.service';
import {createB, IContactService} from './models';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //{provide: ContactService, useValue: obj},
    //{provide: ContactService, useClass: A},
    {provide: IContactService, useFactory: createB, deps: []},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

interface A {
  g();
  run();
}

class A {
}

function A() {
}
