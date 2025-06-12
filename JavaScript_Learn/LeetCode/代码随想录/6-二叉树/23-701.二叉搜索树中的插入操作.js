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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 先搜索 后插入 分开
  // 记录前一个节点 和当前节点
  if (!root) return new TreeNode(val);
  let pre = null;
  let p = root;
  while (p) {
    pre = p;
    if (p.val > val) p = p.left;
    else p = p.right;
  }
  if (pre.val > val) pre.left = new TreeNode(val);
  else pre.right = new TreeNode(val);
  return root;
};
