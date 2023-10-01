class Foo {
    #value = 42;
    static getValue(foo) {
        return foo.#value;
    }

    set value(value) {
        this.#value = value;
    }
}

let foo = new Foo();
foo.value = 32;
console.log(Foo.getValue(foo));