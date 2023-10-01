class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        let value = this.value;
        if (value < this.stop) {
            this.value++;
            return {done: false, value: value};
        }
        return {done: true, value: undefined};
    }

}

function range(start, stop) {
    return new RangeIterator(start, stop);
}

for (let value of range(0, 3)) {
    console.log(value);
}