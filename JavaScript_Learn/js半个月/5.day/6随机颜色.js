function getRandomCollor(flag){
    if(flag|| flag === undefined){
        // 生成16进制的颜色值
        return `#${Math.floor(Math.random()*Math.pow(255,3)).toString(16)}` // 16777215是16进制的ffffff，即255的三次方
    }else{
        return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
}
console.log(getRandomCollor(true)) // #4ce1a4
console.log(getRandomCollor(false)) // rgb(140,69,39)
