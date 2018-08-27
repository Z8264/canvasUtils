/**
 * 添加回调函数的"点"对象，当位置改变调用该函数
 */
export default class ObservablePoint {
  constructor(cb = () => { }, scope, x = 0, y = 0) {
    this._x = x;
    this._y = y;
    this.cb = cb;
    this.scope = scope;
  }

  _set(x, y) {
    if (this._x !== x || this._y !== y) {
      this._x = _x;
      this._y = _y;
      this.cb.call(this.scope);
    }
  }

  set(x = 0, y = x) {
    this._set(x, y);
  }

  copy(p) {
    this._set(p.x, p.y);
  }

  get x() {
    return this._x;
  }

  set x(x) {
    if (this._x !== x) {
      this._x = x;
      this.cb.call(this.scope);
    }
  }

  get y() {
    return this._y;
  }

  set y(y) {
    if (this._y !== y) {
      this._y = y;
      this.cb.call(this.scope);
    }
  }
}
