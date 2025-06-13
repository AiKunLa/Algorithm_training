/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // 当前节点小于low 将当前节点左子树全部裁剪 low.left = null
  // 当前节点大于high 将当前节点右子树全部裁剪 low.right = null
  if (!root) return null;
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
