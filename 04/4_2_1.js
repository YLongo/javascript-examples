
function Hero(name) {
    this.name = name;
    console.log("Hero constructor ... ...", this.name);
}

let hero_1 = new Hero("hero_1");
let hero_2 = new Hero("hero_2");

console.log(hero_1.name);
console.log(Object.getPrototypeOf(hero_1));

console.log(hero_2.name);
console.log(Object.getPrototypeOf(hero_2));

console.log("add sayHello() to prototype");
Hero.prototype.sayHello = function() {
    console.log("Hello, I am " + this.name);
}

hero_1.sayHello();
hero_2.sayHello();

console.log("add sayHello() to hero_1");
hero_1.sayHello = function() {
    console.log("Hi, I am " + this.name);
}
hero_1.sayHello();
hero_2.sayHello();

console.log("delete sayHello() from hero_1");
delete hero_1.sayHello;
hero_1.sayHello();
hero_2.sayHello();

console.log(hero_1.toString());
console.log(hero_1.valueOf());
console.log(hero_1.toLocaleString());


console.log("AI_Hello ... ...")
function AI_Hello(name) {
    this.name = name;
}

AI_Hello.prototype = new Hero();

let machine = new AI_Hello("machine");

machine.sayHello();
console.log(machine.toString());
console.log(machine.valueOf());
console.log(machine.toLocaleString());