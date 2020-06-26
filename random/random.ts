/**
 * Returns a random int between
 * @param start inclusive
 * @param before exclusive
 */
export function randomInt(start: number, before: number) {
  return start + Math.floor(Math.random() * (before - start));
}

for (let index = 0; index < 100; index++) {
  console.log(randomInt(700, 1000));
}
