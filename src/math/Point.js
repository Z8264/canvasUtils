export default class Point {
  constructor(x = 0, y = 0) {
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
  set(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
