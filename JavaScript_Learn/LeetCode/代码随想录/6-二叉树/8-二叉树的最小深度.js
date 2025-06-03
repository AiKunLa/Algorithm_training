/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 根节点都叶子节点的最小距离
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0; // null
  if (!root.left && !root.right) return 1; //叶子节点
  if (root.left && root.right)
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  else if (!root.left) return minDepth(root.right) + 1; // 右不空 左空
  else return minDepth(root.left) + 1; // 左不空 右空
};
