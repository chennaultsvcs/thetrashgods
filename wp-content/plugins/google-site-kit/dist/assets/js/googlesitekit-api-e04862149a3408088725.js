(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return c}));var r="core/user",a="connected_url_mismatch",i="googlesitekit_setup",o="googlesitekit_view_dashboard",c="googlesitekit_manage_options"},2:function(t,e){t.exports=googlesitekit.i18n},204:function(t,e,n){"use strict";(function(t){var r=n(48),a=n.n(r),i=n(205),o=t._googlesitekitAPIFetchData||{},c=o.nonce,u=o.nonceEndpoint,s=o.preloadedData,l=o.rootURL;a.a.nonceEndpoint=u,a.a.nonceMiddleware=a.a.createNonceMiddleware(c),a.a.rootURLMiddleware=a.a.createRootURLMiddleware(l),a.a.preloadingMiddleware=Object(i.a)(s),a.a.use(a.a.nonceMiddleware),a.a.use(a.a.mediaUploadMiddleware),a.a.use(a.a.rootURLMiddleware),a.a.use(a.a.preloadingMiddleware),e.default=a.a}).call(this,n(19))},205:function(t,e,n){"use strict";var r=n(197);e.a=function(t){var e=Object.keys(t).reduce((function(e,n){return e[Object(r.getStablePath)(n)]=t[n],e}),{}),n=!1;return function(t,a){if(n)return a(t);setTimeout((function(){n=!0}),1e3);var i=t.parse,o=void 0===i||i,c=t.path;if("string"==typeof t.path){var u,s=(null===(u=t.method)||void 0===u?void 0:u.toUpperCase())||"GET",l=Object(r.getStablePath)(c);if(o&&"GET"===s&&e[l]){var f=Promise.resolve(e[l].body);return delete e[l],f}if("OPTIONS"===s&&e[s]&&e[s][l]){var d=Promise.resolve(e[s][l]);return delete e[s][l],d}}return a(t)}}},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},30:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return p}));var r=n(76),a=t._googlesitekitBaseData||{},i=a.isFirstAdmin,o=a.isSiteKitScreen,c=a.trackingEnabled,u={isFirstAdmin:i,trackingEnabled:c,trackingID:a.trackingID,referenceSiteURL:a.referenceSiteURL,userIDHash:a.userIDHash,isSiteKitScreen:o},s=Object(r.a)(u),l=s.enableTracking,f=s.disableTracking,d=(s.isTrackingEnabled,s.initializeSnippet),p=s.trackEvent;function v(t){t?l():f()}o&&c&&d()}).call(this,n(19))},31:function(t,e,n){"use strict";(function(t){var r,a;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=new Set((null===(r=t)||void 0===r||null===(a=r._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return e instanceof Set&&e.has(t)}}).call(this,n(19))},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},34:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return y}));var r=n(3),a=n.n(r),i=n(10),o=n.n(i);n(24);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s,l="googlesitekit_".concat("1.44.0","_"),f=["sessionStorage","localStorage"],d=[].concat(f),p=function(){var e=o()(a.a.mark((function e(n){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[n]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,i="__storage_test__",r.setItem(i,i),r.removeItem(i),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==r.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();function v(){return g.apply(this,arguments)}function g(){return(g=o()(a.a.mark((function e(){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===s){e.next=2;break}return e.abrupt("return",s);case 2:n=c(d),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=15;break}if(i=r.value,!s){e.next=9;break}return e.abrupt("continue",13);case 9:return e.next=11,p(i);case 11:if(!e.sent){e.next=13;break}s=t[i];case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return void 0===s&&(s=null),e.abrupt("return",s);case 25:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))).apply(this,arguments)}var b=function(){var t=o()(a.a.mark((function t(e){var n,r,i,o,c,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(!(n=t.sent)){t.next=10;break}if(!(r=n.getItem("".concat(l).concat(e)))){t.next=10;break}if(i=JSON.parse(r),o=i.timestamp,c=i.ttl,u=i.value,s=i.isError,!o||c&&!(Math.round(Date.now()/1e3)-o<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=o()(a.a.mark((function e(n,r){var i,o,c,u,s,f,d,p,g=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=g.length>2&&void 0!==g[2]?g[2]:{},o=i.ttl,c=void 0===o?3600:o,u=i.timestamp,s=void 0===u?Math.round(Date.now()/1e3):u,f=i.isError,d=void 0!==f&&f,e.next=3,v();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(l).concat(n),JSON.stringify({timestamp:s,ttl:c,value:r,isError:d})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=o()(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(r=e.sent)){e.next=13;break}return e.prev=4,r.removeItem("".concat(l).concat(n)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=o()(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(n=e.sent)){e.next=14;break}for(e.prev=4,r=[],i=0;i<n.length;i++)0===(o=n.key(i)).indexOf(l)&&r.push(o.substring(l.length));return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,n(19))},368:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var r=n(3),a=n.n(r),i=n(10),o=n.n(i),c=n(7),u=n.n(c),s=n(204),l=n(283),f=n(34),d=n(9),p=n(87),v=n(406),g=n(12),b=!0,h=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[t,e,n].filter((function(t){return!!t&&t.length}));return 3===a.length&&r&&r.constructor===Object&&Object.keys(r).length&&a.push(Object(d.t)(r)),a.join("::")},m=function(e){var n,r,a,i,o=null===(n=t.googlesitekit)||void 0===n||null===(r=n.data)||void 0===r||null===(a=r.dispatch)||void 0===a?void 0:a.call(r,g.a);o&&(e.code===p.a?o.setPermissionScopeError(e):(null===(i=e.data)||void 0===i?void 0:i.reconnectURL)&&o.setAuthError(e))},y=function(){var e=o()(a.a.mark((function e(n,r,i){var o,c,d,p,g,b,y,w,O,j,_,x,S,D,E,P,I=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=I.length>3&&void 0!==I[3]?I[3]:{},c=o.bodyParams,d=o.cacheTTL,p=void 0===d?3600:d,g=o.method,b=void 0===g?"GET":g,y=o.queryParams,w=o.useCache,O=void 0===w?void 0:w,u()(n,"`type` argument for requests is required."),u()(r,"`identifier` argument for requests is required."),u()(i,"`datapoint` argument for requests is required."),j="GET"===b&&(void 0!==O?O:k()),_=h(n,r,i,y),!j){e.next=18;break}return e.next=9,Object(f.b)(_);case 9:if(x=e.sent,S=x.cacheHit,D=x.value,!x.isError){e.next=16;break}throw m(D),D;case 16:if(!S){e.next=18;break}return e.abrupt("return",D);case 18:return e.prev=18,e.next=21,Object(s.default)({data:c,method:b,path:Object(l.a)("/google-site-kit/v1/".concat(n,"/").concat(r,"/data/").concat(i),y)});case 21:if(E=e.sent,!j){e.next=25;break}return e.next=25,Object(f.d)(_,E,{ttl:p});case 25:return e.abrupt("return",E);case 28:if(e.prev=28,e.t0=e.catch(18),!(null===e.t0||void 0===e.t0||null===(P=e.t0.data)||void 0===P?void 0:P.cacheTTL)){e.next=33;break}return e.next=33,Object(f.d)(_,e.t0,{ttl:e.t0.data.cacheTTL,isError:!0});case 33:throw Object(v.a)({method:b,datapoint:i,type:n,identifier:r,error:e.t0}),m(e.t0),t.console.error("Google Site Kit API Error","method:".concat(b),"datapoint:".concat(i),"type:".concat(n),"identifier:".concat(r),'error:"'.concat(e.t0.message,'"')),e.t0;case 37:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var t=o()(a.a.mark((function t(e,n,r,i){var o,c,u,s,l,f=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=f.length>4&&void 0!==f[4]?f[4]:{},c=o.cacheTTL,u=void 0===c?3600:c,s=o.useCache,l=void 0===s?void 0:s,t.abrupt("return",y(e,n,r,{cacheTTL:u,queryParams:i,useCache:l}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),O=function(){var t=o()(a.a.mark((function t(e,n,r,i){var o,c,u,s,l,f,d=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=d.length>4&&void 0!==d[4]?d[4]:{},c=o.method,u=void 0===c?"POST":c,s=o.queryParams,l=void 0===s?{}:s,t.next=3,y(e,n,r,{bodyParams:{data:i},method:u,queryParams:l,useCache:!1});case 3:return f=t.sent,t.next=6,j(e,n,r);case 6:return t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),k=function(){return b},j=function(){var t=o()(a.a.mark((function t(e,n,r){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=h(e,n,r),t.next=3,Object(f.c)();case 3:t.sent.forEach((function(t){0===t.indexOf(i)&&Object(f.a)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),_={invalidateCache:j,get:w,set:O,setUsingCache:function(t){return b=!!t},usingCache:k};e.b=_}).call(this,n(19))},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(33),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var n=t.split("-");return 3===n.length&&Object(r.a)(new Date(t))}},406:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(3),a=n.n(r),i=n(10),o=n.n(i),c=n(9),u=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=o()(a.a.mark((function t(e){var n,r,i,o,s,l,f,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.method,o=e.type,s=e.identifier,l=e.datapoint,(f=e.error)&&!u.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(n=f.data)||void 0===n?void 0:n.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(c.u)("api_error","".concat(i,":").concat(o,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(26);function a(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(1),a=function(t){return function(e){return function FilteredComponent(n){return Object(r.createElement)(r.Fragment,{},"",Object(r.createElement)(e,n),t)}}}},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return f.a})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"i",(function(){return d}));var r="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',i=n(7),o=n.n(i),c=n(33),u=function(t){var e=new Date(t);o()(Object(c.a)(e),"Date param must construct to a valid date instance or be a valid date instance itself.");var n="".concat(e.getMonth()+1),r="".concat(e.getDate());return[e.getFullYear(),n.length<2?"0".concat(n):n,r.length<2?"0".concat(r):r].join("-")},s=n(13),l=n.n(s),f=n(39),d=function(t){o()(Object(f.a)(t),r);var e=t.split("-"),n=l()(e,3),a=n[0],i=n[1],c=n[2];return new Date(a,i-1,c)},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=d(t);return n.setDate(n.getDate()-e),u(n)},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]};function g(t){var e=t.match(/last-(\d+)-days/);if(e&&e[1])return parseInt(e[1],10);throw new Error("Unrecognized date range slug.")}var b=n(2);function h(){var t=function(t){return Object(b.sprintf)(
/* translators: %s: number of days */
Object(b._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(27),a=n.n(r),i=n(79),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:i.a.sanitize(t,e)}};function c(t){var e,n="object"===a()(t)?t.toString():t;return null==n||null===(e=n.replace)||void 0===e?void 0:e.call(n,/\/+$/,"")}},56:function(t,e,n){"use strict";(function(t){var r=n(0),a=n.n(r),i=n(8),o=n.n(i);function ChangeArrow(e){var n=e.direction,r=e.invertColor,a=e.width,i=e.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(n),{"googlesitekit-change-arrow--inverted-color":r}),width:a,height:i,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,n(1))},65:function(t,e,n){"use strict";function r(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,e){try{return new URL(e,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof e?e:"")}function i(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}))},68:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return x}));var r=n(13),a=n.n(r),i=n(27),o=n.n(i),c=n(6),u=n.n(c),s=n(16),l=n.n(s),f=n(23),d=n(57),p=n.n(d),v=n(2);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=m(t,e),r=n.formatUnit,a=n.formatDecimal;try{return r()}catch(t){return a()}},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var n=Math.floor(t/60/60),r=Math.floor(t/60%60),a=Math.floor(t%60);return{hours:n,minutes:r,seconds:a,formatUnit:function(){var i=e.unitDisplay,o=b(b({unitDisplay:void 0===i?"short":i},l()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?j(a,b(b({},o),{},{unit:"second"})):Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?j(a,b(b({},o),{},{unit:"second"})):"",r?j(r,b(b({},o),{},{unit:"minute"})):"",n?j(n,b(b({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(v.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(v.__)("%ds","google-site-kit"),a);if(0===t)return e;var i=Object(v.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(v.__)("%dm","google-site-kit"),r),o=Object(v.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(v.__)("%dh","google-site-kit"),n);return Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?e:"",r?i:"",n?o:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in millions.
Object(v.__)("%sM","google-site-kit"),j(y(t),t%10==0?{}:e)):1e4<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),j(y(t))):1e3<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),j(y(t),t%10==0?{}:e)):j(t,{signDisplay:"never",maximumFractionDigits:1})},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var n={};if("%"===e)n={style:"percent",maximumFractionDigits:2};else{if("s"===e)return h(t,{unitDisplay:"narrow"});e&&"string"==typeof e?n={style:"currency",currency:e}:Object(f.isPlainObject)(e)&&(n=b({},e))}var r=n,a=r.style,i=void 0===a?"metric":a;return"metric"===i?w(t):"duration"===i?h(t,e):j(t,n)},k=p()(console.warn),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,i=l()(e,["locale"]);try{return new Intl.NumberFormat(r,i).format(t)}catch(e){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(i)," ).format( ").concat(o()(t)," )"),e.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(i);f<d.length;f++){var p=a()(d[f],2),v=p[0],g=p[1];c[v]&&g===c[v]||(u.includes(v)||(s[v]=g))}try{return new Intl.NumberFormat(r,s).format(t)}catch(e){return new Intl.NumberFormat(r).format(t)}},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,a=e.style,i=void 0===a?"long":a,o=e.type,c=void 0===o?"conjunction":o;if(Intl.ListFormat){var u=new Intl.ListFormat(r,{style:i,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(v.__)(", ","google-site-kit");return t.join(s)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=Object(f.get)(e,["_googlesitekitLegacyData","locale"]);if(n){var r=n.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,n(19))},72:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f}));var r=n(13),a=n.n(r),i=n(2);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=null,n=null,r=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),a=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(r&&a)return!1;if(e=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),n=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===e&&null===n)return!1;var o=document.createElement("span");o.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=t;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(i.sprintf)(
/* translators: %d is the number of notifications */
Object(i._n)("%d notification","%d notifications",t,"google-site-kit"),t),o.appendChild(c),o.appendChild(u),e&&null===r&&e.appendChild(o),n&&null===a&&n.appendChild(o),o},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var e=location.search.substr(1).split("&"),n={},r=0;r<e.length;r++)n[e[r].split("=")[0]]=decodeURIComponent(e[r].split("=")[1]);return t?n.hasOwnProperty(t)?decodeURIComponent(n[t].replace(/\+/g," ")):"":n},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(e.href);if(t)return n.searchParams&&n.searchParams.get?n.searchParams.get(t):l(t);var r,i={},c=o(n.searchParams.entries());try{for(c.s();!(r=c.n()).done;){var u=a()(r.value,2),s=u[0],f=u[1];i[s]=f}}catch(t){c.e(t)}finally{c.f()}return i}}).call(this,n(19))},74:function(t,e,n){"use strict";(function(t){n(40),n(41)}).call(this,n(19))},75:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n(186),a=n(56),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var i=n.invertColor,o=void 0!==i&&i;return Object(r.a)(t.createElement(a.a,{direction:e>0?"up":"down",invertColor:o}))},o=function(t){var e,n,r,a,i,o,c,u,s,l,f,d,p,v,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.rows)||void 0===r?void 0:r.length)||(null==t||null===(a=t[0])||void 0===a||null===(i=a.data)||void 0===i||null===(o=i.rows)||void 0===o||null===(c=o[0])||void 0===c||null===(u=c.metrics)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(p=d.totals)||void 0===p||null===(v=p[0])||void 0===v||null===(g=v.values)||void 0===g?void 0:g[0])}}).call(this,n(1))},76:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n(6),a=n.n(r),i=n(77),o=n(78);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=u(u({},s),e);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var c=Object(i.a)(a,n);return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:c,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:Object(o.a)(a,n,c,r)}}}).call(this,n(19))},77:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n(47),a=n(26);function i(e,n){var i,o=Object(r.a)(n);return function(){var n=t.document;if(void 0===i&&(i=!!n.querySelector("script[".concat(a.b,"]"))),!i){var r=n.createElement("script");r.setAttribute(a.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(a.a),n.head.appendChild(r),o("js",new Date),o("config",e.trackingID,{send_page_view:e.isSiteKitScreen}),i=!0}}}}).call(this,n(19))},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(3),a=n.n(r),i=n(6),o=n.n(i),c=n(10),u=n.n(c),s=n(47),l=n(31);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n,r){var i=Object(s.a)(e);return function(){var e=u()(a.a.mark((function e(o,c,u,s){var f,p,v,g,b,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=t.isFirstAdmin,p=t.referenceSiteURL,v=t.trackingEnabled,g=t.trackingID,b=t.userIDHash,v){e.next=3;break}return e.abrupt("return");case 3:return n(),h={send_to:g,event_category:o,event_label:u,value:s,dimension1:p,dimension2:f?"true":"false",dimension3:b,dimension4:"1.44.0",dimension5:Array.from(l.a).join(", ")},e.abrupt("return",new Promise((function(t){var e,n,a=setTimeout((function(){r.console.warn('Tracking event "'.concat(c,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),u=function(){clearTimeout(a),t()};i("event",c,d(d({},h),{},{event_callback:u})),(null===(e=r._gaUserPrefs)||void 0===e||null===(n=e.ioo)||void 0===n?void 0:n.call(e))&&u()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}},79:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n(105),a=n.n(r)()(t)}).call(this,n(19))},810:function(t,e,n){"use strict";n.r(e),function(t){var r=n(368);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.b),e.default=r.b}.call(this,n(19))},87:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i}));n(51);var r="missing_required_scopes";function a(t){return(null==t?void 0:t.code)===r}function i(t){var e;return"insufficientPermissions"===(null==t||null===(e=t.data)||void 0===e?void 0:e.reason)}},9:function(t,e,n){"use strict";n.d(e,"u",(function(){return c.b})),n.d(e,"r",(function(){return u.a})),n.d(e,"v",(function(){return u.b})),n.d(e,"t",(function(){return p})),n.d(e,"b",(function(){return v.b})),n.d(e,"i",(function(){return v.c})),n.d(e,"p",(function(){return g.c})),n.d(e,"q",(function(){return g.d})),n.d(e,"m",(function(){return g.b})),n.d(e,"h",(function(){return g.a})),n.d(e,"n",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return O.c})),n.d(e,"s",(function(){return O.i})),n.d(e,"f",(function(){return k.a})),n.d(e,"l",(function(){return k.b})),n.d(e,"k",(function(){return j.b})),n.d(e,"g",(function(){return j.a})),n.d(e,"o",(function(){return j.c})),n.d(e,"j",(function(){return _})),n.d(e,"a",(function(){return x})),n.d(e,"w",(function(){return S})),n.d(e,"d",(function(){return D}));var r=n(104),a=n.n(r),i=n(102),o=n.n(i),c=n(30),u=n(55),s=n(27),l=n.n(s),f=n(71),d=n.n(f),p=function(t){return d()(JSON.stringify(function t(e){var n={};return Object.keys(e).sort().forEach((function(r){var a=e[r];a&&"object"===l()(a)&&!Array.isArray(a)&&(a=t(a)),n[r]=a})),n}(t)))};var v=n(72),g=(n(74),n(68));n(49);function b(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function h(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function m(t){return t.replace(/\n/gi,"<br>")}function y(t){for(var e=t,n=0,r=[b,h,m];n<r.length;n++){e=(0,r[n])(e)}return e}var w=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},O=n(52),k=n(75),j=n(65),_=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},x=function(t,e){if("0"===t||0===t||isNaN(t))return null;var n=(e-t)/t;return isNaN(n)||!a()(n)?null:n},S=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},D=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return o()(e)}}},[[810,1,0]]]);