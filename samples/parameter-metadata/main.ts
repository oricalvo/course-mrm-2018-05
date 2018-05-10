export class A {
}

@Blabla()
class B {
    constructor(xxx: A) {
    }
}

function Blabla() {
    return function(target) {
    }
}

create([
    A,
    B,
]);

function create(providers) {
}