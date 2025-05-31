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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 队列
  const result = [];
  if (!root) return result;

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    const len = queue.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      arr.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(arr);
  }

  return result;
};
