import Rectangle from '../math/Rectangle';

export default class Bounds {
    constructor() {
        this.minX = Infinity;
        this.minY = Infinity;
        this.maxX = -Infinity;
        this.maxY = -Infinity;
        this.rect = null;
    }
    isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY;
    }
    clear() {

    }
    getRectangle(rect) {

    }
    addPoint(point) { }
    addQuad(vertices) {

    }
    addFrame(transform, x0, y0, x1, y1) { }
    addVertices(transform, vertices, beginOffset, endOffset) { }
    addBounds(bounds) { }
    addBoundsMask(bounds, mask) { }
    addBoundsArea(bounds, area) { }
}