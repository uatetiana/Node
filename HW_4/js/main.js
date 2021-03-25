// task1
let s="Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s) {
  let arr = s.split(';');

  let length = arr.length;
  let res1 = [];
  let res2 = [];
  for (let i = 0; i < length; i++) {
    let tmp = arr[i].split(':');
    res1.push(tmp[0]);
    res2.push(tmp[1]);
  }

  for (let i = 0; i < length - 1; i++)
  {
    for (let j = length - 1; j > i; j--)
    {
      if (res2[j] < res2[j - 1])
      {
        let tmp = res2[j];
        res2[j] = res2[j - 1];
        res2[j - 1] = tmp;
        let tmp2 = res1[j];
        res1[j] = res1[j - 1];
        res1[j - 1] = tmp2;
      } else if (res2[j] === res2[j-1]) {

        if (res1[j] < res1[j-1]) {
          let tmp2 = res1[j];
          res1[j] = res1[j - 1];
          res1[j - 1] = tmp2;
        }
      }
    }
  }

  let str = '';
  for (let i = 0; i < length; i++) {
    str += `(${res2[i].toUpperCase()}, ${res1[i].toUpperCase()})`;
  }
  return str;
}
meeting(s);


function meeting2(roomArr, need) {
  if (need !== 0) {
    let acc = 0;
    let res = [];
    let sum = 0;
    let isEnough = false;
    let length = roomArr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 1; j < roomArr[i].length; j++) {
        acc =  roomArr[i][j] - roomArr[i][j - 1].length ;
        if (acc > 0) {
          console.log(acc);
          res.push(acc);
          sum += acc;
        } else {
          acc = 0;
          sum += acc;
          res.push(acc);
        }
        if (need === sum) {
          isEnough = true;
          break;
        }
      }
      if (isEnough) {
        break;
      }
    }
    console.log(res)
    return res;
  } else {
    console.log('Game on');
    return 'Game on';
  }


}
meeting2([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)
//---> [0, 1, 3]

meeting2([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)
//---> [0, 0, 1, 2, 2]

meeting2([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)
//---> 'Game On'
