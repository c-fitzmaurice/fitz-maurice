!function e(t,n,r){function o(s,c){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return o(n?n:e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){(function(t){"use strict";var n=window.$;t.cp_url=function(e){return e=Statamic.cpRoot+"/"+e,e.replace(/\/+/g,"/")},t.resource_url=function(e){return e=Statamic.resourceUrl+"/"+e,e.replace(/\/+/g,"/")},t.get_from_segment=function(e){return Statamic.urlPath.split("/").splice(e).join("/")},t.format_input_options=function(e){if("string"==typeof e[0])return e;var t=[];return _.each(e,function(e,n,r){t.push({value:n,text:e})}),t},t.file_icon=function(e){return resource_url("img/filetypes/"+e+".png")},t.dd=function(e){console.log(e)},t.Cookies=e("cookies-js"),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&this.indexOf(e,t)!==-1}),e("./l10n/l10n"),e("./vendor/sticky"),n(document).ready(function(){n(".sticky").sticky({topSpacing:0,className:"stuck",widthFromWrapper:!1})})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./l10n/l10n":2,"./vendor/sticky":4,"cookies-js":5}],2:[function(e,t,n){(function(t){"use strict";function n(e){for(var t=e.split(/[-_]/),n=0;n<t.length;n++){var r=t[n];t[n]=r.charAt(0).toUpperCase()+r.slice(1)}return t.join(" ")}t.Lang=e("./lang"),t.translate=function(e,t){var r=Lang.get(e,t);return r===e?n(r.replace("cp.","")):r},t.translate_choice=function(e,t,n){return Lang.choice(e,t,n)},Lang.setMessages(Statamic.translations)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lang":3}],3:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,o){"function"==typeof define&&define.amd?define([],o):"object"===("undefined"==typeof n?"undefined":r(n))?t.exports=new(o()):e.Lang=new(o())}(void 0,function(){var e=function(){};return e.prototype.setMessages=function(e){this.messages=e},e.prototype.get=function(e,t){if(!this.has(e))return e;var n=this._getMessage(e,t);return null===n?e:(t&&(n=this._applyReplacements(n,t)),n)},e.prototype.has=function(e){return!("string"!=typeof e||!this.messages)&&null!==this._getMessage(e)},e.prototype.choice=function(e,t,n){n="undefined"!=typeof n?n:{},n.count=t;var r=this.get(e,n);if(null===r||void 0===r)return r;for(var o=r.split("|"),i=[],s=/{\d+}\s(.+)|\[\d+,\d+\]\s(.+)|\[\d+,Inf\]\s(.+)/,c=0;c<o.length;c++)if(o[c]=o[c].trim(),s.test(o[c])){var a=o[c].split(/\s/);i.push(a.shift()),o[c]=a.join(" ")}if(1===o.length)return r;for(var c=0;c<i.length;c++)if(this._testInterval(t,i[c]))return o[c];return 1===t?o[0]:o[1]},e.prototype._parseKey=function(e){if("string"!=typeof e)return null;var t=e.split(".");return e.includes("::")?{source:t.splice(0,t.length-1).join("."),entries:t.slice(t.length-1)}:{source:t[0],entries:t.slice(1)}},e.prototype._getMessage=function(e){if(e=this._parseKey(e),void 0===this.messages[e.source])return null;for(var t=this.messages[e.source];e.entries.length&&(t=t[e.entries.shift()]););return"string"!=typeof t?null:t},e.prototype._applyReplacements=function(e,t){for(var n in t)e=e.split(":"+n).join(t[n]);return e},e.prototype._testInterval=function(e,t){return!1},e})},{}],4:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"===("undefined"==typeof t?"undefined":r(t))&&t.exports?t.exports=e(window.$):e(jQuery)}(function(e){var t=Array.prototype.slice,n=Array.prototype.splice,o={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1},i=e(window),s=e(document),c=[],a=i.height(),u=function(){for(var t=i.scrollTop(),n=s.height(),r=n-a,o=t>r?r-t:0,u=0,p=c.length;u<p;u++){var f=c[u],l=f.stickyWrapper.offset().top,d=l-f.topSpacing-o;if(f.stickyWrapper.css("height",f.stickyElement.outerHeight()),t<=d)null!==f.currentTop&&(f.stickyElement.css({width:"",position:"",top:""}),f.stickyElement.parent().removeClass(f.className),f.stickyElement.trigger("sticky-end",[f]),f.currentTop=null);else{var h=n-f.stickyElement.outerHeight()-f.topSpacing-f.bottomSpacing-t-o;if(h<0?h+=f.topSpacing:h=f.topSpacing,f.currentTop!==h){var y;f.getWidthFrom?y=e(f.getWidthFrom).width()||null:f.widthFromWrapper&&(y=f.stickyWrapper.width()),null==y&&(y=f.stickyElement.width()),f.stickyElement.css("width",y).css("position","fixed").css("top",h),f.stickyElement.parent().addClass(f.className),null===f.currentTop?f.stickyElement.trigger("sticky-start",[f]):f.stickyElement.trigger("sticky-update",[f]),f.currentTop===f.topSpacing&&f.currentTop>h||null===f.currentTop&&h<f.topSpacing?f.stickyElement.trigger("sticky-bottom-reached",[f]):null!==f.currentTop&&h===f.topSpacing&&f.currentTop<h&&f.stickyElement.trigger("sticky-bottom-unreached",[f]),f.currentTop=h}var g=f.stickyWrapper.parent(),m=f.stickyElement.offset().top+f.stickyElement.outerHeight()>=g.offset().top+g.outerHeight()&&f.stickyElement.offset().top<=f.topSpacing;m?f.stickyElement.css("position","absolute").css("top","").css("bottom",0):f.stickyElement.css("position","fixed").css("top",h).css("bottom","")}}},p=function(){a=i.height();for(var t=0,n=c.length;t<n;t++){var r=c[t],o=null;r.getWidthFrom?r.responsiveWidth&&(o=e(r.getWidthFrom).width()):r.widthFromWrapper&&(o=r.stickyWrapper.width()),null!=o&&r.stickyElement.css("width",o)}u()},f={init:function(t){var n=e.extend({},o,t);return this.each(function(){var t=e(this),r=t.attr("id"),i=r?r+"-"+o.wrapperClassName:o.wrapperClassName,s=e("<div></div>").attr("id",i).addClass(n.wrapperClassName);t.wrapAll(s);var a=t.parent();n.center&&a.css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===t.css("float")&&t.css({"float":"none"}).parent().css({"float":"right"}),n.stickyElement=t,n.stickyWrapper=a,n.currentTop=null,c.push(n),f.setWrapperHeight(this),f.setupChangeListeners(this)})},setWrapperHeight:function(t){var n=e(t),r=n.parent();r&&r.css("height",n.outerHeight())},setupChangeListeners:function(e){if(window.MutationObserver){var t=new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&f.setWrapperHeight(e)});t.observe(e,{subtree:!0,childList:!0})}else e.addEventListener("DOMNodeInserted",function(){f.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){f.setWrapperHeight(e)},!1)},update:u,unstick:function(t){return this.each(function(){for(var t=this,r=e(t),o=-1,i=c.length;i-- >0;)c[i].stickyElement.get(0)===t&&(n.call(c,i,1),o=i);o!==-1&&(r.unwrap(),r.css({width:"",position:"",top:"","float":""}))})}};window.addEventListener?(window.addEventListener("scroll",u,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",u),window.attachEvent("onresize",p)),e.fn.sticky=function(n){return f[n]?f[n].apply(this,t.call(arguments,1)):"object"!==("undefined"==typeof n?"undefined":r(n))&&n?void e.error("Method "+n+" does not exist on jQuery.sticky"):f.init.apply(this,arguments)},e.fn.unstick=function(n){return f[n]?f[n].apply(this,t.call(arguments,1)):"object"!==("undefined"==typeof n?"undefined":r(n))&&n?void e.error("Method "+n+" does not exist on jQuery.sticky"):f.unstick.apply(this,arguments)},e(function(){setTimeout(u,0)})})},{}],5:[function(e,t,n){!function(e,r){"use strict";var o=function(e){if("object"!=typeof e.document)throw new Error("Cookies.js requires a `window` with a `document` object");var t=function(e,n,r){return 1===arguments.length?t.get(e):t.set(e,n,r)};return t._document=e.document,t._cacheKeyPrefix="cookey.",t._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),t.defaults={path:"/",secure:!1},t.get=function(e){t._cachedDocumentCookie!==t._document.cookie&&t._renewCache();var n=t._cache[t._cacheKeyPrefix+e];return n===r?r:decodeURIComponent(n)},t.set=function(e,n,o){return o=t._getExtendedOptions(o),o.expires=t._getExpiresDate(n===r?-1:o.expires),t._document.cookie=t._generateCookieString(e,n,o),t},t.expire=function(e,n){return t.set(e,r,n)},t._getExtendedOptions=function(e){return{path:e&&e.path||t.defaults.path,domain:e&&e.domain||t.defaults.domain,expires:e&&e.expires||t.defaults.expires,secure:e&&e.secure!==r?e.secure:t.defaults.secure}},t._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},t._getExpiresDate=function(e,n){if(n=n||new Date,"number"==typeof e?e=e===1/0?t._maxExpireDate:new Date(n.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!t._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},t._generateCookieString=function(e,t,n){e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent),e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),t=(t+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent),n=n||{};var r=e+"="+t;return r+=n.path?";path="+n.path:"",r+=n.domain?";domain="+n.domain:"",r+=n.expires?";expires="+n.expires.toUTCString():"",r+=n.secure?";secure":""},t._getCacheFromString=function(e){for(var n={},o=e?e.split("; "):[],i=0;i<o.length;i++){var s=t._getKeyValuePairFromCookieString(o[i]);n[t._cacheKeyPrefix+s.key]===r&&(n[t._cacheKeyPrefix+s.key]=s.value)}return n},t._getKeyValuePairFromCookieString=function(e){var t=e.indexOf("=");t=t<0?e.length:t;var n,r=e.substr(0,t);try{n=decodeURIComponent(r)}catch(o){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+r+'"',o)}return{key:n,value:e.substr(t+1)}},t._renewCache=function(){t._cache=t._getCacheFromString(t._document.cookie),t._cachedDocumentCookie=t._document.cookie},t._areEnabled=function(){var e="cookies.js",n="1"===t.set(e,1).get(e);return t.expire(e),n},t.enabled=t._areEnabled(),t},i=e&&"object"==typeof e.document?o(e):o;"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof n?("object"==typeof t&&"object"==typeof t.exports&&(n=t.exports=i),n.Cookies=i):e.Cookies=i}("undefined"==typeof window?this:window)},{}]},{},[1]);