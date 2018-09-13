import Transform from "./Transform";
import Bounds from "./Bounds";
/**
 * 渲染基础类
 * 抽象类，只能继承(extends)不能直接使用
 */
export default class DisplayObject {
  constructor() {
    this.tempDisplayObjectParent = null;
    /**
     * transform
     */
    this.transform = new Transform();
    /**
     * 透明度
     */
    this.alpha = 1;
    /**
     * 是否可见
     * 如果设置为false，该对象将不被渲染
     */
    this.visible = true;
    /**
     * 父容器
     * @member {Container}
     */
    this.parent = null;
    /**
     * 实际显示的透明度 = 本身透明度乘以父容器透明度
     */
    this.worldAlpha = 1;

    /**
     * filter
     */
    // this.filterArea = null;
    // this._filters = null;
    // this._enabledFilters = null;

    /**
     * bounds
     */
    // this.bounds = new Bounds();
    // this.boundsId = 0;
    // this._lastBoundsID = -1;
    // this._boundsRect = null;
    // this._localBoundsRect = null;

    /**
     * mask
     */
    // this._mask = null;
    // this._destroyed = false;
  }

  /**
   * update transform
   * 在 container 中被复写
   */
  updateTransform() {}

  renderCanvas(renderer) {}
  setTransform(
    x = 0,
    y = 0,
    scaleX = 1,
    scaleY = 1,
    rotation = 0,
    skewX = 0,
    skewY = 0,
    pivotX = 0,
    pivotY = 0
  ) {
    this.position.x = x;
    this.position.y = y;
    this.scale.x = scaleX;
    this.scale.y = scaleY;
    this.rotation = rotation;
    this.skew.x = skewX;
    this.skew.y = skewY;
    this.pivot.x = pivotX;
    this.pivot.y = pivotY;
    return this;
  }
  get x() {
    return this.position.x;
  }
  set x(value) {
    this.transform.position.x = value;
  }
  get y() {
    return this.position.y;
  }
  set y(value) {
    this.transform.position.y = value;
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(value) {
    this.transform.scale.copy(value);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(value) {
    this.transform.rotation = value;
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(value) {
    this.transform.pivot.copy(value);
  }
  get position() {
    return this.transform.position;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get _tempDisplayObjectParent() {
    if (this.tempDisplayObjectParent === null) {
      this.tempDisplayObjectParent = new DisplayObject();
    }

    return this.tempDisplayObjectParent;
  }
  destroy() {}

  // get _tempDisplayObjectParent() {}
  // _recursivePostUpdateTransform() {}
  // getBounds() {}
  // getLocalBounds() {}
  // toGlobal() {}
  // toLocal() {}
  // setParent(container) {}
  // renderWebGL() {}
}
