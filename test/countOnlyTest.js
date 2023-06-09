const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe('#countOnly', () => {
  it('returns {Jason: 1, Fang: 2} when given (firstNames, result1)', () => {
    assert.deepEqual(countOnly(firstNames, result1), { Jason: 1, Fang: 2 });
  });

  it("returns undefined when given 'Karima' and 'Agouhanna'", () => {
    assert.deepEqual(result1[('Karima', 'Agouhanna')], undefined);
  });
});