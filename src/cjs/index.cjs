
const {
  // 由于在当前文件中有一个同名的函数, 对导出的变量进行重命名
  foo: foo_c,
  bar
} = require('./module.cjs')

foo_c()
console.log(bar)

function foo() {
  console.log("hello index foo")
}

foo()