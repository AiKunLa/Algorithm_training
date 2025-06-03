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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return left + right + 1;
};

var countNodes = function (root) {
  if (!root) return 0;

  // 计算左子树高度（完全二叉树左子树必为满二叉树）
  let leftHeight = 0,
    leftNode = root.left;
  while (leftNode) {
    leftHeight++;
    leftNode = leftNode.left;
  }

  // 计算右子树高度
  let rightHeight = 0,
    rightNode = root.right;
  while (rightNode) {
    rightHeight++;
    rightNode = rightNode.right;
  }

  if (leftHeight === rightHeight) {
    return (2 << leftHeight) - 1;
  }
  // 后续递归
  return countNodes(root.left) + countNodes(root.right) + 1;
};
