!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.flattenDeepAndGlue={})}(this,function(e){"use strict";function t(e){return"object"===(void 0===e?"undefined":n(e))?Object.keys(e).reduce(function(r,f){var u=t(e[f]);return"object"===(void 0===u?"undefined":n(u))&&(u=[].concat(o(u))),r.concat(u)},[]):e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};e.flattenDeep=t,e.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"<br/>",o=t(e);return Array.isArray(o)&&n?o.join(n):o},Object.defineProperty(e,"__esModule",{value:!0})});