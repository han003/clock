export class Tile {
  readonly text: string;
  readonly callback: Function;
  readonly cssClass: string;

  constructor(text: string, callback: Function, context: Object, cssClass = '') {
    this.text = text;
    this.callback = callback.bind(context);
    this.cssClass = cssClass;
  }
}
