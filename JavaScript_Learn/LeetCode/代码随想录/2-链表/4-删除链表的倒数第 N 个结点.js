/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null;
  // 快慢指针
  // 快指针移动n+1次后 快慢指针开始一起移动，直到快指针指向null
  let cur = new ListNode();
  cur.next = head;
  let fast = cur;
  let slow = cur;
  n = n + 1;
  while (n--) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return cur.next;
};
