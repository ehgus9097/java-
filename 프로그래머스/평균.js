function solution() {
    var arr = [1,2,3,4];
    arr.sum
    var answer = 0;
    return answer;
}

debugger;
    var checkID = new Array(2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5);
    var checkDigit = 0;
    var sum = 0;
    for (i = 0; i < 12; i++) {
		sum += isSSN.getValue().charAt(i) * checkID[i];
	}
    checkDigit = 11 - (sum%11);
    checkDigit = checkDigit >= 10 ? (checkDigit - 10) : checkDigit;
    console.log(checkDigit);