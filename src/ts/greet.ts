// 函数重载
function greet(name: string): string
function greet(name: string[]): string[]
function greet(name: string | string[]) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
}

// const greeting = greet('petter')
// console.log(greeting)
//
// const greetings = greet(['Petter', 'Tom', 'Jimmy'])
// console.log(greetings)

export default greet