import Container from "./Container";
import Texture from "../textures/Texture";

export default class Sprite extends Container {
  constructor(texture) {
    super();
    this.texture = texture;
  }
  static from(source) {
    return new Sprite(Texture.from(source));
  }
  _renderCanvas(renderer) {
    const texture = this.texture;
    renderer.context.drawImage(texture.baseTexture.source, 0, 0);
  }
}
