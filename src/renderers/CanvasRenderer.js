import SystemRenderer from "./SystemRenderer";

export default class CanvasRenderer extends SystemRenderer {
  /**
   * @param {number}  [options.width] - 屏幕宽度
   * @param {number}  [options.height] - 屏幕高度
   * @param {number}  [options.resolution = 1] - 分辨率
   * @param {boolean} [options.transparent = false] - 背景是否透明
   * @param {number}  [options.backgroundColor = 0X000000] - 背景颜色
   */
  constructor(options) {
    super(options);
    /**
     * context
     */
    this.context = this.view.getContext("2d", { alpha: this.transparent });
    /**
     * resize
     */
    this.resize(this.options.width, this.options.height);
  }
  /**
   * 渲染 displayObject
   * @param {DisplayObject} displayObject
   */
  render(displayObject) {
    if (!this.view) return;

    // ctx
    const ctx = this.context;

    // ctx - save
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

    // ctx - restore
    ctx.restore();
  }
  clear(clearColor) {}
  destroy() {}
}
