import SystemRenderer from "./SystemRenderer";

export default class CanvasRenderer extends SystemRenderer {
  constructor(options, arg2, arg3) {
    super("canvas", options, arg2, arg3);

    this.rootContext = this.view.getContext("2d");

    this.context = this.rootContext;

    console.log(options);
    this.resize(this.options.width, this.options.height);
  }
  render(displayObject) {
    if (!this.view) return;

    const ctx = this.context;

    this.lastObjectRendered = displayObject;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (this.transparent) {
      ctx.clearRect(0, 0, this.width, this.height);
    } else {
      ctx.fillStyle = this._backgroundColorString;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    displayObject.renderCanvas(this);
    ctx.restore();
  }
  clear() {}
}
