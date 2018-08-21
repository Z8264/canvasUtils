import CanvasRenderer from "./renderers/CanvasRenderer";
import Container from "./display/Container";
import Ticker from "./ticker/Ticker";
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
    this._ticker = null;
    this.ticker = new Ticker();
    // start th rendering
    if (options.autoStart) {
      this.start();
    }
  }
  get view() {
    return this.renderer.view;
  }
  get ticker() {
    return this._ticker;
  }
  get screen() {
    return this.renderer.screen;
  }
  set ticker(ticker) {
    if (this._ticker) {
      this._ticker.remove(this.render, this);
    }
    this._ticker = ticker;
    if (ticker) {
      ticker.add(this.render, this, -25);
    }
  }
  render() {
    this.renderer.render(this.stage);
  }
  stop() {
    this._ticker.stop();
  }
  start() {
    this._ticker.start();
  }
  destory() {
    console.log("Destroy and don't use after this");
  }
}
