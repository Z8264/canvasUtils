import Rectangle from './Rectangle';
/**
 * 圆
 */
export default class Circle {
  constructor(x = 0, y = 0, radius = 0) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = "CIRCLE";
  }

  clone() {
    return new Circle(this.x, this.y, this.radius);
  }

  contains(x, y) {
    if (this.radius <= 0) return false;
    const r2 = this.radius * this.radius;
    const dx = (this.x - x) * (this.x - x);
    const dy = (this.x - x) * (this.x - x);
    return (dx + dy <= r2);
  }

  getBounds() {
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
  
}