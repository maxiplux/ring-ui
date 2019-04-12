!function(n){function e(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var o={};e.m=n,e.c=o,e.i=function(n){return n},e.d=function(n,o,r){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=986)}({0:function(n,e){n.exports=vendor_lib},1:function(n,e,o){n.exports=o(0)(453)},10:function(n,e,o){n.exports=o(0)(403)},13:function(n,e,o){e=n.exports=o(9)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},14:function(n,e,o){function r(n,e){for(var o=0;o<n.length;o++){var r=n[o],t=h[r.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](r.parts[i]);for(;i<r.parts.length;i++)t.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function t(n,e){for(var o=[],r={},t=0;t<n.length;t++){var i=n[t],a=e.base?i[0]+e.base:i[0],c=i[1],l=i[2],s=i[3],f={css:c,media:l,sourceMap:s};r[a]?r[a].parts.push(f):o.push(r[a]={id:a,parts:[f]})}return o}function i(n,e){var o=m(n.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===n.insertAt)r?r.nextSibling?o.insertBefore(e,r.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),w.push(e);else if("bottom"===n.insertAt)o.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var t=m(n.insertAt.before,o);o.insertBefore(e,t)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=f();o&&(n.attrs.nonce=o)}return s(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",s(e,n.attrs),i(n,e),e}function s(n,e){Object.keys(e).forEach(function(o){n.setAttribute(o,e[o])})}function f(){return o.nc}function u(n,e){var o,r,t,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var s=x++;o=y||(y=c(e)),r=p.bind(null,o,s,!1),t=p.bind(null,o,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=l(e),r=g.bind(null,o,e),t=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=c(e),r=d.bind(null,o),t=function(){a(o)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else t()}}function p(n,e,o,r){var t=o?"":r.css;if(n.styleSheet)n.styleSheet.cssText=k(e,t);else{var i=document.createTextNode(t),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var o=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}function g(n,e,o){var r=o.css,t=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&t;(e.convertToAbsoluteUrls||i)&&(r=_(r)),t&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},b=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,o){if("function"==typeof n)return n();if(void 0===e[n]){var r=v.call(this,n,o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),y=null,x=0,w=[],_=o(60);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=t(n,e);return r(o,e),function(n){for(var i=[],a=0;a<o.length;a++){var c=o[a],l=h[c.id];l.refs--,i.push(l)}n&&r(t(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete h[l.id]}}}};var k=function(){var n=[];return function(e,o){return n[e]=o,n.filter(Boolean).join("\n")}}()},1569:function(n,e,o){"use strict";var r=o(47),t=o.n(r),i=o(541);t.a.module("TestApp",[i.a])},18:function(n,e,o){n.exports=o(0)(360)},24:function(n,e,o){n.exports=o(0)(426)},3:function(n,e,o){n.exports=o(0)(477)},314:function(n,e,o){var r=o(316);"string"==typeof r&&(r=[[n.i,r,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,o(14)(r,t),r.locals&&(n.exports=r.locals)},316:function(n,e,o){e=n.exports=o(9)(!1),e.i(o(13),""),e.i(o(4),void 0),e.push([n.i,".checkbox_0e1 {\n  position: relative;\n\n  display: inline-block;\n\n  text-align: left;\n\n  color: #1f2326;\n\n  color: var(--ring-text-color);\n  outline: none\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.checkbox_0e1:hover .cell_b2a {\n    transition: background-color 0.3s ease-out;\n    transition: background-color var(--ring-ease);\n\n    border-color: #80c6ff;\n\n    border-color: var(--ring-border-hover-color);\n  }}\n\n.cell_b2a {\n  position: relative;\n  top: -2px;\n\n  display: inline-block;\n\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n\n  -webkit-user-select: none;\n\n     -moz-user-select: none;\n\n      -ms-user-select: none;\n\n          user-select: none;\n  transition: border-color 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out;\n  transition: border-color var(--ring-ease), background-color var(--ring-ease), box-shadow var(--ring-ease);\n  vertical-align: middle;\n  pointer-events: none;\n\n  border: 1px solid #b8d1e5;\n\n  border: 1px solid var(--ring-borders-color);\n  border-radius: 3px;\n  background-color: #fff;\n  background-color: var(--ring-content-background-color);\n}\n\n.icon_f57.icon_f57 {\n  position: absolute;\n  top: -12px;\n  left: -1px;\n\n  width: 16px;\n  height: 16px;\n\n  transition: opacity 0.15s ease-out, transform 0.15s ease-out;\n\n  transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease);\n\n  opacity: 0\n}\n\n.icon_f57.icon_f57 svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n.input_2c2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  margin: 0;\n\n  cursor: pointer;\n\n  opacity: 0\n}\n\n.input_2c2:checked + .cell_b2a {\n    border-color: #80c6ff;\n    border-color: var(--ring-border-hover-color);\n    background-color: #d4edff;\n    background-color: var(--ring-selected-background-color)\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n\n.input_2c2:checked + .cell_b2a .icon_f57 {\n      transform: translateY(8px);\n\n      opacity: 1;\n    }\n\n.input_2c2:focus + .cell_b2a,\n  .input_2c2.focus_43b + .cell_b2a {\n    transition: background-color 0.3s ease-out;\n    transition: background-color var(--ring-ease);\n\n    border-color: #80c6ff;\n\n    border-color: var(--ring-border-hover-color);\n    box-shadow: 0 0 0 1px #80c6ff;\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n.input_2c2[disabled] {\n    pointer-events: none;\n  }\n\n.input_2c2[disabled] + .cell_b2a {\n    border-color: #dfe5eb;\n    border-color: var(--ring-line-color);\n    background-color: #fff;\n    background-color: var(--ring-content-background-color);\n  }\n\n.input_2c2 {\n\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.input_2c2[disabled]:checked + .cell_b2a .icon_f57 {\n    opacity: 0.5;\n  }\n\n.input_2c2[disabled] ~ .label_25e {\n    color: #999;\n    color: var(--ring-disabled-color);\n  }\n\n.label_25e {\n  margin-left: 8px;\n\n  line-height: normal;\n}\n",""]),e.locals={unit:""+o(4).locals.unit,checkboxSize:"14px",checkbox:"checkbox_0e1",cell:"cell_b2a",icon:"icon_f57",input:"input_2c2",focus:"focus_43b",label:"label_25e"}},33:function(n,e,o){n.exports=o(0)(261)},4:function(n,e,o){e=n.exports=o(9)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n    display: block;\n    clear: both;\n\n    content: \'\';\n  }\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},413:function(n,e,o){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}o.d(e,"a",function(){return c});var c=function(){function n(){for(var e=this,o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];r(this,n),a(this,"$inject",{}),this.constructor.$inject.forEach(function(n,o){e.$inject[n]=t[o]})}return i(n,null,[{key:"controller",get:function(){return this}}]),n}();a(c,"$inject",[])},434:function(n,e,o){"use strict";function r(n,e){return a(n)||i(n,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(n,e){var o=[],r=!0,t=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(n){t=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(t)throw i}}return o}function a(n){if(Array.isArray(n))return n}var c=o(3),l=(o.n(c),o(1)),s=(o.n(l),o(7)),f=(o.n(s),o(18)),u=(o.n(f),o(24)),p=(o.n(u),o(47)),d=o.n(p),g=o(33),h=(o.n(g),o(78)),b=o(438),v=o(79),m=o.n(v),y=o(445),x=o.n(y),w=d.a.module("Ring.icon",[b.a]),_="data:image/svg+xml;base64,";w.directive("rgIcon",function(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:'<span class="'.concat(x.a.glyphNg,'" rg-template="normalizedGlyph" ng-style="style"></span>'),controller:["$scope",function(n){function e(n){return 0===n.indexOf(_)?window.atob(n.replace(_,"")):n}n.$watch("glyph",function(o){o&&(n.normalizedGlyph=e(o))})}],link:function(n,e,o){o.$addClass("ring-icon"),o.$addClass(m.a.icon),n.$watch("loading",function(n){n?o.$addClass(m.a.loading):o.$removeClass(m.a.loading)}),n.$watch(function(){return n.color&&h.a[n.color]&&m.a[h.a[n.color]]},function(n,e){n&&(o.$addClass(n),e&&e!==n&&o.$removeClass(e))}),n.$watchGroup(["size","width","height"],function(e){var o=r(e,3),t=o[0],i=o[1],a=o[2];if(t&&!i&&!a){var c="".concat(t,"px");return void(n.style={width:c,height:c})}n.style={},i&&(n.style.width="".concat(i,"px")),a&&(n.style.height="".concat(a,"px"))})}}}),e.a=w.name},438:function(n,e,o){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e,o){return e&&i(n.prototype,e),o&&i(n,o),n}function c(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(n):e}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}var d=o(18),g=(o.n(d),o(3)),h=(o.n(g),o(1)),b=(o.n(h),o(47)),v=o.n(b),m=o(413),y=v.a.module("Ring.template",[]),x=function(n){function e(){var n,o;t(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];o=c(this,(n=l(e)).call.apply(n,[this].concat(i))),p(s(o),"currentScope",null),p(s(o),"render",function(n){var e=o.$inject,r=e.$scope,t=e.$element,i=e.$compile;o.cleanup(),o.currentScope=r.$new(),o.currentScope.$evalAsync(function(){t.html(n),i(t.contents())(o.currentScope)})});var f=o.$inject,u=f.$scope,d=f.$attrs;return u.$watch(d.rgTemplate||d.template,o.render),o}return f(e,n),a(e,[{key:"cleanup",value:function(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}]),e}(m.a);p(x,"$inject",["$scope","$element","$attrs","$compile"]),y.directive("rgTemplate",function(){return{controller:x}}),e.a=y.name},444:function(n,e,o){e=n.exports=o(9)(!1),e.push([n.i,".glyphNg_8ae {\n  display: inline-block\n}\n.glyphNg_8ae > svg {\n    display: inline-block;\n\n    vertical-align: middle;\n    pointer-events: none;\n  }\n",""]),e.locals={glyphNg:"glyphNg_8ae"}},445:function(n,e,o){var r=o(444);"string"==typeof r&&(r=[[n.i,r,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,o(14)(r,t),r.locals&&(n.exports=r.locals)},47:function(n,e,o){n.exports=o(0)(258)},5:function(n,e,o){n.exports=o(0)(407)},541:function(n,e,o){"use strict";var r=o(18),t=(o.n(r),o(47)),i=o.n(t),a=o(62),c=o.n(a),l=o(434),s=o(556),f=o(314),u=o.n(f),p=i.a.module("Ring.checkbox",[l.a]),d=0;p.directive("rgCheckbox",function(){return{restrict:"E",transclude:!0,replace:!0,template:o.i(s.a)('\n<label class="'.concat(u.a.checkbox,'">\n  <input\n    data-proxy-ng-disabled\n    data-proxy-ng-model\n    data-proxy-ng-change\n    data-proxy-ng-true-value\n    data-proxy-ng-false-value\n    data-proxy-name\n    data-test="ring-checkbox"\n    type="checkbox"\n    class="').concat(u.a.input,'"\n  />\n  <span class="').concat(u.a.cell,'">\n    <rg-icon class="').concat(u.a.icon,'" glyph="{{:: checkmarkIcon}}" />\n  </span><span class="').concat(u.a.label,'" ng-transclude></span>\n</label>\n    ')),link:function(n,e){n.checkmarkIcon=c.a;var o=e[0].query('input[type="checkbox"]'),r="rg-checkbox-"+d++;e[0].setAttribute("for",r),o.setAttribute("id",r)}}}),e.a=p.name},556:function(n,e,o){"use strict";function r(n,e){return function(o,r){var t=e||Object.keys(r.$attr),i=n;return t.forEach(function(n){if(void 0!==r[n]){var e=r.$attr[n],o=r[n],t="".concat("data-proxy-").concat(e).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a="".concat(e,'="').concat(o,'"');i=i.replace(RegExp("".concat(t,'(="")*'),"g"),a)}}),i}}var t=o(565),i=(o.n(t),o(24)),a=(o.n(i),o(7)),c=(o.n(a),o(8)),l=(o.n(c),o(5)),s=(o.n(l),o(10));o.n(s),e.a=r},565:function(n,e,o){n.exports=o(0)(424)},60:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var o=e.protocol+"//"+e.host,r=o+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(t))return n;var i;return i=0===t.indexOf("//")?t:0===t.indexOf("/")?o+t:r+t.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},62:function(n,e){n.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M6.16 14.41L1.37 9.66l1.26-1.28 3.24 3.21L13.23.5l1.5 1-8.57 12.91z"></path></svg>'},7:function(n,e,o){n.exports=o(0)(478)},78:function(n,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return t});var r={BLUE:"blue",DEFAULT:"",GRAY:"gray",GREEN:"green",MAGENTA:"magenta",RED:"red",WHITE:"white"},t={Size12:12,Size14:14,Size16:16,Size18:18,Size20:20,Size24:24,Size32:32,Size40:40,Size48:48,Size64:64,Size96:96,Size128:128}},79:function(n,e,o){var r=o(97);"string"==typeof r&&(r=[[n.i,r,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,o(14)(r,t),r.locals&&(n.exports=r.locals)},8:function(n,e,o){n.exports=o(0)(90)},9:function(n,e){function o(n,e){var o=n[1]||"",t=n[3];if(!t)return o;if(e&&"function"==typeof btoa){var i=r(t);return[o].concat(t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"})).concat([i]).join("\n")}return[o].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=o(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(r[i]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&r[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},97:function(n,e,o){e=n.exports=o(9)(!1),e.i(o(13),""),e.push([n.i,".icon_6f4 {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph_ce7 {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none\n}\n\n.glyph_ce7[width='10'] {\n    vertical-align: -1px;\n  }\n\n.glyph_ce7[width='14'] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n.glyph_ce7[width='16'] {\n    vertical-align: -3px;\n  }\n\n.glyph_ce7[width='20'] {\n    vertical-align: -2px;\n  }\n\n.gray_dda {\n  color: #999;\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover_254 {\n  color: #80c6ff;\n  color: var(--ring-icon-hover-color);\n}\n\n.green_706 {\n  color: #59a869;\n  color: var(--ring-icon-success-color);\n}\n\n.magenta_f9b {\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.red_a5a {\n  color: #db5860;\n  color: var(--ring-icon-error-color);\n}\n\n.blue_5cf {\n  color: #008eff;\n  color: var(--ring-main-color);\n}\n\n.white_c3f {\n  color: #fff;\n  color: var(--ring-dark-text-color);\n}\n\n.loading_c82 {\n  animation-name: icon-loading_857;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading_857 {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n",""]),e.locals={icon:"icon_6f4",glyph:"glyph_ce7",gray:"gray_dda",hover:"hover_254",green:"green_706",magenta:"magenta_f9b",red:"red_a5a",blue:"blue_5cf",white:"white_c3f",loading:"loading_c82","icon-loading":"icon-loading_857"}},986:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(47),t=o.n(r),i=o(541);t.a.module("TestApp",[i.a])}});