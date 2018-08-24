/**
 * 点
 * x - 横坐标
 * y - 纵坐标
 * 如果没有设置y，则 y = x
 */
export default class Point {
  constructor(x = 0, y = x) {
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  copy(p) {
    this.set(p.x, p.y);
  }
  equals(p) {
    return p.x === this.x && p.y === this.y;
  }
  set(x = 0, y = x) {
    this.x = x;
    this.y = y;
  }
}
