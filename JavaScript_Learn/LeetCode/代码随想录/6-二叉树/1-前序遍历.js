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
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   // 递归方法
// };

var preorderTraversal = function (root) {
  // 迭代方法 使用栈
  const result = [];
  if (!root) return result;
  const stack = [];
  let p = root;
  // 节点非空或者栈非空
  while (p || stack.length) {
    if (p) {
      //输出p p的左节点入栈
      result.push(p.val);
      stack.push(p);
      p = p.left;
    } else {
      // 弹出栈顶元素
      const temp = stack.pop();
      p = temp.right;
    }
  }
  return result;
};
var preorderTraversal = function (root) {
  // 递归
  const result = [];
  const preorder = (root) => {
    if (!root) return;
    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return result;
}