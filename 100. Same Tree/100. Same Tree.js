/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true; // if both the roots are null return true
    if (p === null || q === null) return false; // if exactly one is null return false
    if (p.val !== q.val) return false; // if node values differ, return false

    // we recurse into both left and right subtrees, both must be same for the trees to be equal
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};