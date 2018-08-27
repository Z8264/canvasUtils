import SystemRenderer from "./SystemRenderer";

export default class CanvasRenderer extends SystemRenderer {
  constructor(options, arg2, arg3) {
    super("canvas", options, arg2, arg3);

    this.rootContext = this.view.getContext("2d", { alpha: this.transparent });

    this.context = this.rootContext;

    this.resize(this.options.width, this.options.height);
  }
  render(displayObject) {
    if (!this.view) return;

    const ctx = this.context;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // 重置图像
    if (this.transparent) {
      ctx.clearRect(0, 0, this.width, this.height);
    } else {
      ctx.fillStyle = this._backgroundColorString;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    // 更新worldtransform
    const cacheParent = displayObject.parent;
    displayObject.parent = this._tempDisplayObjectParent;
    displayObject.updateTransform();
    displayObject.parent = cacheParent;

    // 调用渲染方法renderCanvas
    displayObject.renderCanvas(this);
    ctx.restore();
  }
  clear() {}
}
