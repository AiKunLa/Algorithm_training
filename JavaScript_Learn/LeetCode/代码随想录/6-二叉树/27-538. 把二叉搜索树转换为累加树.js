/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  // 反向中序遍历 先右后中在左
  let add = 0;
  const reverseMidSer = (root) => {
    if (!root) return;
    reverseMidSer(root.right);
    root.val += add;
    add = root.val;
    reverseMidSer(root.left);
  };
  reverseMidSer(root);
  return root;
};
