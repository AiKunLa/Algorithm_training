let secondNumber = Number(prompt("请输入秒数"));
function count(totalSecond) {
  let hour = parseInt(totalSecond / 3600);
  let minute = parseInt((totalSecond - hour * 3600) / 60);
  let second = parseInt(totalSecond % 60);
  return `${hour}时${minute}分${second}秒`;
}
alert(count(secondNumber));
