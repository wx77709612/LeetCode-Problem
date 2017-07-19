/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var minimum = nums.reduce(function(a, b){
        return a < b ? a : b;
    });
    return minimum;
};