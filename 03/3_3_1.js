
console.log("Object literal");
// Object literal
let pointA = {
    x: 10,
    y: 10,
    printCoords: function() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}
pointA.printCoords();

console.log("Constructor function");
// Constructor function
function Point_Struct(x, y) {
    this.x = x;
    this.y = y;
    this.printCoords = function() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}

let pointB = new Point_Struct(20, 20);
pointB.printCoords();

console.log("Class");
// Class
class Point_Class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    printCoords() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}

let pointC = new Point_Class(30, 30);
pointC.printCoords();
pointC.x = 40;
pointC.y = 41;
pointC.printCoords();

console.log("add property to object");
pointC.z = 35;
pointC.printCoords = function() {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${this.z}`);
}
pointC.printCoords();

console.log("delete property from object");
delete pointC.z;
pointC.printCoords();