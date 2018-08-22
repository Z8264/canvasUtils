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
    // const width = texture._frame.width;
    // const height = texture._frame.height;
    let wt = this.transform.worldTransform;
    let dx = 0;
    let dy = 0;
    renderer.context.setTransform(
      wt.a,
      wt.b,
      wt.c,
      wt.d,
      wt.tx * renderer.resolution,
      wt.ty * renderer.resolution
    );
    renderer.context.drawImage(texture.baseTexture.source, 0, 0);
  }
}
