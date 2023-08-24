const tools = require("./tools.js");
console.log(tools.add(4, 5));

const Hero = require("./hero.js");
const owl = new Hero("Owl");
owl.sayHello();

const bat = require("./batman");
bat.sayHello();