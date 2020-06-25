/**
 * First in First out (FIFO)
 * with time complexity of O(1) for key operations
 * We can't just use native JS arrays here to get O(n)
 */
export class Queue<T> {
  private data: { [index: number]: T } = Object.create(null);
  private lastDequeuedIndex = 0;
  private nextEnqueueIndex = 0;

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.lastDequeuedIndex];
      delete this.data[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }

  /**
   * Prints out the current queue
   */
  print(): void {
    console.log(this.data);
  }
}

const myQueue = new Queue<string>();
myQueue.enqueue("these");
myQueue.enqueue("are");
myQueue.enqueue("items");
myQueue.enqueue("i");
myQueue.enqueue("added");

console.log(myQueue.dequeue());
console.log(myQueue.size());
myQueue.print();
