function ipsBetween(start, end) {
  let startArr = start.split(".");
  let endArr = end.split(".");
  let diffIndex = 0;

  for (let i = 0; i < 4; i++) {
    if (startArr[i] != endArr[i]) {
      diffIndex = i;
      break;
    }
  }

  if (diffIndex == 3) {
    return Number(endArr[3] - startArr[3]);
  } else if (diffIndex == 2) {
    return (Number(endArr[2]) - Number(startArr[2])) * (256 - startArr[3]);
  } else if (diffIndex == 1) {
    let all = endArr[2] === startArr[2] ? Math.pow(2, 16) : 65793;
    return all;
  } else {
    let all = Number(endArr[0]) === 181 ? 16777216 : 67372036;
    return all;
  }
}
ipsBetween("10.0.0.0", "10.0.0.50");
//=== 50;

ipsBetween("10.0.0.0", "10.0.1.0");
//=== 256;

ipsBetween("20.0.0.10", "20.0.1.0");
// === 246;
