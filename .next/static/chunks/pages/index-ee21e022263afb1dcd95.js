_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("YFqc"),a=n.n(o),i=n("Aiso"),u=n.n(i),c=n("vOnD"),s=c.b.div.withConfig({displayName:"Home__CenteredContainer",componentId:"sc-4woojw-0"})(["height:100vh;display:flex;background-color:#ffde00;align-items:center;justify-content:center;"]),f=c.b.div.withConfig({displayName:"Home__CenteredContent",componentId:"sc-4woojw-1"})(["min-height:40%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;"]),l=c.b.h1.withConfig({displayName:"Home__Title",componentId:"sc-4woojw-2"})(['font-family:"Pokemon";font-size:42px;letter-spacing:1.5px;text-shadow:-3px 3px 0px #880000;color:#ff0000;']),d=n("8Kt/"),p=n.n(d);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p.a,{children:Object(r.jsx)("title",{children:"Pokedex"})}),Object(r.jsx)(s,{children:Object(r.jsxs)(f,{children:[Object(r.jsx)(l,{children:"Bem vindo a Pokedex!"}),Object(r.jsx)(u.a,{src:"/pokemon-logo.png",width:360,height:120}),Object(r.jsx)(a.a,{href:"/pokedex",children:Object(r.jsx)("a",{children:"Navigate to Pokedex"})})]})})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var d=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",y=i.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,u.resolveHref)(v,e.as):a||o}}),[v,e.href,e.as]),m=y.href,g=y.as;i.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,u.isLocalURL)(m)&&!l[m+"%"+g])return d(a,(function(){p(h,m,g)}))}),[t,a,m,g,h]);var b=e.children,w=e.replace,_=e.shallow,x=e.scroll,j=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),M={ref:function(e){e&&s(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,g,w,_,x,j)}};return t&&(M.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(h,m,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(M.href=(0,u.addBasePath)((0,u.addLocale)(g,"undefined"!==typeof j?j:h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(O,M)};t.default=h},dQHF:function(e,t,n){"use strict";function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=n("284h"),i=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,o=void 0!==r&&r,a=e.priority,i=void 0!==a&&a,s=e.loading,d=e.className,p=e.quality,h=e.width,v=e.height,y=e.unsized,m=(0,c.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","unsized"]),b=(0,f.useRef)(null);0;var _="lazy"===s;i||"undefined"!==typeof s||(_=!0);(0,f.useEffect)((function(){var e=b.current;if(e&&_){var t=function(){if(u)return u;if(!g)return;return u=new g((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target;t.dataset.src&&(t.src=t.dataset.src),t.dataset.srcset&&(t.srcset=t.dataset.srcset),t.style.visibility="visible",t.classList.remove("__lazy"),u.unobserve(t)}}))}),{rootMargin:"200px"})}();if(t)return t.observe(e),function(){t.unobserve(e)}}}),[b,_]);var O,M,E,S=j(h),k=j(v),C=j(p);if("undefined"!==typeof S&&"undefined"!==typeof k&&!y){var I=k/S,q=isNaN(I)?1:100*I;E={maxWidth:"100%",width:S},O={position:"relative",paddingBottom:"".concat(q,"%")},M={visibility:_?"hidden":"visible",height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}var A,P=w(t,o,S,C),z=x({src:t,width:S,unoptimized:o,quality:C});_?(A={"data-src":P},z&&(A["data-srcset"]=z),d=d?d+" __lazy":"__lazy"):(A={src:P},z&&(A.srcSet=z));var H=i&&!1;return f.default.createElement("div",{style:E},f.default.createElement("div",{style:O},H?function(e){var t=e.src,n=e.width,r=e.unoptimized,o=void 0!==r&&r,a=e.sizes,i=e.quality;return f.default.createElement(l.default,null,f.default.createElement("link",{rel:"preload",as:"image",href:w(t,o,n,i),imagesrcset:x({src:t,unoptimized:o,width:n,quality:i}),imagesizes:a}))}({src:t,width:S,unoptimized:o,sizes:n,quality:C}):"",f.default.createElement("img",Object.assign({},m,A,{className:d,sizes:n,ref:b,style:M}))))};var u,c=i(n("8OQS")),s=i(n("pVnL")),f=a(n("q1tI")),l=i(n("8Kt/")),d=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["auto=format","w="+r],i="";o&&a.push("q="+o);a.length&&(i="?"+a.join("&"));return"".concat(t).concat(O(n)).concat(i)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","w_"+r],i="";o&&a.push("q_"+o);a.length&&(i=a.join(",")+"/");return"".concat(t).concat(i).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(r)}],["default",M]]),p={deviceSizes:[320,420,768,1024,1200],imageSizes:[],path:"/_next/image",loader:"default"},h=p.deviceSizes,v=p.imageSizes,y=p.loader,m=p.path;h.sort((function(e,t){return e-t})),v.sort((function(e,t){return e-t}));var g=window.IntersectionObserver;function b(e){if("number"!==typeof e)return h;if(v.includes(e))return[e];var t,n=[],o=r(h);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(n.push(a),a>=e)break}}catch(i){o.e(i)}finally{o.f()}return n}function w(e,t,n,r){if(t)return e;var o=b(n);return _({src:e,width:o[o.length-1],quality:r})}function _(e){return(d.get(y)||M)((0,s.default)({root:m},e))}function x(e){var t=e.src,n=e.unoptimized,r=e.width,o=e.quality;if(!n)return b(r).map((function(e){return"".concat(_({src:t,width:e,quality:o})," ").concat(e,"w")})).join(", ")}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){return"/"===e[0]?e.slice(1):e}function M(e){var t=e.root,n=e.src,r=e.width,o=e.quality;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["/EDR",0,2,1,3]]]);