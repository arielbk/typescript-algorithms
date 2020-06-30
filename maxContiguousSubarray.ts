/**
 * This is an interesting problem
 * and a good candidate for dynamic programming
 *
 * Breaks the problem down into smaller chunks
 * and iterates rather than recurs
 */

/**
 * Given an array of n numbers
 * return a contiguous subarray that has the largest sum
 * O(n)
 */

export function maxSubarray(array: number[]): number[] {
  if (!array.length) return [];

  let maxInc = array[0];
  let max = array[0];
  let maxStartIndex = 0;
  let maxEndIndex = 0;

  for (let i = 1; i < array.length; i++) {
    const val = array[i];

    maxInc = Math.max(maxInc + val, val);
    max = Math.max(max, maxInc);

    if (val === max) maxStartIndex = i;
    if (maxInc === max) maxEndIndex = i;
  }

  return array.slice(maxStartIndex, maxEndIndex + 1);
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
