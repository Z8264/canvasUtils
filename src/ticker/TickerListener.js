/**
 * 事件监听链表
 * @private
 */
export default class TickerListener {
  constructor(fn, context = null, priority = 0, once = false) {
    /**
     * 需要执行的处理函数
     */
    this.fn = fn;
    this.context = context;
    this.priority = priority;
    this.once = once;
    this.next = null;
    this.previous = null;
    this._destroyed = false;
  }
  /**
   * match
   * @param {Function} fn 
   * @param {Function} context 
   * @return {boolean} 
   */
  match(fn, context = null) {
    return this.fn === fn && this.context === context;
  }
  /**
   * emit
   * @param {number} deltaTime 时间增量
   */
  emit(deltaTime) {
    if (this.fn) {
      if (this.context) {
        this.fn.call(this.context, deltaTime);
      } else {
        this.fn(deltaTime);
      }
    }
    const redirect = this.next;
    if (this.once) {
      this.destroy(true);
    }
    if (this._destroyed) {
      this.next = null;
    }
    return redirect;
  }
  /**
   * connect
   * @param {TickerListener} listener 
   */
  connect(listener) {
    this.previous = listener;
    if (listener.next) {
      listener.next.previous = this;
    }
    this.next = listener.next;
    listener.next = this;
  }
  /**
   * destroy
   * @param {boolean} hard 
   */
  destroy(hard = false) {
    // 销毁内容
    this.fn = null;
    this.context = null;
    this._destroyed = true;
    // 重新链接
    if (this.previous) {
      this.previous.next = this.next;
    }
    if (this.next) {
      this.next.previous = this.previous;
    }
    const redirect = this.previous;
    this.next = hard ? null : redirect;
    this.previous = null;
    return redirect;
  }
}
