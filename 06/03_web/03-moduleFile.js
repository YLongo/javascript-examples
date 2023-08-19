// 用法1：直接在声明标识符时导出
export const value = 10;
export function add_10(num) {
  return num + 10;
}

// 用法2：先声明标识符
const str = 'owlman';
function multiply_10(num) {
  return num *10;
}
// 先编写一些其他代码，最后再来指定要导出的标识符
export{ str, multiply_10 };