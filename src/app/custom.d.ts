import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    carousel(options?: any): JQuery<TElement>;
  }
}
