/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var countSmaller = function(nums) {
    var smallerCounts = [];
    for(var i = 0; i < nums.length; i++){
        smallerCounts[i] = nums.slice(i + 1).filter(function(currentValue,index,array){
            return currentValue < nums[i];
        }).length
    }
    return smallerCounts;
};*/

/*var countSmaller = function(nums) {

    return nums.map(function(currentValue,indexOut,array){
        return nums.slice(indexOut + 1).filter(function(value,index,array){
            return value < nums[indexOut];
        }).length;
    });
};*/

var countSmaller = function(nums) {
    var arr = []
        , len = nums.length;

    // array to object
    // 增加 index 属性，以便离散化
    for (var i = 0; i < len; i++) {
        var tmp = {};
        tmp.index = i;
        tmp.value = nums[i];
        arr.push(tmp);
    }

    arr.sort(function(a, b) {
        return a.value - b.value;
    });

    // 离散化
    var maxn = 1;
    for (var i = 0; i < len; i++) {
        if (!i) {
            arr[i].nValue = maxn;
        } else {
            arr[i].nValue = arr[i].value === arr[i - 1].value ? maxn : ++maxn;
        }
    }

    arr.sort(function(a, b) {
        return a.index - b.index;
    });


    // 逆序树状数组
    var ans = []
        , sum = [];

    for (var i = 0; i <= maxn; i++)
        sum[i] = 0;

    function lowbit(x) { return x & (-x); }

    function update(index, val) {
        for (var i = index; i <= maxn; i += lowbit(i))
            sum[i] += val;
    }

    function getSum(index) {
        var ans = 0;
        for (var i = index; i; i -= lowbit(i))
            ans += sum[i];
        return ans;
    }

    for (var i = len - 1; i >= 0; i--) {
        var nValue = arr[i].nValue;
        ans.unshift(getSum(nValue - 1));
        update(nValue, 1);
    }

    return ans;
};

