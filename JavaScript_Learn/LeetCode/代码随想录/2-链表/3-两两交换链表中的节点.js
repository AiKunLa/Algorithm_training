/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  // 有头节点的情况
  // 若头节点为空 只有头节点 链表长度为1
  if (!head || !head.next || !head.next.next) return head;
  let cur = new ListNode();
  let result = cur; //
  cur.next = head;
  while (cur.next && cur.next.next) {
    let temp = cur.next;
    let temp1 = cur.next.next;

    temp.next = temp1.next;
    temp1.next = temp;
    cur.next = temp1;
    cur = temp;
  }
  return result.next;
};
