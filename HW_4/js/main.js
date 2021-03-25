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
