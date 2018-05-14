import { Component } from '@angular/core';
import {ClockModel} from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clockModel: ClockModel = new ClockModel({
    format: "HH:mm:ss"
  });

  changeFormat() {
    //this.clockModel.format = "ss";

    // this.clockModel = {
    //   ... this.clockModel,
    //   format: "ss",
    // }

    this.clockModel.updateFormat("ss");
  }
}
