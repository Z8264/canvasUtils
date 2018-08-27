import Point from "../math/Point";
import ObservablePoint from "../math/ObservablePoint";
import Matrix from "../math/Matrix";

export default class Transform {
  constructor() {
    /**
     * 全局 matrix transform.
     */
    this.worldTransform = new Matrix();
    this.localTransform = new Matrix();
    this._worldID = 0;
    this._parentID = 0;

    /**
     * 位置
     */
    this.position = new Point(0, 0);

    /**
     * 缩放比例
     */
    this.scale = new Point(1, 1);

    /**
     * 倾斜(skew)
     */
    this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);

    /**
     * 中心点(pivot /'pɪvət/)，对象以中心点为中心旋转
     */
    this.pivot = new Point(0, 0);

    /**
     * 旋转(rotation)数值：弧度(radians)
     */
    this._rotation = 0;

    this._cx = 1; // cos rotation + skewY;
    this._sx = 0; // sin rotation + skewY;
    this._cy = 0; // cos rotation + Math.PI/2 - skewX;
    this._sy = 1; // sin rotation + Math.PI/2 - skewX;
  }

  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew._y);
    this._sx = Math.sin(this._rotation + this.skew._y);
    this._cy = -Math.sin(this._rotation - this.skew._x);
    this._sy = Math.cos(this._rotation - this.skew._x);
  }

  updateLocalTransform() {
    const lt = this.localTransform;

    lt.a = this._cx * this.scale.x;
    lt.b = this._sx * this.scale.x;
    lt.c = this._cy * this.scale.y;
    lt.d = this._sy * this.scale.y;

    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
  }

  updateTransform(parentTransform) {
    const lt = this.localTransform;
    const pt = parentTransform.worldTransform;
    const wt = this.worldTransform;

    lt.a = this._cx * this.scale.x;
    lt.b = this._sx * this.scale.x;
    lt.c = this._cy * this.scale.y;
    lt.d = this._sy * this.scale.y;

    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);

    wt.a = lt.a * pt.a + lt.b * pt.c;
    wt.b = lt.a * pt.b + lt.b * pt.d;
    wt.c = lt.c * pt.a + lt.d * pt.c;
    wt.d = lt.c * pt.b + lt.d * pt.d;
    wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
    wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

    this._worldID++;
  }

  setFromMatrix(matrix) {
    matrix.decompose(this);
  }

  get rotation() {
    return this._rotation;
  }

  set rotation(value) {
    this._rotation = value;
    this.updateSkew();
  }
}
