class MyClass {

    constructor(count) {
        this._count = count;
    }

    get prop() {
        return this._count;
    }

    set prop(value) {
        console.log('setter:', value);
        this._count = value;
    }
}

let inst = new MyClass();

inst.prop = 123;
console.log(inst.prop);