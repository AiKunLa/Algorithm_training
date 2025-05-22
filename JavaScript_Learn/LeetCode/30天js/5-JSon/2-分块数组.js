var chunk = function (arr, size) {
  if (arr.length === 0 || size === 0) return [];
  let tempArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length < size) tempArr.push(arr[i]);
    if (tempArr.length === size || i === arr.length - 1)
      result.push(tempArr), (tempArr = []);
  }
  return result;
};

var chunk1 = function (arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index.index + size));
    index += size;
  }
  return chunked;
};

let arr = [1, 2, 3, 4, 5];
let size = 1;
console.log(chunk(arr, size)); // [[1, 2], [3, 4], [5]]
