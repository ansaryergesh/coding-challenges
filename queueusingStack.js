/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.first = []
    this.second = []
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
      let length = this.first.length;
      for (let i=0; i<length;i++ ) {
          this.second.push(this.first.pop())
      }
      this.second.push(x);
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
      let length = this.second.length;
      for (let i=0; i<length; i++) {
          this.first.push(this.second.pop());
      }
      
      return this.first.pop();
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
    if (this.second.length > 0) {
        return this.second[0];
    }
    return this.first[this.first.length-1];
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
      if (this.first.length == 0 && this.second.length == 0) return true;
      return false;
  };
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */