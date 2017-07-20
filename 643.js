/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = [];

    sum[0] = 0;
    for (var i = 0; i < k; i++){
        sum[0] += nums[i];
    }
    console.log(sum);
    for ( i = k; i < nums.length; i++ ){
        sum[i - k + 1] = sum[i - k] + nums[i] - nums[i - k];
        //console.log(sum);
}

    return Math.max.apply(this,sum) / k;
};