// task #1 --- pop
function myPop(arr) {
  if (arr.length !== 0) {
    let item = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return item;
  } else {
    return undefined;
  }
}

let arr1 = [1, 4, 6];
let a = myPop(arr1);
console.log(a);
console.log(arr1);

let myFish = ["ангел", "клоун", "мандарин", "хирург"];
console.log(myPop(myFish));
console.log(myPop(myFish));
console.log(myPop(myFish));
console.log(myPop(myFish));
console.log(myPop(myFish));

//task #2 --- push
function myPush(arr, ...args) {
  for (let i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
}

const vegetables = ["пастернак", "картошка"];
const moreVegs = ["сельдерей", "капуста"];
const word = "hello";
console.log(myPush(vegetables, moreVegs));
console.log(myPush(vegetables, word, "bye"));
console.log(myPush(vegetables, 1, [2, 3]));
console.log(myPush(vegetables, 1, { hello: "hello" }));
console.log(vegetables);

//task #3 --- shift
function myShift(arr) {
  if (arr.length !== 0) {
    arr.reverse();
    let item = arr[arr.length - 1];
    arr.length = arr.length - 1;
    arr.reverse();
    return item;
  } else {
    return undefined;
  }
}
let shiftArr = [3, 7, 10, "hello", "555"];
console.log(myShift(shiftArr));
console.log(shiftArr);

//task #4 --- unshift
function myUnshift(arr, param) {
  arr.reverse();
  arr[arr.length] = param;
  arr.reverse();
  return arr.length;
}

let unshiftArr = [120, 15, 17, 35];
console.log(myUnshift(unshiftArr, 1));
console.log(unshiftArr);

//task #5 --- concat
function myConcat(arr, ...args) {
  let newArr = [...arr];

  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] !== "object") {
      newArr[newArr.length] = arguments[i];
    } else {
      for (let j = 0; j < arguments[i][j]; j++) {
        newArr[newArr.length] = arguments[i][j];
      }

      if (typeof arguments[i] === "object" && !Array.isArray(arguments[i])) {
        newArr[newArr.length] = arguments[i];
      }
    }
  }
  return newArr;
}

let concatArr = ["apple", "box"];

console.log(myConcat(concatArr, 1, [3, 4]));
console.log(myConcat(concatArr, 1, "hello"));
console.log(myConcat(concatArr, 1, { hello: "hello" }));
console.log(concatArr);

let mapArr = ["Яблоко", "Банан", "Aнанас"];
//const resMarArr = mapArr.map(el => el[0]);
//console.log(resMarArr);
//const filterArr = mapArr.filter((el) => el[0].toLowerCase() == "a");
//console.log(filterArr);
//let mapArr1 = ["Яблоко", "Банан", "Aнанас"];
//mapArr1.forEach((el, i, arr) => (arr[i] = `${i + 1}: ${el}`));
//console.log(mapArr1);

//Map TO REDUCE
const resReduceArr = mapArr.reduce((acc, el) => {
  return [...acc, el.slice(0, 1)];
}, []);
console.log(resReduceArr);

//Filter TO REDUCE
const resReduceArrFilt = mapArr.reduce((acc, el) => {
  if (el.slice(0, 1).toLowerCase() == "a") {
    return [el];
  }
}, []);
console.log(resReduceArrFilt);

//FOR EACH TO REDUCE
let mapArr2 = ["Яблоко", "Банан", "Aнанас"];
const res = mapArr2.reduce((acc, el, index, arr) => {
  return [...acc, `${index + 1}: ${arr[index]}`];
}, []);
console.log(mapArr2);
console.log(res);
