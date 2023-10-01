console.log('遍历 Set 结构和 Map 结构。值得注意的地方有两个，首先，遍历的顺序是按照各个成员被添加进数据结构的顺序。其次，Set 结构遍历时，返回的是一个值，而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值')
{
    let engines = new Set(['gecko', 'trident', 'webkit', 'webkit']);
    for (let e of engines) {
        console.log(e);
    }

    let map = new Map();
    map.set('edition', 6);
    map.set('committe', 'tc39');
    map.set('standard', 'ecma-262');
    for (let [name, value] of map) {
        console.log(name + ':' + value);
    }
}

console.log('\nMap 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值')
{
    let map = new Map().set('a', 1).set('b', 2);
    for (let pair of map) {
        console.log(pair)
    }

    for (let [key, value] of map) {
        console.log(key + ' : ' + value);
    }
}
