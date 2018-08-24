import Transform from "./Transform";

export default class DisplayObject {
  constructor() {
    this.tempDisplayObjectParent = null;
    this.transform = new Transform();
    this.alpha = 1;
    this.visible = true;
    this.renderable = true;
    this.parent = null;
    this.worldAlpha = 1;
    this.filterArea = null;
    this._filters = null;
    this._enabledFilters = null;

    this._destroyed = false;
  }
  get _tempDisplayObjectParent() {}
  updateTransform() {}
  _recursivePostUpdateTransform() {}
  getBounds() {}
  getLocalBounds() {}
  toGlobal() {}
  toLocal() {}
  renderWebGL() {}
  setParent(container) {
    if (!container || !container.addChild) {
      throw new Error("setParent: Argument must be a Container");
    }
    container.addChild(this);
    return container;
  }

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
    this.position = {
      x: x,
      y: y
    };
    this.scale = {
      x: scaleX,
      y: scaleY
    };
    this.rotation = rotation;
    this.skew = {
      x: skewX,
      y: skewY
    };
    this.pivot = {
      x: pivotX,
      y: pivotY
    };
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
}
