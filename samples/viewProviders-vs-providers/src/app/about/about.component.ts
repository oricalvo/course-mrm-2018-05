import {Component, OnInit, Optional} from '@angular/core';
import {DialogService} from '../dialog.service';
import {DialogPrivateService} from '../dialog-private.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() dialogService: DialogService,
              dialogPrivate: DialogPrivateService) {
    console.log("dialogService", dialogService);
  }

  ngOnInit() {
  }

}
