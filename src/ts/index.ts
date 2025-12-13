function getFirstWord(msg: string) {
    console.log(msg.split(' ')[0])
}

getFirstWord('Hello World')

// 声明一个接口(定义对象的类型), 定义一些属性
interface UserItem {
    name: string
    // 可选属性
    age?: number
    enjoyFoods: string[]
    friendList: UserItem[]
}

// 子类继承
interface Admin extends UserItem {
    permissionLevel: number
}

// 子类继承, 删除一些不必要的属性
interface Admin1 extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
    permissionLevel: number
}

const petter: UserItem = {
    name: "petter",
    age: 18,
    enjoyFoods: ['rice', 'noodle', 'pizza'],
    friendList: [
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
}

const admin: Admin = {
    name: 'Petter',
    age: 18,
    enjoyFoods: ['rice', 'noodle', 'pizza'],
    friendList: [
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
    permissionLevel: 1,
}

// 声明一个类
class UserBase {
    name: string

    constructor(userName: string) {
        this.name = userName
    }
}

// 继承一个类
class User extends UserBase {
    getName() {
        console.log(this.name)
    }

}

const petter2: User = new User("petter")
petter2.getName()

// 接口继承的类如果有方法存在，接口在继承的时候也要相应的实现, 但是可以通过Omit忽略
interface UserI extends Omit<User, "getName"> {
    age: number
}

const petter3: UserI = {
    name: 'Petter',
    age: 18,
}

import md5 from 'md5'
console.log(md5('Hello World'))

import greet from "./greet";

const greeting = greet("petter")
console.log(greeting)

const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)



