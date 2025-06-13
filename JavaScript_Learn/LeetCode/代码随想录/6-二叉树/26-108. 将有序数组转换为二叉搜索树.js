/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 平衡
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 二分递归法
  // 找到中间点  左边为左子树 右边为右子树
  const crateTree = (left, right) => {
    if (left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = crateTree(left, mid - 1);
    node.right = crateTree(mid + 1, right);
    return node;
  };
  return crateTree(0, nums.length - 1);
};
