import CanvasRenderer from "./renderers/CanvasRenderer";
import Container from "./display/Container";
export default class Application {
  constructor(options, arg2, arg3, argr, arg5) {
    /**
     *
     */
    if (typeof options === "number") {
      options = Object.assign(
        {
          width: options,
          height: arg2 || settings.RENDER_OPTIONS.height,
          forceCanvas: !!arg4,
          sharedTicker: !!arg5
        },
        arg3
      );
    }

    this._options = options = Object.assign(
      {
        autoStart: true,
        sharedTicker: false,
        forceCanvas: false,
        sharedLoader: false
      },
      options
    );

    this.renderer = new CanvasRenderer(options);
    this.stage = new Container();

    // start th rendering
    if (options.autoStart) {
      this.start();
    }
  }
  get view() {
    return this.renderer.view;
  }
  render() {
    this.renderer.render(this.stage);
  }
  stop() {
    console.log("stop");
  }
  start() {
    console.log("start");
  }
  destory() {
    console.log("destory");
  }
}
