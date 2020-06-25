/**
 * Linked list node
 */
export interface LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;
}

/**
 * Linked list for items of type T
 */
export class LinkedList<T> {
  public head?: LinkedListNode<T> = undefined;
  public tail?: LinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   */
  add(value: T) {
    const node = {
      value,
      next: undefined,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }

  /**
   * Returns an iterator over the values
   */
  *values<T>() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

const list = new LinkedList<string>();
["dequeued", "and", "the", "rest"].map((val) => list.add(val));

console.log(list.dequeue());

const listValues = list.values();
for (const item of listValues) {
  console.log(item);
}
