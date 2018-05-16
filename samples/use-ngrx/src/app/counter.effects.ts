import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, flatMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {
    this.actions$.subscribe(x => {
      console.log("Effect", x);
    });
  }

  @Effect() inc = this.actions$.pipe(
    ofType('INC'),
    flatMap(action => sendIncRequestToServer()),
    tap(r => {console.log("Response from server", r);}),
    map(response => ({type: "DEC"}))
  );
}

function sendIncRequestToServer() {
  return new Observable(obs => {
    setTimeout(function() {
      obs.next("ok");
      obs.complete();
    }, 2500);
  });
}
