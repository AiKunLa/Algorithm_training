/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 创建哈希表
    // 遍历字符串数组，对于每个字符串，将其转为字符数组并排序再转为字符串，
    // 并将该字符串作为键，原字符串作为值，存入数组
    const myMap = new Map();
    strs.forEach(str => {
        let key = str.split('').sort().join('');
        if(myMap.has(key)) {
            myMap.get(key).push(str);   
        }else {
            myMap.set(key, [str]);
        }
    })
    return [...myMap.values()]; // 将Map对象的值转换为数组并返回

};