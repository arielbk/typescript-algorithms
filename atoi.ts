/**
 * Converts a string to an integer
 * without using the built-in JS parseInt method
 */
export function atoi(str: string): number {
  const zeroCode: number = "0".charCodeAt(0);

  let sign: number = 1;
  if (str[0] === "-") {
    str = str.substring(1);
    sign = -1;
  }

  let acc: number = 0;
  for (const char of str) {
    // move digits to the right
    acc *= acc * 10;
    const digit: number = char.charCodeAt(0) - zeroCode;
    if (digit < 0 || digit > 9) return NaN;
    acc += digit;
  }

  return sign * acc;
}

console.log(atoi("987"));
console.log(atoi("-987"));
console.log(atoi("something"));
