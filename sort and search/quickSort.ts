/**
 * Sorts an array using quicksort
 * Worst-case:  O(n2)
 * Best-case:	  O(n log n) (simple partition) or O(n) (three-way partition and equal keys)
 * Average:     O(n log n)
 */
export function quickSort(array: number[]): number[] {
  array = array.slice();
  partition(array, 0, array.length);
  return array;
}

/**
 * Partitions the [start, before] index of the array
 */
function partition(array: number[], start: number, before: number): void {
  const length: number = before - start;
  if (length <= 1) return;

  const pivotIndex: number = start + Math.floor(Math.random() * length);
  // move pivot to the start of the array to get it out of the way
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  const pivot = array[start];
  let pivotRank = start;
  for (let index = start + 1; index < before; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
    }
  }
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }
  // [
  //   items less than pivot,
  //   - index for the pivot rank,
  //   items greater than pivot,
  // ]
  partition(array, start, pivotRank);
  partition(array, pivotRank + 1, before);
}

console.log(quickSort([4, 5, 2, 8, 77, 55, 3, 7, 42, 1, 8]));
