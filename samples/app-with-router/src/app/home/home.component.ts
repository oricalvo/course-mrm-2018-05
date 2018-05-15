import { Component, OnInit } from '@angular/core';
import {createLogger} from '../common/logger';
import {Router} from '@angular/router';

const logger = createLogger("HomeComponent");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: string;
  contacts;

  constructor(private router: Router) {
    this.contacts = [
          {"id": 1, "name": "Ori"},
          {"id": 2, "name": "Roni"},
    ];
  }

  ngOnInit() {
    logger.log("ngOnInit");
  }

  ngOnDestroy() {
    logger.log("ngOnDestroy");
  }

  find() {
    console.log("filter", this.filter);
  }

  gotoDetails(contact) {
    this.router.navigate(["contact", contact.id]);
  }
}
