"use strict";
var appStore = {
    counter: 0,
};
var SealedAppStore = /** @class */ (function () {
    function SealedAppStore(internal) {
        this.internal = internal;
    }
    Object.defineProperty(SealedAppStore.prototype, "counter", {
        get: function () {
            return this.internal.counter;
        },
        enumerable: true,
        configurable: true
    });
    return SealedAppStore;
}());
var x = new SealedAppStore(appStore);
//x.counter = 10;
var y = x;
console.log(y);
y.counter = 100;
console.log(y.counter);
// interface A {
//     counter: number,
// }
// class A {
//     counter: number;
//
//     toString() {
//         return "XXX";
//     }
// }
// const a: A = {
//     counter: 10,
// };
//console.log(a.toString());
//console.log(a instanceof A);
//# sourceMappingURL=main.js.map