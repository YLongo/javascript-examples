console.log('只使用了对象的解构赋值默认值，没有使用函数参数的默认值')
{
    function foo({x, y = 5}) {
        console.log(x, y);
    }

    foo({});
    foo({x: 1});
    foo({x: 1, y: 2});
    // TypeError: Cannot destructure property 'x' of 'undefined' as it is undefined.
    // foo();
}

console.log('\n通过提供函数参数的默认值，就可以避免这种情况。');
{
    function foo({x, y = 5} = {}) {
        console.log(x, y);
    }

    foo();
}

console.log('\n解构赋值默认值的例子。');
{
    function fetch(url, {body = '', method = 'GET', headers = {}}) {
        console.log('body=', body, 'method=', method, 'headers=', headers);
    }

    fetch('http://example.com', {});

    // 报错，虽然有参数有默认值，但是对象没有给默认值
    // fetch('http://example.com')
}

console.log('\n如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值');
{
    function fetch(url, {body = '', method = 'GET', headers = {}} = {}) {
        console.log('body=', body, 'method=', method, 'headers=', headers);
    }

    fetch('http://example.com');
}

console.log('\n函数参数的默认值生效以后，参数解构赋值依然会进行')
{
    function f({a, b = 'world'} = {a: 'hello'}) {
        console.log(b);
    }

    f();
}