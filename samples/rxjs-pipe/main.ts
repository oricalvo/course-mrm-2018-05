import {Observable, from} from "rxjs";
// import "rxjs/operators/map";
import {map} from "rxjs/operators";

main();

function main() {
    // new Observable(observer => {
    //
    // });

    const obs: Observable<number> = from([1,2,3,4]);

    // obs.pipe(map(x=>x*2));

    // obs.map(x=>x*2);
}

// function getDataFromServer() {
//     return http.get("diudhidhud").do(x=> {
//         console.log(x);
//     });
// }
//
// class AppComponent {
//     onClick() {
//         const obs = appService.getDataFromServer();
//     }
// }
