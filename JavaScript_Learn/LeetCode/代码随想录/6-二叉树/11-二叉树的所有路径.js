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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  const deep = function (root, path) {
    if (root !== null) {
      path += root.val;
      if (!root.left && !root.right) result.push(path);
      else {
        path += "->";
        deep(root.left, path);
        deep(root.right, path);
      }
    }
  };
  deep(root, "");
  return result;
};
