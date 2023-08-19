
class TelephoneExchange {
    constructor(names) {
        this.mp = new Map();
        this.firstNumber = 1001;
    

        for (let name of names) {
            this.firstNumber++;
            this.mp.set(this.firstNumber, name);
        }
    }

    add(name) {
        this.firstNumber++;
        this.mp.set(this.firstNumber, name);
    }

    delete(number) {
        this.mp.delete(number);
    }

    update(number, name) {
        if (this.mp.has(number)) {
            this.mp.set(number, name);
        } else {
            console.log("没有找到该用户");
        }
    }

    call(number) {
        if (this.mp.has(number)) {
            console.log(this.mp.get(number));
        } else {
            console.log("没有找到该用户");
        }
    }

    callAll() {
        for (let [number, name] of this.mp) {
            this.call(number);
        }
    }
}

let names = ["张三", "李四", "王五", "赵六"];
let telephoneExchange = new TelephoneExchange(names);

console.log("callAll");
telephoneExchange.callAll();

telephoneExchange.add("田七");
console.log("after add, callAll");
telephoneExchange.callAll();

telephoneExchange.delete(1003);
console.log("after delete, callAll");
telephoneExchange.callAll();

telephoneExchange.update(1002, "李四2");
console.log("after update, callAll");
telephoneExchange.callAll();

