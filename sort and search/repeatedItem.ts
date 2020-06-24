/**
 * Returns the firt repeated item from an array if any
 * @throws {Error} if there is no item repetition
 * Time complexity O(n)
 */
export function repeatedItem<T>(array: T[]): T {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) return item;
    else set.add(item);
  }
  throw new Error("No item repetition");
}

console.log(
  repeatedItem(["question", "yes", "no", "maybe", `I don't know`, "question"])
);
