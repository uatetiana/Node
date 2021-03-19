// Task 1:

// Write a function that takes an integer as input,
//and returns the number of bits that are equal to one
//in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010,
// so the function should return 5 in this case

function convertToBinary(decimal) {
  let arr = [];
  let i = 0;
  let sum = 0;
  if (decimal >= 0) {
    while (decimal >= 1) {
      arr[i] = decimal % 2;
      i++;
      decimal = Math.floor(decimal / 2);
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        sum++;
      }
    }
  } else {
    console.log('Please enter non-negative number.');
  }
  console.log([sum, arr.reverse().join(' ')]);
  return sum;
}

convertToBinary(1234);

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

