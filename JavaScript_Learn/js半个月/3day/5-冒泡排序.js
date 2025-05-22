let PPSort = function(arr) {
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i ;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
let printArr = function(arr){
    arr.forEach(element => {
        process.stdout.write(element + " ")
    });
}
let arr = [8,6,9,2,5,8,1,5,6,3,4]
PPSort(arr)
printArr(arr)
