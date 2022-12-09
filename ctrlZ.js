var s = "1 2 Z 3";
var numList = [];
var answer = 0; 
numList = s.split(" ");
console.log(numList);
for(var i = 0; i < numList.length; i++){
    if(numList[i] == "Z"){
        console.log(numList[i]);
        answer -= Number(numList[i-1]);
    }else{
        answer += Number(numList[i]);
    }
}
console.log(answer);


