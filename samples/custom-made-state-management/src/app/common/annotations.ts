import {AppService} from '../app.service';
import {ApplicationRef, Injectable} from '@angular/core';

let appRef: ApplicationRef;

@Injectable()
export class Profiler {
  constructor(_appRef: ApplicationRef) {
    appRef = _appRef;
  }
}

export function Activity() {
  return function(prototype, methodName) {

    const originalMethod = prototype[methodName];
    prototype[methodName] = function() {
      const before = performance.now();

      console.log("Activity BEGIN", methodName);

      const retVal = originalMethod.apply(this, arguments);
      if(retVal && retVal.then) {
        retVal.then(function() {
          const after = performance.now();
          console.log("Activity END", methodName + ", " + (after-before) + " ms");
          appRef.tick();
        });
      }
      else {
        const after = performance.now();
        console.log("Activity END", methodName + ", " + (after-before) + " ms");
      }

      appRef.tick();

      return retVal;
    }

    return prototype;

    // setTimeout(function() {
    //   console.log("activity", target == AppService.prototype, method);
    // }, 1000);
  }
}
