export default class BaseTexture {
  constructor(source, scaleMode, resolution) {
    this.uid = 0;
    this.touched = 0;
    this.resolution = resolution || 1;
    this.width = 100;
    this.height = 100;
    this.realWidth = 100;
    this.realHeight = 100;
    this.scaleMode = scaleMode !== undefined ? scaleMode : 1;
    this.hasLoaded = false;
    this.isLoading = false;
    this.source = null;
    this.imageType = null;
    this.sourceScale = 1.0;
    this.imageUrl = source.src;

    if (source) {
      this.loadSource(source);
    }
  }
  update() {
    this.realWidth = this.source.width;
    this.realHeight = this.source.height;

    this.width = this.realWidth / this.resolution;
    this.height = this.realHeight / this.resolution;
  }
  loadSource(source) {
    this.source = source;
    this.update();
  }
}
