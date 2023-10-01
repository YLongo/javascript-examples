{
    let f = v =>v

    // equals
    f = function (v) {
        return v;
    }

    let sum = (num1, num2) => num1 + num2;
    // equals
    sum = function (num1, num2) {
        return num1 + num2;
    }
}

console.log('\n由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错')
{
    // 报错
    // let getTemplate = id => {id: id, name: "temp"};

    let getTemplate = id => ({id: id, name: 'temp'});
    console.log(getTemplate())
}

console.log('\n虽然可以运行，但会得到错误的结果')
{
    let foo = () => {a: 1};
    console.log(foo());
}
