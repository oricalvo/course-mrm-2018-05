"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
main();
function main() {
    // const p = new Promise((resolve,j)=> {
    //     console.log("resolved");
    //     resolve(42);
    // });
    //
    // console.log("BEFORE");
    // p.then(res => {
    //     console.log("res", res);
    // });
    // console.log("AFTER");
    var obs = new rxjs_1.Observable(function (observer) {
        console.log("started");
        setTimeout(function () {
            observer.complete();
            observer.next(1);
            observer.next(2);
            observer.next(3);
        }, 1000);
    });
    console.log("BEFORE");
    obs.subscribe(function (value) {
        console.log(value);
    }, function (err) {
        console.log("error");
    }, function () {
        console.log("complete");
    });
    console.log("AFTER");
}
//# sourceMappingURL=main.js.map