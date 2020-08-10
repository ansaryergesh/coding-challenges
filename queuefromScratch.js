/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.s1 = [];
    // this.s2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let length = this.s1.length;
    if (length <= 4 ) {
        this.s1.push(x);

    }  else {
        return "Can not add more than 5 elements"};
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.s1.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s1.length !== 0) {
        return this.s1[0];
    }else return [];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.s1.length === 0) return true;
    return false;
};

 var obj = new MyQueue()
 obj.push(2);
 obj.push(3);
 obj.push(3);
 obj.push(3);
 obj.push(3);
 console.log(obj.push(3))

 