/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  深度：从根节点到叶子节点的最长路径
 *  高度：从叶子节点到根节点的最长路径
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1; 

};
