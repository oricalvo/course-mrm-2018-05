import {Component, Inject, OnInit} from '@angular/core';
import {APP_STORE_TOKEN, AppState} from '../app.store';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(@Inject(APP_STORE_TOKEN) private appStore: AppState) { }

  ngOnInit() {
  }

  get loading() {
    return this.appStore.loading;
  }
}
