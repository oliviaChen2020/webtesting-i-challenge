const enhancer = require('./enhancer.js');
// test away!

//test #1
describe('repair', () => {
  let itemOne = {
    name: 'One',
    durability: 100,
    enhancement: '10',
  };
  it('the durablity is set to 100', () => {
    expect(itemOne.durability).toEqual(100);
  });
});

//test #2
describe('success', () => {
  let itemTwo = {
    name: 'Two',
    durability: 100,
    enhancement: 8,
  };
  const result = enhancer.success(itemTwo);
  it('enhancement increased by 1', () => {
    expect(result.enhancement).toEqual(9);
  });
});

//test #3
describe('fail', () => {
  let itemThree = {
    name: 'Three',
    durability: 90,
    enhancement: 14,
  };
  const result = enhancer.fail(itemThree);
  it('durability decreased by 5 as the enhancement set to lower then 15', () => {
    expect(result.durability).toEqual(85);
  });
});

//test #4
describe('fail', () => {
  let itemThree = {
    name: 'Three',
    durability: 90,
    enhancement: 15,
  };
  const result = enhancer.fail(itemThree);
  it('durability decreased by 10 as the enhancement set to 15', () => {
    expect(result.durability).toEqual(80);
  });
});

//test #5
describe('fail', () => {
  let itemThree = {
    name: 'Three',
    durability: 90,
    enhancement: 17,
  };
  const result = enhancer.fail(itemThree);
  it('enhancement decreased by 1 as the enhancement set to greater than 16', () => {
    expect(result.enhancement).toBe(16);
  });
});

// stretch test
describe('get', () => {
  let itemLast = {
    name: 'Hero',
    durability: 90,
    enhancement: 2,
  };
  const string = enhancer.get(itemLast);
  it('enhancement decreased by 1 as the enhancement set to greater than 16', () => {
    expect(string.name).toBe('[+2] Hero');
  });
});
