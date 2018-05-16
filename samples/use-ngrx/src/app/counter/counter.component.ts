import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../app.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select("counter");
  }

  dec() {
    this.store.dispatch({ type: "DEC" });
  }

  inc() {
    console.log("BEFORE");
    this.store.dispatch({ type: "INC" });
    console.log("AFTER");
  }

  test() {
    // console.log("Counter.changeDetection");

    return "test";
  }
}
