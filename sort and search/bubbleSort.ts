/**
 * Explains the concept of bubble sort
 */
export function bubbleSortConcept(array: number[]): number[] {
  array = array.slice();
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.count("concept run count");
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  return array;
}
bubbleSortConcept([6, 5, 4, 3, 2]);

/**
 * Idomatic bubble sort implementation
 */
export function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while (true) {
    console.count("breaking run count");
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}
console.log(bubbleSort([6, 5, 4, 3, 2]));
