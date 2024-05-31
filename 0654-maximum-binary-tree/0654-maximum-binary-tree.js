/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//시간복잡도: O(n)
const constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  
  const maxVal = Math.max(...nums);
  const maxIndex = nums.indexOf(maxVal);
  const root = new TreeNode(maxVal);
  
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  
  return root;
};