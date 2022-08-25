const calculateChange = function(total, cash) {
  let change = cash - total;
  let changeGiven = {};

  //if cash given is equal to or less than cost
  if (change < 0) {
    return "You haven't paid enough!";
  } else if (change === 0) {
    return "You paid exactly the right amount.";
  } else {
    //real work starts here
    //if change is perfectly divisible into twenties
    if ((change % 20) === 0) {
      changeGiven.twentyDollars = change / 2000;
      return changeGiven;
    } else {
      //otherwise
      let remainingChange = 0;
      
      //# of twenties
      if (Math.floor(change / 2000) > 0) {
        changeGiven.twentyDollars = Math.floor(change / 2000);
        remainingChange = change - changeGiven.twentyDollars * 2000;
      } else {
        remainingChange = change;
      }

      //# of tens
      if (Math.floor(remainingChange / 1000) > 0) {
        changeGiven.tenDollars = Math.floor(remainingChange / 1000);
        remainingChange = remainingChange - changeGiven.tenDollars * 1000;
      }

      //# of fives
      if (Math.floor(remainingChange / 500) > 0) {
        changeGiven.fiveDollars = Math.floor(remainingChange / 500);
        remainingChange = remainingChange - changeGiven.fiveDollars * 500;
      }

      //# of toonies
      if (Math.floor(remainingChange / 200) > 0) {
        changeGiven.twoDollars = Math.floor(remainingChange / 200);
        remainingChange = remainingChange - changeGiven.twoDollars * 200;
      }
      
      //# of loonies
      if (Math.floor(remainingChange / 100) > 0) {
        changeGiven.oneDollar = Math.floor(remainingChange / 100);
        remainingChange = remainingChange - changeGiven.oneDollar * 100;
      }

      //# of quarters
      if (Math.floor(remainingChange / 25) > 0) {
        changeGiven.quarters = Math.floor(remainingChange / 25);
        remainingChange = remainingChange - changeGiven.quarters * 25;
      }

      //# of dimes
      if (Math.floor(remainingChange / 10) > 0) {
        changeGiven.dimes = Math.floor(remainingChange / 10);
        remainingChange = remainingChange - changeGiven.dimes * 10;
      }

      //# of nickles
      if (Math.floor(remainingChange / 5) > 0) {
        changeGiven.nickles = Math.floor(remainingChange / 5);
        remainingChange = remainingChange - changeGiven.nickles * 5;
      }

      //# of pennies
      if (Math.floor(remainingChange / 1) > 0) {
        changeGiven.pennies = Math.floor(remainingChange / 1);
        remainingChange = remainingChange - changeGiven.pennies * 1;
      }
      return changeGiven;
    }
  }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));