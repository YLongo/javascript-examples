class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    printCoords() {
        console.log('x:', this._x, 'y:', this._y);
    }

    updateCoords(x, y) {
        if (x < 0 || y < 0) {
            console.log('Coordinates must be non-negative numbers');
            return false;
        }
        this._x = x;
        this._y = y;
    }
};

class colorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this._color = color;
    }
    
    updateColor(color) {
        this._color = color;
    }

    printCoords() {
        super.printCoords();
        console.log('color:', this._color);
    }

    testSuper() {
        Point.prototype.temp = 10;
        console.log(super.temp);
    }
}

console.log(typeof(Point))
console.log(typeof(colorPoint))

let proto = Object.getPrototypeOf(colorPoint);
console.log(proto === Point);

const p = new colorPoint(1, 2, 'red');
p.testSuper();