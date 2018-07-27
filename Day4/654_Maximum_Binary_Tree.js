// Given an integer array with no duplicates.A maximum tree building on this array is defined as follow:
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
    const getIndex = arr => arr.indexOf(Math.max(...arr));
    const tree = new TreeNode(nums[getIndex(nums)]);    // TreeNode is only valid in leetcode parser
    const getSubTreeFromArray = arr => {
        const parentIndex = getIndex(arr);
        const subTree = new TreeNode(arr[parentIndex]);
        const leftArr = arr.slice(0, parentIndex);
        const rightArr = arr.slice(parentIndex + 1);
        if (leftArr.length > 0) subTree.left = getSubTreeFromArray(leftArr);
        if (rightArr.length > 0) subTree.right = getSubTreeFromArray(rightArr);
        return subTree;
    }
    
    Object.assign(tree, getSubTreeFromArray(nums));
    // const representAsArray = treeObj => {
    //     if (treeObj.left || treeObj.right) {
    //         const leftNode = treeObj.left ? representAsArray(treeObj.left) : null;
    //         const rightNode = treeObj.right ? representAsArray(treeObj.right) : null;
    //         return [treeObj.root].concat(leftNode).concat(rightNode);
    //     } else return [treeObj.root];
    // }
    // return representAsArray(tree);
    return tree;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));