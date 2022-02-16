"use strict";

function foo(arr) {
  let newArr = [];
  function nestedArray(arr) {
    arr.forEach((el) => {
      if (typeof el == "object") {
        return nestedArray(el);
      } else {
        newArr.push(el);
      }
    });
    return newArr;
  }
  return nestedArray(arr);
}
console.log(foo([1, [3, 4, [1, 2]], 10]));
