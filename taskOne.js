/*
TaskOne : Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
*/

const numberArray = [167, 190, 120, 165, 137];
function lowestNumber(numberArray) {
  let min = numberArray[0];
  for (let number of numberArray) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}

const result = lowestNumber(numberArray);
console.log("'Lowest Number' : ", result);
