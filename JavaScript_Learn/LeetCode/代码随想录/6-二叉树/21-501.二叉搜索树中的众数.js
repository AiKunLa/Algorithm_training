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
var findMode = function (root) {
  // 中序遍历 记录前驱 在遍历的时候记录 若与前驱相同则计数加一 若不同则计数归1 比较数目大小
  // 两个队列 一个记录众数结果 一个记录数量
  if (!root) return [];
  let res = [];
  let pre = root.val; // 前驱
  let count = 0;
  let maxCount = 0; // 最大数量
  const midSeek = (root) => {
    if (!root) return;
    midSeek(root.left);
    refresh(root.val);
    midSeek(root.right);
  };

  const refresh = (val) => {
    if (val === pre) count++;
    else {
      count = 1;
      pre = val;
    }
    if(count === maxCount) res.push(val);
    if(count>maxCount){
        maxCount = count
        res = [val]
    }
  };
  midSeek(root);
  return res;
};
