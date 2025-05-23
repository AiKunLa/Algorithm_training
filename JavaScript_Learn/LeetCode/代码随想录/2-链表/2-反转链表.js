/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 三个指针 前中后
  let pre = null;
  let mid = head;
  let after = head ? head.next : null;
  while (mid) {
    mid.next = pre;
    pre = mid;
    mid = after;
    if (after) {
      after = after.next;
    }
    else {
      after = null;
    }
  }
  return pre;
};
