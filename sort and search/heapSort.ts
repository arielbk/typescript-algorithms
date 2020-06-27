import { Heap, CompareFn } from "../data structures/heap";

/**
 * Sorts an array using heap sort
 * O(n log n)
 */
export function heapSort<T>(array: T[], compare: CompareFn<T>): T[] {
  const heap = new Heap(compare);
  for (const item of array) {
    heap.add(item);
  }
  const result: T[] = [];
  for (let index = 0; index < array.length; index++) {
    const root: T | undefined = heap.extractRoot();
    if (root !== undefined) result.push(root);
  }
  return result;
}

console.log(
  heapSort([5, 3, 67, 2, 3, 33, 24, 62, 263, 43, 63], (a, b) => a - b)
);
