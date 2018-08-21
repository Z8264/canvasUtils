const DEFAULT_OPTIONS = {
  view: null,
  // antialias: false,
  // forceFXAA: false,
  autoResize: false,
  transparent: false,
  backgroundColor: 0x000000,
  // clearBeforeRender: true,
  // preserveDrawingBuffer: false,
  // roundPixels: false,
  width: 800,
  height: 600,
  legacy: false
};

export default class SystemRenderer {
  constructor(system, options, arg2, arg3) {
    // 支持 (system,screenWidth,screenHeight,options)
    if (typeof options === "number") {
      options = Object.assign(
        {
          width: options,
          height: arg2 || DEFAULT_OPTIONS.height
        },
        arg3
      );
    }
    // 合并默认设置
    this.options = options = Object.assign({}, DEFAULT_OPTIONS, options);

    this.view = document.createElement("canvas");

    this.transparent = options.transparent;

    this._backgroundColorString = "#000000";
  }
  get width() {
    return this.view.width;
  }
  get height() {
    return this.view.height;
  }
  resize(w, h) {
    this.view.width = w;
    this.view.height = h;
  }
}
