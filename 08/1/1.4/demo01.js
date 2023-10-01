console.log('指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数')
{
    console.log((function (a) {}).length);

    console.log((function (a = 5) {}).length);

    console.log((function (a, b, c = 5) {}).length);
}


console.log('\n如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了')
{
    console.log((function (a = 0, b, c) {}).length);

    console.log((function (a, b = 1, c) {}).length);
}