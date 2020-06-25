/**
 * Linked list node
 */
export interface DoublyLinkedListNode<T> {
  value: T;
  next?: DoublyLinkedListNode<T>;
  prev?: DoublyLinkedListNode<T>;
}

/**
 * Linked list for items of type T
 */
export class LinkedList<T> {
  public head?: DoublyLinkedListNode<T> = undefined;
  public tail?: DoublyLinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   */
  add(value: T) {
    const node = {
      value,
      next: undefined,
      prev: undefined,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
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
    if (this.head) this.head.prev = undefined;
    return headValue;
  }

  /**
   * LIFO removal in O(1)
   * (doubly linking the list allows this)
   */
  pop(): T | undefined {
    if (!this.tail) return undefined;
    const tailValue = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = undefined;
    else this.head = undefined;
    return tailValue;
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
