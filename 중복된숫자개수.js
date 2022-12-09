function solution() {
    var array = [149, 180, 192, 170]
    var height = 167
    var answer = 0;
    array.sort();
    console.log(array);
    for(var i = 0; i < array.length; i++){
        if(height > array[i]){
            answer = i+1;
            return answer;
        }
    }
    return 0;
}