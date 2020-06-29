import { Heap } from "../data structures/heap";

/**
 * Keeps account of medians using heaps
 */
export class MedianMaintenanceHeap {
  private lowMaxHeap = new Heap<number>((b, a) => a - b);
  private highMinHeap = new Heap<number>((a, b) => a - b);

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(log n)
   */
  add(item: number): number {
    /** Add number to the correct heap */
    const lowMaxRoot = this.lowMaxHeap.peek();
    if (lowMaxRoot === undefined || item < lowMaxRoot) {
      this.lowMaxHeap.add(item);
    } else {
      this.highMinHeap.add(item);
    }

    /** Rebalance */
    const biggerHeap =
      this.lowMaxHeap.size() > this.highMinHeap.size()
        ? this.lowMaxHeap
        : this.highMinHeap;
    const smallerHeap =
      biggerHeap === this.lowMaxHeap ? this.highMinHeap : this.lowMaxHeap;

    if (biggerHeap.size() - smallerHeap.size() > 1) {
      const biggerHeapRoot = biggerHeap.extractRoot();
      if (biggerHeapRoot) smallerHeap.add(biggerHeapRoot);
    }

    /** Return the median */
    if (this.lowMaxHeap.size() === this.highMinHeap.size()) {
      return (
        ((this.lowMaxHeap.peek() || 0) + (this.highMinHeap.peek() || 0)) / 2
      );
    } else {
      return this.lowMaxHeap.size() > this.highMinHeap.size()
        ? this.lowMaxHeap.peek() || 0
        : this.highMinHeap.peek() || 0;
    }
  }
}

const medianTracker = new MedianMaintenanceHeap();
console.log(medianTracker.add(5));
console.log(medianTracker.add(7));
console.log(medianTracker.add(4));
console.log(medianTracker.add(32));
console.log(medianTracker.add(23));
