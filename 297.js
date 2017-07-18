// Definition for a binary tree node.

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 *
 * 思路：先序遍历二叉树,将所缺节点补全，最后再删除结果数组中队尾巴的数组
 */
var serialize = function(root) {
    var result = [],
        queue = [],
        currentNode;

    if(root){
        queue.push(root);
    }else{
        console.error("Error! Nothing need serialize!");
        return result;
    }

    while (queue.length > 0){ // 补全节点
        currentNode = queue.shift();
        if(currentNode.val !== null){
            result.push(currentNode.val.toString());
        }else{
            result.push('null');
        }


        if(currentNode.left ){
            queue.push(currentNode.left);
        }else if(currentNode.val !== null){
            currentNode.left = new TreeNode(null);
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }else if(currentNode.val !== null){
            currentNode.right = new TreeNode(null);
            queue.push(currentNode.right);
        }
    }

    var i = result.length - 1;

    while (result[i--] === 'null' && result.length > 0) { //弹出结尾所有 null
        result.pop();
    }

    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    if(data.length <= 0){
        console.error("There is nothing can be deserialized!");
        return [];
    }

    var root = new TreeNode(parseInt(data[0])),
        queue = [],
        currentNode,
        i = 0;
    queue.push(root);

    while (i < data.length){
        currentNode = queue.shift();
        if(data[++i] !== 'null' && i < data.length){
            currentNode.left = new TreeNode(parseInt(data[i]));
            queue.push(currentNode.left);
        }
        if(data[++i] !== 'null' && i < data.length){
            currentNode.right = new TreeNode(parseInt(data[i]));
            queue.push(currentNode.right);
        }
    }
    return root;

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


