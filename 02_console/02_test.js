
function printArguments() {
    for (let i = 0; i < arguments.length; ++i) {
        console.log(arguments[i]);
    }
}

printArguments('张三', '李四', '王五', '赵六');
printArguments(1, '123', true, 1.23, null, undefined, [1, 2, 3], { name: '张三', age: 18 })

function add_1(x, y) {
    return x + y;
}

const add_2 = function (x, y) {
    return x + y;
}

const add_3 = (x, y) => {
    return x + y;
}

const add_4 = new Function('x, y', 'return x + y;');

console.log(add_1(4, 7));
console.log(add_2(4, 7));
console.log(add_3(4, 7));
console.log(add_4(4, 7));

