import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {routes} from './routes';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {AppService} from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
