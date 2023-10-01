console.log('私有方法');

class Foo {
    #a;
    #b;

    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }

    #sum() {
        return this.#a + this.#b;
    }

    printSum() {
        console.log(this.#sum());
    }
}

let foo = new Foo(1, 2);
foo.printSum();