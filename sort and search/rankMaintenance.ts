/**
 * Maintain a minimum value
 */
export class MinimumArray {
  data: number[] = [];

  /** O(n) */
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  /** O(1) */
  extract(): number | undefined {
    return this.data.pop();
  }
}

/**
 * Maintains a maximum value
 */
export class MaximumArray extends MinimumArray {
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }
}

/**
 * Using the data structures above is a naïve solution
 * O(n)
 */
// const maintain = new MaximumArray();
// [1, 4, 2, 5].forEach((x) => maintain.add(x));
// let curr = maintain.extract();
// while (curr !== undefined) {
//   console.log(curr);
//   curr = maintain.extract();
// }

/**
 * A heap is best suited to this used case
 * O(log n)
 */
import { Heap } from "../data structures/heap";
const maintain = new Heap<number>((a, b) => a - b);
[1, 4, 2, 5].forEach((x) => maintain.add(x));
let curr = maintain.extractRoot();
while (curr !== undefined) {
  console.log(curr);
  curr = maintain.extractRoot();
}
