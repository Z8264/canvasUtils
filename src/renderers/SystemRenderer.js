import Container from "../display/Container";
import Rectangle from "../math/Rectangle";

const DEFAULT_OPTIONS = {
  // view: null,
  // antialias: false, // 抗锯齿，平滑 /'ænti'eiliəs/
  // forceFXAA: false,
  // autoResize: false,
  // clearBeforeRender: true,
  // preserveDrawingBuffer: false,
  // roundPixels: false,
  // legacy: false,
  width: 800,
  height: 600,
  resolution: 1,
  transparent: false,
  backgroundColor: 0x000000
};

export default class SystemRenderer {
  /**
   * @param {number}  [options.width] - 屏幕宽度
   * @param {number}  [options.height] - 屏幕高度
   * @param {number}  [options.resolution = 1] - 分辨率
   * @param {boolean} [options.transparent = false] - 背景是否透明
   */
  constructor(options) {
    /**
     * options 配置
     */
    this.options = options = Object.assign({}, DEFAULT_OPTIONS, options);
    /**
     * 屏幕
     * @member {Rectangle}
     */
    this.screen = new Rectangle(0, 0, options.width, options.height);
    /**
     * canvas 画布
     * @member {HTMLCanvasElement}
     */
    this.view = document.createElement("canvas");
    /**
     * 背景是否透明
     * @member {boolean}
     * @default false
     */
    this.transparent = options.transparent;
    /**
     * 分辨率
     * @member {number}
     * @default 1
     */
    this.resolution = options.resolution;

    /**
     * 临时的parent，用于当前对象显示
     * @private
     */
    this._tempDisplayObjectParent = new Container();

    this._backgroundColorString = "#000000";
  }
  get width() {
    return this.view.width;
  }
  get height() {
    return this.view.height;
  }
  resize(w, h) {
    this.screen.width = w;
    this.screen.height = h;
    this.view.width = w * this.resolution;
    this.view.height = h * this.resolution;
  }
  destroy() {}
}
