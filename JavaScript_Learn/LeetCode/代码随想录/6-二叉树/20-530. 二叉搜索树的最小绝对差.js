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
var getMinimumDifference = function (root) {
  if (!root) return null;
  //中序遍历 在遍历时记录前后两节点之间的差值 更新最小值
  let minVal = Infinity;
  let pre = Infinity;
  const midSeek = (root) => {
    if (!root) return;
    midSeek(root.left);
    if (pre != Infinity) {
      let abs = root.val - pre;
      minVal = abs < minVal ? abs : minVal;
    }
    pre = root.val;
    midSeek(root.right);
  };
  midSeek(root);
  return minVal;
};
