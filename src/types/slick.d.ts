// types/slick.d.ts
import 'jquery';

declare module 'jquery' {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}
