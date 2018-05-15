import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  change() {
    // window.history.pushState({}, null, "xxx");

    // window.location.assign("yyy");
  }
}
