/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历是升序的
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const midSeek = (root) => {
    if (!root) return true;
    let left = midSeek(root.left);
    if (root.val <= pre) return false;
    pre = root.val;
    let right = midSeek(root.right);
    return left && right;
  };
  let pre = -Infinity;
  return midSeek(root);
};
