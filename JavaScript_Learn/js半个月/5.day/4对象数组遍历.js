let arr = [
    {name: '张三', age: 18},
    {name: '李四', age: 19},
    {name: '王五', age: 20} 
]

for(let i = 0;i<arr.length;i++){
    for(let key in arr[i]){
        console.log(key,arr[i][key])
    }
}
