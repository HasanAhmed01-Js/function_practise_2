/*
Your task is to calculate the total budget required to buy electronics :
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(laptopQnty, tabletQnty, mobileQnty) {
  totalLaptopCost = laptop * laptopQnty;
  totalTabletCost = tablet * tabletQnty;
  totalMobileCost = mobile * mobileQnty;

  totalMoney = totalLaptopCost + totalTabletCost + totalMobileCost;
  return totalMoney;
}

const result = calculateElectronicsBudget(2, 2, 2);
console.log("'Total Money Required' : ", result);
