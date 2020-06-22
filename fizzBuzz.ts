/**
 * Write integers from 1 to 100 (inclusive).
 * But:
 *    - for multiples of three, print Fizz (instead of the number)
 *    - for multiples of five, print Buzz (instead of the number)
 *    for multiples of both three and five, print FizzBuzz (instead of the number)
 */

for (let index = 1; index <= 100; index++) {
  const isFizz: boolean = index % 3 === 0;
  const isBuzz: boolean = index % 5 === 0;

  let result = "";
  if (isFizz) result += "Fizz";
  if (isBuzz) result += "Buzz";
  console.log(result || index);
}
