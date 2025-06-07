/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序 后序构造二叉树
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let index = inorder.length - 1;

  if (!inorder.length) {
    return null;
  }
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const craetrRoot = (index_left, index_right) => {
    if (index_left > index_right) return null;
    // 获取当前子树的根节点
    const valRoot = postorder[index--]; // 根节点的值
    // 创建节点
    const root = new TreeNode();
    root.val = valRoot;
    const rootIndex = map.get(valRoot); // 根节点的索引

    //分割左右子树 先右后左
    root.right = craetrRoot(rootIndex + 1, index_right); // 右子树
    root.left = craetrRoot(index_left, rootIndex - 1); // 左子树

    // 返回根节点
    return root;
  };

  return craetrRoot(0, inorder.length - 1);
};
