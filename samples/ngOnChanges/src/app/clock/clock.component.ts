import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() model: ClockModel;
  time: Date;
  // formatDisplayText: string;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
  }

  // ngOnChanges() {
  //   console.log("clock.ngOnChanges");
  //
  // }
}

export interface IClockModel {
  format: string;
}

export class ClockModel implements IClockModel{
  format: string;
  formatDisplayText: string;

  constructor(data: IClockModel) {
    Object.assign(this, data);

    this.calc();
  }

  private calc() {
    this.formatDisplayText = "X" + this.format + "X";
  }

  updateFormat(format: string) {
    this.format = format;

    this.calc();
  }
}
