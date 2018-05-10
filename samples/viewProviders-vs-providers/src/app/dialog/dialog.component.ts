import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog.service';
import {DialogPrivateService} from '../dialog-private.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [DialogService],
  viewProviders: [DialogPrivateService],
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
