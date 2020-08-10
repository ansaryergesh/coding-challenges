var reverseList = function(head) {
    let current = head;
    let prev = null;
    while(current!== null )  {
        let store = current;
        current = current.next;
        store.next = prev;
        prev = store;
    }
}


[1,2,3,4,5]