import { calculateCubicRoots } from './cubic-equation';

describe('calculateCubicRoots', () => {
  it.each([
    [[0, 0, 2, 1], ['-0.50']],
    [[3, 7, 2, 1], ['-2.09']],
    [[-3, 7, 2, 1], ['2.63']],
    [
      [1, 8, 2, 0],
      ['-0.00', '-0.26', '-7.74'],
    ],
  ])('returns roots for cubic equation', (coeficients, expected) => {
    const roots = calculateCubicRoots(...coeficients);
    expect(roots.map((root) => root.toFixed(2))).toEqual(expected);
  });
});
