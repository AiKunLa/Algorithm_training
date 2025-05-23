//初始化 MyLinkedList 对象。
var MyLinkedList = function () {
  this.head = new ListNode();
  this.size = 0;
};

/**
 * 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let cuNode = this.head;
  while (index--) {
    cuNode = cuNode.next;
  }
  return cuNode.next.val;
};

/**
 * 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const Node = new ListNode();
  Node.val = val;
  Node.next = this.head.next;
  this.head.next = Node;
  this.size++;
};

/**
 * 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cuNode = this.head;
  while (cuNode.next) {
    cuNode = cuNode.next;
  }
  const Node = new ListNode();
  Node.val = val;
  cuNode.next = Node;
  this.size++;
};

/**
 * 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size || index < 0) return;
  const Node = new ListNode();
  Node.val = val;
  let cuNode = this.head;
  while (index--) {
    cuNode = cuNode.next;
  }
  Node.next = cuNode.next;
  cuNode.next = Node;
  this.size++;
};

/**
 * 如果下标有效，则删除链表中下标为 index 的节点。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let cuNode = this.head;
  while (index--) {
    cuNode = cuNode.next;
  }
  cuNode.next = cuNode.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */ ////
