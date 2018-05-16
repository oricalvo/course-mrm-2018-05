const {Observable} = require("rxjs");
const {map, reduce, scan, flatMap} = require("rxjs/operators");

const stream = getStreamWhereEachItemIsASingleContact()
    .pipe(flatMap(contact => getContactDetails(contact)))
    .subscribe(contact => {
        console.log(contact.email);
    });

function getContactDetails(contact) {
    return new Observable(obs => {
        const extraContactDetails = {address: "TA", email: contact.name + "@gmail.com"};
        obs.next(extraContactDetails);
        obs.complete();
    });
}

// stream.subscribe(contact=> {
//     console.log(contact);
// });

// const stream = getAllContactsFromServer();
//
// stream.pipe(flatMap(contacts => contacts)).subscribe(contact => {
//     console.log(contact.id + ", " + contact.name);
// });

function getStreamWhereEachItemIsASingleContact() {
    return new Observable(obs => {
        obs.next({id:1, name: "ori"});
        obs.next({id:2, name: "roni"});
        obs.complete();
    });
}

function getAllContactsFromServer() {
    return new Observable(obs => {
        obs.next([
            {id:1, name: "ori"},
            {id:2, name: "roni"},
        ]);
    });
}

// // stream.map(x=>x*2).subscribe(v => {
// //     console.log(v);
// // });
//
// // stream.pipe(map(x=>x*2)).subscribe(v => {
// //     console.log(v);
// // });
//
// stream.pipe(scan(function(sum, num) {
//     return sum + num;
// }, 0)).subscribe(v => {
//     console.log(v);
// });
//
