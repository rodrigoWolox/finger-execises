import { min } from '.';

describe('Spread operator', () => {
  xit('min returns undefined on no args', () => {
    expect(min()).toBe(undefined);
  });
  xit('min returns the param if is the only argument', () => {
    expect(min(1)).toBe(1);
    expect(min(2)).toBe(2);
  });
  xit('min can return the minimum based on a list', () => {
    expect(min([1, 2])).toBe(1);
    expect(min([2, 1])).toBe(1);
  });
  xit('min can return the minimum based on many parameters', () => {
    expect(min(1, 2, 3, 4, 5, 0)).toBe(0);
    expect(min(1, 2, 3, 4, -1, 0)).toBe(-1);
  });
});
