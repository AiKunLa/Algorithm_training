/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 递归 将root2合并到root1
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

var mergeTrees = function (root1, root2) {
  // 层次遍历迭代
  if(!root1) return root2;
  if(!root2) return root1;
  const queue1 = [root1];
  const queue2 = [root2];
  while(queue1.length && queue2.length){
      const node1 = queue1.shift();
      const node2 = queue2.shift();
      node1.val += node2.val;
      if(node1.left && node2.left){
          queue1.push(node1.left);
          queue2.push(node2.left);
      }
      if(node1.right && node2.right){
          queue1.push(node1.right);
          queue2.push(node2.right);
      }
      if(!node1.left && node2.left){
          node1.left = node2.left;
      }
      if(!node1.right && node2.right){
          node1.right = node2.right;
      }
  }
  return root1;
}
