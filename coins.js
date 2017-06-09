/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (givenTotal) {
  // Initialize a JavaScript object to hold the coins
  let currentTotal = givenTotal;

  var coinPurse = {};

  let quarters = 0.25;
  let dimes = 0.10;
  let nickels = 0.05;
  let pennies = 0.01;
  
  coinPurse.quarters = coinAmount(currentTotal, quarters);
  currentTotal = newTotal(currentTotal, quarters);

  coinPurse.dimes = coinAmount(currentTotal, dimes);
  currentTotal = newTotal(currentTotal, dimes);
  

  coinPurse.nickels = coinAmount(currentTotal, nickels);
  currentTotal = newTotal(currentTotal, nickels);

  coinPurse.pennies = coinAmount(currentTotal, pennies);
  currentTotal = newTotal(currentTotal, pennies);

  return coinPurse;
}

var coins = coinCounter(5.68);

console.log(coins);


function coinAmount (currentTotal, coinVal) {

  return Math.floor(currentTotal / coinVal);

}

function newTotal (currentTotal, coinVal) {

  return (currentTotal % coinVal).toFixed(2);

}
