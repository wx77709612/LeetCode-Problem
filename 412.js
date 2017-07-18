/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var str = [];
    for(var i = 1; i <= n; i++){
        str[i - 1] = "";
        if( i % 3 !== 0 && i % 5 !== 0){
            str[i - 1] = i.toString();
        }
        if( i % 3 === 0){
            str[i - 1] = "Fizz";
        }
        if( i % 5 === 0){
            str[i - 1] += "Buzz";
        }
    }

    return str;
};

console.log(fizzBuzz(15));