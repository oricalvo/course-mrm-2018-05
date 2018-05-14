import {Component, Inject, OnInit} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from '../app.store';
import {AppService} from '../app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  reload() {
    this.appService.reload();
  }
}
