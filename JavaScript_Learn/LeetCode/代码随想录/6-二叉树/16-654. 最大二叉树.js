/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 查找数组中的最大值
  if (nums.length === 0) return null;

  const creatrTree = (left, right) => {
    if (left > right) return null;
    // 查找最大值
    let max = -Infinity;
    let maxIndex = left;
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIndex = i;
      }
    }
    const root = new TreeNode(max);
    root.left = creatrTree(left, maxIndex - 1);
    root.right = creatrTree(maxIndex + 1, right);
    return root;
  };
  return creatrTree(0, nums.length - 1);
};
