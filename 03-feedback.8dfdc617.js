function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,a=setTimeout(w,t),l?g(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function w(){var e=m();if(h(e))return T(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function T(e){return a=void 0,p&&i?g(e):(i=r=void 0,u)}function x(){var e=m(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(w,t),g(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},x.flush=function(){return void 0===a?u:T(m())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form"),j=g.querySelector('input[name="email"]'),h=g.querySelector('textarea[name="message"]');g.addEventListener("input",e(t)((function(e){const t={email:j.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),g.addEventListener("submit",(function(e){e.preventDefault(),j.value="",h.value="",localStorage.removeItem("feedbackForm")}));
//# sourceMappingURL=03-feedback.8dfdc617.js.map
