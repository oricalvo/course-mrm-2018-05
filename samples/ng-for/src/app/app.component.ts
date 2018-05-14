import { Component } from '@angular/core';
import {Contact} from './contact-details/contact-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  data: Contact[];

  constructor() {
    this.data = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];
  }

  refresh() {
    // this.contacts = [
    //   this.data[0],
    //   this.data[1],
    // ];
    if (!this.contacts) {
      this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
      ];
    }
    else {
      this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"},
      ];
    }
  }

  change() {
    //this.contacts[0].name = "XXX";

    this.contacts[0] = {id:3, name: "Roni"};
  }

  trackByFn(index, item) {
    return index;
  }
}
