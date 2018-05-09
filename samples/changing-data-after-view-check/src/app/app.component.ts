import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    //console.log(++this.counter);
  }

  inc() {
    console.log(++this.counter);
  }

  detach() {
    this.cdr.detach();
  }

  attach() {
    this.cdr.reattach();
  }

  detectChanges() {
    this.cdr.markForCheck();
    this.cdr.markForCheck();
    this.cdr.markForCheck();
  }
}
