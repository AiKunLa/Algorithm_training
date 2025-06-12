/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 删除二叉搜索树中的节点
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 查找  节点
  if (!root) return null;
  let pre = null;
  let current = root;
  while (current) {
    if (current.val > key) {
      pre = current;
      current = current.left;
    } else if (current.val < key) {
      pre = current;
      current = current.right;
    } else break;
  }
  // 没找到 直接返回
  if (!current) return root;

  // 根节点
  if (pre === null && !current.left && !current.right) return null;
  if (pre === null && !current.left && current.right) return current.right;
  if (pre === null && current.left && !current.right) return current.left;
  if (pre === null && current.left && current.right) {
    let index = current.right;
    while (index.left) {
      index = index.left;
    }
    index.left = current.left;
    return current.right;
  }

  // 非根节点
  // 找左子树最右边的叶子节点 或者找右子树最左边的叶子节点
  // 1.叶子节点
  if (!current.left && !current.right) {
    if (pre.left === current) pre.left = null;
    if (pre.right === current) pre.right = null;
  } else if (!current.left && current.right) {
    // 2.左空
    if (pre.left === current) pre.left = current.right;
    if (pre.right === current) pre.right = current.right;
  } else if (current.left && !current.right) {
    // 3.右边空
    if (pre.left === current) pre.left = current.left;
    if (pre.right === current) pre.right = current.left;
  } else {
    // 4.左右都不为空  让右节点上  左子树并入右节点的左子树
    let index = current.right;
    // 找到右节点左子树的最左边
    while (index.left) {
      index = index.left;
    }
    // 并入左子树
    index.left = current.left;
    if (pre.left === current) pre.left = current.right;
    if (pre.right === current) pre.right = current.right;
  }
  return root;
};
