import foo from '.';

describe('Spread operator', () => {
  it('Fails', () => {
    expect(foo()).toBe(1);
  });
});
