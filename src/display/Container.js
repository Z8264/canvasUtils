import DisplayObject from "./DisplayObject";

export default class Container extends DisplayObject {
  constructor() {
    super();
    this.children = [];
  }
  addChild(child) {
    if (arguments.length > 1) {
      for (let i = 0; i < length; i++) {
        this.addChild(arguments[i]);
      }
    } else {
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.children.push(child);
    }
    return child;
  }
  /**
   * 用来渲染对象本身，在子类的方法中被复写
   * @param {CanvasRenderer}} renderer
   */
  _renderCanvas(renderer) {}
  /**
   * 渲染该对象，并依次调用子元素的渲染方法
   * @param {CanvasRenderer} renderer
   */
  renderCanvas(renderer) {
    if (!this.visible || this.worldAlpha <= 0) return;

    this._renderCanvas(renderer);

    for (let i = 0, j = this.children.length; i < j; ++i) {
      this.children[i].renderCanvas(renderer);
    }
  }
  /**
   * 更新transform
   */
  updateTransform() {
    this.transform.updateTransform(this.parent.transform);

    this.worldAlpha = this.alpha * this.parent.worldAlpha;

    for (let i = 0, j = this.children.length; i < j; ++i) {
      const child = this.children[i];
      child.visible && child.updateTransform();
    }
  }
  /**
   * 销毁对象
   * @param {object} options
   */
  distroy(options) {}
}
