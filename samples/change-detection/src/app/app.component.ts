import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  counter = 0;

  constructor(private ngZone: NgZone) {
    this.contacts = [];
    for(let i=1; i<=10000; i++) {
      this.contacts.push({
        id: i,
        name: "XXX" + i
      });
    }
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      document.querySelector(".map").addEventListener("mousemove", () => {
        // console.log("mousemove");

        setTimeout(()=> {
          this.ngZone.runGuarded(()=> {
            console.log("timeout", ++this.counter);
          });
        }, 1000);
      });
    });
  }

  run() {
    // const before = performance.now();
    // while(true) {
    //   const now = performance.now();
    //   if(now-before > 2500) {
    //     break;
    //   }
    // }
  }
}

interface Contact {
  id: number;
  name: string;
}

before
setTimeout(function() {
  after
}, 0);
