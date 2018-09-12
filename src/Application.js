import CanvasRenderer from "./renderers/CanvasRenderer";
import Container from "./display/Container";
import Ticker from "./ticker/Ticker";
export default class Application {
  constructor(options, arg2, arg3, arg4, arg5) {
    /**
     * options
     */
    if (typeof options === "number") {
      options = Object.assign(
        {
          width: options,
          height: arg2 || 600,
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
    /**
     * renderer
     */
    this.renderer = new CanvasRenderer(options);
    /**
     * stage 舞台
     */
    this.stage = new Container();
    
    /**
     * ticker 循环器
     */
    this._ticker = null;
    this.ticker = new Ticker();

    

    if (options.autoStart) {
      this.start();
    }
  }
  get view() {
    return this.renderer.view;
  }
  get screen() {
    return this.renderer.screen;
  }
  get ticker() {
    return this._ticker;
  }
  set ticker(ticker) {
    if (this._ticker) {
      this._ticker.remove(this.render, this);
    }
    this._ticker = ticker;
    if (ticker) {
      //优先级：-25
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
    // options
    this._options = null;
    // ticker
    if (this._ticker) {
      const oldTicker = this._ticker;

      this.ticker = null;
      oldTicker.destroy();
    }
    // stage
    this.stage.destroy(stageOptions);
    this.stage = null;
    // renderer
    this.renderer.destroy(removeView);
    this.renderer = null;

  }
}
