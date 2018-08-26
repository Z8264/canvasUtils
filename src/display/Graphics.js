import Container from "./Container";
import Polygon from "../math/Polygon";
import GraphicsData from "./GraphicsData";
export default class Graphics extends Container {
  constructor(nativeLines = false) {
    super();
    this.fillAlpha = 1;
    this.lineWhith = 0;
    this.nativeLines = nativeLines;
    this.lineColor = 0;
    this.lineAlignment = 0.5;
    this.graphicsData = [];
    this.tint = 0xFFFFF;
    this._prevTint = 0xFFFFF;
    this.blenMode = 0;
    this.currentPath = null;
    this._webGL = {};
    this.isMask = false;
    this.boundsPadding = 0;
    this._localBounds = {};
    this.dirty = 0;
    this.fastRectDirty = -1;
    this.clearDirty = 0;
    this.boundsDirty = -1;
    this.cachedSpriteDirty = false;
    this._spriteRect = null;
    this._fastRect = false;
  }
  _renderCanvas(renderer) {
    if (this.isMask === true) {
      return;
    }
    this.render(renderer);
  }
  render(renderer) {
    let r = renderer;
    const ctx = r.context;
    const worldAlpha = this.worldAlpha;
    const transform = this.transform.worldTransform;
    const resolution = r.resolution;
    ctx.setTransform(
      transform.a * resolution,
      transform.b * resolution,
      transform.c * resolution,
      transform.d * resolution,
      transform.tx * resolution,
      transform.ty * resolution
    );
    for (let i = 0; i < this.graphicsData.length; i++) {
      const data = this.graphicsData[i];
      const shape = data.shape;
      const fillColor = data._fillTint;
      const lineColor = data._lineTint;

      ctx.lineWidth = data.lineWidth;

      if (data.type === "POLYGON") {
        ctx.beginPath();

        this.renderPolygon(shape.points, shape.closed, ctx);

        for (let j = 0; j < data.holes.length; j++) {
          this.renderPolygon(data.holes[j].points, true, ctx);
        }

        if (data.fill) {
          ctx.globalAlpha = data.fillAlpha * worldAlpha;
          ctx.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
          ctx.fill();
        }
        if (data.lineWidth) {
          ctx.globalAlpha = data.lineAlpha * worldAlpha;
          ctx.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
          ctx.stroke();
        }
      }
      else if (data.type === "RECTANGLE") {
        if (data.fillColor || data.fillColor === 0) {
          ctx.globalAlpha = data.fillAlpha * worldAlpha;
          ctx.fillStyle = `#${(`00000${(fillColor | 0).toString(16)}`).substr(-6)}`;
          ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        if (data.lineWidth) {
          ctx.globalAlpha = data.lineAlpha * worldAlpha;
          ctx.strokeStyle = `#${(`00000${(lineColor | 0).toString(16)}`).substr(-6)}`;
          ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
      }
    }

  }
  renderPolygon(points, close, ctx) {
    ctx.moveTo(points[0], points[1]);

    for (let j = 1; j < points.length / 2; ++j) {
      ctx.lineTo(points[j * 2], points[(j * 2) + 1]);
    }

    if (close) {
      ctx.closePath();
    }
  }
  beginFill(color = 0, alpha = 1) {
    this.filling = true;
    this.fillColor = color;
    this.fillAlpha = alpha;
    if (this.currentPath) {
      if (this.currentPath.shape.points.length <= 2) {
        this.currentPath.fill = this.filling;
        this.currentPath.fillColor = this.fillColor;
        this.currentPath.fillAlpha = this.fillAlpha;
      }
    }
  }
  lineStyle(lineWidth = 0, color = 0, alpha = 1, alignment = 0.5) {
    this.lineWidth = lineWidth;
    this.lineColor = color;
    this.lineAlpha = alpha;
    this.lineAlignment = alignment;
    if (this.currentPath) {
      if (this.currentPath.shape.points.length) {

      } else {
        this.currentPath.lineWidth = this.lineWidth;
        this.currentPath.lineColor = this.lineColor;
        this.currentPath.lineAlpha = this.lineAlpha;
        this.currentPath.lineAlignment = this.lineAlignment;
      }
    }
    return this;
  }
  lineTo(x, y) {
    this.currentPath.shape.points.push(x, y);
    this.dirty++;
    return this;
  }
  moveTo(x, y) {
    const shape = new Polygon([x, y]);
    shape.closed = false;
    this.drawShape(shape);
    return this;
  }
  drawShape(shape) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length <= 2) {
        this.graphicsData.pop();
      }
    }
    this.currentPath = null;

    const data = new GraphicsData(
      this.lineWidth,
      this.lineColor,
      this.lineAlpha,
      this.fillColor,
      this.fillAlpha,
      this.filling,
      this.nativeLines,
      shape,
      this.lineAlignment
    );

    this.graphicsData.push(data);

    if (data.type === "POLYGON") {
      data.shape.closed = data.shape.closed;
      this.currentPath = data;
    }

    this.dirty++;

    return data;
  }
  endFill() {
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;
    return this;
  }
}