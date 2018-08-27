import Point from "./Point";
/**
 * 多边形
 * polygon /'pɒlɪg(ə)n/
 */
export default class Polygon {
  constructor(...points) {
    if (Array.isArray(points[0])) {
      points = points[0];
    }

    if (points[0] instanceof Point) {
      const p = [];
      for (let i = 0; i < points.length; i++) {
        p.push(points[i].x, points[i].y);
      }
      points = p;
    }
    this.close = true;
    this.points = points;
    this.type = "POLYGON";
  }

  clone() {
    return new Polygon(this.points.slice());
  }

  close() {
    const p = this.points;
    if (p[0] !== p[p.length - 2] || p[1] !== p[p.length - 1]) {
      p.push(p[0], p[1]);
    }
  }

  contains(x, y) {}
}
