/**
 * Last in First out (LIFO) with O(1) key operations
 * This just uses native JS arrays
 */
export class Stack<T> {
  private data: T[] = [];

  /** Adds the item in O(1) */
  push(item: T): void {
    this.data.push(item);
  }

  /**
   * Pops the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  pop(): T | undefined {
    return this.data.pop();
  }

  /**
   * Returns the number of elements in the stack in O(1)
   */
  size(): number {
    return this.data.length;
  }
}
