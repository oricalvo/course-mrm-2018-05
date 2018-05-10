import {Component, Injector} from '@angular/core';

export class PrivateService {
  static count = 0;
  constructor() {
    if(PrivateService.count == 1) {
      throw new Error("PrivateService should be instantiated only once");
    }
    console.log(++PrivateService.count);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    PrivateService,
  ]
})
export class AppComponent {
  title = 'app';

  constructor(s: PrivateService, injector: Injector) {
    console.log("component injector", injector);
    //console.log(s);
  }
}
