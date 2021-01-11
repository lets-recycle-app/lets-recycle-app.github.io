import { distanceBetween, isPostCodeValid } from './routeUtils.js';

describe('Check PostCode And Distance Utilities', () => {
  test('check postcode validity', async () => {
    expect(await isPostCodeValid('EC1Y 1AA')).toBe(true);
    expect(await isPostCodeValid('EC1Y 1XX')).toBe(false);
  });

  test('calculate distance between two coordinates', () => {
    const al5 = [51.825082830000000, -0.382007828000000];
    const ch43 = [53.390886988101400, -3.058385187172700];
    expect(distanceBetween(al5, ch43)).toBe(155.91);
  });
});
