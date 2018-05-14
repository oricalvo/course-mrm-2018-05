import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import {APP_STORE_PROVIDER} from './app.store';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {AppService} from './app.service';
import { ProgressComponent } from './progress/progress.component';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import {ContactService} from './contact.service';
import {CustomerService} from './customer.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
    ToolbarComponent,
    ProgressComponent,
    CustomerIndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    APP_STORE_PROVIDER,
    AppService,
    ContactService,
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
