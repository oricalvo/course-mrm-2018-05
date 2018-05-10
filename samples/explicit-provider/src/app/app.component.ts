import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import {IContactService} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(contactService: IContactService) {
    console.log(contactService);
  }
}
