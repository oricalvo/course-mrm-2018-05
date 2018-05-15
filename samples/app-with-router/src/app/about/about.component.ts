import { Component, OnInit } from '@angular/core';
import {createLogger} from '../common/logger';

const logger = createLogger("AboutComponent");

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    logger.log("ngOnInit");
  }

  ngOnDestroy() {
    logger.log("ngOnDestroy");
  }
}
