//task1
function myConcat(...rest) {

  let string = '';

  if (arguments) {
    for (let i = 0; i < arguments.length; i++) {
      string += arguments[i];
    }
  } else {
    console.log(string);
    return string;
  }
  console.log(string);
  return string;
}

myConcat('Кевин', ', удачного дня.');
myConcat('');


//task2

function myLastIndex(string, searchValue, fromIndex = 0) {
  let isFound = false;
  let str = '';
  let index = -1;

  for (let k = fromIndex; k < string.length; k++) {
    str += string[k];

    if (str.length === searchValue.length) {

      if (str === searchValue) {
        console.log(str);
        index = k - searchValue.length + 1;
        isFound = true;
      }
      str = '';
      k = k - searchValue.length + 1;
    }
  }
  console.log(index);
  return index;
}

myLastIndex('cиний кит', 'cиний кит');


//task3
function myIncludes(string, searchValue, fromIndex = 0) {
  let isFound = false;
  let str = '';

  for (let k = fromIndex; k < string.length; k++) {
    str += string[k];
    if (str.length === searchValue.length) {

      if (str === searchValue) {

        isFound = true;
      }
      str = '';
      k = k - searchValue.length + 1;
    }
  }
  console.log(isFound);
  return isFound;
}

myIncludes('синий', 'с');

//task4

function myRepeat(string, count = 0) {
  let str = '';
  if (count >= 0) {
    for (let i = 0; i < count; i++) {
      str += string;
    }
  } else {
    throw new Error('Range Error');
  }
  console.log(str);
  return str;
}

myRepeat('белка', 1);
myRepeat('белка', 3);

//task5

function mySubstr(string, start, strLength) {
  let str = '';
  if (start < 0) {
    while (start < 0) {
    start = string.length + start;
    }
    strLength = start + strLength - 1;
  }
  if (strLength === undefined) {
    strLength = string.length;
  } else {
    strLength = strLength + 1;
  }
  for (let i = start; i < strLength; i++) {
    str += string[i];
  }
  console.log(str);
  return str;
}

mySubstr('Mozilla', 1, 2);
mySubstr('Mozilla', 2);
mySubstr('абвгдеёжзи', 1, 2);
mySubstr('абвгдеёжзи', -3, 2);
mySubstr('абвгдеёжзи', -20, 2);

// task6

function mySubstring(string, start, strLength) {
  let str = '';
  if (strLength === undefined) {
    strLength = string.length;
  }
  if (start > strLength) {
    let tmp  = start;
    start = strLength;
    strLength = tmp;
  }
  for (let i = start; i < strLength; i++) {
    str += string[i];
  }
  console.log(str);
  return str;
}

mySubstring('Mozilla', 0,3)
mySubstring('Mozilla', 3,0)
mySubstring('Mozilla', 4,7)
mySubstring('Mozilla', 0,7)
