// import {foo, bar} from "./module.mjs"
// import * as m from "./module.mjs"

// import {
//   // 导入时重命名
//   foo as foo2,
//   bar,
// } from "./module.mjs"
//
// foo2()
// console.log(bar)

import md5 from "md5"

const before = "hello world"
const after = md5(before)
console.log({before, after})