// module.exports = "hello commonJS"
// module.exports = function foo() {
//   console.log("hello commonJS function")
// }

function foo() {
  console.log("hello commonJS function")
}

const bar = "hello commonJS bar"

module.exports = {
  foo, bar
}
