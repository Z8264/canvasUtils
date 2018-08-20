import DisplayObject from "./DisplayObject";

export default class Container extends DisplayObject {
  constructor() {
    super();
    this.children = [];
  }
  addChild(child) {
    if (arguments.length > 1) {
      for (let i = 0; i < length; i++) {
        this.addChild(arguments[i]);
      }
    } else {
      this.children.push(child);
    }
    return child;
  }
  _renderCanvas(renderer) {}
  renderCanvas(renderer) {
    this._renderCanvas(renderer);
    for (let i = 0, j = this.children.length; i < j; ++i) {
      this.children[i].renderCanvas(renderer);
    }
  }
}