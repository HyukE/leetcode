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
// 시간복잡도: O(n)
const postorderTraversal = function(root) {
  const result = [];
  
  const traverse = function (node) {
    if (!node) return;
    
    traverse(node.left);
    traverse(node.right);
    result.push(node.val)
  };
  
  traverse(root);
  
  return result;
};