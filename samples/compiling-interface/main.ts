const appStore = {
    counter: 0,
    nums: [],
}

class SealedAppStore {
    constructor(private internal) {
    }

    get counter() {
        return this.internal.counter;
    }

    get nums(): ReadOnlyArray<number> {
        return new ReadOnlyArray(this.internal.nums);
    }
}

class ReadOnlyArray<T> {
    constructor(private raw: T[]) {
    }
}

const x = new SealedAppStore(appStore);

for(const num of x.nums) {
}