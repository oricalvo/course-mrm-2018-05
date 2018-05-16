import {Observable} from "rxjs";

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

    const events = getFileSystemEventStream();

    const subscription = events.subscribe(function(event) {
    });

    subscription.unsubscribe();

    // const obs = new Observable(observer => {
    //     const xhr = new XMLHttpRequest();
    //
    //     xhr.addEventListener("load", function(data) {
    //         observer.next(data);
    //     })
    //
    //     xhr.send();
    // });

    // const obs = new Observable(observer => {
    //     let counter = 1;
    //     setInterval(function() {
    //         observer.next(counter++);
    //     }, 1000);
    // });
    //
    // obs.subscribe(value => {
    //     console.log(value);
    // }, err => {
    //     console.log("error");
    // }, ()=> {
    //     console.log("complete");
    // });
}

function getFileSystemEventStream(): Observable<any> {
    return null;
}


