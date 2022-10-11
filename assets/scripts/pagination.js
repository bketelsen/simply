/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */!function n(o,s,r){function l(e,t){if(!s[e]){if(!o[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}i=s[e]={exports:{}},o[e][0].call(i.exports,function(t){return l(o[e][1][t]||t)},i,i.exports,n,o,s,r)}return s[e].exports}for(var a="function"==typeof require&&require,t=0;t<r.length;t++)l(r[t]);return l}({1:[function(t,e,i){e.exports=function(t){return t&&t.__esModule?t:{default:t}},e.exports.__esModule=!0,e.exports.default=e.exports},{}],2:[function(t,e,i){var n,o;n="undefined"!=typeof window?window:this,o=function(){function t(){}var e=t.prototype;return e.on=function(t,e){var i;return t&&e&&((i=(i=this._events=this._events||{})[t]=i[t]||[]).includes(e)||i.push(e)),this},e.once=function(t,e){var i;return t&&e&&(this.on(t,e),((i=this._onceEvents=this._onceEvents||{})[t]=i[t]||{})[e]=!0),this},e.off=function(t,e){t=this._events&&this._events[t];return t&&t.length&&(-1!=(e=t.indexOf(e))&&t.splice(e,1)),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];var n,o=this._onceEvents&&this._onceEvents[t];for(n of i)o&&o[n]&&(this.off(t,n),delete o[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t},"object"==typeof e&&e.exports?e.exports=o():n.EvEmitter=o()},{}],3:[function(t,e,i){var n,o;n=this,o=function(e){let i={extend:function(t,e){return Object.assign(t,e)},modulo:function(t,e){return(t%e+e)%e},makeArray:function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?[...t]:[t]},removeFrom:function(t,e){e=t.indexOf(e);-1!=e&&t.splice(e,1)},getParent:function(t,e){for(;t.parentNode&&t!=document.body;)if((t=t.parentNode).matches(e))return t},getQueryElement:function(t){return"string"==typeof t?document.querySelector(t):t},handleEvent:function(t){var e="on"+t.type;this[e]&&this[e](t)},filterFindElements:function(t,n){return(t=i.makeArray(t)).filter(t=>t instanceof HTMLElement).reduce((t,e)=>{var i;return n?(e.matches(n)&&t.push(e),i=e.querySelectorAll(n),t=t.concat(...i)):t.push(e),t},[])},debounceMethod:function(t,e,i){i=i||100;let n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){clearTimeout(this[o]);let t=arguments;this[o]=setTimeout(()=>{n.apply(this,t),delete this[o]},i)}},docReady:function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},toDashed:function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}},l=e.console;return i.htmlInit=function(s,r){i.docReady(function(){let n="data-"+i.toDashed(r);var t=document.querySelectorAll(`[${n}]`);let o=e.jQuery;[...t].forEach(e=>{var t=e.getAttribute(n);let i;try{i=t&&JSON.parse(t)}catch(t){return void(l&&l.error(`Error parsing ${n} on ${e.className}: `+t))}t=new s(e,i);o&&o.data(e,r,t)})})},i},"object"==typeof e&&e.exports?e.exports=o(n):n.fizzyUIUtils=o(n)},{}],4:[function(t,e,i){var n,o;n=window,o=function(t,e,i){class n{constructor(t,e){this.element=t,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}onClick(t){t.preventDefault(),this.infScroll.loadNextPage()}enable(){this.element.removeAttribute("disabled")}disable(){this.element.disabled="disabled"}hide(){this.element.style.display="none"}destroy(){this.element.removeEventListener("click",this.clickHandler)}}return e.create.button=function(){var t=i.getQueryElement(this.options.button);t&&(this.button=new n(t,this))},e.destroy.button=function(){this.button&&this.button.destroy()},e.Button=n,e},"object"==typeof e&&e.exports?e.exports=o(0,t("./core"),t("fizzy-ui-utils")):o(0,n.InfiniteScroll,n.fizzyUIUtils)},{"./core":5,"fizzy-ui-utils":3}],5:[function(t,e,i){var n,o;n=window,o=function(e,t,o){let s=e.jQuery,r={};function l(t,e){var i,n=o.getQueryElement(t);if(n){if((t=n).infiniteScrollGUID)return(i=r[t.infiniteScrollGUID]).option(e),i;this.element=t,this.options={...l.defaults},this.option(e),s&&(this.$element=s(this.element)),this.create()}else console.error("Bad element for InfiniteScroll: "+(n||t))}l.defaults={},l.create={},l.destroy={};var i=l.prototype;Object.assign(i,t.prototype);let n=0,a=(i.create=function(){var t=this.guid=++n,t=(this.element.infiniteScrollGUID=t,(r[t]=this).pageIndex=1,this.loadCount=0,this.updateGetPath(),this.getPath&&this.getPath());if(t)for(var e in this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit(),l.create)l.create[e].call(this);else console.error("Disabling InfiniteScroll")},i.option=function(t){Object.assign(this.options,t)},i.callOnInit=function(){var t=this.options.onInit;t&&t.call(this,this)},i.dispatchEvent=function(e,i,n){this.log(e,n);var o=i?[i].concat(n):n;if(this.emitEvent(e,o),s&&this.$element){let t=e+=".infiniteScroll";i&&((o=s.Event(i)).type=e,t=o),this.$element.trigger(t,n)}},{initialized:t=>"on "+t,request:t=>"URL: "+t,load:(t,e)=>`${t.title||""}. URL: `+e,error:(t,e)=>t+". URL: "+e,append:(t,e,i)=>i.length+" items. URL: "+e,last:(t,e)=>"URL: "+e,history:(t,e)=>"URL: "+e,pageIndex:function(t,e){return`current page determined to be: ${t} from `+e}}),h=(i.log=function(e,i){if(this.options.debug){let t="[InfiniteScroll] "+e;e=a[e];e&&(t+=". "+e.apply(this,i)),console.log(t)}},i.updateMeasurements=function(){this.windowHeight=e.innerHeight;var t=this.element.getBoundingClientRect();this.top=t.top+e.scrollY},i.updateScroller=function(){var t=this.options.elementScroll;if(t){if(this.scroller=!0===t?this.element:o.getQueryElement(t),!this.scroller)throw new Error("Unable to find elementScroll: "+t)}else this.scroller=e},i.updateGetPath=function(){var t,e=this.options.path;e?"function"==(t=typeof e)?this.getPath=e:"string"==t&&e.match("{{#}}")?this.updateGetPathTemplate(e):this.updateGetPathSelector(e):console.error("InfiniteScroll path option required. Set as: "+e)},i.updateGetPathTemplate=function(e){this.getPath=()=>{var t=this.pageIndex+1;return e.replace("{{#}}",t)};var t=e.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),t=new RegExp(t),t=location.href.match(t);t&&(this.pageIndex=parseInt(t[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))},[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/]),c=l.getPathParts=function(t){if(t)for(var e of h){var i,n,e=t.match(e);if(e)return[,e,i,n]=e,{begin:e,index:i,end:n}}};i.updateGetPathSelector=function(t){var e=document.querySelector(t);if(e){var e=e.getAttribute("href"),n=c(e);if(n){let{begin:t,index:e,end:i}=n;this.isPathSelector=!0,this.getPath=()=>t+(this.pageIndex+1)+i,this.pageIndex=parseInt(e,10)-1,this.log("pageIndex",[this.pageIndex,"next link"])}else console.error("InfiniteScroll unable to parse next link href: "+e)}else console.error("Bad InfiniteScroll path option. Next link not found: "+t)},i.updateGetAbsolutePath=function(){var e=this.getPath();if(e.match(/^http/)||e.match(/^\//))this.getAbsolutePath=this.getPath;else{var i=location["pathname"],e=e.match(/^\?/),n=i.substring(0,i.lastIndexOf("/"));let t=e?i:n+"/";this.getAbsolutePath=()=>t+this.getPath()}},l.create.hideNav=function(){var t=o.getQueryElement(this.options.hideNav);t&&(t.style.display="none",this.nav=t)},l.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},i.destroy=function(){for(var t in this.allOff(),l.destroy)l.destroy[t].call(this);delete this.element.infiniteScrollGUID,delete r[this.guid],s&&this.$element&&s.removeData(this.element,"infiniteScroll")},l.throttle=function(n,o){o=o||200;let s,r;return function(){let t=+new Date,e=arguments;var i=()=>{s=t,n.apply(this,e)};s&&t<s+o?(clearTimeout(r),r=setTimeout(i,o)):i()}},l.data=function(t){t=(t=o.getQueryElement(t))&&t.infiniteScrollGUID;return t&&r[t]},l.setJQuery=function(t){s=t},o.htmlInit(l,"infinite-scroll"),i._init=function(){};t=e.jQueryBridget;return s&&t&&t("infiniteScroll",l,s),l},"object"==typeof e&&e.exports?e.exports=o(n,t("ev-emitter"),t("fizzy-ui-utils")):n.InfiniteScroll=o(n,n.EvEmitter,n.fizzyUIUtils)},{"ev-emitter":2,"fizzy-ui-utils":3}],6:[function(t,e,i){var n,o;n=window,o=function(n,t,e){var i=t.prototype;Object.assign(t.defaults,{history:"replace"});let o=document.createElement("a");return t.create.history=function(){this.options.history&&(o.href=this.getAbsolutePath(),(o.origin||o.protocol+"//"+o.host)==location.origin?this.options.append?this.createHistoryAppend():this.createHistoryPageLoad():console.error("[InfiniteScroll] cannot set history with different origin: "+`${o.origin} on ${location.origin} . History behavior disabled.`))},i.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPage=this.scrollPages[0],this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.scroller.addEventListener("scroll",this.scrollHistoryHandler),this.on("append",this.onAppendHistory),this.bindHistoryAppendEvents(!0)},i.bindHistoryAppendEvents=function(t){t=t?"addEventListener":"removeEventListener";this.scroller[t]("scroll",this.scrollHistoryHandler),n[t]("unload",this.unloadHandler)},i.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},t.destroy.history=i.destroyHistory=function(){this.options.history&&this.options.append&&this.bindHistoryAppendEvents(!1)},i.onAppendHistory=function(t,e,i){i&&i.length&&(i=i[0],i=this.getElementScrollY(i),o.href=e,this.scrollPages.push({top:i,path:o.href,title:t.title}))},i.getElementScrollY=function(t){return this.options.elementScroll?t.offsetTop-this.top:t.getBoundingClientRect().top+n.scrollY},i.onScrollHistory=function(){var t=this.getClosestScrollPage();t!=this.scrollPage&&(this.scrollPage=t,this.setHistory(t.title,t.path))},e.debounceMethod(t,"onScrollHistory",150),i.getClosestScrollPage=function(){let t;t=this.options.elementScroll?this.scroller.scrollTop+this.scroller.clientHeight/2:n.scrollY+this.windowHeight/2;let e;for(var i of this.scrollPages){if(i.top>=t)break;e=i}return e},i.setHistory=function(t,e){var i=this.options.history;i&&history[i+"State"]&&(history[i+"State"](null,t,e),this.options.historyTitle&&(document.title=t),this.dispatchEvent("history",null,[t,e]))},i.onUnload=function(){var t;0!==this.scrollPage.top&&(t=n.scrollY-this.scrollPage.top+this.top,this.destroyHistory(),scrollTo(0,t))},i.onPageLoadHistory=function(t,e){this.setHistory(t.title,e)},t},"object"==typeof e&&e.exports?e.exports=o(n,t("./core"),t("fizzy-ui-utils")):o(n,n.InfiniteScroll,n.fizzyUIUtils)},{"./core":5,"fizzy-ui-utils":3}],7:[function(t,e,i){window,"object"==typeof e&&e.exports&&(e.exports=function(t){return t}(t("./core"),(t("./page-load"),t("./scroll-watch"),t("./history"),t("./button"),t("./status"))))},{"./button":4,"./core":5,"./history":6,"./page-load":8,"./scroll-watch":9,"./status":10}],8:[function(t,e,i){var n,o;n=window,o=function(e,o){var t=o.prototype;Object.assign(o.defaults,{loadOnScroll:!0,checkLastPage:!0,responseBody:"text",domParseResponse:!0}),o.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},t.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()};let s=new DOMParser;function h(t){var e=document.createDocumentFragment();return t&&e.append(...t),e}return t.loadNextPage=function(){if(!this.isLoading&&this.canLoad){let{responseBody:i,domParseResponse:n,fetchOptions:t}=this.options,o=this.getAbsolutePath();this.isLoading=!0,"function"==typeof t&&(t=t());var e=fetch(o,t).then(e=>{var t;return e.ok?e[i]().then(t=>{return"text"==i&&n&&(t=s.parseFromString(t,"text/html")),204==e.status?(this.lastPageReached(t,o),{body:t,response:e}):this.onPageLoad(t,o,e)}):(t=new Error(e.statusText),this.onPageError(t,o,e),{response:e})}).catch(t=>{this.onPageError(t,o)});return this.dispatchEvent("request",null,[o,e]),e}},t.onPageLoad=function(t,e,i){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[t,e,i]),this.appendNextPage(t,e,i)},t.appendNextPage=function(t,e,i){var{append:n,responseBody:o,domParseResponse:s}=this.options;if(!("text"==o&&s)||!n)return{body:t,response:i};let r=t.querySelectorAll(n),l={body:t,response:i,items:r};if(!r||!r.length)return this.lastPageReached(t,e),l;let a=h(r);o=()=>(this.appendItems(r,a),this.isLoading=!1,this.dispatchEvent("append",null,[t,e,r,i]),l);return this.options.outlayer?this.appendOutlayerItems(a,o):o()},t.appendItems=function(t,e){if(t&&t.length){var i;e=e||h(t);for(i of e.querySelectorAll("script")){var n,o=document.createElement("script");for(n of i.attributes)o.setAttribute(n.name,n.value);o.innerHTML=i.innerHTML,i.parentNode.replaceChild(o,i)}this.element.appendChild(e)}},t.appendOutlayerItems=function(t,i){let n=o.imagesLoaded||e.imagesLoaded;if(n)return new Promise(function(e){n(t,function(){var t=i();e(t)})});console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),this.isLoading=!1},t.onAppendOutlayer=function(t,e,i){this.options.outlayer.appended(i)},t.checkLastPage=function(e,i){var{checkLastPage:n,path:o}=this.options;if(n){if("function"==typeof o)if(!this.getPath())return void this.lastPageReached(e,i);let t;"string"==typeof n?t=n:this.isPathSelector&&(t=o),t&&e.querySelector&&(e.querySelector(t)||this.lastPageReached(e,i))}},t.lastPageReached=function(t,e){this.canLoad=!1,this.dispatchEvent("last",null,[t,e])},t.onPageError=function(t,e,i){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[t,e,i]),t},o.create.prefill=function(){var t;this.options.prefill&&((t=this.options.append)?(this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()):console.error("append option required for prefill. Set as :"+t))},t.prefill=function(){var t=this.getPrefillDistance();this.isPrefilling=0<=t,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},t.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},t.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},o},"object"==typeof e&&e.exports?e.exports=o(n,t("./core")):o(n,n.InfiniteScroll)},{"./core":5}],9:[function(t,e,i){var n,o;n=window,o=function(i,t,e){var n=t.prototype;return Object.assign(t.defaults,{scrollThreshold:400}),t.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);var t=this.options.scrollThreshold;!t&&0!==t||this.enableScrollWatch()},t.destroy.scrollWatch=function(){this.disableScrollWatch()},n.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},n.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},n.bindScrollWatchEvents=function(t){t=t?"addEventListener":"removeEventListener";this.scroller[t]("scroll",this.pageScrollHandler),i[t]("resize",this.resizeHandler)},n.onPageScroll=t.throttle(function(){this.getBottomDistance()<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold")}),n.getBottomDistance=function(){let t,e;return e=this.options.elementScroll?(t=this.scroller.scrollHeight,this.scroller.scrollTop+this.scroller.clientHeight):(t=this.top+this.element.clientHeight,i.scrollY+this.windowHeight),t-e},n.onResize=function(){this.updateMeasurements()},e.debounceMethod(t,"onResize",150),t},"object"==typeof e&&e.exports?e.exports=o(n,t("./core"),t("fizzy-ui-utils")):o(n,n.InfiniteScroll,n.fizzyUIUtils)},{"./core":5,"fizzy-ui-utils":3}],10:[function(t,e,i){var n,o;n=window,o=function(t,e,i){var n=e.prototype;function o(t){r(t,"none")}function s(t){r(t,"block")}function r(t,e){t&&(t.style.display=e)}return e.create.status=function(){var t=i.getQueryElement(this.options.status);t&&(this.statusElement=t,this.statusEventElements={request:t.querySelector(".infinite-scroll-request"),error:t.querySelector(".infinite-scroll-error"),last:t.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},n.bindHideStatus=function(t){var e=this.options.append?"append":"load";this[t](e,this.hideAllStatus)},n.showRequestStatus=function(){this.showStatus("request")},n.showErrorStatus=function(){this.showStatus("error")},n.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},n.showStatus=function(t){s(this.statusElement),this.hideStatusEventElements(),s(this.statusEventElements[t])},n.hideAllStatus=function(){o(this.statusElement),this.hideStatusEventElements()},n.hideStatusEventElements=function(){for(var t in this.statusEventElements)o(this.statusEventElements[t])},e},"object"==typeof e&&e.exports?e.exports=o(0,t("./core"),t("fizzy-ui-utils")):o(0,n.InfiniteScroll,n.fizzyUIUtils)},{"./core":5,"fizzy-ui-utils":3}],11:[function(t,e,i){"use strict";var t=t("@babel/runtime/helpers/interopRequireDefault")(t("infinite-scroll")),n=document;if(n.querySelector("link[rel=next]")){var o=n.querySelector(".js-feed-entry");if(o){const s=n.querySelector(".load-more-btn"),r=new t.default(o,{append:".js-story",button:s,history:!1,debug:!1,hideNav:".pagination",path:".pagination .older-posts"});r.on("load",function t(){1===r.loadCount&&(r.options.loadOnScroll=!1,s.classList.add("flex"),s.classList.remove("hidden"),r.off(t))}),s.addEventListener("click",function(){r.loadNextPage(),r.options.loadOnScroll=!0,this.classList.add("hidden")})}}},{"@babel/runtime/helpers/interopRequireDefault":1,"infinite-scroll":7}]},{},[11]);