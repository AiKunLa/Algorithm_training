/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // 记录父亲节点 当前节点为叶子节点 且是左节点
  let sum = 0;
  const add = function (curr, pr) {
    if (curr) {
      if (!curr.left && !curr.right && pr && pr.left === curr) sum += curr.val;
      else {
        add(curr.left, curr);
        add(curr.right, curr);
      }
    }
  };
  add(root, null);
  return sum;
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // 使用队列 字节的入队时 判断是否为左节点 是的话 记录值
  if (!root) return 0;
  const queue = [root];
  let sum = 0;
  while (queue.length) {
    const temp = queue.shift();
    if (temp.left && !temp.left.left && !temp.left.right) {
      sum += temp.left.val;
      if (temp.right) queue.push(temp.right); // 注意 这里不能直接return 因为还有右节点
    } else {
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }
  return sum;
};

// 例子
