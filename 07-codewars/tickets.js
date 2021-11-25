function tickets(peopleInLine){
  const cashier = {
    25: 0,
    50: 0,
    100: 0,
  }

  for (let i = 0; i < peopleInLine.length; i++) {
    const payment = peopleInLine[i]

    if (payment === 25) {
      cashier[25]++
    } else if (payment === 50) {
      if (cashier[25] > 0) {
        cashier[50]++
        cashier[25]--
      } else {
        return 'NO';
      }
    } else if (payment === 100) {
      if (cashier[50] > 0 && cashier[25] > 0) {
        cashier[100]++;
        cashier[50]--;
        cashier[25]--;
      } else if (cashier[25] >= 3) {
        cashier[100]++;
        cashier[25] -=3;
      } else {
        return 'NO';
      }
    }
  }

  return 'YES';
}

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
// tickets([50,50,50,50,50,50,50,50,50,50]) // NO
// tickets([25,25,25,25,50,100,50]) // YES
tickets([25,25,25,25,25,25,25,50,50,50,100,100,100,100]) // NO
