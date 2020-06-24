/**
 * @module Palindrome solvers
 * A paindrome is a string that reads the same forward as it does backward
 * E.g. kayak, radar, madam
 */
export function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return reversed === str;
}

/**
 * Returns true if ANY permutation of the string could be a palindrome
 * civic => true
 * vicic => true
 */
function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split("").forEach((char) => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}

console.log(isAnyPermutationPalindrome("vicic"));
