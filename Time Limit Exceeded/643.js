/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

    //我的判断方法只对升序数组有效，如果想对无序数组有效可以吧for循环中的nums[i] <= target去掉
var combinationSum4 = function(nums, target) {
    var count = 0;
    /*    queue,
        num,EveryTarget;
    EveryTarget = target;
    var filter = function(item){
        return item <= EveryTarget;
    };
    queue = nums.filter(filter);

    while(queue.length > 0 ){
        num = queue[queue.length - 1];
        if(num > EveryTarget) continue;
        EveryTarget -= num;
        queue += nums.filter(function(item){
            return item <= EveryTarget;
        });
        if(EveryTarget === 0){
            count ++;
            EveryTarget = target;
        }
    }*/
    for(var i = 0; i < nums.length  && target > 0; i++){
        if(nums[i] > target) continue;
        count += combinationSum4(nums,target - nums[i]);
    }
    if(target === 0 ){
        count++;
    }
    return count;
};