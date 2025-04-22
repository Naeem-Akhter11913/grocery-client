import $ from "jquery";

declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

export default $;
