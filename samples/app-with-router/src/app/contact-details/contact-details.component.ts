import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {createLogger} from '../common/logger';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AppService} from '../app.service';
import {appStore, Contact} from '../../app.store';

const logger = createLogger("ContactDetailsComponent");

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private appService: AppService) {
    console.log("params", activatedRoute.params);

    activatedRoute.params.subscribe(params => {
      appService.setActiveContact(params.id);
    });
  }

  ngOnInit() {
    logger.log("ngOnInit");
  }

  next() {
    this.router.navigate(["contact", +this.activatedRoute.snapshot.params.id + 1]);
  }

  prev() {
    this.router.navigate(["contact", +this.activatedRoute.snapshot.params.id - 1]);
  }

  get contact(): Contact {
    return appStore.activeContact;
  }
}
