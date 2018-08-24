/**
 * 矩形
 */
export default class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = "RECTANGLE";
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
  copy(r) {
    this.x = r.x;
    this.y = r.y;
    this.width = r.width;
    this.height = r.height;
    return this;
  }
  pad(pX = 0, pY = pX) {
    this.x -= pX;
    this.y -= pY;
    this.width += pX * 2;
    this.height += pY * 2;
  }
  contains(x, y = typeof x === "number" ? x : 0) {
    // 支持contains([Point])
    if (typeof x === "object") return this.contains(p.x, p.y);
    if (this.width <= 0 || this.height <= 0) return false;
    if (
      x >= this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    )
      return true;
    return false;
  }
}
