var removeElements = function (head, val) {
  let index = head;
  while (index) {
    // 若当前节点是头节点，且头节点的值等于val，则将头节点指向下一个节点
    if (head === index && index.val === val) {
      head = index.next;
      index = index.next;
    } else if (index.next && index.next.val === val) {
      // 当前节点值为val，则将当前节点指向下一个节点的下一个节点
      index.next = index.next.next;
    } else {
      // 当前节点值不为val，则将当前节点指向下一个节点
      index = index.next;
    }
  }
  return head;
};
