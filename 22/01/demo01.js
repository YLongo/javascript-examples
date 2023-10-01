{
    console.log('生成实例对象的传统方法是通过构造函数');
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    let p = new Point(1, 2);
    console.log(p.toString());
}

{
    console.log('\n用 ES6 的class改写');

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }

    let p = new Point(1, 2);
    console.log(p.toString());

    console.log(typeof Point);
    console.log(Point === Point.prototype.constructor);
}