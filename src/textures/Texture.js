import BaseTexture from "./BaseTexture";

export default class Texture {
  constructor(baseTexture, frame, orig, trim, rotate) {
    this.baseTexture = baseTexture;
  }
  static from(source) {
    return new Texture(new BaseTexture(source));
  }
  update() {
    this.baseTexture.update();
  }
}
