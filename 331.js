/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {

    var nodes = preorder.split(","),
        root = nodes.shift();

    // 首先所有的字符串是偶数个都是错的，因为每行都是2的倍数个再加一个根节点一定是基数。


    if(nodes.length === 0 && root !== '#' || nodes.length % 2 !== 0){
        return false;
    }

    function callback(node){
        if(node !== "#" && nodes.length > 0){
            var left = nodes.shift();
            callback(left);
            var right = nodes.shift();
            callback(right);
        }
    }

    callback(root);

    return nodes.length === 0;


};