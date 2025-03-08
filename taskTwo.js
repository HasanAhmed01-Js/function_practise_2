/*
Find the friend with the smallest name.
const nameArray = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const nameArray = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallestName(nameArray) {
  let min = nameArray[0].length; //5
  let smallName;
  for (let name of nameArray) {
    if (min > name.length) {
      min = name.length;
      smallName = name;
    }
  }
  return smallName;
}

const result = smallestName(nameArray);
console.log("'Smallest Name' : ", result);
