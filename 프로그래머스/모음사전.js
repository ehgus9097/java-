function solution() {
    var word = "AAAAE"
    var answer = 0;
    var multiple = [781,156,31,6,1];
    var wordNum = [...word.replaceAll("A","0").replaceAll("E","1").replaceAll("I","2").replaceAll("O","3").replaceAll("U","4")];
    wordNum.forEach((value,i) => { answer += value * multiple[i]});
    answer += wordNum.length
    console.log("답은:" + answer);
}



// function solution(word) {
//     var answer = 0;
//      if(word.length == 5){
//         answer = first(word) + second(word) + third(word) + fourth(word) + fifth(word);  
//     }else if(word.length == 4){
//         answer = second(word) + third(word) + fourth(word) + fifth(word); 
//     }else if(word.length == 3){
//         answer = third(word) + fourth(word) + fifth(word); 
//     }else if(word.length == 2){
//         answer = fourth(word) + fifth(word); 
//     }else if(word.length == 1){
//         answer = fifth(word); 
//     }
//     return answer;
// }

// function first(word){
//     var answer = 0;
//     switch (word[4]){
//         case "A" : 
//             answer += 1;
//             break;
//         case "E" :
//             answer += 2;
//             break;
//         case "I" :
//             answer += 3;
//             break;
//         case "O" :
//             answer += 4;
//             break;
//         case "U" :
//             answer += 5;
//             break;
//     }
//     return answer;
// }
// function second(word){
//     var answer = 0;
//     switch (word[3]){
//         case "A" : 
//             answer += 1;
//             break;
//         case "E" :
//             answer += 2 + 5;
//             break;
//         case "I" :
//             answer += 3 + (5*2);
//             break;
//         case "O" :
//             answer += 4 + (5*3);
//             break;
//         case "U" :
//             answer += 5 + (5*4);
//             break;
//     } 
//     return answer;
// }
// function third(word){
//     var answer = 0;
//     switch (word[2]){
//         case "A" : 
//             answer += 1;
//             break;
//         case "E" :
//             answer += 2 + 5 + (5*5);
//             break;
//         case "I" :
//             answer += 3 + (5*2) + (5*5*2);
//             break;
//         case "O" :
//             answer += 4 + (5*3) + (5*5*3);
//             break;
//         case "U" :
//             answer += 5 + (5*4) + (5*5*4);
//             break;
//     } 
//     return answer;
// }

// function fourth(word){
//     var answer = 0;
//     switch (word[1]){
//         case "A" : 
//             answer += 1;
//             break;
//         case "E" :
//             answer += 2 + 5 + (5*5) + (5*5*5);
//             break;
//         case "I" :
//             answer += 3 + (5*2) + (5*5*2) + (5*5*5*2);
//             break;
//         case "O" :
//             answer += 4 + (5*3) + (5*5*3) + (5*5*5*3);
//             break;
//         case "U" :
//             answer += 5 + (5*4) + (5*5*4) + (5*5*5*4);
//             break;
//     } 
//     return answer;
// }

// function fifth(word){
//     var answer = 0;
//     switch (word[0]){
//         case "A" : 
//             answer += 1;
//             break;
//         case "E" :
//             answer += 2 + 5 + (5*5) + (5*5*5) + (5*5*5*5);
//             break;
//         case "I" :
//             answer += 3 + (5*2) + (5*5*2) + (5*5*5*2) + (5*5*5*5*2);
//             break;
//         case "O" :
//             answer += 4 + (5*3) + (5*5*3) + (5*5*5*3) + (5*5*5*5*3);
//             break;
//         case "U" :
//             answer += 5 + (5*4) + (5*5*4) + (5*5*5*4) + (5*5*5*5*4);
//             break;
//     } 
//     return answer;
// }
solution();