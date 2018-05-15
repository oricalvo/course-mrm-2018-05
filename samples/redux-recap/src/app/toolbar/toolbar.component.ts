import { Component, OnInit } from '@angular/core';
import {appStore} from '../../../app.store';
import {reload} from '../contact.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reload() {
    appStore.dispatch(reload());
  }
}
