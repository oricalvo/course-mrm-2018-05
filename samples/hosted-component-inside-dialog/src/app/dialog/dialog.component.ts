import { Component, OnInit } from '@angular/core';

export class DialogService {
  visible: boolean = true;

  close() {
    this.visible = false;
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [DialogService]
})
export class DialogComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  get visible() {
    return this.dialogService.visible;
  }
}
