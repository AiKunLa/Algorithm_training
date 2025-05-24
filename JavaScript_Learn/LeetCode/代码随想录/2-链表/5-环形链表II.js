/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *  // 判断链表是否有环 快慢指针
    // 若有环 快指针一定能追上慢指针 若追上 则有环
    // 若没有环 快指针一定能走到链表末尾 若走到末尾 则无环
    // 快走2 慢走1
    // 设链表起点到环入口距离为a 环入口到相遇点距离为b 相遇点到环入口距离为c
    // 快指针走过的距离为a + n(b + c)  慢指针走过的距离为a + b
    // 快指针走过的距离是慢指针的2倍 即 a + n(b + c) = 2(a + b)
    // 化简得 a = c + (n - 1)(b + c)  即 从相遇点到环入口的距离加上 n - 1 圈的环长，
    // 恰好等于从链表头部到环入口的距离。
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义快慢指针
  index = head;
  let fast = index;
  let slow = index;
  // 有环
  while (fast && fast.next) {
    // 快指针走两步
    fast = fast.next.next;
    // 慢指针走一步
    slow = slow.next;
    if (slow === fast) {
      // 有环 快指针从头开始走 慢指针继续走 相遇点即为环入口
      fast = index;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  // 无环
  return null;
};
