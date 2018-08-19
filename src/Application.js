import CanvasRenderer from './renderers/canvas/CanvasRenderer';
export default class Application {

  constructor(options) {
    /**
     * 
     */
    this.renderer = new CanvasRenderer(options, arg1, arg2);
    // this.stage = new Container();
    // this._ticker = null;
    // this.ticker = options.sharedTicker ? shared : new Ticker();

    // start th rendering
    if (options.autoStart) {
      this.start();
    }
  }
  render() {
    console.log('render');
  }
  stop() {
    console.log('stop');
  }
  start() {
    console.log('start');
  }
  destory() {
    console.log('destory');
  }
}