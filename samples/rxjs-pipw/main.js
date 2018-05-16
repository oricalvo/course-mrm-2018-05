const {Observable} = require("rxjs/Observable");
const {map, reduce, scan} = require("rxjs/operators");
// require("rxjs/operators/map");

const stream = new Observable(obs => {
    let num = 1;
    let intervalId = setInterval(function() {
        obs.next(num++);

        if(num == 5) {
            clearInterval(intervalId);
            obs.complete();
        }
    }, 1000);
});

// stream.map(x=>x*2).subscribe(v => {
//     console.log(v);
// });

// stream.pipe(map(x=>x*2)).subscribe(v => {
//     console.log(v);
// });

stream.pipe(scan(function(sum, num) {
    return sum + num;
    }, 0)).subscribe(v => {
    console.log(v);
});

