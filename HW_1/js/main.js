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

function sortString(string) {
  let arr = string.split(' ');

  let sorted = [];
  if (string.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
          if (+arr[j][k] === i + 1) {
            sorted[i] = arr[j];
          }
        }
      }
    }
    console.log(sorted.join(' '));
    return sorted.join(' ');
  } else {
    console.log('');
    return '';
  }
}

sortString("Fo1r the2 g3ood 4of th5e pe6ople")

// Football Task:
//
// Most football fans love it for the goals and excitement.
// You are to handle the referee's little notebook and count the players who were sent off for fouls and misbehavior.
// The rules: Two teams, named "A" and "B" have 11 players each; players on each team are numbered from 1 to 11.
// Any player may be sent off the field by being given a red card. A player can also receive a yellow warning card,
// which is fine, but if he receives another yellow card, he is sent off immediately (no need for a red card in that case).
// If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee, and the team with less than 7 players loses.
//
// A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') -
// all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.

// The task: Given a list of cards (could be empty),
// return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first).
// If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.
//
// If a player that has already been sent off receives another card - ignore it.

function menStillStanding(array) {
  let team = [11, 11];
  let objA = {};
  let objB = {};

  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].search('A') !== -1) {
        objA[array[i]] = 0;
        for (let j = 0; j < array.length; j++) {
          if (objA[array[i]] === objA[array[j]]) {
            objA[array[i]]++;
          }
        }
      } else if (array[i].search('B') !== -1) {
        objB[array[i]] = 0;
        for (let j = 0; j < array.length; j++) {
          if (objB[array[i]] === objB[array[j]]) {
            objB[array[i]]++;
          }
        }
      }
    }
  }

  function board(obj, team) {
    for (const objElement in obj) {
      if (objElement.search('Y') !== -1 && obj[objElement] === 2 ) {
        team--;
      } else {
        if (objElement.search('R') !== -1) {
          team--;
        }
      }
    }
    return team;
  }

  const res = [objA, objB].map((el, index)=> board(el, team[index]));
  console.log(res);
  return res;
}

menStillStanding(['A4R', 'A5R', 'A7R', 'A9R', 'A10R'])
