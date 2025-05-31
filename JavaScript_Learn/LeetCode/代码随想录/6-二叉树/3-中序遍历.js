/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const mm = (root) => {
    if (!root) return;
    mm(root.left);
    result.push(root.val);
    mm(root.right);
  };
  mm(root);
  return result;
};
/**
 * 非递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function (root) {

};
