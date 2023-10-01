console.log('私有属性')

class IncreasingCounter {
    #count = 10;

    get value() {
        console.log('get value');
        return this.#count;
    }

    increment() {
        this.#count++;
    }
}

let counter = new IncreasingCounter();
console.log(counter.value);