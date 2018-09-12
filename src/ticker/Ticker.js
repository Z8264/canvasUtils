import TickerListener from "./TickerListener";
/**
 * 定时器
 */
export default class Ticker {
  constructor() {
    this._head = new TickerListener(null, null, Infinity);
    this._requestId = null;
    this._maxElapsedMS = 100;

    this.autoStart = false;
    /**
     * 时间增量
     * @default 1
     */
    this.deltaTime = 1;
    /**
     * 速度
     * @default 1/0.06
     */
    this.speed = 1;
    /**
     * 是否开始
     * @default false
     */
    this.started = false;
    this.elapsedMS = 1 / 0.06;
    this.lastTime = -1;

    /**
     *
     * @param {number} time
     */
    this._tick = time => {
      this._requestId = null;

      if (this.started) {
        this.updata(time);
        if (this.started && this._requestId === null && this._head.next) {
          this._requestId = requestAnimationFrame(this._tick);
        }
      }
    };
  }
  _requestIfNeeded() {
    if (this._requestId === null && this._head.next) {
      this.lastTime = performance.now();
      this._requestId = requestAnimationFrame(this._tick);
    }
  }
  _cancelIfNeeded() {
    if (this._requestId !== null) {
      cancelAnimationFrame(this._requestId);
      this._requestId = null;
    }
  }
  _startIfpossible() {
    if (this.started) {
      this._requestIfNeeded();
    } else if (this.autoStart) {
      this.start();
    }
  }
  _addListener(listener) {
    let current = this._head.next;
    let previous = this._head;
    if (!current) {
      listener.connect(previous);
    } else {
      while (current) {
        if (listener.priority > current.priority) {
          listener.connect(previous);
          break;
        }
        previous = current;
        current = current.next;
      }

      if (!listener.previous) {
        listener.connect(previous);
      }

      this._startIfpossible();
      return this;
    }
  }

  add(fn, context, priority = 100) {
    return this._addListener(new TickerListener(fn, context, priority));
  }

  addOnce(fn, context, priority = 100) {
    return this._addListener(new TickerListener(fn, context, priority, true));
  }

  remove(fn, context) {
    let listener = this._head.next;
    while (listener) {
      if (listener.match(fn, context)) {
        listener = listener.destroy();
      } else {
        listener = listener.next;
      }
    }
    if (!this._head.next) {
      this._cancelIfNeeded();
    }
    return this;
  }

  updata(currentTime = performance.now()) {
    let elapsedMS;
    if (currentTime > this.lastTime) {
      elapsedMS = this.elapsedMS = currentTime - this.lastTime;
      if (elapsedMS > this._maxElapsedMS) {
        elapsedMS = this._maxElapsedMS;
      }
      this.deltaTime = elapsedMS * 0.06 * this.speed;

      const head = this._head;
      let listener = head.next;
      while (listener) {
        listener = listener.emit(this.deltaTime);
      }
      if (!head.next) {
        this._cancelIfNeeded();
      }
    } else {
      this.deltaTime = this.elapsedMS = 0;
    }
    this.lastTime = currentTime;
  }

  start() {
    if (!this.started) {
      this.started = true;
      this._requestIfNeeded();
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      this._cancelIfNeeded();
    }
  }

  get FPS() {
    return 1000 / this.elapsedMS;
  }

  get minFPS() {
    return 1000 / this._maxElapsedMS;
  }

  set minFPS(fps) {
    const minFPMS = Math.min(Math.max(0, fps) / 1000, 0.06);
    this._maxElapsedMS = 1 / minFPMS;
  }
}
