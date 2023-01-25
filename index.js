// accepts an item's cost and the payment as input -> output how mush change is returned
const process = require('process');

// console.log(process.argv);
let itemCostInput = null;
let paymentInput = null;

for (let i = 0; i < process.argv.length; ++i) {
  const arg = process.argv[1];
  if (arg === '--item-cost') {
    itemCostInput = process.argv[i + 1];
    ++i;
  } else if (arg === '--payment') {
    paymentInput = process.argv[i + 1];
    ++i;
  }
}

// if (itemCostInput == null) {
//   console.error('--item-cost must be entered');
//   process.exit(1);
// }
const itemCost = Number(itemCostInput) * 100;
if (isNaN(itemCost)) {
  console.log('--item-cost must be a number');
  process.exit(1);
}

// if (paymentInput == null) {
//   console.error('--payment must be entered');
//   process.exit(1);
// }

const payment = Number(paymentInput) * 100;
if (isNaN(payment)) {
  console.log('--payment needs to be a number');
  process.exit(1);
}

function getChange(cost, payment) {
  let change = payment - cost;
  const coins = [25, 10, 5, 1];
  const receipt = coins.reduce((acc, curr) => {
    acc[curr] = Math.floor(change / curr);
    change = change % curr;
    // the currentValue needed to be reassigned after the first run on the reducer
    return acc;
  }, {});
  return receipt;
}
getChange();
// console.log(getChange(155, 168));

module.exports = {
  getChange,
};
