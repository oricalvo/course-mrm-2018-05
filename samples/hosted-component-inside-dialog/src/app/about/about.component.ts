import {Component, OnInit, Optional} from '@angular/core';
import {DialogService} from '../dialog/dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() private dialogService: DialogService) {
    console.log("dialogService", dialogService);
  }

  ngOnInit() {
  }

  get showCloseButton() {
    return this.dialogService != null;
  }

  close() {
    this.dialogService.close();
  }
}
