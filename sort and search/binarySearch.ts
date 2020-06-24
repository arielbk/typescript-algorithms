/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if not found)
 */
export function binarySearch(
  array: number[],
  element: number,
  start: number = 0,
  end: number = array.length - 1
): number {
  // element not found in the array
  if (end < start) return -1;
  const middle = Math.floor((start + end) / 2);
  // we have found our element
  if (element === array[middle]) return middle;
  // search the left half
  if (element < array[middle])
    return binarySearch(array, element, start, middle - 1);
  // search the right half
  return binarySearch(array, element, middle + 1, end);
}

console.log(binarySearch([2, 4, 5, 6, 9, 14, 16], 9)); // 4
