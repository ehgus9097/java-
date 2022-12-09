var s = "1 2 3 4"
var answer = '';
var numList = [];
numList.push(s.split(" "));
console.log(numList);
answer = Math.max(numList) + " " + Math.min(numList);
console.log(answer);

