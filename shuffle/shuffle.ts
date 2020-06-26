import { randomInt } from "../random/random";

/**
 * Returns a shuffled version of the input array
 * Modern version of the Fisher-Yates shuffle algorithm
 */
export function shuffle<T>(array: T[]): T[] {
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomChoiceIndex = randomInt(i, array.length);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
