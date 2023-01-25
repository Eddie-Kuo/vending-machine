const { describe, it } = require('@jest/globals');
// const process = require('process');
const { getChange } = require('./index.js');

describe('parseArgs', () => {
  it('provides an itemCost and payment', () => {
    const cost = 102;
    const payment = 158;
    const change = getChange(cost, payment);
    expect(change).toEqual({ 1: 1, 10: 0, 25: 2, 5: 1 });
  });
});
