/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */

// Some Nodes most possible closed to node: node.left, node.right, node.left.right, node.right.left

var getMinimumDifference = function(root) {
    var diff ,
        currentNode,
        arr = [];

    arr = inOrder(root,arr);

    diff = Math.abs(arr[1] - arr[0]);
    for(var i = 2; i < arr.length; i++){
        if(diff > Math.abs(arr[i] - arr[i - 1])){
            diff = Math.abs(arr[i] - arr[i - 1]);
        }
    }

    return diff;

};

var inOrder = function(node,arr){
    if(node){
        arr = inOrder(node.left,arr);
        arr.push(node.val);
        arr = inOrder(node.right,arr);
    }
    return arr;

};
