/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
        var binaryStr = n.toString(2);
        var binaryArr = binaryStr.split(""),
            temp,
            len = binaryArr.length;

        while(len < 32){
            binaryArr.unshift("0");
            len++;
        }
        for(var i = 0; i < Math.floor(len / 2); i++){
            temp = binaryArr[i];
            binaryArr[i] = binaryArr[len - 1 - i];
            binaryArr[len - 1 - i] = temp;
        }

        console.log(binaryArr.join(""));
        return parseInt(binaryArr.join(""),2);
    };