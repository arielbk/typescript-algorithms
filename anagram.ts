/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings, determine if they are anagrams of one another
 *    - 'earth' and 'heart' are anagrams
 *    - 'silent' and 'listen' are anagrams
 *    - 'foo' and 'bar' are not anagrams
 */

export function areAnagrams(s1: string, s2: string): boolean {
  const charCount = new Map<String, number>();
  for (const char of s1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2) {
    if (!charCount.has(char)) return false;
    charCount.set(char, (charCount.get(char) || 0) - 1);
  }
  return Array.from(charCount.values()).every((val: number) => val === 0);
}

console.log(areAnagrams("earth", "heart"));
