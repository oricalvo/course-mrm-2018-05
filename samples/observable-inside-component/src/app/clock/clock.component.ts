import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  contact: any;

  constructor() {
    this.contact = {
      name: "XXX",
      tag: new Tag("Contact"),
    };
  }

  ngOnInit() {
    console.log("clock.ngOnInit");

    document.querySelector("body").addEventListener("click", () => {
      console.log("click", this.tag.name);
    });
  }

  ngOnDestroy() {
    console.log("clock.ngOnDestroy");
  }

}

class Tag {
  constructor(public name: string) {
  }
}
