

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
 newArr.push([...arr]);
    num--;
  }
  return newArr;
}
