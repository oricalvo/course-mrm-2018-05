import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

export const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact/:id",
    component: ContactDetailsComponent,
  },
];
