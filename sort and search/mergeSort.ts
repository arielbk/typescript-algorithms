/**
 * Sorts an array using merge sort
 * O(n log n) time complexity
 * O(n) space
 *
 * T(n) = 2 * T(n/2) + O(n)
 * It's fast, but it takes up lots of memory
 */
export function mergeSort(array: number[]): number[] {
  console.log(array);
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/** Merge (conquer) step of mergeSort */
function merge(left: number[], right: number[]): number[] {
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    const lItem = left[lIndex];
    const rItem = right[rIndex];
    if (lItem === null) {
      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      array.push(lItem);
      lIndex++;
    } else if (lItem < rItem) {
      array.push(lItem);
      lIndex++;
    } else {
      array.push(rItem);
      rIndex++;
    }
  }
  console.log({ left, right, array });
  return array;
}

console.log(mergeSort([4, 3, 2, 1]));
