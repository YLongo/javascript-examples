function telephoneExchange(number) {
    switch (number) {
        case 1001:
            console.log("张三");
            break;
        case 1002:
            console.log("李四");
            break;
        case 1003:
            console.log("王五");
            break;
        case 1004:
            console.log("赵六");
            break;
        default:
            console.log("没有找到该用户");
            break;
    }
}

function testTelephoneExchange(callback) {
    for (let number = 1001; number < 1006; ++number) {
        callback(number)
    }
}

testTelephoneExchange(telephoneExchange);

testTelephoneExchange(number => {
    if (number == 1001) {
        console.log("张三");
    } else if (number == 1002) {
        console.log("李四");
    } else {
        console.log("没有找到该用户");
    }
});