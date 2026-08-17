var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=ee,D=function(){te.postMessage(null)}}else D=function(){_(ee,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=m({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=m({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(m({},Pn,{dataTransfer:0})),Ln=En(m({},kn,{relatedTarget:0})),Rn=En(m({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(m({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(m({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function M(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Wn(){return M}var Gn=En(m({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=En(m({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=En(m({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=En(m({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=En(m({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=En(m({},Dn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=gn&&`CompositionEvent`in window,$n=null;gn&&`documentMode`in document&&($n=document.documentMode);var er=gn&&`TextEvent`in window&&!$n,tr=gn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),kt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=mi(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function N(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-We(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Fi(e){e.return!==null&&(Pi(e,1),N(e,1,0))}function Ii(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function P(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var F=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(F=e.return;F;)switch(F.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:F=F.return}}function Ui(e){if(e!==F)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=F?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=F=null,L=!1}function Gi(){var e=Li;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){j(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,de(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){tu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=Aa(t),f(e,t,n)}if(oe(t)||re(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Aa(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Wl,j(to,e),j(eo,t),Wl=e|t.baseLanes}function ro(){j(to,Wl),j(eo,eo.current)}function io(){Wl=to.current,de(eo),de(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;j(R,R.current&1),j(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){j(R,R.current),j(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(j(R,R.current),j(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){j(R,R.current),j(ao,ao.current)}function fo(e){de(ao),oo===e&&(oo=null),de(R)}var R=ue(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,V=null,H=!1,ho=!1,go=!1,_o=0,vo=0,U=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?zs:Bs,go=!1,a=n(r,i),go=!1,ho&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){k.H=Rs;var t=B!==null&&B.next!==null;if(mo=0,V=B=z=null,H=!1,vo=0,U=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ta(e)&&(rc=!0))}function wo(e,t,n,r){z=e;var a=0;do{if(ho&&(U=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,V=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Vs,o=t(n,r)}while(ho);return o}function To(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Eo(){var e=_o!==0;return _o=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(H){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}H=!1}mo=0,V=B=z=null,ho=!1,vo=_o=0,U=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return V===null?z.memoizedState=V=e:V=V.next=e,V}function Ao(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=V===null?z.memoizedState:V.next;if(t!==null)V=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},V===null?z.memoizedState=V=e:V=V.next=e}return V}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=vo;return vo+=1,U===null&&(U=[]),e=ka(U,e,t),t=z,(V===null?t.memoizedState:V.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),B,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Kl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(rc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=z,a=Ao(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((B||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||V!==null&&V.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=jo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Wo(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),go){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,B,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,z,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,z,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),B,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===wa?Ea:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=B;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=jo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();z.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&xo(r,B.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(z.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=jo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),go){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Kl|=e,n)}function xs(e,t,n,r){return Or(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(rc=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Kl|=e,t):(e=bs(e,n,r),Or(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ps(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,va(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,se,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ra(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===z||t!==null&&t===z}function Is(e,t){ho=H=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Rs={readContext:ra,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:ra,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(go){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(go){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,z,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=ko();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=K.identifierPrefix;if(L){var n=Ni,r=Mi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,z)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),B.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),B,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return B===null?bs(n,e,t):xs(n,B.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,B,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ni(e)}function Js(e){console.error(e)}function Ys(e){ni(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ga(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=Qs(e.stateNode,r,a),Ja(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(L&&s&&Fi(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ba(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a){if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(rc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&P(t,e),t=dc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return na(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(L&&r&&Fi(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(L&&r&&Fi(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(na(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ha||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ha||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Wi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Ca()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(so(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&P(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ba(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,j(R,o),ic(e,t,r,n),r=L?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function jc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(R,R.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}}else rc=!1,L&&t.flags&1048576&&N(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}if(r!==a){a=wi(Error(i(424)),t),Ki(a),t=vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),F=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),F=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,F=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,F=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Sc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Xl|=t)}function Lc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=fe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=fe.current,Ui(t))Vi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=F,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Zi(t.type),W(t),null;case 19:if(de(R),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Lc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return j(R,R.current&1|2),L&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>nu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return W(t),null}else 2*Me()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=R.current,j(R,a?n&1|2:n&1),L&&Pi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(R),null;case 4:return _e(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ii(t),t.tag){case 3:Zi(la),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:de(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&de(ba);break;case 24:Zi(la)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Vc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Zd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null){if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:cl!==null&&(ll?(e=cl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),Sl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Vc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Gc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Vc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:k.T===null?ut():dd()}function mu(){if(Yl===0){if(!(J&536870912)||L){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Yl=e}else Yl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Yl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&yu(e,J,Yl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Me(),10<a)){if(yu(r,t,Yl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?eu-Me():(a&4194048)===a?tu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Oo(e),Pa=null,Fa=0,e=q;for(;e!==null;)Bc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){z=null,k.H=Rs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Xs(e,wi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=k.H;return k.H=Rs,e===null?Rs:e}function Eu(){var e=k.A;return k.A=Rl,e}function Du(){Gl=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||yu(K,J,Yl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(ru=null,Su(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=Gl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(ru=null,nu=Me()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),Gl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,oi(),Gl):0}function ju(){for(;q!==null&&!Ae();)Mu(q)}function Mu(e){var t=Mc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Oo(t);default:Bc(n,t),t=q=_i(t,Wl),t=Mc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Oo(t),Pa=null,Fa=0;var i=t.return;try{if(tc(e,i,t,n,J)){Gl=1,Xs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Xs(e,wi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Rc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{al(e,t,n)}finally{G=s,A.p=a,k.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{ol(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=Qs(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=wi(n,e),n=$s(2),r=Ka(t,n,2),r!==null&&(ec(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Me()-eu?!(G&2)&&Su(e,0):Jl|=n,Xl===J&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=li(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c)){if(_r)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(nu=Me()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/physics-course/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=y(t,n),t=s(t),t in b)return;b[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:v,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function T(e,t){return t+e.replace(/\\/g,`/`)}var E=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function D(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=oe(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ie(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ae(t))}function r(e,t){te(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return k(t,n,r,e)}function O(e,t){if(e===!1||e==null)throw Error(t)}function te(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substring(2,10)}function re(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ie(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?oe(t):t,state:n,key:t&&t.key||r||ne(),mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function oe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u()+1;let d=re(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u();let i=re(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return A(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(E,d),c=e,()=>{i.removeEventListener(E,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function A(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),O(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ae(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function se(e,t,n=`/`){return ce(e,t,n,!1)}function ce(e,t,n,r,i){let a=Ee((typeof t==`string`?oe(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function le(e){let t=ue(e);return j(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;O(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(O(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function j(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){te(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return te(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?oe(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=oe(e):(i={...e},O(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),O(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),O(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=w.test(n)?new URL(T(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{te(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function qe(e){try{return Ke.includes(new URL(e).protocol)}catch{return!1}}var Je=S.createContext(null);Je.displayName=`DataRouter`;var Ye=S.createContext(null);Ye.displayName=`DataRouterState`;var Xe=S.createContext(!1);function Ze(){return S.useContext(Xe)}var Qe=S.createContext({isTransitioning:!1});Qe.displayName=`ViewTransition`;var $e=S.createContext(new Map);$e.displayName=`Fetchers`;var et=S.createContext(null);et.displayName=`Await`;var tt=S.createContext(null);tt.displayName=`Navigation`;var nt=S.createContext(null);nt.displayName=`Location`;var rt=S.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName=`Route`;var it=S.createContext(null);it.displayName=`RouteError`;var at=`REACT_ROUTER_ERROR`,ot=`REDIRECT`,st=`ROUTE_ERROR_RESPONSE`;function ct(e){if(e.startsWith(`${at}:${ot}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function lt(e){if(e.startsWith(`${at}:${st}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ut(e,{relative:t}={}){O(dt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(tt),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function dt(){return S.useContext(nt)!=null}function ft(){return O(dt(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(nt).location}var pt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function mt(e){S.useContext(tt).static||S.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=S.useContext(rt);return e?Lt():gt()}function gt(){O(dt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Je),{basename:t,navigator:n}=S.useContext(tt),{matches:r}=S.useContext(rt),{pathname:i}=ft(),a=JSON.stringify(je(r)),o=S.useRef(!1);return mt(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(te(o.current,pt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var _t=S.createContext(null);function vt(e){let t=S.useContext(rt).outlet;return S.useMemo(()=>t&&S.createElement(_t.Provider,{value:e},t),[t,e])}function yt(){let{matches:e}=S.useContext(rt);return e[e.length-1]?.params??{}}function bt(e,{relative:t}={}){let{matches:n}=S.useContext(rt),{pathname:r}=ft(),i=JSON.stringify(je(n));return S.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){O(dt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(tt),{matches:i}=S.useContext(rt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ft(),d;if(t){let e=typeof t==`string`?oe(t):t;O(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):se(e,{pathname:p});te(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),te(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(nt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=It(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var wt=S.createElement(Ct,null),Tt=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=lt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(rt.Provider,{value:this.props.routeContext},S.createElement(it.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(Dt,{error:e},t):t}};Tt.contextType=Xe;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=S.useContext(tt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ct(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=Ue(e.location,n),a=i.absoluteURL||i.to;if(qe(a))throw Error(`Invalid redirect location`);if(He&&!Et.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=S.useContext(Je);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(rt.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);O(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=S.useContext(Je);return O(t,At(e)),t}function Mt(e){let t=S.useContext(Ye);return O(t,At(e)),t}function Nt(e){let t=S.useContext(rt);return O(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return O(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=S.useContext(it),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=S.useRef(!1);return mt(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{te(n.current,pt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,te(!1,n))}S.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt(e){return vt(e.context)}function Ht(e){O(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){O(!dt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=oe(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return te(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(tt.Provider,{value:c},S.createElement(nt.Provider,{children:t,value:h}))}function Wt({children:e,location:t}){return xt(Gt(e),t)}S.Component;function Gt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Gt(e.props.children,i));return}O(e.type===Ht,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),O(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Gt(e.props.children,i)),n.push(a)}),n}var Kt=`get`,qt=`application/x-www-form-urlencoded`;function Jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Yt(e){return Jt(e)&&e.tagName.toLowerCase()===`button`}function Xt(e){return Jt(e)&&e.tagName.toLowerCase()===`form`}function Zt(e){return Jt(e)&&e.tagName.toLowerCase()===`input`}function Qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $t(e,t){return e.button===0&&(!t||t===`_self`)&&!Qt(e)}var en=null;function tn(){if(en===null)try{new FormData(document.createElement(`form`),0),en=!1}catch{en=!0}return en}var nn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function rn(e){return e!=null&&!nn.has(e)?(te(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`),null):e}function an(e,t){let n,r,i,a,o;if(Xt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`enctype`))||qt,a=new FormData(e)}else if(Yt(e)||Zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`formenctype`))||rn(o.getAttribute(`enctype`))||qt,a=new FormData(o,e),!tn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Kt,r=null,i=qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function on(e,t){if(e===!1||e==null)throw Error(t)}function sn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ee(i.pathname,t)===`/`?`${Fe(t)}/_root.${r}`:`${Fe(i.pathname)}.${r}`,i}async function cn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ln(e){return e!=null&&typeof e.page==`string`}function un(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function dn(e,t,n){return gn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await cn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(un).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function fn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function pn(e,t,{includeHydrateFallback:n}={}){return mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function mn(e){return[...new Set(e)]}function hn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function gn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ln(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(hn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function _n(){let e=S.useContext(Je);return on(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function vn(){let e=S.useContext(Ye);return on(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var yn=S.createContext(void 0);yn.displayName=`FrameworkContext`;function bn(){let e=S.useContext(yn);return on(e,`You must render this element inside a <HydratedRouter> element`),e}function xn(e,t){let n=S.useContext(yn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Sn(s,p),onBlur:Sn(c,m),onMouseEnter:Sn(l,p),onMouseLeave:Sn(u,m),onTouchStart:Sn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Sn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cn({page:e,...t}){let n=Ze(),{nonce:r}=bn(),{router:i}=_n(),a=S.useMemo(()=>se(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?S.createElement(Tn,{page:e,matches:a,...t}):S.createElement(En,{page:e,matches:a,...t})):null}function wn(e){let{manifest:t,routeModules:n}=bn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return dn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Tn({page:e,matches:t,...n}){let r=ft(),{future:i}=bn(),{basename:a}=_n(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=sn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function En({page:e,matches:t,...n}){let r=ft(),{future:i,manifest:a,routeModules:o}=bn(),{basename:s}=_n(),{loaderData:c,matches:l}=vn(),u=S.useMemo(()=>fn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>fn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=sn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>pn(d,a),[d,a]),m=wn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{On&&(window.__reactRouterVersion=`7.18.2`)}catch{}function kn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=D({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var An=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(tt),v=typeof l==`string`&&C.test(l),y=Ue(l,h);l=y.to;let b=ut(l,{relative:r}),x=ft(),w=null;if(o){let e=Me(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),w=g.createHref(e)}let[T,E,ee]=xn(n,p),D=Fn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let te=!(y.isExternal||i),ne=S.createElement(`a`,{...p,...ee,href:(te?w:void 0)||y.absoluteURL||b,onClick:te?O:e,ref:Dn(m,E),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return T&&!v?S.createElement(S.Fragment,null,ne,S.createElement(Cn,{page:b})):ne});An.displayName=`Link`;var jn=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=ft(),f=S.useContext(Ye),{navigator:p,basename:m}=S.useContext(tt),h=f!=null&&Bn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ee(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return S.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(tt),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&C.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pn(e){let t=S.useContext(Je);return O(t,Nn(e)),t}function Fn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ht(),d=ft(),f=bt(e,{relative:o});return S.useCallback(p=>{if($t(p,t)){p.preventDefault();let t=n===void 0?ae(d)===ae(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Pn(`useSubmit`),{basename:t}=S.useContext(tt),n=Ft(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=an(e,t);if(a.navigate===!1){let e=a.fetcherKey||Ln();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=S.useContext(tt),r=S.useContext(rt);O(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=ft();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ae(a)}function Bn(e,{relative:t}={}){let n=S.useContext(Qe);O(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Pn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Hn=o(((e,t)=>{t.exports=Vn()})),Un=_(),M=Hn();function Wn(){return(0,M.jsxs)(`div`,{className:`app-shell`,children:[(0,M.jsxs)(`header`,{className:`site-header`,children:[(0,M.jsx)(jn,{to:`/`,className:`brand`,children:`⚛ 初中物理核心课程`}),(0,M.jsxs)(`nav`,{children:[(0,M.jsx)(jn,{to:`/textbook`,children:`按课本找课`}),(0,M.jsx)(jn,{to:`/courses`,children:`知识主线`}),(0,M.jsx)(jn,{to:`/progress`,children:`学习进度`})]})]}),(0,M.jsx)(`main`,{className:`page`,children:(0,M.jsx)(Vt,{})}),(0,M.jsx)(`footer`,{children:`少而精 · 小步走 · 强逻辑 · 多图示 · 勤互动 · 重理解 · 会建模`})]})}var Gn=`physics-course-progress-v1`;function Kn(){try{return JSON.parse(localStorage.getItem(Gn)||`[]`)}catch{return[]}}function qn(e,t){let n=new Set(Kn());t?n.add(e):n.delete(e),localStorage.setItem(Gn,JSON.stringify([...n]))}function Jn(){let e=Kn().length;return(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`section`,{className:`hero`,children:[(0,M.jsx)(`span`,{className:`eyebrow`,children:`新课标 · 人教版第十二套教材`}),(0,M.jsx)(`h1`,{children:`每次只学一个清楚的物理问题`}),(0,M.jsx)(`p`,{children:`20分钟理解，10分钟练习。先猜、再观察、画图建模，最后才用正式物理语言。`}),(0,M.jsxs)(`div`,{className:`hero-actions`,children:[(0,M.jsx)(An,{className:`button primary`,to:`/lessons/L001`,children:`从开学第一课开始`}),(0,M.jsx)(An,{className:`button`,to:`/textbook`,children:`按学校课本进度找课`})]}),(0,M.jsxs)(`p`,{className:`progress-note`,children:[`本机已完成 `,e,`/70 课`]})]}),(0,M.jsxs)(`div`,{className:`choice-grid`,children:[(0,M.jsxs)(An,{to:`/textbook`,className:`choice-card featured`,children:[(0,M.jsx)(`span`,{children:`📘`}),(0,M.jsx)(`h2`,{children:`按课本章节学习`}),(0,M.jsx)(`p`,{children:`八上、八下、九年级全一册。学校讲到哪一节，就点哪一节。`})]}),(0,M.jsxs)(An,{to:`/courses`,className:`choice-card`,children:[(0,M.jsx)(`span`,{children:`🧭`}),(0,M.jsx)(`h2`,{children:`按知识逻辑学习`}),(0,M.jsx)(`p`,{children:`沿70节核心课程依次前进，建立完整的物理知识链。`})]})]})]})}var Yn=`---\r
lesson_id: L001\r
title: 长度和时间：先学会可靠测量\r
grade: 八年级\r
semester: 上册\r
big_idea: 测量与科学方法\r
importance: ★★★\r
curriculum_standard: [2.2.1, 4.1.4]\r
pep_mapping: 八上第1章\r
core_question: 怎样把“差不多”变成可比较的数据？\r
core_concept: 测量值由数值和单位组成\r
core_model: 选量程、分度值、估读并记录\r
formula: "—"\r
math_prerequisite: [小数, 单位换算]\r
math_connection: 把小数、单位换算用于真实测量、图示或数量关系。\r
from_previous: 课程起点：从感觉进入可测量的证据。\r
to_next: 为L002《运动和静止：先选参照物》准备相对参照物比较位置。\r
knowledge_links: []\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C6单位错误, C9漏读分度值]\r
review_links: []\r
---\r
\r
# 第1课：长度和时间：先学会可靠测量\r
\r
## 今天只学一件事\r
\r
回答：**怎样把“差不多”变成可比较的数据？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：小数、单位换算。把小数、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习小数、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：测书本宽度并测30次脉搏时间。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：测书本宽度并测30次脉搏时间。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量类，无自变量。\r
- 因变量/观察测量：长度和时间读数。\r
- 关键控制与规范：量程、分度值、视线和起止点。\r
- 证据记录：原始读数、估读位与单位。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**测量值由数值和单位组成**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**刻度尺读数图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**选量程、分度值、估读并记录**。\r
\r
## 正式物理知识\r
\r
- 概念：测量值由数值和单位组成。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：选量程、分度值、估读并记录。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：尺上12.30 cm表示精确到毫米并估读一位？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“选量程、分度值、估读并记录” → 检查单位和意义。\r
\r
**答案**：12.30 cm；末位是估读。\r
\r
## 一句话收束\r
\r
今天记住：**测量值由数值和单位组成；选量程、分度值、估读并记录。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 小京用分度值为1 mm的刻度尺测书宽，记录为18.6，但没有写单位。这个结果是否完整？\r
\r
   **答案**：不完整。测量值必须由数值和单位共同组成，应按实际读数补写单位。\r
2. **[基础·北京题型：读数/计算]** 尺上12.30 cm表示精确到毫米并估读一位。\r
\r
   **答案**：12.30 cm；末位是估读。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“刻度尺读数图”，标出研究对象、关键方向或变量，并用图得出“选量程、分度值、估读并记录”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“测书本宽度并测30次脉搏时间”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“选量程、分度值、估读并记录”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 同一支铅笔测三次得到17.82 cm、17.81 cm、18.92 cm。指出异常数据并说明处理办法。\r
\r
   **答案**：18.92 cm明显偏离，先核查起点、分度值和读数；确认操作错误后重测，不能把异常值直接放入平均值。\r
\r
## 为什么错\r
\r
- C6单位错误：回到本课模型卡，重新指出对象和关键条件。\r
- C9漏读分度值：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
课程起点：从感觉进入可测量的证据。\r
\r
## 下一课会发生什么\r
\r
为L002《运动和静止：先选参照物》准备相对参照物比较位置。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Xn=`---\r
lesson_id: L002\r
title: 运动和静止：先选参照物\r
grade: 八年级\r
semester: 上册\r
big_idea: 运动\r
importance: ★★★\r
curriculum_standard: [2.1.1, 2.1.3]\r
pep_mapping: 八上第1章\r
core_question: 同一个人为什么既能说在动，也能说没动？\r
core_concept: 机械运动是位置随时间改变\r
core_model: 相对参照物比较位置\r
formula: "—"\r
math_prerequisite: [坐标与方向]\r
math_connection: 把坐标与方向用于真实测量、图示或数量关系。\r
from_previous: 承接L001《长度和时间：先学会可靠测量》的测量值由数值和单位组成。\r
to_next: 为L003《速度：每1秒走多远》准备单位时间通过的路程。\r
knowledge_links: [L001]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1把运动说成绝对, C4漏参照物]\r
review_links: [L001]\r
---\r
\r
# 第2课：运动和静止：先选参照物\r
\r
## 今天只学一件事\r
\r
回答：**同一个人为什么既能说在动，也能说没动？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：坐标与方向。把坐标与方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习坐标与方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：玩具车旁放橡皮，分别以桌面和车为参照观察。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：玩具车旁放橡皮，分别以桌面和车为参照观察。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**机械运动是位置随时间改变**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**参照物位置对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**相对参照物比较位置**。\r
\r
## 正式物理知识\r
\r
- 概念：机械运动是位置随时间改变。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：相对参照物比较位置。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：坐在行驶列车中的人相对座椅静止、相对站台运动？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“相对参照物比较位置” → 检查单位和意义。\r
\r
**答案**：两种说法都对，关键是参照物不同。\r
\r
## 一句话收束\r
\r
今天记住：**机械运动是位置随时间改变；相对参照物比较位置。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 【2024北京中考第3题改编】火箭升空时，下列判断正确的是：A.相对发射塔静止 B.相对地面运动 C.发射塔相对地面运动 D.运动与参照物无关。\r
\r
   **答案**：B。火箭相对地面的位置随时间改变。\r
2. **[基础·北京题型：读数/计算]** 坐在行驶列车中的人相对座椅静止、相对站台运动。\r
\r
   **答案**：两种说法都对，关键是参照物不同。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“参照物位置对比图”，标出研究对象、关键方向或变量，并用图得出“相对参照物比较位置”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“玩具车旁放橡皮，分别以桌面和车为参照观察”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“相对参照物比较位置”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 并排行驶的两列车中，乘客觉得邻车后退。用两个参照物解释为何不矛盾。\r
\r
   **答案**：以本车为参照，邻车相对位置向后变；以站台为参照，邻车仍可能向前。参照物不同，结论可以不同。\r
\r
## 为什么错\r
\r
- C1把运动说成绝对：回到本课模型卡，重新指出对象和关键条件。\r
- C4漏参照物：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L001《长度和时间：先学会可靠测量》的测量值由数值和单位组成。\r
\r
## 下一课会发生什么\r
\r
为L003《速度：每1秒走多远》准备单位时间通过的路程。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Zn=`---\r
lesson_id: L003\r
title: 速度：每1秒走多远\r
grade: 八年级\r
semester: 上册\r
big_idea: 运动\r
importance: ★★★\r
curriculum_standard: [2.2.2]\r
pep_mapping: 八上第1章\r
core_question: 路程和时间都不同，怎样公平比快慢？\r
core_concept: 速度描述运动快慢\r
core_model: 单位时间通过的路程\r
formula: "v=s/t"\r
math_prerequisite: [除法, 比率, 单位换算]\r
math_connection: 把除法、比率、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L002《运动和静止：先选参照物》的机械运动是位置随时间改变。\r
to_next: 为L004《平均速度：一段路整体有多快》准备总路程除以总时间。\r
knowledge_links: [L002, L001]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C5除法错误, C6单位错误, C7只比路程]\r
review_links: [L002]\r
---\r
\r
# 第3课：速度：每1秒走多远\r
\r
## 今天只学一件事\r
\r
回答：**路程和时间都不同，怎样公平比快慢？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：除法、比率、单位换算。把除法、比率、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习除法、比率、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：比较两辆玩具车不同路程与时间，统一到每1秒。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：比较两辆玩具车不同路程与时间，统一到每1秒。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**速度描述运动快慢**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**路程时间条形图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**单位时间通过的路程**。\r
\r
## 正式物理知识\r
\r
- 概念：速度描述运动快慢。\r
- 关系：v=s/t\r
- 为什么需要：用一个数量关系回答“路程和时间都不同，怎样公平比快慢？”。\r
- 量与单位：s是路程，常用m；t是对应时间，常用s；v常用m/s。\r
- 怎样变化：同一路程越短越快；同一时间路程越长越快。\r
- 适用边界：只用于同一段运动；先统一单位。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：60 m用12 s，速度是多少？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“单位时间通过的路程” → 检查单位和意义。\r
\r
**答案**：5 m/s，表示每秒通过5 m。\r
\r
## 一句话收束\r
\r
今天记住：**速度描述运动快慢；单位时间通过的路程。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 甲车10 s行80 m，乙车12 s行90 m。谁更快？不能只写答案，要给出公平比较的数据。\r
\r
   **答案**：甲车8 m/s，乙车7.5 m/s，所以甲更快。\r
2. **[基础·北京题型：读数/计算]** 60 m用12 s，速度是多少。\r
\r
   **答案**：5 m/s，表示每秒通过5 m。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“路程时间条形图”，标出研究对象、关键方向或变量，并用图得出“单位时间通过的路程”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“比较两辆玩具车不同路程与时间，统一到每1秒”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“单位时间通过的路程”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 只知道甲路程更长，能否判定甲更快？写出还需要的证据。\r
\r
   **答案**：不能。还需两车所用时间，或给出相同时间内的路程、相同路程所用时间。\r
\r
## 为什么错\r
\r
- C5除法错误：回到本课模型卡，重新指出对象和关键条件。\r
- C6单位错误：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L002《运动和静止：先选参照物》的机械运动是位置随时间改变。\r
\r
## 下一课会发生什么\r
\r
为L004《平均速度：一段路整体有多快》准备总路程除以总时间。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Qn=`---\r
lesson_id: L004\r
title: 平均速度：一段路整体有多快\r
grade: 八年级\r
semester: 上册\r
big_idea: 运动\r
importance: ★★★\r
curriculum_standard: [2.2.2]\r
pep_mapping: 八上第1章\r
core_question: 忽快忽慢时，怎样描述整段运动？\r
core_concept: 平均速度对应一段总过程\r
core_model: 总路程除以总时间\r
formula: "v平均=s总/t总"\r
math_prerequisite: [分数, 加法, 图像]\r
math_connection: 把分数、加法、图像用于真实测量、图示或数量关系。\r
from_previous: 承接L003《速度：每1秒走多远》的速度描述运动快慢。\r
to_next: 为L005《核心实验：测量物体运动速度》准备测距、计时、配对、计算。\r
knowledge_links: [L003, L001]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2分段模型错, C7速度直接平均]\r
review_links: [L003, L001]\r
---\r
\r
# 第4课：平均速度：一段路整体有多快\r
\r
## 今天只学一件事\r
\r
回答：**忽快忽慢时，怎样描述整段运动？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：分数、加法、图像。把分数、加法、图像用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习分数、加法、图像，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：走快10 m再慢走10 m，记录各段和总时间。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：走快10 m再慢走10 m，记录各段和总时间。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**平均速度对应一段总过程**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**分段时间轴**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**总路程除以总时间**。\r
\r
## 正式物理知识\r
\r
- 概念：平均速度对应一段总过程。\r
- 关系：v平均=s总/t总\r
- 为什么需要：用一个数量关系回答“忽快忽慢时，怎样描述整段运动？”。\r
- 量与单位：s总是整个研究过程总路程；t总包含该过程全部用时。\r
- 怎样变化：总路程不变时总时间越短，平均速度越大。\r
- 适用边界：不能把各段速度直接做算术平均。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：前10 m用2 s、后10 m用3 s，整段平均速度？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“总路程除以总时间” → 检查单位和意义。\r
\r
**答案**：20/5=4 m/s，不能平均两个速度。\r
\r
## 一句话收束\r
\r
今天记住：**平均速度对应一段总过程；总路程除以总时间。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 骑行者前600 m用120 s，中途停30 s，后400 m用100 s。求全程平均速度。\r
\r
   **答案**：总路程1000 m，总时间250 s，平均速度4 m/s；停留时间必须计入。\r
2. **[基础·北京题型：读数/计算]** 前10 m用2 s、后10 m用3 s，整段平均速度。\r
\r
   **答案**：20/5=4 m/s，不能平均两个速度。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“分段时间轴”，标出研究对象、关键方向或变量，并用图得出“总路程除以总时间”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“走快10 m再慢走10 m，记录各段和总时间”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“总路程除以总时间”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 为什么全程平均速度不能用两段速度的算术平均代替？给出条件说明。\r
\r
   **答案**：各段持续时间通常不同，直接平均等于错误地给各段相同权重；应始终用总路程除以总时间。\r
\r
## 为什么错\r
\r
- C2分段模型错：回到本课模型卡，重新指出对象和关键条件。\r
- C7速度直接平均：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L003《速度：每1秒走多远》的速度描述运动快慢。\r
\r
## 下一课会发生什么\r
\r
为L005《核心实验：测量物体运动速度》准备测距、计时、配对、计算。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,$n=`---\r
lesson_id: L005\r
title: 核心实验：测量物体运动速度\r
grade: 八年级\r
semester: 上册\r
big_idea: 运动\r
importance: ★★★\r
curriculum_standard: [2.2.2, 4.1.5]\r
pep_mapping: 八上第1章\r
core_question: 怎样用证据判断小车在哪一段更快？\r
core_concept: 速度由同一段的路程和时间得到\r
core_model: 测距、计时、配对、计算\r
formula: "v=s/t"\r
math_prerequisite: [小数, 单位换算, 表格]\r
math_connection: 把小数、单位换算、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L004《平均速度：一段路整体有多快》的平均速度对应一段总过程。\r
to_next: 为L006《声音从哪里来、怎样传过去》准备声源振动→介质传递→耳接收。\r
knowledge_links: [L004, L001]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4数据配错, C8只测一次]\r
review_links: [L004, L002]\r
---\r
\r
# 第5课：核心实验：测量物体运动速度\r
\r
## 今天只学一件事\r
\r
回答：**怎样用证据判断小车在哪一段更快？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：小数、单位换算、表格。把小数、单位换算、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习小数、单位换算、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：在缓斜面标两段，重复计时并记录数据。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：在缓斜面标两段，重复计时并记录数据。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：所选路段。\r
- 因变量/观察测量：通过该段的时间和算得速度。\r
- 关键控制与规范：同一小车、斜面坡度和释放方式。\r
- 证据记录：每段路程、至少三次时间及异常值。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**速度由同一段的路程和时间得到**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**斜面小车测量图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**测距、计时、配对、计算**。\r
\r
## 正式物理知识\r
\r
- 概念：速度由同一段的路程和时间得到。\r
- 关系：v=s/t\r
- 为什么需要：用一个数量关系回答“怎样用证据判断小车在哪一段更快？”。\r
- 量与单位：s是路程，常用m；t是对应时间，常用s；v常用m/s。\r
- 怎样变化：同一路程越短越快；同一时间路程越长越快。\r
- 适用边界：只用于同一段运动；先统一单位。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：0.8 m用1.6 s，速度是多少？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“测距、计时、配对、计算” → 检查单位和意义。\r
\r
**答案**：0.50 m/s；路程和时间必须来自同一段。\r
\r
## 一句话收束\r
\r
今天记住：**速度由同一段的路程和时间得到；测距、计时、配对、计算。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 测斜面小车速度时，甲同学用全程路程配前半程时间。所得速度能代表哪一段？\r
\r
   **答案**：不能代表任何已明确测量的路段；路程和时间必须来自同一段。\r
2. **[基础·北京题型：读数/计算]** 0.8 m用1.6 s，速度是多少。\r
\r
   **答案**：0.50 m/s；路程和时间必须来自同一段。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“斜面小车测量图”，标出研究对象、关键方向或变量，并用图得出“测距、计时、配对、计算”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“在缓斜面标两段，重复计时并记录数据”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“测距、计时、配对、计算”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 为了判断小车是否越滑越快，应怎样划分路段、记录数据并比较？\r
\r
   **答案**：沿运动方向划分相邻路段，分别配对记录每段路程和时间，计算各段平均速度；后段速度较大才支持越滑越快。\r
\r
## 为什么错\r
\r
- C4数据配错：回到本课模型卡，重新指出对象和关键条件。\r
- C8只测一次：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L004《平均速度：一段路整体有多快》的平均速度对应一段总过程。\r
\r
## 下一课会发生什么\r
\r
为L006《声音从哪里来、怎样传过去》准备声源振动→介质传递→耳接收。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,er=`---\r
lesson_id: L006\r
title: 声音从哪里来、怎样传过去\r
grade: 八年级\r
semester: 上册\r
big_idea: 声音与波的现象\r
importance: ★★★\r
curriculum_standard: [2.3.1]\r
pep_mapping: 八上第2章\r
core_question: 看不见的声音为什么能让纸屑跳动？\r
core_concept: 声音由振动产生并需介质传播\r
core_model: 声源振动→介质传递→耳接收\r
formula: "—"\r
math_prerequisite: [无]\r
math_connection: 本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
from_previous: 承接L005《核心实验：测量物体运动速度》的速度由同一段的路程和时间得到。\r
to_next: 为L007《音调、响度和音色别混淆》准备频率管高低、振幅管强弱、音色辨声源。\r
knowledge_links: [L005, L001]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1把声音当物质, C2漏介质]\r
review_links: [L005, L003]\r
---\r
\r
# 第6课：声音从哪里来、怎样传过去\r
\r
## 今天只学一件事\r
\r
回答：**看不见的声音为什么能让纸屑跳动？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：无。本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
\r
**数学小补丁**：无需数学补丁；直接进入观察、比较或画图任务。\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：摸喉咙、拨橡皮筋，再用纸杯电话比较。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：摸喉咙、拨橡皮筋，再用纸杯电话比较。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**声音由振动产生并需介质传播**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**振动传播链图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**声源振动→介质传递→耳接收**。\r
\r
## 正式物理知识\r
\r
- 概念：声音由振动产生并需介质传播。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：声音的产生需要振动，传播需要介质；真空不能传声。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：太空舱外爆炸能否直接听见？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“声源振动→介质传递→耳接收” → 检查单位和意义。\r
\r
**答案**：不能；真空不能传声。\r
\r
## 一句话收束\r
\r
今天记住：**声音由振动产生并需介质传播；声源振动→介质传递→耳接收。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 【2022北京中考第3题同型】琴弦正在发声。下列说法正确的是：A.琴弦不振动 B.声音可在真空传播 C.可凭音色区分乐器 D.音调相同则响度必相同。\r
\r
   **答案**：C。声音由振动产生，不能在真空传播；音调与响度是不同特性。\r
2. **[基础·北京题型：读数/计算]** 太空舱外爆炸能否直接听见。\r
\r
   **答案**：不能；真空不能传声。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“振动传播链图”，标出研究对象、关键方向或变量，并用图得出“声源振动→介质传递→耳接收”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“摸喉咙、拨橡皮筋，再用纸杯电话比较”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“声源振动→介质传递→耳接收”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 罩内闹钟随抽气逐渐变小，为什么不能据此直接说‘抽到真空后仍能听见’？\r
\r
   **答案**：装置难达到绝对真空且罩体也可能传声。可靠结论来自声音随空气减少而减弱，再外推真空不能传声。\r
\r
## 为什么错\r
\r
- C1把声音当物质：回到本课模型卡，重新指出对象和关键条件。\r
- C2漏介质：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L005《核心实验：测量物体运动速度》的速度由同一段的路程和时间得到。\r
\r
## 下一课会发生什么\r
\r
为L007《音调、响度和音色别混淆》准备频率管高低、振幅管强弱、音色辨声源。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,tr=`---\r
lesson_id: L007\r
title: 音调、响度和音色别混淆\r
grade: 八年级\r
semester: 上册\r
big_idea: 声音与波的现象\r
importance: ★★★\r
curriculum_standard: [2.3.2]\r
pep_mapping: 八上第2章\r
core_question: 同一首歌为什么能听出是谁唱的？\r
core_concept: 声音有音调、响度、音色三种特性\r
core_model: 频率管高低、振幅管强弱、音色辨声源\r
formula: "—"\r
math_prerequisite: [大小比较, 坐标图像]\r
math_connection: 把大小比较、坐标图像用于真实测量、图示或数量关系。\r
from_previous: 承接L006《声音从哪里来、怎样传过去》的声音由振动产生并需介质传播。\r
to_next: 为L008《声音的利用与噪声控制》准备声源—传播—接收三处分析。\r
knowledge_links: [L006, L002]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1三特性混淆, C3波形读错]\r
review_links: [L006, L004]\r
---\r
\r
# 第7课：音调、响度和音色别混淆\r
\r
## 今天只学一件事\r
\r
回答：**同一首歌为什么能听出是谁唱的？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：大小比较、坐标图像。把大小比较、坐标图像用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习大小比较、坐标图像，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：弹不同长度橡皮筋并改变拨动力度。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：弹不同长度橡皮筋并改变拨动力度。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**声音有音调、响度、音色三种特性**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**三种波形对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**频率管高低、振幅管强弱、音色辨声源**。\r
\r
## 正式物理知识\r
\r
- 概念：声音有音调、响度、音色三种特性。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：频率管高低、振幅管强弱、音色辨声源。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：用力拨同一根弦主要改变什么？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“频率管高低、振幅管强弱、音色辨声源” → 检查单位和意义。\r
\r
**答案**：响度；弦的振动频率近似不变。\r
\r
## 一句话收束\r
\r
今天记住：**声音有音调、响度、音色三种特性；频率管高低、振幅管强弱、音色辨声源。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 同一根橡皮筋先轻拨、再用力拨，主要改变的是：A.音调 B.响度 C.音色 D.声速。\r
\r
   **答案**：B。用力拨通常增大振幅，因此响度增大。\r
2. **[基础·北京题型：读数/计算]** 用力拨同一根弦主要改变什么。\r
\r
   **答案**：响度；弦的振动频率近似不变。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“三种波形对比图”，标出研究对象、关键方向或变量，并用图得出“频率管高低、振幅管强弱、音色辨声源”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“弹不同长度橡皮筋并改变拨动力度”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“频率管高低、振幅管强弱、音色辨声源”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 两列波形频率相同、振幅不同。它们的音调和响度分别怎样比较？\r
\r
   **答案**：频率相同所以音调相同；振幅较大的声音通常响度较大。\r
\r
## 为什么错\r
\r
- C1三特性混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C3波形读错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L006《声音从哪里来、怎样传过去》的声音由振动产生并需介质传播。\r
\r
## 下一课会发生什么\r
\r
为L008《声音的利用与噪声控制》准备声源—传播—接收三处分析。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,nr=`---\r
lesson_id: L008\r
title: 声音的利用与噪声控制\r
grade: 八年级\r
semester: 上册\r
big_idea: 声音与波的现象\r
importance: ★★\r
curriculum_standard: [2.3.2]\r
pep_mapping: 八上第2章\r
core_question: 同样是声音，为什么超声能检查身体，噪声却要阻断？\r
core_concept: 声可传递信息和能量\r
core_model: 声源—传播—接收三处分析\r
formula: "—"\r
math_prerequisite: [分类]\r
math_connection: 把分类用于真实测量、图示或数量关系。\r
from_previous: 承接L007《音调、响度和音色别混淆》的声音有音调、响度、音色三种特性。\r
to_next: 为L009《温度与温度计》准备测温物质随温度规律变化。\r
knowledge_links: [L007, L003]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2控制环节混乱, C4忽略情境]\r
review_links: [L007, L005, L001]\r
---\r
\r
# 第8课：声音的利用与噪声控制\r
\r
## 今天只学一件事\r
\r
回答：**同样是声音，为什么超声能检查身体，噪声却要阻断？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：分类。把分类用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习分类，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用软布包住响铃，比较声源与传播途径控制。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用软布包住响铃，比较声源与传播途径控制。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**声可传递信息和能量**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**噪声三环节图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**声源—传播—接收三处分析**。\r
\r
## 正式物理知识\r
\r
- 概念：声可传递信息和能量。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：声源—传播—接收三处分析。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用纸盒、布和海绵设计隔音房间模型，只比较一种材料或结构的变化，并从声源、传播途径、接收端解释证据。\r
\r
## 一个典型例题\r
\r
**题目**：给临街房间选降噪措施？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“声源—传播—接收三处分析” → 检查单位和意义。\r
\r
**答案**：关窗主要在传播途径减弱噪声。\r
\r
## 一句话收束\r
\r
今天记住：**声可传递信息和能量；声源—传播—接收三处分析。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 道路旁种植密集树木、居民关上双层窗，主要在哪一环节减弱噪声？\r
\r
   **答案**：传播途径。措施没有改变声源，也不是直接保护听者耳朵。\r
2. **[基础·北京题型：读数/计算]** 给临街房间选降噪措施。\r
\r
   **答案**：关窗主要在传播途径减弱噪声。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“噪声三环节图”，标出研究对象、关键方向或变量，并用图得出“声源—传播—接收三处分析”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用软布包住响铃，比较声源与传播途径控制”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“声源—传播—接收三处分析”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 为图书馆邻近施工设计一条降噪建议，并指出作用环节。\r
\r
   **答案**：例如施工设备加隔声罩，作用在声源或刚离开声源处；关闭双层窗则作用在传播途径。\r
\r
## 为什么错\r
\r
- C2控制环节混乱：回到本课模型卡，重新指出对象和关键条件。\r
- C4忽略情境：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L007《音调、响度和音色别混淆》的声音有音调、响度、音色三种特性。\r
\r
## 下一课会发生什么\r
\r
为L009《温度与温度计》准备测温物质随温度规律变化。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,rr=`---\r
lesson_id: L009\r
title: 温度与温度计\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★★\r
curriculum_standard: [1.1.2, 4.1.3]\r
pep_mapping: 八上第3章\r
core_question: 手觉得一冷一热，能当作可靠测量吗？\r
core_concept: 温度表示冷热程度\r
core_model: 测温物质随温度规律变化\r
formula: "—"\r
math_prerequisite: [正负数, 刻度]\r
math_connection: 把正负数、刻度用于真实测量、图示或数量关系。\r
from_previous: 承接L008《声音的利用与噪声控制》的声可传递信息和能量。\r
to_next: 为L010《三态与物态变化地图》准备三态之间六种变化方向。\r
knowledge_links: [L008, L004]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3读数方向错, C6漏摄氏度]\r
review_links: [L008, L006, L002]\r
---\r
\r
# 第9课：温度与温度计\r
\r
## 今天只学一件事\r
\r
回答：**手觉得一冷一热，能当作可靠测量吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：正负数、刻度。把正负数、刻度用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习正负数、刻度，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：三杯水先用手判断再用温度计测量。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：三杯水先用手判断再用温度计测量。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：被测对象。\r
- 因变量/观察测量：温度计示数。\r
- 关键控制与规范：温度计量程、浸入位置、稳定等待和视线。\r
- 证据记录：带正负号与℃的读数。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**温度表示冷热程度**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**温度计读数图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**测温物质随温度规律变化**。\r
\r
## 正式物理知识\r
\r
- 概念：温度表示冷热程度。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：测温物质随温度规律变化。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：温度计示数在0下4格、每格1℃？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“测温物质随温度规律变化” → 检查单位和意义。\r
\r
**答案**：−4℃；视线与液柱顶端相平。\r
\r
## 一句话收束\r
\r
今天记住：**温度表示冷热程度；测温物质随温度规律变化。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 温度计液柱顶端在0 ℃以下第4小格，每小格1 ℃。俯视读数是否规范？正确示数是多少？\r
\r
   **答案**：不规范，视线应与液柱顶端相平；示数为−4 ℃。\r
2. **[基础·北京题型：读数/计算]** 温度计示数在0下4格、每格1℃。\r
\r
   **答案**：−4℃；视线与液柱顶端相平。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“温度计读数图”，标出研究对象、关键方向或变量，并用图得出“测温物质随温度规律变化”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“三杯水先用手判断再用温度计测量”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“测温物质随温度规律变化”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 手先放冷水再放温水，与先放热水再放温水感受不同，说明测温为什么不能只靠感觉？\r
\r
   **答案**：同一杯温水因手原来的状态不同而感觉不同，感觉受比较基准影响；应使用温度计获得可比较数据。\r
\r
## 为什么错\r
\r
- C3读数方向错：回到本课模型卡，重新指出对象和关键条件。\r
- C6漏摄氏度：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L008《声音的利用与噪声控制》的声可传递信息和能量。\r
\r
## 下一课会发生什么\r
\r
为L010《三态与物态变化地图》准备三态之间六种变化方向。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ir=`---\r
lesson_id: L010\r
title: 三态与物态变化地图\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★★\r
curriculum_standard: [1.1.1, 1.1.3]\r
pep_mapping: 八上第3章\r
core_question: 冰、水和水蒸气是三种物质吗？\r
core_concept: 同种物质可处于固液气三态\r
core_model: 三态之间六种变化方向\r
formula: "—"\r
math_prerequisite: [箭头, 分类]\r
math_connection: 把箭头、分类用于真实测量、图示或数量关系。\r
from_previous: 承接L009《温度与温度计》的温度表示冷热程度。\r
to_next: 为L011《熔化和凝固：温度怎样变》准备晶体熔化时吸热、温度保持在熔点。\r
knowledge_links: [L009, L005]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1把水珠说成杯中渗出, C3箭头反向]\r
review_links: [L009, L007, L003]\r
---\r
\r
# 第10课：三态与物态变化地图\r
\r
## 今天只学一件事\r
\r
回答：**冰、水和水蒸气是三种物质吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：箭头、分类。把箭头、分类用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习箭头、分类，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：观察冰融化和杯外水珠，只先标起点与终点。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：观察冰融化和杯外水珠，只先标起点与终点。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**同种物质可处于固液气三态**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**三态六箭头图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**三态之间六种变化方向**。\r
\r
## 正式物理知识\r
\r
- 概念：同种物质可处于固液气三态。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：三态之间六种变化方向。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：冰变水属于什么变化？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“三态之间六种变化方向” → 检查单位和意义。\r
\r
**答案**：熔化：固态到液态。\r
\r
## 一句话收束\r
\r
今天记住：**同种物质可处于固液气三态；三态之间六种变化方向。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 冬天眼镜从室外进入暖屋后出现小水珠。它的初态和末态分别是什么？\r
\r
   **答案**：空气中的水蒸气（气态）变成小水滴（液态），属于液化。\r
2. **[基础·北京题型：读数/计算]** 冰变水属于什么变化。\r
\r
   **答案**：熔化：固态到液态。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“三态六箭头图”，标出研究对象、关键方向或变量，并用图得出“三态之间六种变化方向”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“观察冰融化和杯外水珠，只先标起点与终点”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“三态之间六种变化方向”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把‘杯外水珠是杯内水渗出’改造成可检验的实验方案。\r
\r
   **答案**：把密封良好的空杯和装冷水杯置于同一环境；若只有冷杯外出现水珠，支持空气中水蒸气遇冷液化。\r
\r
## 为什么错\r
\r
- C1把水珠说成杯中渗出：回到本课模型卡，重新指出对象和关键条件。\r
- C3箭头反向：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L009《温度与温度计》的温度表示冷热程度。\r
\r
## 下一课会发生什么\r
\r
为L011《熔化和凝固：温度怎样变》准备晶体熔化时吸热、温度保持在熔点。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ar=`---\r
lesson_id: L011\r
title: 熔化和凝固：温度怎样变\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★★\r
curriculum_standard: [1.1.3]\r
pep_mapping: 八上第3章\r
core_question: 冰在熔化时一直吸热，温度会一直升吗？\r
core_concept: 晶体在一定条件下有确定熔点\r
core_model: 晶体熔化时吸热、温度保持在熔点\r
formula: "—"\r
math_prerequisite: [坐标图像, 坐标系]\r
math_connection: 把坐标图像、坐标系用于真实测量、图示或数量关系。\r
from_previous: 承接L010《三态与物态变化地图》的同种物质可处于固液气三态。\r
to_next: 为L012《核心实验：水沸腾前后温度变化》准备持续吸热但沸腾时温度近似不变。\r
knowledge_links: [L010, L006]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3平台读错, C1把不升温当不吸热]\r
review_links: [L010, L008, L004]\r
---\r
\r
# 第11课：熔化和凝固：温度怎样变\r
\r
## 今天只学一件事\r
\r
回答：**冰在熔化时一直吸热，温度会一直升吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：坐标图像、坐标系。把坐标图像、坐标系用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习坐标图像、坐标系，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用碎冰和温度计观察，或读取规范实验数据。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用碎冰和温度计观察，或读取规范实验数据。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**晶体在一定条件下有确定熔点**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**熔化曲线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**晶体熔化时吸热、温度保持在熔点**。\r
\r
## 正式物理知识\r
\r
- 概念：晶体在一定条件下有确定熔点。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：温度平台用于一定条件下晶体的熔化过程，不能据此断言所有物质熔化都恒温。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：加热晶体的曲线出现温度平台，同时仍有固液两态，说明什么？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“晶体熔化时吸热、温度保持在熔点” → 检查单位和意义。\r
\r
**答案**：晶体正在熔化，继续吸热但温度保持在熔点。\r
\r
## 一句话收束\r
\r
今天记住：**晶体在一定条件下有确定熔点；晶体熔化时吸热、温度保持在熔点。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 某物质加热图像出现水平平台，平台期固液共存。小京说‘温度不升，所以没有吸热’，是否正确？\r
\r
   **答案**：错误。晶体熔化时继续吸热，但温度保持在熔点。\r
2. **[基础·北京题型：读数/计算]** 加热晶体的曲线出现温度平台，同时仍有固液两态，说明什么。\r
\r
   **答案**：晶体正在熔化，继续吸热但温度保持在熔点。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“熔化曲线图”，标出研究对象、关键方向或变量，并用图得出“晶体熔化时吸热、温度保持在熔点”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用碎冰和温度计观察，或读取规范实验数据”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“晶体熔化时吸热、温度保持在熔点”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 根据熔化曲线的平台，怎样判断平台前、平台中、平台后的物态？\r
\r
   **答案**：平台前低于熔点为固态；平台中熔化，通常固液共存；平台后完全熔化为液态并继续升温。\r
\r
## 为什么错\r
\r
- C3平台读错：回到本课模型卡，重新指出对象和关键条件。\r
- C1把不升温当不吸热：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L010《三态与物态变化地图》的同种物质可处于固液气三态。\r
\r
## 下一课会发生什么\r
\r
为L012《核心实验：水沸腾前后温度变化》准备持续吸热但沸腾时温度近似不变。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,or=`---\r
lesson_id: L012\r
title: 核心实验：水沸腾前后温度变化\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★★\r
curriculum_standard: [1.1.3, 4.2.1]\r
pep_mapping: 八上第3章\r
core_question: 水沸腾后继续加热，温度还会升吗？\r
core_concept: 沸腾在内部和表面同时汽化\r
core_model: 持续吸热但沸腾时温度近似不变\r
formula: "—"\r
math_prerequisite: [表格, 坐标图像]\r
math_connection: 把表格、坐标图像用于真实测量、图示或数量关系。\r
from_previous: 承接L011《熔化和凝固：温度怎样变》的晶体在一定条件下有确定熔点。\r
to_next: 为L013《汽化与液化：水去哪了又怎么回来》准备液体↔气体的能量过程。\r
knowledge_links: [L011, L007]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3图像轴错, C8用一次读数下结论]\r
review_links: [L011, L009, L005]\r
---\r
\r
# 第12课：核心实验：水沸腾前后温度变化\r
\r
## 今天只学一件事\r
\r
回答：**水沸腾后继续加热，温度还会升吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：表格、坐标图像。把表格、坐标图像用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习表格、坐标图像，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：按分钟记录温度和气泡，画温度—时间图。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：按分钟记录温度和气泡，画温度—时间图。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：加热时间。\r
- 因变量/观察测量：水温和气泡特征。\r
- 关键控制与规范：水量、容器、热源与温度计位置。\r
- 证据记录：多组温度—时间数据和沸腾前后现象。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**沸腾在内部和表面同时汽化**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**沸腾装置与曲线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**持续吸热但沸腾时温度近似不变**。\r
\r
## 正式物理知识\r
\r
- 概念：沸腾在内部和表面同时汽化。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：液体达到沸点并持续吸热、外界压强近似稳定时，沸腾温度近似不变。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：水沸腾后读数保持98℃说明什么？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“持续吸热但沸腾时温度近似不变” → 检查单位和意义。\r
\r
**答案**：当地条件下沸点约98℃，继续吸热用于汽化。\r
\r
## 一句话收束\r
\r
今天记住：**沸腾在内部和表面同时汽化；持续吸热但沸腾时温度近似不变。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 水沸腾后温度稳定在98 ℃。继续加热时，水是否还吸热？98 ℃说明什么？\r
\r
   **答案**：仍吸热，能量用于汽化；98 ℃是当时条件下的沸点，不能强改成100 ℃。\r
2. **[基础·北京题型：读数/计算]** 水沸腾后读数保持98℃说明什么。\r
\r
   **答案**：当地条件下沸点约98℃，继续吸热用于汽化。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“沸腾装置与曲线图”，标出研究对象、关键方向或变量，并用图得出“持续吸热但沸腾时温度近似不变”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“按分钟记录温度和气泡，画温度—时间图”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“持续吸热但沸腾时温度近似不变”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 实验只记录一次沸腾温度就下结论可靠吗？写出至少两项改进。\r
\r
   **答案**：不可靠。应等水充分沸腾后连续多次读数，并重复实验；同时规范温度计位置、读数视线和加热条件。\r
\r
## 为什么错\r
\r
- C3图像轴错：回到本课模型卡，重新指出对象和关键条件。\r
- C8用一次读数下结论：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L011《熔化和凝固：温度怎样变》的晶体在一定条件下有确定熔点。\r
\r
## 下一课会发生什么\r
\r
为L013《汽化与液化：水去哪了又怎么回来》准备液体↔气体的能量过程。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,sr=`---\r
lesson_id: L013\r
title: 汽化与液化：水去哪了又怎么回来\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★★\r
curriculum_standard: [1.1.3]\r
pep_mapping: 八上第3章\r
core_question: 湿衣服的水不沸腾，为什么也会消失？\r
core_concept: 蒸发可在任何温度发生，液化会放热\r
core_model: 液体↔气体的能量过程\r
formula: "—"\r
math_prerequisite: [大小比较]\r
math_connection: 把大小比较用于真实测量、图示或数量关系。\r
from_previous: 承接L012《核心实验：水沸腾前后温度变化》的沸腾在内部和表面同时汽化。\r
to_next: 为L014《升华、凝华与水循环》准备固↔气与水循环状态链。\r
knowledge_links: [L012, L008]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1蒸发等同沸腾, C2水珠来源错]\r
review_links: [L012, L010, L006]\r
---\r
\r
# 第13课：汽化与液化：水去哪了又怎么回来\r
\r
## 今天只学一件事\r
\r
回答：**湿衣服的水不沸腾，为什么也会消失？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：大小比较。把大小比较用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习大小比较，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：两滴等量水分别摊开与成滴，比较干燥速度。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：两滴等量水分别摊开与成滴，比较干燥速度。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**蒸发可在任何温度发生，液化会放热**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**蒸发条件对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**液体↔气体的能量过程**。\r
\r
## 正式物理知识\r
\r
- 概念：蒸发可在任何温度发生，液化会放热。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：液体↔气体的能量过程。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：夏天冰饮料杯外水珠来自哪里？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“液体↔气体的能量过程” → 检查单位和意义。\r
\r
**答案**：空气中水蒸气液化，不是杯内渗水。\r
\r
## 一句话收束\r
\r
今天记住：**蒸发可在任何温度发生，液化会放热；液体↔气体的能量过程。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 冰饮料杯外壁出现水珠。水珠来自杯内渗水还是空气？写出证据方向。\r
\r
   **答案**：来自空气中的水蒸气液化；可用密封不漏水的冷杯仍出现外壁水珠作证据。\r
2. **[基础·北京题型：读数/计算]** 夏天冰饮料杯外水珠来自哪里。\r
\r
   **答案**：空气中水蒸气液化，不是杯内渗水。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“蒸发条件对比图”，标出研究对象、关键方向或变量，并用图得出“液体↔气体的能量过程”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“两滴等量水分别摊开与成滴，比较干燥速度”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“液体↔气体的能量过程”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 等量水滴一滴摊开、一滴保持水滴状，如何控制变量并判断蒸发快慢？\r
\r
   **答案**：水量、温度、空气流动和材料相同，只改表面积；比较相同时间剩余水量或完全蒸干时间。\r
\r
## 为什么错\r
\r
- C1蒸发等同沸腾：回到本课模型卡，重新指出对象和关键条件。\r
- C2水珠来源错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L012《核心实验：水沸腾前后温度变化》的沸腾在内部和表面同时汽化。\r
\r
## 下一课会发生什么\r
\r
为L014《升华、凝华与水循环》准备固↔气与水循环状态链。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,cr=`---\r
lesson_id: L014\r
title: 升华、凝华与水循环\r
grade: 八年级\r
semester: 上册\r
big_idea: 热与物态\r
importance: ★★\r
curriculum_standard: [1.1.3, 1.1.4]\r
pep_mapping: 八上第3章\r
core_question: 霜为什么不是从天空落下来的？\r
core_concept: 物质可直接在固态和气态间变化\r
core_model: 固↔气与水循环状态链\r
formula: "—"\r
math_prerequisite: [无]\r
math_connection: 本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
from_previous: 承接L013《汽化与液化：水去哪了又怎么回来》的蒸发可在任何温度发生，液化会放热。\r
to_next: 为L015《光沿直线传播》准备用光线表示传播路径。\r
knowledge_links: [L013, L009]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3状态箭头错, C4忽略冷热位置]\r
review_links: [L013, L011, L007]\r
---\r
\r
# 第14课：升华、凝华与水循环\r
\r
## 今天只学一件事\r
\r
回答：**霜为什么不是从天空落下来的？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：无。本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
\r
**数学小补丁**：无需数学补丁；直接进入观察、比较或画图任务。\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：观察冷冻室霜或碘升华视频，只追踪物质去向。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：观察冷冻室霜或碘升华视频，只追踪物质去向。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**物质可直接在固态和气态间变化**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**水循环箭头图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**固↔气与水循环状态链**。\r
\r
## 正式物理知识\r
\r
- 概念：物质可直接在固态和气态间变化。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：固↔气与水循环状态链。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：在厨房照片中寻找熔化、汽化、液化、升华或凝华现象，逐一写清物质、初态和末态。\r
\r
## 一个典型例题\r
\r
**题目**：窗上冰花通常形成在哪一侧？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“固↔气与水循环状态链” → 检查单位和意义。\r
\r
**答案**：室内侧；水蒸气遇冷凝华。\r
\r
## 一句话收束\r
\r
今天记住：**物质可直接在固态和气态间变化；固↔气与水循环状态链。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 冷冻室内壁的霜不是液态水冻成的。写出形成霜的初态、末态和名称。\r
\r
   **答案**：水蒸气由气态直接变为固态冰晶，属于凝华。\r
2. **[基础·北京题型：读数/计算]** 窗上冰花通常形成在哪一侧。\r
\r
   **答案**：室内侧；水蒸气遇冷凝华。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“水循环箭头图”，标出研究对象、关键方向或变量，并用图得出“固↔气与水循环状态链”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“观察冷冻室霜或碘升华视频，只追踪物质去向”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“固↔气与水循环状态链”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 解释人工降雪与窗上冰花时，为什么必须先追踪物质的初态和末态？\r
\r
   **答案**：物态变化名称由初态到末态的路径决定；只看最终是固态，无法区分凝固和凝华。\r
\r
## 为什么错\r
\r
- C3状态箭头错：回到本课模型卡，重新指出对象和关键条件。\r
- C4忽略冷热位置：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L013《汽化与液化：水去哪了又怎么回来》的蒸发可在任何温度发生，液化会放热。\r
\r
## 下一课会发生什么\r
\r
为L015《光沿直线传播》准备用光线表示传播路径。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,lr=`---\r
lesson_id: L015\r
title: 光沿直线传播\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.6]\r
pep_mapping: 八上第4章\r
core_question: 为什么手电筒的光过三个小孔时必须对齐？\r
core_concept: 光在同种均匀介质中沿直线传播\r
core_model: 用光线表示传播路径\r
formula: "—"\r
math_prerequisite: [几何直线, 方向]\r
math_connection: 把几何直线、方向用于真实测量、图示或数量关系。\r
from_previous: 承接L014《升华、凝华与水循环》的物质可直接在固态和气态间变化。\r
to_next: 为L016《核心实验：光的反射定律》准备反射角等于入射角，两线分居法线两侧。\r
knowledge_links: [L014, L010]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1漏适用条件, C3光线不画箭头]\r
review_links: [L014, L012, L008]\r
---\r
\r
# 第15课：光沿直线传播\r
\r
## 今天只学一件事\r
\r
回答：**为什么手电筒的光过三个小孔时必须对齐？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：几何直线、方向。把几何直线、方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习几何直线、方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：让手电筒光通过三张带孔纸，移动中间纸。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：让手电筒光通过三张带孔纸，移动中间纸。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**光在同种均匀介质中沿直线传播**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**三孔与影子光路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**用光线表示传播路径**。\r
\r
## 正式物理知识\r
\r
- 概念：光在同种均匀介质中沿直线传播。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：只在同种、均匀、透明介质中用直线光线模型。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**融合阅读卡（2.3.6）**：白光可分解成多种色光；红、绿、蓝是色光三原色。本卡只要求观察与分类，不和直线传播同时计算。\r
\r
## 一个典型例题\r
\r
**题目**：影子怎样形成？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“用光线表示传播路径” → 检查单位和意义。\r
\r
**答案**：光沿直线传播，物体挡住部分光。\r
\r
## 一句话收束\r
\r
今天记住：**光在同种均匀介质中沿直线传播；用光线表示传播路径。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 三张带孔纸板只有在三个孔和光源大致共线时，末端光屏才见亮点。这支持什么结论？结论有什么条件？\r
\r
   **答案**：支持光沿直线传播；条件是光在同种均匀介质中传播。\r
2. **[基础·北京题型：读数/计算]** 影子怎样形成。\r
\r
   **答案**：光沿直线传播，物体挡住部分光。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“三孔与影子光路图”，标出研究对象、关键方向或变量，并用图得出“用光线表示传播路径”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“让手电筒光通过三张带孔纸，移动中间纸”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“用光线表示传播路径”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 日食、影子和小孔成像都能用同一模型解释。写出共同模型和一个适用条件。\r
\r
   **答案**：共同模型是光沿直线传播；适用条件是光在同种均匀介质中传播。\r
\r
## 为什么错\r
\r
- C1漏适用条件：回到本课模型卡，重新指出对象和关键条件。\r
- C3光线不画箭头：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L014《升华、凝华与水循环》的物质可直接在固态和气态间变化。\r
\r
## 下一课会发生什么\r
\r
为L016《核心实验：光的反射定律》准备反射角等于入射角，两线分居法线两侧。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ur=`---\r
lesson_id: L016\r
title: 核心实验：光的反射定律\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.3, 4.2.6]\r
pep_mapping: 八上第4章\r
core_question: 镜子能把光“弹”到哪里？\r
core_concept: 反射光线、入射光线和法线在同一平面内\r
core_model: 反射角等于入射角，两线分居法线两侧\r
formula: "∠r=∠i"\r
math_prerequisite: [几何角, 垂线]\r
math_connection: 把几何角、垂线用于真实测量、图示或数量关系。\r
from_previous: 承接L015《光沿直线传播》的光在同种均匀介质中沿直线传播。\r
to_next: 为L017《核心实验：平面镜成像》准备像物关于镜面对称。\r
knowledge_links: [L015, L011]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3角相对镜面量, C8由一组数据定律]\r
review_links: [L015, L013, L009]\r
---\r
\r
# 第16课：核心实验：光的反射定律\r
\r
## 今天只学一件事\r
\r
回答：**镜子能把光“弹”到哪里？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：几何角、垂线。把几何角、垂线用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习几何角、垂线，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用平面镜、纸屏和量角器改变入射角测三组数据。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：用平面镜、纸屏和量角器改变入射角测三组数据。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：入射角。\r
- 因变量/观察测量：反射角和光路位置。\r
- 关键控制与规范：同一镜面、入射点和量角方法。\r
- 证据记录：不少于三组i与r及翻折光屏现象。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：激光只能沿桌面低位传播并设置挡光板，严禁照眼、照人或照反光物。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**反射光线、入射光线和法线在同一平面内**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**反射光路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**反射角等于入射角，两线分居法线两侧**。\r
\r
## 正式物理知识\r
\r
- 概念：反射光线、入射光线和法线在同一平面内。\r
- 关系：∠r=∠i\r
- 为什么需要：用一个数量关系回答“镜子能把光“弹”到哪里？”。\r
- 量与单位：i、r都从法线量起，单位是度。\r
- 怎样变化：入射角增大时反射角等量增大。\r
- 适用边界：还要满足三线共面、两线分居法线两侧。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：入射光与镜面夹30°，反射角是多少？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“反射角等于入射角，两线分居法线两侧” → 检查单位和意义。\r
\r
**答案**：60°；入射角和反射角都相对法线测量。\r
\r
## 一句话收束\r
\r
今天记住：**反射光线、入射光线和法线在同一平面内；反射角等于入射角，两线分居法线两侧。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 入射光线与镜面夹角30°，反射角是多少？小京答30°，错在什么地方？\r
\r
   **答案**：反射角为60°。入射角和反射角都以法线为基准，不以镜面为基准。\r
2. **[基础·北京题型：读数/计算]** 入射光与镜面夹30°，反射角是多少。\r
\r
   **答案**：60°；入射角和反射角都相对法线测量。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“反射光路图”，标出研究对象、关键方向或变量，并用图得出“反射角等于入射角，两线分居法线两侧”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用平面镜、纸屏和量角器改变入射角测三组数据”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“反射角等于入射角，两线分居法线两侧”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 探究反射规律为什么要改变入射角测多组数据，并让纸板折转？\r
\r
   **答案**：多组角度用于检验反射角始终等于入射角，避免偶然；折转纸板用于检验三线是否在同一平面。\r
\r
## 为什么错\r
\r
- C3角相对镜面量：回到本课模型卡，重新指出对象和关键条件。\r
- C8由一组数据定律：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L015《光沿直线传播》的光在同种均匀介质中沿直线传播。\r
\r
## 下一课会发生什么\r
\r
为L017《核心实验：平面镜成像》准备像物关于镜面对称。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,dr=`---\r
lesson_id: L017\r
title: 核心实验：平面镜成像\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.4, 4.2.7]\r
pep_mapping: 八上第4章\r
core_question: 镜中的像能落在纸屏上吗？\r
core_concept: 平面镜成等大正立虚像\r
core_model: 像物关于镜面对称\r
formula: "像距=物距"\r
math_prerequisite: [垂线, 对称]\r
math_connection: 把垂线、对称用于真实测量、图示或数量关系。\r
from_previous: 承接L016《核心实验：光的反射定律》的反射光线、入射光线和法线在同一平面内。\r
to_next: 为L018《光的折射：方向为什么改变》准备入射介质—界面—折射光线模型。\r
knowledge_links: [L016, L012]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3把像画成实线光线会聚, C5漏总距离]\r
review_links: [L016, L014, L010]\r
---\r
\r
# 第17课：核心实验：平面镜成像\r
\r
## 今天只学一件事\r
\r
回答：**镜中的像能落在纸屏上吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：垂线、对称。把垂线、对称用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习垂线、对称，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：玻璃板前后用两支相同蜡烛定位像，再放光屏。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：玻璃板前后用两支相同蜡烛定位像，再放光屏。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：物距。\r
- 因变量/观察测量：像距、像大小和能否承接。\r
- 关键控制与规范：同一玻璃板、相同物体、测量基准。\r
- 证据记录：多组物距像距及光屏检验。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：玻璃板边缘须包边并固定；优先使用LED物体，若用蜡烛须由成人管理火源。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**平面镜成等大正立虚像**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**玻璃板成像图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**像物关于镜面对称**。\r
\r
## 正式物理知识\r
\r
- 概念：平面镜成等大正立虚像。\r
- 关系：像距=物距\r
- 为什么需要：用一个数量关系回答“镜中的像能落在纸屏上吗？”。\r
- 量与单位：像距和物距都沿镜面法线测量，单位相同。\r
- 怎样变化：物体远离镜面，像以相同距离远离。\r
- 适用边界：只描述平面镜成像，不表示像能落在光屏上。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：人离镜1 m，像离人多远？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“像物关于镜面对称” → 检查单位和意义。\r
\r
**答案**：2 m；像在镜后1 m。\r
\r
## 一句话收束\r
\r
今天记住：**平面镜成等大正立虚像；像物关于镜面对称。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 人站在平面镜前1.2 m处，向镜面靠近0.2 m。此时像到人的距离是多少？\r
\r
   **答案**：物距变为1.0 m，像距也是1.0 m，像到人的距离2.0 m。\r
2. **[基础·北京题型：读数/计算]** 人离镜1 m，像离人多远。\r
\r
   **答案**：2 m；像在镜后1 m。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“玻璃板成像图”，标出研究对象、关键方向或变量，并用图得出“像物关于镜面对称”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“玻璃板前后用两支相同蜡烛定位像，再放光屏”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“像物关于镜面对称”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 平面镜实验中为何用玻璃板而不用不透明镜子？为何还要两支相同蜡烛？\r
\r
   **答案**：玻璃板既成像又能看到镜后蜡烛，便于定位像；相同蜡烛与像重合可比较像与物的大小。\r
\r
## 为什么错\r
\r
- C3把像画成实线光线会聚：回到本课模型卡，重新指出对象和关键条件。\r
- C5漏总距离：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L016《核心实验：光的反射定律》的反射光线、入射光线和法线在同一平面内。\r
\r
## 下一课会发生什么\r
\r
为L018《光的折射：方向为什么改变》准备入射介质—界面—折射光线模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,fr=`---\r
lesson_id: L018\r
title: 光的折射：方向为什么改变\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.3]\r
pep_mapping: 八上第4章\r
core_question: 水里的筷子为什么像折断了？\r
core_concept: 光斜入不同介质时传播方向通常改变\r
core_model: 入射介质—界面—折射光线模型\r
formula: "—"\r
math_prerequisite: [几何角, 垂线]\r
math_connection: 把几何角、垂线用于真实测量、图示或数量关系。\r
from_previous: 承接L017《核心实验：平面镜成像》的平面镜成等大正立虚像。\r
to_next: 为L019《透镜怎样改变光束》准备三条特殊光线建立透镜模型。\r
knowledge_links: [L017, L013]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3法线漏画, C7背方向不看传播介质]\r
review_links: [L017, L015, L011]\r
---\r
\r
# 第18课：光的折射：方向为什么改变\r
\r
## 今天只学一件事\r
\r
回答：**水里的筷子为什么像折断了？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：几何角、垂线。把几何角、垂线用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习几何角、垂线，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：激光斜射入水，观察并画入射与折射路径。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：激光斜射入水，观察并画入射与折射路径。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：激光只能沿桌面低位传播并设置挡光板，严禁照眼、照人或照反光物。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**光斜入不同介质时传播方向通常改变**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**空气水界面光路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**入射介质—界面—折射光线模型**。\r
\r
## 正式物理知识\r
\r
- 概念：光斜入不同介质时传播方向通常改变。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：定性结论要先辨传播方向和介质；垂直入射时传播方向不偏折。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：从空气斜射入水，光线通常靠近哪条线？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“入射介质—界面—折射光线模型” → 检查单位和意义。\r
\r
**答案**：法线。\r
\r
## 一句话收束\r
\r
今天记住：**光斜入不同介质时传播方向通常改变；入射介质—界面—折射光线模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 一束光从空气斜射入水。画图前必须先画哪条辅助线？折射光线相对入射方向怎样偏？\r
\r
   **答案**：先过入射点画法线；从空气斜入水时折射光线向法线偏。\r
2. **[基础·北京题型：读数/计算]** 从空气斜射入水，光线通常靠近哪条线。\r
\r
   **答案**：法线。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“空气水界面光路图”，标出研究对象、关键方向或变量，并用图得出“入射介质—界面—折射光线模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“激光斜射入水，观察并画入射与折射路径”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“入射介质—界面—折射光线模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 筷子看起来上折并非筷子真的弯了。按‘光从哪里来—在哪里折射—眼睛怎样反向判断’解释。\r
\r
   **答案**：水中筷子反射的光在水面折射后进入眼睛；眼睛按直线反向判断光源位置，于是看到较浅的虚像。\r
\r
## 为什么错\r
\r
- C3法线漏画：回到本课模型卡，重新指出对象和关键条件。\r
- C7背方向不看传播介质：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L017《核心实验：平面镜成像》的平面镜成等大正立虚像。\r
\r
## 下一课会发生什么\r
\r
为L019《透镜怎样改变光束》准备三条特殊光线建立透镜模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,pr=`---\r
lesson_id: L019\r
title: 透镜怎样改变光束\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.5]\r
pep_mapping: 八上第5章\r
core_question: 放大镜为什么能把太阳光聚成亮点？\r
core_concept: 凸透镜会聚、凹透镜发散\r
core_model: 三条特殊光线建立透镜模型\r
formula: "—"\r
math_prerequisite: [几何直线, 对称]\r
math_connection: 把几何直线、对称用于真实测量、图示或数量关系。\r
from_previous: 承接L018《光的折射：方向为什么改变》的光斜入不同介质时传播方向通常改变。\r
to_next: 为L020《核心实验：凸透镜成像规律》准备物距—焦距区间决定像的位置与性质。\r
knowledge_links: [L018, L014]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1凭厚薄认错, C3折射光线方向错]\r
review_links: [L018, L016, L012]\r
---\r
\r
# 第19课：透镜怎样改变光束\r
\r
## 今天只学一件事\r
\r
回答：**放大镜为什么能把太阳光聚成亮点？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：几何直线、对称。把几何直线、对称用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习几何直线、对称，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用手电筒和平行光纸卡观察两类透镜后的光束。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用手电筒和平行光纸卡观察两类透镜后的光束。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：不用太阳作光源，不通过透镜直视太阳；优先使用低温LED光源。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**凸透镜会聚、凹透镜发散**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**凸凹透镜光路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**三条特殊光线建立透镜模型**。\r
\r
## 正式物理知识\r
\r
- 概念：凸透镜会聚、凹透镜发散。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：三条特殊光线建立透镜模型。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：平行光经凸透镜后经过哪里？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“三条特殊光线建立透镜模型” → 检查单位和意义。\r
\r
**答案**：焦点。\r
\r
## 一句话收束\r
\r
今天记住：**凸透镜会聚、凹透镜发散；三条特殊光线建立透镜模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 平行光通过甲透镜后会聚，通过乙透镜后发散。甲、乙分别是什么透镜？\r
\r
   **答案**：甲是凸透镜，乙是凹透镜。判断依据是对光束的作用，不只凭外形厚薄。\r
2. **[基础·北京题型：读数/计算]** 平行光经凸透镜后经过哪里。\r
\r
   **答案**：焦点。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“凸凹透镜光路图”，标出研究对象、关键方向或变量，并用图得出“三条特殊光线建立透镜模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用手电筒和平行光纸卡观察两类透镜后的光束”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“三条特殊光线建立透镜模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 凹透镜后的发散光线反向延长线相交于焦点。为什么这个焦点叫虚焦点？\r
\r
   **答案**：实际光线没有在那里相交，只有反向延长线相交，因此不能在该点用光屏承接亮点。\r
\r
## 为什么错\r
\r
- C1凭厚薄认错：回到本课模型卡，重新指出对象和关键条件。\r
- C3折射光线方向错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L018《光的折射：方向为什么改变》的光斜入不同介质时传播方向通常改变。\r
\r
## 下一课会发生什么\r
\r
为L020《核心实验：凸透镜成像规律》准备物距—焦距区间决定像的位置与性质。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,mr=`---\r
lesson_id: L020\r
title: 核心实验：凸透镜成像规律\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★★\r
curriculum_standard: [2.3.5, 4.2.8]\r
pep_mapping: 八上第5章\r
core_question: 物体靠近透镜，像会怎样变？\r
core_concept: 像的性质随物距区间改变\r
core_model: 物距—焦距区间决定像的位置与性质\r
formula: "—"\r
math_prerequisite: [不等式, 表格]\r
math_connection: 把不等式、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L019《透镜怎样改变光束》的凸透镜会聚、凹透镜发散。\r
to_next: 为L021《凸透镜应用与眼睛》准备成像区间→器件功能。\r
knowledge_links: [L019, L015]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4未先比较u与f, C8找不到像就下结论]\r
review_links: [L019, L017, L013]\r
---\r
\r
# 第20课：核心实验：凸透镜成像规律\r
\r
## 今天只学一件事\r
\r
回答：**物体靠近透镜，像会怎样变？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：不等式、表格。把不等式、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习不等式、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：固定焦距，改变物距并在光屏上找清晰像。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：固定焦距，改变物距并在光屏上找清晰像。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：物距u。\r
- 因变量/观察测量：像距、大小、正倒和虚实。\r
- 关键控制与规范：同一凸透镜、同一物体、同一光具座。\r
- 证据记录：u相对f和2f的多区间记录。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：不用太阳作光源，不通过透镜直视太阳；优先使用低温LED光源。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**像的性质随物距区间改变**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**光具座区间图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**物距—焦距区间决定像的位置与性质**。\r
\r
## 正式物理知识\r
\r
- 概念：像的性质随物距区间改变。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：结论针对薄凸透镜近轴成像的初中实验模型，先比较物距与f、2f。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：物距大于2f时像有何特点？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“物距—焦距区间决定像的位置与性质” → 检查单位和意义。\r
\r
**答案**：倒立、缩小、实像，像在f与2f之间。\r
\r
## 一句话收束\r
\r
今天记住：**像的性质随物距区间改变；物距—焦距区间决定像的位置与性质。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 【2023北京中考第24题数据思想】同一凸透镜成实像时，物距由17 cm增至40 cm，像高由2.5 cm减至0.9 cm。数据支持什么趋势？\r
\r
   **答案**：在该实像区间内，物距增大，所成实像高度减小。结论不能外推到所有物距。\r
2. **[基础·北京题型：读数/计算]** 物距大于2f时像有何特点。\r
\r
   **答案**：倒立、缩小、实像，像在f与2f之间。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“光具座区间图”，标出研究对象、关键方向或变量，并用图得出“物距—焦距区间决定像的位置与性质”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“固定焦距，改变物距并在光屏上找清晰像”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“物距—焦距区间决定像的位置与性质”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 光屏上找不到像时，不能立刻判定成虚像。列出两项应先排查的操作条件。\r
\r
   **答案**：先检查烛焰、透镜、光屏中心是否等高，再在合理范围移动光屏；还应核对物距是否大于焦距。\r
\r
## 为什么错\r
\r
- C4未先比较u与f：回到本课模型卡，重新指出对象和关键条件。\r
- C8找不到像就下结论：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L019《透镜怎样改变光束》的凸透镜会聚、凹透镜发散。\r
\r
## 下一课会发生什么\r
\r
为L021《凸透镜应用与眼睛》准备成像区间→器件功能。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,hr=`---\r
lesson_id: L021\r
title: 凸透镜应用与眼睛\r
grade: 八年级\r
semester: 上册\r
big_idea: 光\r
importance: ★★\r
curriculum_standard: [2.3.5]\r
pep_mapping: 八上第5章\r
core_question: 照相机、投影仪、放大镜为什么都用凸透镜？\r
core_concept: 不同物距区间对应不同应用\r
core_model: 成像区间→器件功能\r
formula: "—"\r
math_prerequisite: [区间, 比例]\r
math_connection: 把区间、比例用于真实测量、图示或数量关系。\r
from_previous: 承接L020《核心实验：凸透镜成像规律》的像的性质随物距区间改变。\r
to_next: 为L022《质量：物体含有多少物质》准备天平比较物体质量。\r
knowledge_links: [L020, L016]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2器件区间混淆, C1虚像可接屏]\r
review_links: [L020, L018, L014]\r
---\r
\r
# 第21课：凸透镜应用与眼睛\r
\r
## 今天只学一件事\r
\r
回答：**照相机、投影仪、放大镜为什么都用凸透镜？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：区间、比例。把区间、比例用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习区间、比例，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用凸透镜分别看近字和远景，比较能否在纸上接像。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用凸透镜分别看近字和远景，比较能否在纸上接像。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：不用太阳作光源，不通过透镜直视太阳；优先使用低温LED光源。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**不同物距区间对应不同应用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**三种应用对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**成像区间→器件功能**。\r
\r
## 正式物理知识\r
\r
- 概念：不同物距区间对应不同应用。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：成像区间→器件功能。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用两个凸透镜制作简易望远镜时只观察远处非太阳目标，并用透镜成像模型解释两片透镜的分工。\r
\r
## 一个典型例题\r
\r
**题目**：近视眼用什么透镜矫正？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“成像区间→器件功能” → 检查单位和意义。\r
\r
**答案**：凹透镜，使光先发散再进入眼睛。\r
\r
## 一句话收束\r
\r
今天记住：**不同物距区间对应不同应用；成像区间→器件功能。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 照相机、投影仪、放大镜都用凸透镜。哪一种成的像不能落在光屏上？\r
\r
   **答案**：放大镜。物体在焦点以内时成正立、放大的虚像，虚像不能用光屏承接。\r
2. **[基础·北京题型：读数/计算]** 近视眼用什么透镜矫正。\r
\r
   **答案**：凹透镜，使光先发散再进入眼睛。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“三种应用对比图”，标出研究对象、关键方向或变量，并用图得出“成像区间→器件功能”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用凸透镜分别看近字和远景，比较能否在纸上接像”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“成像区间→器件功能”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 眼睛看远近物体时主要怎样调节？近视镜为什么不是凸透镜？\r
\r
   **答案**：眼睛通过改变晶状体形状调节焦距；近视需先让入眼光发散，使像后移到视网膜上，所以用凹透镜。\r
\r
## 为什么错\r
\r
- C2器件区间混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C1虚像可接屏：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L020《核心实验：凸透镜成像规律》的像的性质随物距区间改变。\r
\r
## 下一课会发生什么\r
\r
为L022《质量：物体含有多少物质》准备天平比较物体质量。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,gr=`---\r
lesson_id: L022\r
title: 质量：物体含有多少物质\r
grade: 八年级\r
semester: 上册\r
big_idea: 质量与密度\r
importance: ★★★\r
curriculum_standard: [1.2.2, 4.1.1]\r
pep_mapping: 八上第6章\r
core_question: 冰化成水后，质量会改变吗？\r
core_concept: 质量不随形状、状态、位置轻易改变\r
core_model: 天平比较物体质量\r
formula: "—"\r
math_prerequisite: [小数, 单位换算]\r
math_connection: 把小数、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L021《凸透镜应用与眼睛》的不同物距区间对应不同应用。\r
to_next: 为L023《密度：相同体积为什么轻重不同》准备质量—体积比率模型。\r
knowledge_links: [L021, L017]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C6千克克换算错, C9天平未调平]\r
review_links: [L021, L019, L015]\r
---\r
\r
# 第22课：质量：物体含有多少物质\r
\r
## 今天只学一件事\r
\r
回答：**冰化成水后，质量会改变吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：小数、单位换算。把小数、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习小数、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：按调平—左物右码—读数测木块和水质量。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：按调平—左物右码—读数测木块和水质量。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量类，无自变量。\r
- 因变量/观察测量：物体质量。\r
- 关键控制与规范：天平调平、左物右码、夹取砝码和游码归零。\r
- 证据记录：砝码质量、游码示数和总质量。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**质量不随形状、状态、位置轻易改变**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**天平平衡图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**天平比较物体质量**。\r
\r
## 正式物理知识\r
\r
- 概念：质量不随形状、状态、位置轻易改变。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：天平比较物体质量。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：砝码50 g、游码2.4 g，物体质量？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“天平比较物体质量” → 检查单位和意义。\r
\r
**答案**：52.4 g。\r
\r
## 一句话收束\r
\r
今天记住：**质量不随形状、状态、位置轻易改变；天平比较物体质量。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 一块冰熔化成水后，形状和状态改变。若没有物质损失，质量怎样变化？\r
\r
   **答案**：质量不变。质量不随物体形状、状态的改变而改变。\r
2. **[基础·北京题型：读数/计算]** 砝码50 g、游码2.4 g，物体质量。\r
\r
   **答案**：52.4 g。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“天平平衡图”，标出研究对象、关键方向或变量，并用图得出“天平比较物体质量”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“按调平—左物右码—读数测木块和水质量”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“天平比较物体质量”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 天平测量前游码未归零会造成怎样的影响？应在何时纠正？\r
\r
   **答案**：游码初始示数会被误计入质量，通常使结果偏大；应在放物体前把游码归零并调平。\r
\r
## 为什么错\r
\r
- C6千克克换算错：回到本课模型卡，重新指出对象和关键条件。\r
- C9天平未调平：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L021《凸透镜应用与眼睛》的不同物距区间对应不同应用。\r
\r
## 下一课会发生什么\r
\r
为L023《密度：相同体积为什么轻重不同》准备质量—体积比率模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,_r=`---\r
lesson_id: L023\r
title: 密度：相同体积为什么轻重不同\r
grade: 八年级\r
semester: 上册\r
big_idea: 质量与密度\r
importance: ★★★\r
curriculum_standard: [1.2.3]\r
pep_mapping: 八上第6章\r
core_question: 同样大小的铁块和木块为什么轻重不同？\r
core_concept: 密度是单位体积的质量\r
core_model: 质量—体积比率模型\r
formula: "ρ=m/V"\r
math_prerequisite: [比, 体积, 单位换算]\r
math_connection: 把比、体积、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L022《质量：物体含有多少物质》的质量不随形状、状态、位置轻易改变。\r
to_next: 为L024《核心实验：测固体和液体密度》准备天平测质量、排水测体积、计算密度。\r
knowledge_links: [L022, L018]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C5比值颠倒, C6密度单位错]\r
review_links: [L022, L020, L016]\r
---\r
\r
# 第23课：密度：相同体积为什么轻重不同\r
\r
## 今天只学一件事\r
\r
回答：**同样大小的铁块和木块为什么轻重不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：比、体积、单位换算。把比、体积、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习比、体积、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：比较等体积水和食用油质量，统一到1 cm³。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：比较等体积水和食用油质量，统一到1 cm³。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**密度是单位体积的质量**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**等体积质量对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**质量—体积比率模型**。\r
\r
## 正式物理知识\r
\r
- 概念：密度是单位体积的质量。\r
- 关系：ρ=m/V\r
- 为什么需要：用一个数量关系回答“同样大小的铁块和木块为什么轻重不同？”。\r
- 量与单位：m是质量；V是对应体积；ρ常用kg/m³或g/cm³。\r
- 怎样变化：同种物质状态和温度相同时比值通常稳定。\r
- 适用边界：质量与体积必须属于同一对象；混合物和空心物体先辨模型。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：质量178 g、体积20 cm³，密度？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“质量—体积比率模型” → 检查单位和意义。\r
\r
**答案**：8.9 g/cm³。\r
\r
## 一句话收束\r
\r
今天记住：**密度是单位体积的质量；质量—体积比率模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 甲、乙两种材料体积都为20 cm³，质量分别为54 g和178 g。哪种材料密度大？\r
\r
   **答案**：甲为2.7 g/cm³，乙为8.9 g/cm³，所以乙密度大。\r
2. **[基础·北京题型：读数/计算]** 质量178 g、体积20 cm³，密度。\r
\r
   **答案**：8.9 g/cm³。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“等体积质量对比图”，标出研究对象、关键方向或变量，并用图得出“质量—体积比率模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“比较等体积水和食用油质量，统一到1 cm³”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“质量—体积比率模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** ‘同种物质质量越大，密度越大’为什么错？用公式中的比率关系说明。\r
\r
   **答案**：同种物质状态不变时，质量增大，体积按相同比例增大，m/V保持不变，所以密度不变。\r
\r
## 为什么错\r
\r
- C5比值颠倒：回到本课模型卡，重新指出对象和关键条件。\r
- C6密度单位错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L022《质量：物体含有多少物质》的质量不随形状、状态、位置轻易改变。\r
\r
## 下一课会发生什么\r
\r
为L024《核心实验：测固体和液体密度》准备天平测质量、排水测体积、计算密度。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,vr=`---\r
lesson_id: L024\r
title: 核心实验：测固体和液体密度\r
grade: 八年级\r
semester: 上册\r
big_idea: 质量与密度\r
importance: ★★★\r
curriculum_standard: [1.2.3, 4.1.2]\r
pep_mapping: 八上第6章\r
core_question: 不规则石块的体积怎样测？\r
core_concept: 密度测量需配对同一物体的质量和体积\r
core_model: 天平测质量、排水测体积、计算密度\r
formula: "ρ=m/V"\r
math_prerequisite: [体积差, 小数]\r
math_connection: 把体积差、小数用于真实测量、图示或数量关系。\r
from_previous: 承接L023《密度：相同体积为什么轻重不同》的密度是单位体积的质量。\r
to_next: 为L025《物质属性、微观结构与尺度》准备属性—用途—尺度证据链。\r
knowledge_links: [L023, L019]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4质量体积非同一对象, C5体积差错]\r
review_links: [L023, L021, L017]\r
---\r
\r
# 第24课：核心实验：测固体和液体密度\r
\r
## 今天只学一件事\r
\r
回答：**不规则石块的体积怎样测？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：体积差、小数。把体积差、小数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习体积差、小数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：测石块质量，再读放入前后水体积差；另测液体密度。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：测石块质量，再读放入前后水体积差；另测液体密度。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：被测物体或液体。\r
- 因变量/观察测量：质量、体积和密度。\r
- 关键控制与规范：同一对象、量筒视线、容器质量处理。\r
- 证据记录：原始质量、初末体积与计算结果。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**密度测量需配对同一物体的质量和体积**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**量筒排水图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**天平测质量、排水测体积、计算密度**。\r
\r
## 正式物理知识\r
\r
- 概念：密度测量需配对同一物体的质量和体积。\r
- 关系：ρ=m/V\r
- 为什么需要：用一个数量关系回答“不规则石块的体积怎样测？”。\r
- 量与单位：m是质量；V是对应体积；ρ常用kg/m³或g/cm³。\r
- 怎样变化：同种物质状态和温度相同时比值通常稳定。\r
- 适用边界：质量与体积必须属于同一对象；混合物和空心物体先辨模型。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：石块54 g，水从30到50 mL，密度？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“天平测质量、排水测体积、计算密度” → 检查单位和意义。\r
\r
**答案**：2.7 g/cm³。\r
\r
## 一句话收束\r
\r
今天记住：**密度测量需配对同一物体的质量和体积；天平测质量、排水测体积、计算密度。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 【2023北京中考第21题同型】土豆块质量44 g、体积40 cm³，求密度，并说明两数据为何必须属于同一块土豆。\r
\r
   **答案**：密度1.1 g/cm³。同一对象的质量和体积才构成有意义的比值。\r
2. **[基础·北京题型：读数/计算]** 石块54 g，水从30到50 mL，密度。\r
\r
   **答案**：2.7 g/cm³。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“量筒排水图”，标出研究对象、关键方向或变量，并用图得出“天平测质量、排水测体积、计算密度”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“测石块质量，再读放入前后水体积差；另测液体密度”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“天平测质量、排水测体积、计算密度”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 先测体积后取出潮湿石块测质量，会使密度测量偏大还是偏小？说明证据链。\r
\r
   **答案**：石块带水使测得质量偏大，而体积数据不变，ρ=m/V因此偏大。\r
\r
## 为什么错\r
\r
- C4质量体积非同一对象：回到本课模型卡，重新指出对象和关键条件。\r
- C5体积差错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L023《密度：相同体积为什么轻重不同》的密度是单位体积的质量。\r
\r
## 下一课会发生什么\r
\r
为L025《物质属性、微观结构与尺度》准备属性—用途—尺度证据链。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,yr=`---\r
lesson_id: L025\r
title: 物质属性、微观结构与尺度\r
grade: 八年级\r
semester: 上册\r
big_idea: 测量与科学方法\r
importance: ★\r
curriculum_standard: [1.2.1, 1.2.4, 1.3.1, 1.3.2, 1.3.3, 1.3.4]\r
pep_mapping: 八上第6章融合阅读\r
core_question: 材料为什么要按用途选择？\r
core_concept: 物质属性来自结构并服务技术选择\r
core_model: 属性—用途—尺度证据链\r
formula: "—"\r
math_prerequisite: [数量级, 排序]\r
math_connection: 把数量级、排序用于真实测量、图示或数量关系。\r
from_previous: 承接L024《核心实验：测固体和液体密度》的密度测量需配对同一物体的质量和体积。\r
to_next: 为L026《力：看作用效果与相互作用》准备施力物—受力物成对分析。\r
knowledge_links: [L024, L020]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础\r
common_errors: [C1把用途当属性, C4忽略选择条件]\r
review_links: [L024, L022, L018]\r
---\r
\r
# 第25课：物质属性、微观结构与尺度\r
\r
## 今天只学一件事\r
\r
回答：**材料为什么要按用途选择？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：数量级、排序。把数量级、排序用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习数量级、排序，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：比较金属和木材导热，给原子到宇宙排序。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：比较金属和木材导热，给原子到宇宙排序。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**物质属性来自结构并服务技术选择**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**宏观到微观尺度轴**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**属性—用途—尺度证据链**。\r
\r
## 正式物理知识\r
\r
- 概念：物质属性来自结构并服务技术选择。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：属性—用途—尺度证据链。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**尺度阅读卡（1.3）**：用数量级轴从宇宙—地球—人—细胞—分子—原子—原子核排序；原子由原子核和电子构成。这里重在尺度感，不引入高中微观理论。\r
\r
## 一个典型例题\r
\r
**题目**：锅身和锅柄应分别看重什么属性？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“属性—用途—尺度证据链” → 检查单位和意义。\r
\r
**答案**：锅身导热好，锅柄导热差且耐热。\r
\r
## 一句话收束\r
\r
今天记住：**物质属性来自结构并服务技术选择；属性—用途—尺度证据链。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 锅身选金属、锅柄选耐热塑料，分别利用了什么属性？\r
\r
   **答案**：锅身利用金属导热较好；锅柄利用耐热塑料导热较差且耐热。\r
2. **[基础·北京题型：读数/计算]** 锅身和锅柄应分别看重什么属性。\r
\r
   **答案**：锅身导热好，锅柄导热差且耐热。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“宏观到微观尺度轴”，标出研究对象、关键方向或变量，并用图得出“属性—用途—尺度证据链”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“比较金属和木材导热，给原子到宇宙排序”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“属性—用途—尺度证据链”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 为保温杯选择内胆材料时，只说‘越轻越好’为什么证据不足？至少补充两个指标。\r
\r
   **答案**：轻只对应密度或总质量，还要比较导热性、耐腐蚀性、强度、安全性等与用途有关的指标。\r
\r
## 为什么错\r
\r
- C1把用途当属性：回到本课模型卡，重新指出对象和关键条件。\r
- C4忽略选择条件：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L024《核心实验：测固体和液体密度》的密度测量需配对同一物体的质量和体积。\r
\r
## 下一课会发生什么\r
\r
为L026《力：看作用效果与相互作用》准备施力物—受力物成对分析。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,br=`---\r
lesson_id: L026\r
title: 力：看作用效果与相互作用\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.3]\r
pep_mapping: 八下第7章\r
core_question: 手推墙时，为什么手也会疼？\r
core_concept: 力是物体对物体的作用\r
core_model: 施力物—受力物成对分析\r
formula: "—"\r
math_prerequisite: [方向, 箭头]\r
math_connection: 把方向、箭头用于真实测量、图示或数量关系。\r
from_previous: 承接L025《物质属性、微观结构与尺度》的物质属性来自结构并服务技术选择。\r
to_next: 为L027《力的三要素与示意图》准备用带比例或标值箭头表示力。\r
knowledge_links: [L025, L021]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1只说“有力”不说对象, C2漏相互作用]\r
review_links: [L025, L023, L019]\r
---\r
\r
# 第26课：力：看作用效果与相互作用\r
\r
## 今天只学一件事\r
\r
回答：**手推墙时，为什么手也会疼？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：方向、箭头。把方向、箭头用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习方向、箭头，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：挤气球、推墙，分别说出施力物和受力物。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：挤气球、推墙，分别说出施力物和受力物。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**力是物体对物体的作用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**相互作用对象图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**施力物—受力物成对分析**。\r
\r
## 正式物理知识\r
\r
- 概念：力是物体对物体的作用。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：施力物—受力物成对分析。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：脚踢球时谁受力？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“施力物—受力物成对分析” → 检查单位和意义。\r
\r
**答案**：球受脚的力，脚也受球的力。\r
\r
## 一句话收束\r
\r
今天记住：**力是物体对物体的作用；施力物—受力物成对分析。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“挤气球、推墙，分别说出施力物和受力物”中，有同学忽略了“C2漏相互作用”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“施力物—受力物成对分析”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 脚踢球时谁受力。\r
\r
   **答案**：球受脚的力，脚也受球的力。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“相互作用对象图”，标出研究对象、关键方向或变量，并用图得出“施力物—受力物成对分析”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“挤气球、推墙，分别说出施力物和受力物”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“施力物—受力物成对分析”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“手推墙时，为什么手也会疼？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“施力物—受力物成对分析”连接证据与结论。若出现“C1只说“有力”不说对象”，归入 **C1只说“有力”不说对象** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1只说“有力”不说对象：回到本课模型卡，重新指出对象和关键条件。\r
- C2漏相互作用：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L025《物质属性、微观结构与尺度》的物质属性来自结构并服务技术选择。\r
\r
## 下一课会发生什么\r
\r
为L027《力的三要素与示意图》准备用带比例或标值箭头表示力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,xr=`---\r
lesson_id: L027\r
title: 力的三要素与示意图\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.4]\r
pep_mapping: 八下第7章\r
core_question: 同样大小的力，为什么推门位置不同效果不同？\r
core_concept: 力有大小、方向、作用点\r
core_model: 用带比例或标值箭头表示力\r
formula: "—"\r
math_prerequisite: [比例, 方向]\r
math_connection: 把比例、方向用于真实测量、图示或数量关系。\r
from_previous: 承接L026《力：看作用效果与相互作用》的力是物体对物体的作用。\r
to_next: 为L028《重力：方向总指向哪里》准备重心处竖直向下。\r
knowledge_links: [L026, L022]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3箭头起点错, C6漏力值单位]\r
review_links: [L026, L024, L020]\r
---\r
\r
# 第27课：力的三要素与示意图\r
\r
## 今天只学一件事\r
\r
回答：**同样大小的力，为什么推门位置不同效果不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：比例、方向。把比例、方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习比例、方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：在门上不同位置推，画出作用点和方向。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：在门上不同位置推，画出作用点和方向。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**力有大小、方向、作用点**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**规范力箭头图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**用带比例或标值箭头表示力**。\r
\r
## 正式物理知识\r
\r
- 概念：力有大小、方向、作用点。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：用带比例或标值箭头表示力。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：画水平向右5 N的推力？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“用带比例或标值箭头表示力” → 检查单位和意义。\r
\r
**答案**：箭头起于作用点、向右并标F=5 N。\r
\r
## 一句话收束\r
\r
今天记住：**力有大小、方向、作用点；用带比例或标值箭头表示力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“在门上不同位置推，画出作用点和方向”中，有同学忽略了“C6漏力值单位”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“用带比例或标值箭头表示力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 画水平向右5 N的推力。\r
\r
   **答案**：箭头起于作用点、向右并标F=5 N。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“规范力箭头图”，标出研究对象、关键方向或变量，并用图得出“用带比例或标值箭头表示力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“在门上不同位置推，画出作用点和方向”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“用带比例或标值箭头表示力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“同样大小的力，为什么推门位置不同效果不同？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“用带比例或标值箭头表示力”连接证据与结论。若出现“C3箭头起点错”，归入 **C3箭头起点错** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3箭头起点错：回到本课模型卡，重新指出对象和关键条件。\r
- C6漏力值单位：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L026《力：看作用效果与相互作用》的力是物体对物体的作用。\r
\r
## 下一课会发生什么\r
\r
为L028《重力：方向总指向哪里》准备重心处竖直向下。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Sr=`---\r
lesson_id: L028\r
title: 重力：方向总指向哪里\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.3]\r
pep_mapping: 八下第7章\r
core_question: 站在斜坡上，重力会沿斜坡向下吗？\r
core_concept: 重力是地球对物体的吸引\r
core_model: 重心处竖直向下\r
formula: "G=mg"\r
math_prerequisite: [乘法, 比例]\r
math_connection: 把乘法、比例用于真实测量、图示或数量关系。\r
from_previous: 承接L027《力的三要素与示意图》的力有大小、方向、作用点。\r
to_next: 为L029《弹力与弹簧测力计》准备在限度内形变量反映力大小。\r
knowledge_links: [L027, L023]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3把竖直当垂直斜面, C6质量单位未化kg]\r
review_links: [L027, L025, L021]\r
---\r
\r
# 第28课：重力：方向总指向哪里\r
\r
## 今天只学一件事\r
\r
回答：**站在斜坡上，重力会沿斜坡向下吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、比例。把乘法、比例用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、比例，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：悬挂小重物观察重垂线，再在斜面图画重力。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：悬挂小重物观察重垂线，再在斜面图画重力。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**重力是地球对物体的吸引**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**斜面重力图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**重心处竖直向下**。\r
\r
## 正式物理知识\r
\r
- 概念：重力是地球对物体的吸引。\r
- 关系：G=mg\r
- 为什么需要：用一个数量关系回答“站在斜坡上，重力会沿斜坡向下吗？”。\r
- 量与单位：m用kg，g近地面常取9.8 N/kg或按题意取10 N/kg，G用N。\r
- 怎样变化：同地质量越大，重力越大。\r
- 适用边界：适用于近地面重力估算；g按题目或当地条件取值。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：2 kg物体重力约多少，取g=10 N/kg？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“重心处竖直向下” → 检查单位和意义。\r
\r
**答案**：20 N，方向竖直向下。\r
\r
## 一句话收束\r
\r
今天记住：**重力是地球对物体的吸引；重心处竖直向下。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“悬挂小重物观察重垂线，再在斜面图画重力”中，有同学忽略了“C6质量单位未化kg”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“重心处竖直向下”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 2 kg物体重力约多少，取g=10 N/kg。\r
\r
   **答案**：20 N，方向竖直向下。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“斜面重力图”，标出研究对象、关键方向或变量，并用图得出“重心处竖直向下”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“悬挂小重物观察重垂线，再在斜面图画重力”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“重心处竖直向下”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“站在斜坡上，重力会沿斜坡向下吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“重心处竖直向下”连接证据与结论。若出现“C3把竖直当垂直斜面”，归入 **C3把竖直当垂直斜面** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3把竖直当垂直斜面：回到本课模型卡，重新指出对象和关键条件。\r
- C6质量单位未化kg：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L027《力的三要素与示意图》的力有大小、方向、作用点。\r
\r
## 下一课会发生什么\r
\r
为L029《弹力与弹簧测力计》准备在限度内形变量反映力大小。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Cr=`---\r
lesson_id: L029\r
title: 弹力与弹簧测力计\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.3, 4.1.6]\r
pep_mapping: 八下第7章\r
core_question: 拉得越长，弹簧的拉力一定越大吗？\r
core_concept: 弹性形变产生弹力且有弹性限度\r
core_model: 在限度内形变量反映力大小\r
formula: "—"\r
math_prerequisite: [刻度, 比例]\r
math_connection: 把刻度、比例用于真实测量、图示或数量关系。\r
from_previous: 承接L028《重力：方向总指向哪里》的重力是地球对物体的吸引。\r
to_next: 为L030《核心实验：滑动摩擦力受什么影响》准备水平匀速时拉力等于摩擦力。\r
knowledge_links: [L028, L024]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C9未校零, C7超过量程仍使用]\r
review_links: [L028, L026, L022]\r
---\r
\r
# 第29课：弹力与弹簧测力计\r
\r
## 今天只学一件事\r
\r
回答：**拉得越长，弹簧的拉力一定越大吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：刻度、比例。把刻度、比例用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习刻度、比例，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：检查零点、量程、分度值，体验并测量1 N与书的重力。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：检查零点、量程、分度值，体验并测量1 N与书的重力。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量类，无自变量。\r
- 因变量/观察测量：力的示数。\r
- 关键控制与规范：校零、量程、分度值和受力方向。\r
- 证据记录：原始示数、单位及是否超量程。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**弹性形变产生弹力且有弹性限度**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**测力计读数图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**在限度内形变量反映力大小**。\r
\r
## 正式物理知识\r
\r
- 概念：弹性形变产生弹力且有弹性限度。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：在限度内形变量反映力大小。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：测力计每大格1 N分5小格，指3小格？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“在限度内形变量反映力大小” → 检查单位和意义。\r
\r
**答案**：0.6 N。\r
\r
## 一句话收束\r
\r
今天记住：**弹性形变产生弹力且有弹性限度；在限度内形变量反映力大小。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“检查零点、量程、分度值，体验并测量1 N与书的重力”中，有同学忽略了“C7超过量程仍使用”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“在限度内形变量反映力大小”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 测力计每大格1 N分5小格，指3小格。\r
\r
   **答案**：0.6 N。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“测力计读数图”，标出研究对象、关键方向或变量，并用图得出“在限度内形变量反映力大小”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“检查零点、量程、分度值，体验并测量1 N与书的重力”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“在限度内形变量反映力大小”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“拉得越长，弹簧的拉力一定越大吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“在限度内形变量反映力大小”连接证据与结论。若出现“C9未校零”，归入 **C9未校零** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C9未校零：回到本课模型卡，重新指出对象和关键条件。\r
- C7超过量程仍使用：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L028《重力：方向总指向哪里》的重力是地球对物体的吸引。\r
\r
## 下一课会发生什么\r
\r
为L030《核心实验：滑动摩擦力受什么影响》准备水平匀速时拉力等于摩擦力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,wr=`---\r
lesson_id: L030\r
title: 核心实验：滑动摩擦力受什么影响\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.3, 4.2.2]\r
pep_mapping: 八下第8章\r
core_question: 给箱子加重和铺毛巾，哪种更难拉？\r
core_concept: 滑动摩擦与压力和接触面粗糙程度有关\r
core_model: 水平匀速时拉力等于摩擦力\r
formula: "F拉=f"\r
math_prerequisite: [表格]\r
math_connection: 把表格用于真实测量、图示或数量关系。\r
from_previous: 承接L029《弹力与弹簧测力计》的弹性形变产生弹力且有弹性限度。\r
to_next: 为L031《牛顿第一定律：没有力会怎样》准备阻力逐渐减小→运动保持更久→理想无阻力。\r
knowledge_links: [L029, L025]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2未利用平衡间接测量, C4同时改两个变量]\r
review_links: [L029, L027, L023]\r
---\r
\r
# 第30课：核心实验：滑动摩擦力受什么影响\r
\r
## 今天只学一件事\r
\r
回答：**给箱子加重和铺毛巾，哪种更难拉？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：表格。把表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：只改变压力或粗糙程度，匀速拉木块记录力。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：只改变压力或粗糙程度，匀速拉木块记录力。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：压力或接触面粗糙程度，每次只改一个。\r
- 因变量/观察测量：水平匀速时的拉力示数。\r
- 关键控制与规范：速度状态、接触面积处理和其余因素。\r
- 证据记录：每个条件多次拉力及平均/代表值。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**滑动摩擦与压力和接触面粗糙程度有关**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**水平匀速测摩擦图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**水平匀速时拉力等于摩擦力**。\r
\r
## 正式物理知识\r
\r
- 概念：滑动摩擦与压力和接触面粗糙程度有关。\r
- 关系：F拉=f\r
- 为什么需要：用一个数量关系回答“给箱子加重和铺毛巾，哪种更难拉？”。\r
- 量与单位：F拉和f都用N。\r
- 怎样变化：这里只用读出的拉力间接得到摩擦力。\r
- 适用边界：仅在物体水平匀速且水平方向只受这两个力时使用。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：研究粗糙程度时什么必须相同？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“水平匀速时拉力等于摩擦力” → 检查单位和意义。\r
\r
**答案**：压力等条件相同。\r
\r
## 一句话收束\r
\r
今天记住：**滑动摩擦与压力和接触面粗糙程度有关；水平匀速时拉力等于摩擦力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“只改变压力或粗糙程度，匀速拉木块记录力”中，有同学忽略了“C4同时改两个变量”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“水平匀速时拉力等于摩擦力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 研究粗糙程度时什么必须相同。\r
\r
   **答案**：压力等条件相同。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“水平匀速测摩擦图”，标出研究对象、关键方向或变量，并用图得出“水平匀速时拉力等于摩擦力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“只改变压力或粗糙程度，匀速拉木块记录力”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“水平匀速时拉力等于摩擦力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“给箱子加重和铺毛巾，哪种更难拉？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“水平匀速时拉力等于摩擦力”连接证据与结论。若出现“C2未利用平衡间接测量”，归入 **C2未利用平衡间接测量** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2未利用平衡间接测量：回到本课模型卡，重新指出对象和关键条件。\r
- C4同时改两个变量：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L029《弹力与弹簧测力计》的弹性形变产生弹力且有弹性限度。\r
\r
## 下一课会发生什么\r
\r
为L031《牛顿第一定律：没有力会怎样》准备阻力逐渐减小→运动保持更久→理想无阻力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Tr=`---\r
lesson_id: L031\r
title: 牛顿第一定律：没有力会怎样\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.5]\r
pep_mapping: 八下第8章\r
core_question: 小车不推为什么会停，真是“不受力就停”吗？\r
core_concept: 力不是维持运动的原因\r
core_model: 阻力逐渐减小→运动保持更久→理想无阻力\r
formula: "—"\r
math_prerequisite: [逻辑推理, 图像趋势]\r
math_connection: 把逻辑推理、图像趋势用于真实测量、图示或数量关系。\r
from_previous: 承接L030《核心实验：滑动摩擦力受什么影响》的滑动摩擦与压力和接触面粗糙程度有关。\r
to_next: 为L032《惯性：物体想保持原状态》准备刹车前后分别比较人和车状态。\r
knowledge_links: [L030, L026]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1把力当维持运动, C2实验结论直接等同无阻力]\r
review_links: [L030, L028, L024]\r
---\r
\r
# 第31课：牛顿第一定律：没有力会怎样\r
\r
## 今天只学一件事\r
\r
回答：**小车不推为什么会停，真是“不受力就停”吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：逻辑推理、图像趋势。把逻辑推理、图像趋势用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习逻辑推理、图像趋势，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：比较毛巾、木板、玻璃面上小车滑行距离并外推。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：比较毛巾、木板、玻璃面上小车滑行距离并外推。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**力不是维持运动的原因**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**斜面小车推理图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**阻力逐渐减小→运动保持更久→理想无阻力**。\r
\r
## 正式物理知识\r
\r
- 概念：力不是维持运动的原因。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：牛顿第一定律描述合力为零的理想状态，不能由有阻力实验直接证明无阻力情形。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：运动物体不受力将怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“阻力逐渐减小→运动保持更久→理想无阻力” → 检查单位和意义。\r
\r
**答案**：保持匀速直线运动。\r
\r
## 一句话收束\r
\r
今天记住：**力不是维持运动的原因；阻力逐渐减小→运动保持更久→理想无阻力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“比较毛巾、木板、玻璃面上小车滑行距离并外推”中，有同学忽略了“C2实验结论直接等同无阻力”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“阻力逐渐减小→运动保持更久→理想无阻力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 运动物体不受力将怎样。\r
\r
   **答案**：保持匀速直线运动。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“斜面小车推理图”，标出研究对象、关键方向或变量，并用图得出“阻力逐渐减小→运动保持更久→理想无阻力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“比较毛巾、木板、玻璃面上小车滑行距离并外推”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“阻力逐渐减小→运动保持更久→理想无阻力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“小车不推为什么会停，真是“不受力就停”吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“阻力逐渐减小→运动保持更久→理想无阻力”连接证据与结论。若出现“C1把力当维持运动”，归入 **C1把力当维持运动** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1把力当维持运动：回到本课模型卡，重新指出对象和关键条件。\r
- C2实验结论直接等同无阻力：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L030《核心实验：滑动摩擦力受什么影响》的滑动摩擦与压力和接触面粗糙程度有关。\r
\r
## 下一课会发生什么\r
\r
为L032《惯性：物体想保持原状态》准备刹车前后分别比较人和车状态。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Er=`---\r
lesson_id: L032\r
title: 惯性：物体想保持原状态\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.5]\r
pep_mapping: 八下第8章\r
core_question: 公交车急刹车，人为什么向前倾？\r
core_concept: 一切物体都有保持原运动状态的性质\r
core_model: 刹车前后分别比较人和车状态\r
formula: "—"\r
math_prerequisite: [大小比较]\r
math_connection: 把大小比较用于真实测量、图示或数量关系。\r
from_previous: 承接L031《牛顿第一定律：没有力会怎样》的力不是维持运动的原因。\r
to_next: 为L033《同一直线上二力的合成：平衡是特殊情况》准备先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线。\r
knowledge_links: [L031, L027]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1说“受到惯性力”, C4漏原状态]\r
review_links: [L031, L029, L025]\r
---\r
\r
# 第32课：惯性：物体想保持原状态\r
\r
## 今天只学一件事\r
\r
回答：**公交车急刹车，人为什么向前倾？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：大小比较。把大小比较用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习大小比较，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：抽走纸片观察硬币落杯，再口述前后状态。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：抽走纸片观察硬币落杯，再口述前后状态。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**一切物体都有保持原运动状态的性质**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**刹车状态时间轴**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**刹车前后分别比较人和车状态**。\r
\r
## 正式物理知识\r
\r
- 概念：一切物体都有保持原运动状态的性质。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：刹车前后分别比较人和车状态。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：跳远助跑为什么有用？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“刹车前后分别比较人和车状态” → 检查单位和意义。\r
\r
**答案**：起跳后身体因惯性保持较大向前速度。\r
\r
## 一句话收束\r
\r
今天记住：**一切物体都有保持原运动状态的性质；刹车前后分别比较人和车状态。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“抽走纸片观察硬币落杯，再口述前后状态”中，有同学忽略了“C4漏原状态”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“刹车前后分别比较人和车状态”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 跳远助跑为什么有用。\r
\r
   **答案**：起跳后身体因惯性保持较大向前速度。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“刹车状态时间轴”，标出研究对象、关键方向或变量，并用图得出“刹车前后分别比较人和车状态”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“抽走纸片观察硬币落杯，再口述前后状态”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“刹车前后分别比较人和车状态”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“公交车急刹车，人为什么向前倾？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“刹车前后分别比较人和车状态”连接证据与结论。若出现“C1说“受到惯性力””，归入 **C1说“受到惯性力”** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1说“受到惯性力”：回到本课模型卡，重新指出对象和关键条件。\r
- C4漏原状态：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L031《牛顿第一定律：没有力会怎样》的力不是维持运动的原因。\r
\r
## 下一课会发生什么\r
\r
为L033《同一直线上二力的合成：平衡是特殊情况》准备先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Dr=`---\r
lesson_id: L033\r
title: 同一直线上二力的合成：平衡是特殊情况\r
grade: 八年级\r
semester: 下册\r
big_idea: 力与运动\r
importance: ★★★\r
curriculum_standard: [2.2.4]\r
pep_mapping: 八下第8章\r
core_question: 两个方向相同或相反的力一起作用，总效果怎样判断？\r
core_concept: 同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况\r
core_model: 先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线\r
formula: "—"\r
math_prerequisite: [加法, 减法, 方向]\r
math_connection: 把加法、减法、方向用于真实测量、图示或数量关系。\r
from_previous: 承接L032《惯性：物体想保持原状态》的一切物体都有保持原运动状态的性质。\r
to_next: 为L034《压强：同样的力为什么效果不同》准备压力与受力面积共同决定效果。\r
knowledge_links: [L032, L028]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2把相互作用力当平衡力, C3反向相减后漏合力方向]\r
review_links: [L032, L030, L026]\r
---\r
\r
# 第33课：同一直线上二力的合成：平衡是特殊情况\r
\r
## 今天只学一件事\r
\r
回答：**两个方向相同或相反的力一起作用，总效果怎样判断？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：加法、减法、方向。把加法、减法、方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习加法、减法、方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用两端钩码拉卡片，先比较同向与反向合力，再让反向二力等大观察平衡。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用两端钩码拉卡片，先比较同向与反向合力，再让反向二力等大观察平衡。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**同一直线二力合成与平衡图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线**。\r
\r
## 正式物理知识\r
\r
- 概念：同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：只合成作用在同一物体、同一直线上的两个力；同向相加、反向相减，合力为零时再判断二力平衡条件。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：物体受向右6 N和向左4 N的力，合力怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线” → 检查单位和意义。\r
\r
**答案**：合力为2 N，方向向右；若两力等大反向且作用在同一物体同一直线上，合力才为零。\r
\r
## 一句话收束\r
\r
今天记住：**同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况；先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“用两端钩码拉卡片，先比较同向与反向合力，再让反向二力等大观察平衡”中，有同学忽略了“C3反向相减后漏合力方向”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 物体受向右6 N和向左4 N的力，合力怎样。\r
\r
   **答案**：合力为2 N，方向向右；若两力等大反向且作用在同一物体同一直线上，合力才为零。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“同一直线二力合成与平衡图”，标出研究对象、关键方向或变量，并用图得出“先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用两端钩码拉卡片，先比较同向与反向合力，再让反向二力等大观察平衡”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“两个方向相同或相反的力一起作用，总效果怎样判断？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线”连接证据与结论。若出现“C2把相互作用力当平衡力”，归入 **C2把相互作用力当平衡力** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2把相互作用力当平衡力：回到本课模型卡，重新指出对象和关键条件。\r
- C3反向相减后漏合力方向：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L032《惯性：物体想保持原状态》的一切物体都有保持原运动状态的性质。\r
\r
## 下一课会发生什么\r
\r
为L034《压强：同样的力为什么效果不同》准备压力与受力面积共同决定效果。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Or=`---\r
lesson_id: L034\r
title: 压强：同样的力为什么效果不同\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.7]\r
pep_mapping: 八下第9章\r
core_question: 书包带为什么要做宽？\r
core_concept: 压强表示单位面积承受的压力\r
core_model: 压力与受力面积共同决定效果\r
formula: "p=F/S"\r
math_prerequisite: [面积, 除法, 单位换算]\r
math_connection: 把面积、除法、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L033《同一直线上二力的合成：平衡是特殊情况》的同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况。\r
to_next: 为L035《核心实验：液体压强受什么影响》准备同种液体压强随深度增加；同深度看密度。\r
knowledge_links: [L033, L029]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C5面积换算错, C7只看压力]\r
review_links: [L033, L031, L027]\r
---\r
\r
# 第34课：压强：同样的力为什么效果不同\r
\r
## 今天只学一件事\r
\r
回答：**书包带为什么要做宽？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：面积、除法、单位换算。把面积、除法、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习面积、除法、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：同一块橡皮分别平放和竖放在海绵上。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：同一块橡皮分别平放和竖放在海绵上。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**压强表示单位面积承受的压力**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**压力面积对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**压力与受力面积共同决定效果**。\r
\r
## 正式物理知识\r
\r
- 概念：压强表示单位面积承受的压力。\r
- 关系：p=F/S\r
- 为什么需要：用一个数量关系回答“书包带为什么要做宽？”。\r
- 量与单位：F是垂直作用在受力面上的压力，单位N；S是受力面积，单位m²；p用Pa。\r
- 怎样变化：同F时S越小p越大；同S时F越大p越大。\r
- 适用边界：S是实际接触的受力面积，不是物体表面积。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：600 N站在0.04 m²地面，压强？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“压力与受力面积共同决定效果” → 检查单位和意义。\r
\r
**答案**：15000 Pa。\r
\r
## 一句话收束\r
\r
今天记住：**压强表示单位面积承受的压力；压力与受力面积共同决定效果。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“同一块橡皮分别平放和竖放在海绵上”中，有同学忽略了“C7只看压力”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“压力与受力面积共同决定效果”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 600 N站在0.04 m²地面，压强。\r
\r
   **答案**：15000 Pa。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“压力面积对比图”，标出研究对象、关键方向或变量，并用图得出“压力与受力面积共同决定效果”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“同一块橡皮分别平放和竖放在海绵上”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“压力与受力面积共同决定效果”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“书包带为什么要做宽？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“压力与受力面积共同决定效果”连接证据与结论。若出现“C5面积换算错”，归入 **C5面积换算错** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C5面积换算错：回到本课模型卡，重新指出对象和关键条件。\r
- C7只看压力：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L033《同一直线上二力的合成：平衡是特殊情况》的同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况。\r
\r
## 下一课会发生什么\r
\r
为L035《核心实验：液体压强受什么影响》准备同种液体压强随深度增加；同深度看密度。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,kr=`---\r
lesson_id: L035\r
title: 核心实验：液体压强受什么影响\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.8, 4.2.3]\r
pep_mapping: 八下第9章\r
core_question: 潜水越深，耳朵为什么越不舒服？\r
core_concept: 液体内部向各方向有压强\r
core_model: 同种液体压强随深度增加；同深度看密度\r
formula: "—"\r
math_prerequisite: [表格, 位置与距离]\r
math_connection: 把表格、位置与距离用于真实测量、图示或数量关系。\r
from_previous: 承接L034《压强：同样的力为什么效果不同》的压强表示单位面积承受的压力。\r
to_next: 为L036《大气压：空气也在用力》准备内外压强差产生效果。\r
knowledge_links: [L034, L030]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4把离容器底距离当深度, C8一次数据下结论]\r
review_links: [L034, L032, L028]\r
---\r
\r
# 第35课：核心实验：液体压强受什么影响\r
\r
## 今天只学一件事\r
\r
回答：**潜水越深，耳朵为什么越不舒服？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：表格、位置与距离。把表格、位置与距离用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习表格、位置与距离，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：改变探头深度、方向和液体种类，观察U形管高度差。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：改变探头深度、方向和液体种类，观察U形管高度差。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：深度、方向或液体密度，每轮只改一个。\r
- 因变量/观察测量：U形管液面高度差。\r
- 关键控制与规范：同一探头、零点和其余条件。\r
- 证据记录：条件表与稳定后的高度差。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：先检查支架、玻璃器材和钩码是否稳固，操作区保持干燥。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**液体内部向各方向有压强**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**压强计深度图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**同种液体压强随深度增加；同深度看密度**。\r
\r
## 正式物理知识\r
\r
- 概念：液体内部向各方向有压强。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：比较深度须从自由液面起算，并在静止液体、其余条件相同时比较。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：研究深度影响时保持什么相同？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“同种液体压强随深度增加；同深度看密度” → 检查单位和意义。\r
\r
**答案**：液体种类和探头方向等相同。\r
\r
## 一句话收束\r
\r
今天记住：**液体内部向各方向有压强；同种液体压强随深度增加；同深度看密度。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“改变探头深度、方向和液体种类，观察U形管高度差”中，有同学忽略了“C8一次数据下结论”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“同种液体压强随深度增加；同深度看密度”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 研究深度影响时保持什么相同。\r
\r
   **答案**：液体种类和探头方向等相同。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“压强计深度图”，标出研究对象、关键方向或变量，并用图得出“同种液体压强随深度增加；同深度看密度”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“改变探头深度、方向和液体种类，观察U形管高度差”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“同种液体压强随深度增加；同深度看密度”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“潜水越深，耳朵为什么越不舒服？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“同种液体压强随深度增加；同深度看密度”连接证据与结论。若出现“C4把离容器底距离当深度”，归入 **C4把离容器底距离当深度** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4把离容器底距离当深度：回到本课模型卡，重新指出对象和关键条件。\r
- C8一次数据下结论：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L034《压强：同样的力为什么效果不同》的压强表示单位面积承受的压力。\r
\r
## 下一课会发生什么\r
\r
为L036《大气压：空气也在用力》准备内外压强差产生效果。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Ar=`---\r
lesson_id: L036\r
title: 大气压：空气也在用力\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★\r
curriculum_standard: [2.2.8]\r
pep_mapping: 八下第9章\r
core_question: 吸盘为什么能贴在墙上？\r
core_concept: 大气有压强且向各方向作用\r
core_model: 内外压强差产生效果\r
formula: "—"\r
math_prerequisite: [面积, 估算]\r
math_connection: 把面积、估算用于真实测量、图示或数量关系。\r
from_previous: 承接L035《核心实验：液体压强受什么影响》的液体内部向各方向有压强。\r
to_next: 为L037《流体压强与流速》准备两侧流速差→压强差→受力。\r
knowledge_links: [L035, L031]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1说嘴把水“吸上来”, C2漏压强差]\r
review_links: [L035, L033, L029]\r
---\r
\r
# 第36课：大气压：空气也在用力\r
\r
## 今天只学一件事\r
\r
回答：**吸盘为什么能贴在墙上？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：面积、估算。把面积、估算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习面积、估算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用装水杯和纸片倒置，观察纸片不落。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用装水杯和纸片倒置，观察纸片不落。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**大气有压强且向各方向作用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**吸盘压强差图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**内外压强差产生效果**。\r
\r
## 正式物理知识\r
\r
- 概念：大气有压强且向各方向作用。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：吸盘、吸管等现象由内外压强差解释，不是大气压单独决定一切效果。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用注射器或软管模型观察活塞改变内外压强差，不接触真实水泵和市政管路。\r
\r
## 一个典型例题\r
\r
**题目**：吸管吸饮料是谁把液体压上来？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“内外压强差产生效果” → 检查单位和意义。\r
\r
**答案**：大气压把液体压入低压的吸管。\r
\r
## 一句话收束\r
\r
今天记住：**大气有压强且向各方向作用；内外压强差产生效果。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“用装水杯和纸片倒置，观察纸片不落”中，有同学忽略了“C2漏压强差”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“内外压强差产生效果”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 吸管吸饮料是谁把液体压上来。\r
\r
   **答案**：大气压把液体压入低压的吸管。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“吸盘压强差图”，标出研究对象、关键方向或变量，并用图得出“内外压强差产生效果”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用装水杯和纸片倒置，观察纸片不落”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“内外压强差产生效果”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“吸盘为什么能贴在墙上？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“内外压强差产生效果”连接证据与结论。若出现“C1说嘴把水“吸上来””，归入 **C1说嘴把水“吸上来”** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1说嘴把水“吸上来”：回到本课模型卡，重新指出对象和关键条件。\r
- C2漏压强差：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L035《核心实验：液体压强受什么影响》的液体内部向各方向有压强。\r
\r
## 下一课会发生什么\r
\r
为L037《流体压强与流速》准备两侧流速差→压强差→受力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,jr=`---\r
lesson_id: L037\r
title: 流体压强与流速\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★\r
curriculum_standard: [2.2.8]\r
pep_mapping: 八下第9章\r
core_question: 两张纸中间吹气，为什么纸反而靠近？\r
core_concept: 在常见稳定流动比较中，流速较大处压强较小\r
core_model: 两侧流速差→压强差→受力\r
formula: "—"\r
math_prerequisite: [大小比较, 箭头]\r
math_connection: 把大小比较、箭头用于真实测量、图示或数量关系。\r
from_previous: 承接L036《大气压：空气也在用力》的大气有压强且向各方向作用。\r
to_next: 为L038《浮力：浸在流体里的向上作用》准备弹簧测力计示数差测浮力。\r
knowledge_links: [L036, L032]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1说气流把纸吹开, C3压强箭头反]\r
review_links: [L036, L034, L030]\r
---\r
\r
# 第37课：流体压强与流速\r
\r
## 今天只学一件事\r
\r
回答：**两张纸中间吹气，为什么纸反而靠近？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：大小比较、箭头。把大小比较、箭头用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习大小比较、箭头，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：平行悬挂两纸条，从中间吹气并预测。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：平行悬挂两纸条，从中间吹气并预测。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**在常见稳定流动比较中，流速较大处压强较小**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**机翼流线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**两侧流速差→压强差→受力**。\r
\r
## 正式物理知识\r
\r
- 概念：在常见稳定流动比较中，流速较大处压强较小。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：只作常见稳定流动的定性比较；先确认存在流速差，再分析压强差。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：火车站安全线为什么要退后？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“两侧流速差→压强差→受力” → 检查单位和意义。\r
\r
**答案**：列车旁空气流速较大、压强较小，外侧压强可能把人推近。\r
\r
## 一句话收束\r
\r
今天记住：**在常见稳定流动比较中，流速较大处压强较小；两侧流速差→压强差→受力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“平行悬挂两纸条，从中间吹气并预测”中，有同学忽略了“C3压强箭头反”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“两侧流速差→压强差→受力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 火车站安全线为什么要退后。\r
\r
   **答案**：列车旁空气流速较大、压强较小，外侧压强可能把人推近。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“机翼流线图”，标出研究对象、关键方向或变量，并用图得出“两侧流速差→压强差→受力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“平行悬挂两纸条，从中间吹气并预测”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“两侧流速差→压强差→受力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“两张纸中间吹气，为什么纸反而靠近？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“两侧流速差→压强差→受力”连接证据与结论。若出现“C1说气流把纸吹开”，归入 **C1说气流把纸吹开** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1说气流把纸吹开：回到本课模型卡，重新指出对象和关键条件。\r
- C3压强箭头反：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L036《大气压：空气也在用力》的大气有压强且向各方向作用。\r
\r
## 下一课会发生什么\r
\r
为L038《浮力：浸在流体里的向上作用》准备弹簧测力计示数差测浮力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Mr=`---\r
lesson_id: L038\r
title: 浮力：浸在流体里的向上作用\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.9]\r
pep_mapping: 八下第10章\r
core_question: 铁块在水里为什么“变轻”？\r
core_concept: 浮力是流体对浸入物体向上的作用\r
core_model: 弹簧测力计示数差测浮力\r
formula: "F浮=G-F示"\r
math_prerequisite: [减法]\r
math_connection: 把减法用于真实测量、图示或数量关系。\r
from_previous: 承接L037《流体压强与流速》的在常见稳定流动比较中，流速较大处压强较小。\r
to_next: 为L039《核心实验：浮力大小受什么影响》准备控制变量比较称重差。\r
knowledge_links: [L037, L033]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2把示数当浮力, C3漏竖直向上]\r
review_links: [L037, L035, L031]\r
---\r
\r
# 第38课：浮力：浸在流体里的向上作用\r
\r
## 今天只学一件事\r
\r
回答：**铁块在水里为什么“变轻”？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：减法。把减法用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习减法，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：先在空气再浸水读取测力计，比较示数。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：先在空气再浸水读取测力计，比较示数。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**浮力是流体对浸入物体向上的作用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**称重法受力图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**弹簧测力计示数差测浮力**。\r
\r
## 正式物理知识\r
\r
- 概念：浮力是流体对浸入物体向上的作用。\r
- 关系：F浮=G-F示\r
- 为什么需要：用一个数量关系回答“铁块在水里为什么“变轻”？”。\r
- 量与单位：G和F示均用N，差值为浮力。\r
- 怎样变化：测力计示数越小，称重法得到的浮力越大。\r
- 适用边界：物体不得触底或被其他物体支撑；空气浮力通常按初中近似忽略。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：空气5 N、水中3 N，浮力？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“弹簧测力计示数差测浮力” → 检查单位和意义。\r
\r
**答案**：2 N。\r
\r
## 一句话收束\r
\r
今天记住：**浮力是流体对浸入物体向上的作用；弹簧测力计示数差测浮力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“先在空气再浸水读取测力计，比较示数”中，有同学忽略了“C3漏竖直向上”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“弹簧测力计示数差测浮力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 空气5 N、水中3 N，浮力。\r
\r
   **答案**：2 N。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“称重法受力图”，标出研究对象、关键方向或变量，并用图得出“弹簧测力计示数差测浮力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“先在空气再浸水读取测力计，比较示数”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“弹簧测力计示数差测浮力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“铁块在水里为什么“变轻”？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“弹簧测力计示数差测浮力”连接证据与结论。若出现“C2把示数当浮力”，归入 **C2把示数当浮力** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2把示数当浮力：回到本课模型卡，重新指出对象和关键条件。\r
- C3漏竖直向上：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L037《流体压强与流速》的在常见稳定流动比较中，流速较大处压强较小。\r
\r
## 下一课会发生什么\r
\r
为L039《核心实验：浮力大小受什么影响》准备控制变量比较称重差。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Nr=`---\r
lesson_id: L039\r
title: 核心实验：浮力大小受什么影响\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.9, 4.2.4]\r
pep_mapping: 八下第10章\r
core_question: 物体浸得更深，浮力一定更大吗？\r
core_concept: 浮力与排开液体体积、液体密度有关\r
core_model: 控制变量比较称重差\r
formula: "F浮=G-F示"\r
math_prerequisite: [表格]\r
math_connection: 把表格用于真实测量、图示或数量关系。\r
from_previous: 承接L038《浮力：浸在流体里的向上作用》的浮力是流体对浸入物体向上的作用。\r
to_next: 为L040《阿基米德原理：浮力等于排开液体的重》准备排液质量→排液重力→浮力。\r
knowledge_links: [L038, L034]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4把深度与排开体积混淆, C8触底数据仍采用]\r
review_links: [L038, L036, L032]\r
---\r
\r
# 第39课：核心实验：浮力大小受什么影响\r
\r
## 今天只学一件事\r
\r
回答：**物体浸得更深，浮力一定更大吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：表格。把表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：改变浸入体积、液体种类；完全浸没后再改深度。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：改变浸入体积、液体种类；完全浸没后再改深度。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：排开体积或液体密度，每轮只改一个。\r
- 因变量/观察测量：称重差得到的浮力。\r
- 关键控制与规范：物体不触底、同一物体和测力计状态。\r
- 证据记录：空气示数、液中示数与浮力。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：先检查支架、玻璃器材和钩码是否稳固，操作区保持干燥。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**浮力与排开液体体积、液体密度有关**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**浸入体积对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**控制变量比较称重差**。\r
\r
## 正式物理知识\r
\r
- 概念：浮力与排开液体体积、液体密度有关。\r
- 关系：F浮=G-F示\r
- 为什么需要：用一个数量关系回答“物体浸得更深，浮力一定更大吗？”。\r
- 量与单位：G和F示均用N，差值为浮力。\r
- 怎样变化：测力计示数越小，称重法得到的浮力越大。\r
- 适用边界：物体不得触底或被其他物体支撑；空气浮力通常按初中近似忽略。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：完全浸没后继续下沉，浮力通常怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“控制变量比较称重差” → 检查单位和意义。\r
\r
**答案**：若液体密度不变且未触底，浮力不变。\r
\r
## 一句话收束\r
\r
今天记住：**浮力与排开液体体积、液体密度有关；控制变量比较称重差。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“改变浸入体积、液体种类；完全浸没后再改深度”中，有同学忽略了“C8触底数据仍采用”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“控制变量比较称重差”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 完全浸没后继续下沉，浮力通常怎样。\r
\r
   **答案**：若液体密度不变且未触底，浮力不变。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“浸入体积对比图”，标出研究对象、关键方向或变量，并用图得出“控制变量比较称重差”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“改变浸入体积、液体种类；完全浸没后再改深度”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“控制变量比较称重差”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“物体浸得更深，浮力一定更大吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“控制变量比较称重差”连接证据与结论。若出现“C4把深度与排开体积混淆”，归入 **C4把深度与排开体积混淆** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4把深度与排开体积混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C8触底数据仍采用：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L038《浮力：浸在流体里的向上作用》的浮力是流体对浸入物体向上的作用。\r
\r
## 下一课会发生什么\r
\r
为L040《阿基米德原理：浮力等于排开液体的重》准备排液质量→排液重力→浮力。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Pr=`---\r
lesson_id: L040\r
title: 阿基米德原理：浮力等于排开液体的重\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.9]\r
pep_mapping: 八下第10章\r
core_question: 溢出的水和物体受到的浮力有什么关系？\r
core_concept: 浮力等于排开流体所受重力\r
core_model: 排液质量→排液重力→浮力\r
formula: "F浮=G排=ρ液gV排"\r
math_prerequisite: [体积, 乘法, 比例]\r
math_connection: 把体积、乘法、比例用于真实测量、图示或数量关系。\r
from_previous: 承接L039《核心实验：浮力大小受什么影响》的浮力与排开液体体积、液体密度有关。\r
to_next: 为L041《物体浮沉：比较浮力和重力》准备F浮与G比较；漂浮时相等。\r
knowledge_links: [L039, L035]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C6密度单位错, C7用物体总体积代排液体积]\r
review_links: [L039, L037, L033]\r
---\r
\r
# 第40课：阿基米德原理：浮力等于排开液体的重\r
\r
## 今天只学一件事\r
\r
回答：**溢出的水和物体受到的浮力有什么关系？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：体积、乘法、比例。把体积、乘法、比例用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习体积、乘法、比例，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用溢水杯收集排水并比较其重与浮力。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用溢水杯收集排水并比较其重与浮力。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**浮力等于排开流体所受重力**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**溢水杯证据链图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**排液质量→排液重力→浮力**。\r
\r
## 正式物理知识\r
\r
- 概念：浮力等于排开流体所受重力。\r
- 关系：F浮=G排=ρ液gV排\r
- 为什么需要：用一个数量关系回答“溢出的水和物体受到的浮力有什么关系？”。\r
- 量与单位：ρ液用kg/m³，V排用m³，g用N/kg，F浮用N。\r
- 怎样变化：ρ液或V排增大，其他相同时浮力增大。\r
- 适用边界：V排是排开液体体积；未完全浸没时不等于物体总体积。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：排开0.2 kg水，取g=10，浮力？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“排液质量→排液重力→浮力” → 检查单位和意义。\r
\r
**答案**：2 N。\r
\r
## 一句话收束\r
\r
今天记住：**浮力等于排开流体所受重力；排液质量→排液重力→浮力。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“用溢水杯收集排水并比较其重与浮力”中，有同学忽略了“C7用物体总体积代排液体积”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“排液质量→排液重力→浮力”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 排开0.2 kg水，取g=10，浮力。\r
\r
   **答案**：2 N。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“溢水杯证据链图”，标出研究对象、关键方向或变量，并用图得出“排液质量→排液重力→浮力”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用溢水杯收集排水并比较其重与浮力”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“排液质量→排液重力→浮力”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“溢出的水和物体受到的浮力有什么关系？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“排液质量→排液重力→浮力”连接证据与结论。若出现“C6密度单位错”，归入 **C6密度单位错** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C6密度单位错：回到本课模型卡，重新指出对象和关键条件。\r
- C7用物体总体积代排液体积：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L039《核心实验：浮力大小受什么影响》的浮力与排开液体体积、液体密度有关。\r
\r
## 下一课会发生什么\r
\r
为L041《物体浮沉：比较浮力和重力》准备F浮与G比较；漂浮时相等。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Fr=`---\r
lesson_id: L041\r
title: 物体浮沉：比较浮力和重力\r
grade: 八年级\r
semester: 下册\r
big_idea: 压强与浮力\r
importance: ★★★\r
curriculum_standard: [2.2.9]\r
pep_mapping: 八下第10章\r
core_question: 钢铁会沉，钢船为什么能浮？\r
core_concept: 浮沉取决于竖直方向浮力和重力关系\r
core_model: F浮与G比较；漂浮时相等\r
formula: "—"\r
math_prerequisite: [不等式]\r
math_connection: 把不等式用于真实测量、图示或数量关系。\r
from_previous: 承接L040《阿基米德原理：浮力等于排开液体的重》的浮力等于排开流体所受重力。\r
to_next: 为L042《功：力什么时候产生了“成果”》准备力与力方向距离的乘积。\r
knowledge_links: [L040, L036]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2只比较材料密度, C3浮沉力箭头错]\r
review_links: [L040, L038, L034]\r
---\r
\r
# 第41课：物体浮沉：比较浮力和重力\r
\r
## 今天只学一件事\r
\r
回答：**钢铁会沉，钢船为什么能浮？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：不等式。把不等式用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习不等式，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：橡皮泥先团成球再捏成船形放水中。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：橡皮泥先团成球再捏成船形放水中。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**浮沉取决于竖直方向浮力和重力关系**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**浮沉三状态图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**F浮与G比较；漂浮时相等**。\r
\r
## 正式物理知识\r
\r
- 概念：浮沉取决于竖直方向浮力和重力关系。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：浮沉比较针对竖直方向受力；漂浮时才有F浮=G，且物体未受额外竖直力。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：给吸管配重制作微型密度计，只标相对刻度；先说明漂浮时浮力等于重力，再比较排开体积。\r
\r
## 一个典型例题\r
\r
**题目**：漂浮物质量增大后排水怎样变？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“F浮与G比较；漂浮时相等” → 检查单位和意义。\r
\r
**答案**：在仍能漂浮且液体不变时，会排开更多水，直到浮力重新等于重力。\r
\r
## 一句话收束\r
\r
今天记住：**浮沉取决于竖直方向浮力和重力关系；F浮与G比较；漂浮时相等。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“橡皮泥先团成球再捏成船形放水中”中，有同学忽略了“C3浮沉力箭头错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“F浮与G比较；漂浮时相等”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 漂浮物质量增大后排水怎样变。\r
\r
   **答案**：在仍能漂浮且液体不变时，会排开更多水，直到浮力重新等于重力。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“浮沉三状态图”，标出研究对象、关键方向或变量，并用图得出“F浮与G比较；漂浮时相等”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“橡皮泥先团成球再捏成船形放水中”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“F浮与G比较；漂浮时相等”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“钢铁会沉，钢船为什么能浮？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“F浮与G比较；漂浮时相等”连接证据与结论。若出现“C2只比较材料密度”，归入 **C2只比较材料密度** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2只比较材料密度：回到本课模型卡，重新指出对象和关键条件。\r
- C3浮沉力箭头错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L040《阿基米德原理：浮力等于排开液体的重》的浮力等于排开流体所受重力。\r
\r
## 下一课会发生什么\r
\r
为L042《功：力什么时候产生了“成果”》准备力与力方向距离的乘积。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Ir=`---\r
lesson_id: L042\r
title: 功：力什么时候产生了“成果”\r
grade: 八年级\r
semester: 下册\r
big_idea: 功机械与能量\r
importance: ★★★\r
curriculum_standard: [3.1.3, 3.2.2]\r
pep_mapping: 八下第11章\r
core_question: 提着书包水平走，手对书包做机械功吗？\r
core_concept: 功需要力且物体沿力方向移动距离\r
core_model: 力与力方向距离的乘积\r
formula: "W=Fs"\r
math_prerequisite: [乘法, 单位换算]\r
math_connection: 把乘法、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L041《物体浮沉：比较浮力和重力》的浮沉取决于竖直方向浮力和重力关系。\r
to_next: 为L043《功率：做功有多快》准备功与时间的比率。\r
knowledge_links: [L041, L037]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4漏力方向, C7有力就判做功]\r
review_links: [L041, L039, L035]\r
---\r
\r
# 第42课：功：力什么时候产生了“成果”\r
\r
## 今天只学一件事\r
\r
回答：**提着书包水平走，手对书包做机械功吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、单位换算。把乘法、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：对比推车前进、提物静止、提物水平走。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：对比推车前进、提物静止、提物水平走。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**功需要力且物体沿力方向移动距离**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**力与位移夹向图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**力与力方向距离的乘积**。\r
\r
## 正式物理知识\r
\r
- 概念：功需要力且物体沿力方向移动距离。\r
- 关系：W=Fs\r
- 为什么需要：用一个数量关系回答“提着书包水平走，手对书包做机械功吗？”。\r
- 量与单位：F用N；s是物体在力方向通过的距离，用m；W用J。\r
- 怎样变化：F或力方向距离增大时功增大。\r
- 适用边界：只直接用于恒力与运动方向相同的初中模型；有力无位移不做机械功。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：10 N水平推物前进3 m，做功？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“力与力方向距离的乘积” → 检查单位和意义。\r
\r
**答案**：30 J。\r
\r
## 一句话收束\r
\r
今天记住：**功需要力且物体沿力方向移动距离；力与力方向距离的乘积。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“对比推车前进、提物静止、提物水平走”中，有同学忽略了“C7有力就判做功”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“力与力方向距离的乘积”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 10 N水平推物前进3 m，做功。\r
\r
   **答案**：30 J。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“力与位移夹向图”，标出研究对象、关键方向或变量，并用图得出“力与力方向距离的乘积”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“对比推车前进、提物静止、提物水平走”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“力与力方向距离的乘积”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“提着书包水平走，手对书包做机械功吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“力与力方向距离的乘积”连接证据与结论。若出现“C4漏力方向”，归入 **C4漏力方向** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4漏力方向：回到本课模型卡，重新指出对象和关键条件。\r
- C7有力就判做功：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L041《物体浮沉：比较浮力和重力》的浮沉取决于竖直方向浮力和重力关系。\r
\r
## 下一课会发生什么\r
\r
为L043《功率：做功有多快》准备功与时间的比率。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Lr=`---\r
lesson_id: L043\r
title: 功率：做功有多快\r
grade: 八年级\r
semester: 下册\r
big_idea: 功机械与能量\r
importance: ★★★\r
curriculum_standard: [3.2.2]\r
pep_mapping: 八下第11章\r
core_question: 同样爬楼，跑上去和走上去哪里不同？\r
core_concept: 功率表示单位时间做功\r
core_model: 功与时间的比率\r
formula: "P=W/t"\r
math_prerequisite: [除法, 比率]\r
math_connection: 把除法、比率用于真实测量、图示或数量关系。\r
from_previous: 承接L042《功：力什么时候产生了“成果”》的功需要力且物体沿力方向移动距离。\r
to_next: 为L044《动能、势能与机械能转化》准备动能↔势能，考虑阻力时部分转为内能。\r
knowledge_links: [L042, L038]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1功多等同功率大, C6瓦特单位错]\r
review_links: [L042, L040, L036]\r
---\r
\r
# 第43课：功率：做功有多快\r
\r
## 今天只学一件事\r
\r
回答：**同样爬楼，跑上去和走上去哪里不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：除法、比率。把除法、比率用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习除法、比率，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：记录走与快走同一楼梯的时间，比较功率。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：记录走与快走同一楼梯的时间，比较功率。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**功率表示单位时间做功**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**爬楼功时间图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**功与时间的比率**。\r
\r
## 正式物理知识\r
\r
- 概念：功率表示单位时间做功。\r
- 关系：P=W/t\r
- 为什么需要：用一个数量关系回答“同样爬楼，跑上去和走上去哪里不同？”。\r
- 量与单位：W用J，t用s，P用W。\r
- 怎样变化：同功时间越短功率越大；同时间功越多功率越大。\r
- 适用边界：功率表示快慢，不等于做功多少。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：做600 J功用3 s，功率？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“功与时间的比率” → 检查单位和意义。\r
\r
**答案**：200 W。\r
\r
## 一句话收束\r
\r
今天记住：**功率表示单位时间做功；功与时间的比率。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“记录走与快走同一楼梯的时间，比较功率”中，有同学忽略了“C6瓦特单位错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“功与时间的比率”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 做600 J功用3 s，功率。\r
\r
   **答案**：200 W。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“爬楼功时间图”，标出研究对象、关键方向或变量，并用图得出“功与时间的比率”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“记录走与快走同一楼梯的时间，比较功率”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“功与时间的比率”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“同样爬楼，跑上去和走上去哪里不同？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“功与时间的比率”连接证据与结论。若出现“C1功多等同功率大”，归入 **C1功多等同功率大** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1功多等同功率大：回到本课模型卡，重新指出对象和关键条件。\r
- C6瓦特单位错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L042《功：力什么时候产生了“成果”》的功需要力且物体沿力方向移动距离。\r
\r
## 下一课会发生什么\r
\r
为L044《动能、势能与机械能转化》准备动能↔势能，考虑阻力时部分转为内能。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Rr=`---\r
lesson_id: L044\r
title: 动能、势能与机械能转化\r
grade: 八年级\r
semester: 下册\r
big_idea: 功机械与能量\r
importance: ★★★\r
curriculum_standard: [3.1.1, 3.1.2, 3.2.1]\r
pep_mapping: 八下第11章\r
core_question: 秋千为什么能来回摆但不会越摆越高？\r
core_concept: 运动和位置可储存机械能\r
core_model: 动能↔势能，考虑阻力时部分转为内能\r
formula: "—"\r
math_prerequisite: [图像趋势]\r
math_connection: 把图像趋势用于真实测量、图示或数量关系。\r
from_previous: 承接L043《功率：做功有多快》的功率表示单位时间做功。\r
to_next: 为L045《杠杆模型与平衡条件》准备力×力臂两侧平衡。\r
knowledge_links: [L043, L039]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2忽略系统与阻力, C1把能量说成力]\r
review_links: [L043, L041, L037]\r
---\r
\r
# 第44课：动能、势能与机械能转化\r
\r
## 今天只学一件事\r
\r
回答：**秋千为什么能来回摆但不会越摆越高？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：图像趋势。把图像趋势用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习图像趋势，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：滚小球下斜面撞纸盒，改变高度或质量比较。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：滚小球下斜面撞纸盒，改变高度或质量比较。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**运动和位置可储存机械能**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**秋千能量条图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**动能↔势能，考虑阻力时部分转为内能**。\r
\r
## 正式物理知识\r
\r
- 概念：运动和位置可储存机械能。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：动能↔势能，考虑阻力时部分转为内能。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：小球从高处下滑时能量怎样变？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“动能↔势能，考虑阻力时部分转为内能” → 检查单位和意义。\r
\r
**答案**：重力势能减小、动能增大。\r
\r
## 一句话收束\r
\r
今天记住：**运动和位置可储存机械能；动能↔势能，考虑阻力时部分转为内能。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“滚小球下斜面撞纸盒，改变高度或质量比较”中，有同学忽略了“C1把能量说成力”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“动能↔势能，考虑阻力时部分转为内能”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 小球从高处下滑时能量怎样变。\r
\r
   **答案**：重力势能减小、动能增大。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“秋千能量条图”，标出研究对象、关键方向或变量，并用图得出“动能↔势能，考虑阻力时部分转为内能”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“滚小球下斜面撞纸盒，改变高度或质量比较”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“动能↔势能，考虑阻力时部分转为内能”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“秋千为什么能来回摆但不会越摆越高？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“动能↔势能，考虑阻力时部分转为内能”连接证据与结论。若出现“C2忽略系统与阻力”，归入 **C2忽略系统与阻力** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2忽略系统与阻力：回到本课模型卡，重新指出对象和关键条件。\r
- C1把能量说成力：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L043《功率：做功有多快》的功率表示单位时间做功。\r
\r
## 下一课会发生什么\r
\r
为L045《杠杆模型与平衡条件》准备力×力臂两侧平衡。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,zr=`---\r
lesson_id: L045\r
title: 杠杆模型与平衡条件\r
grade: 八年级\r
semester: 下册\r
big_idea: 功机械与能量\r
importance: ★★★\r
curriculum_standard: [2.2.6, 4.2.5]\r
pep_mapping: 八下第12章\r
core_question: 为什么用长扳手更省力？\r
core_concept: 绕固定点转动的硬棒可抽象为杠杆\r
core_model: 力×力臂两侧平衡\r
formula: "F1l1=F2l2"\r
math_prerequisite: [乘法, 比例, 垂线]\r
math_connection: 把乘法、比例、垂线用于真实测量、图示或数量关系。\r
from_previous: 承接L044《动能、势能与机械能转化》的运动和位置可储存机械能。\r
to_next: 为L046《机械效率：有用功占多少》准备有用功、额外功与总功的能量账本。\r
knowledge_links: [L044, L040]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3力臂画成杆长, C5比例求解错]\r
review_links: [L044, L042, L038]\r
---\r
\r
# 第45课：杠杆模型与平衡条件\r
\r
## 今天只学一件事\r
\r
回答：**为什么用长扳手更省力？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、比例、垂线。把乘法、比例、垂线用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、比例、垂线，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：改变钩码位置与数量，记录平衡时力和力臂。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：改变钩码位置与数量，记录平衡时力和力臂。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：力或力臂。\r
- 因变量/观察测量：杠杆平衡时另一侧的力或力臂。\r
- 关键控制与规范：杠杆水平、支点、钩码规格和读力方向。\r
- 证据记录：多组F1、l1、F2、l2乘积。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：先检查支架、玻璃器材和钩码是否稳固，操作区保持干燥。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**绕固定点转动的硬棒可抽象为杠杆**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**杠杆五要素图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**力×力臂两侧平衡**。\r
\r
## 正式物理知识\r
\r
- 概念：绕固定点转动的硬棒可抽象为杠杆。\r
- 关系：F1l1=F2l2\r
- 为什么需要：用一个数量关系回答“为什么用长扳手更省力？”。\r
- 量与单位：F用N；力臂l是支点到力的作用线的垂直距离，用m。\r
- 怎样变化：阻力不变时动力臂越长，所需动力越小。\r
- 适用边界：必须是杠杆平衡状态；力臂不是支点到作用点的杆长。\r
\r
**课后教材融合卡（不占本课20分钟）**：制作简易杆秤时先固定支点和提纽，再用已知质量标刻度；刻度只能在校准范围内使用。\r
\r
## 一个典型例题\r
\r
**题目**：阻力20 N、阻力臂0.1 m，动力臂0.5 m？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“力×力臂两侧平衡” → 检查单位和意义。\r
\r
**答案**：动力4 N。\r
\r
## 一句话收束\r
\r
今天记住：**绕固定点转动的硬棒可抽象为杠杆；力×力臂两侧平衡。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“改变钩码位置与数量，记录平衡时力和力臂”中，有同学忽略了“C5比例求解错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“力×力臂两侧平衡”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 阻力20 N、阻力臂0.1 m，动力臂0.5 m。\r
\r
   **答案**：动力4 N。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“杠杆五要素图”，标出研究对象、关键方向或变量，并用图得出“力×力臂两侧平衡”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“改变钩码位置与数量，记录平衡时力和力臂”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“力×力臂两侧平衡”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“为什么用长扳手更省力？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“力×力臂两侧平衡”连接证据与结论。若出现“C3力臂画成杆长”，归入 **C3力臂画成杆长** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3力臂画成杆长：回到本课模型卡，重新指出对象和关键条件。\r
- C5比例求解错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L044《动能、势能与机械能转化》的运动和位置可储存机械能。\r
\r
## 下一课会发生什么\r
\r
为L046《机械效率：有用功占多少》准备有用功、额外功与总功的能量账本。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Br=`---\r
lesson_id: L046\r
title: 机械效率：有用功占多少\r
grade: 八年级\r
semester: 下册\r
big_idea: 功机械与能量\r
importance: ★★★\r
curriculum_standard: [3.2.3, 3.2.4, 3.5.2]\r
pep_mapping: 八下第12章\r
core_question: 使用机械省了力，是否也省了功？\r
core_concept: 机械效率表示有用功占总功的比例\r
core_model: 有用功、额外功与总功的能量账本\r
formula: "η=W有/W总"\r
math_prerequisite: [分数, 百分数]\r
math_connection: 把分数、百分数用于真实测量、图示或数量关系。\r
from_previous: 承接L045《杠杆模型与平衡条件》的绕固定点转动的硬棒可抽象为杠杆。\r
to_next: 为L047《分子热运动与内能》准备宏观温度现象连接微观模型。\r
knowledge_links: [L045, L041]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C7说机械省功, C5百分数错误]\r
review_links: [L045, L043, L039]\r
---\r
\r
# 第46课：机械效率：有用功占多少\r
\r
## 今天只学一件事\r
\r
回答：**使用机械省了力，是否也省了功？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：分数、百分数。把分数、百分数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习分数、百分数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用定滑轮和动滑轮提同一物体，比较有用功、额外功和总功。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用定滑轮和动滑轮提同一物体，比较有用功、额外功和总功。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**机械效率表示有用功占总功的比例**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**有用额外总功流图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**有用功、额外功与总功的能量账本**。\r
\r
## 正式物理知识\r
\r
- 概念：机械效率表示有用功占总功的比例。\r
- 关系：η=W有/W总\r
- 为什么需要：用一个数量关系回答“使用机械省了力，是否也省了功？”。\r
- 量与单位：两种功单位相同，效率常写百分数。\r
- 怎样变化：额外功减少时效率提高。\r
- 适用边界：实际机械0<η<100%；机械可以省力或省距离，但不能省功。\r
\r
**机械发展阅读卡（3.2.4）**：杠杆、滑轮等机械能改变力或距离的安排，推动劳动工具发展；阅读卡不新增复杂机械计算。\r
\r
## 一个典型例题\r
\r
**题目**：有用功80 J、总功100 J，效率？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“有用功、额外功与总功的能量账本” → 检查单位和意义。\r
\r
**答案**：80%；效率不可能超过100%。\r
\r
## 一句话收束\r
\r
今天记住：**机械效率表示有用功占总功的比例；有用功、额外功与总功的能量账本。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“用定滑轮和动滑轮提同一物体，比较有用功、额外功和总功”中，有同学忽略了“C5百分数错误”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“有用功、额外功与总功的能量账本”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 有用功80 J、总功100 J，效率。\r
\r
   **答案**：80%；效率不可能超过100%。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“有用额外总功流图”，标出研究对象、关键方向或变量，并用图得出“有用功、额外功与总功的能量账本”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用定滑轮和动滑轮提同一物体，比较有用功、额外功和总功”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“有用功、额外功与总功的能量账本”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“使用机械省了力，是否也省了功？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“有用功、额外功与总功的能量账本”连接证据与结论。若出现“C7说机械省功”，归入 **C7说机械省功** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C7说机械省功：回到本课模型卡，重新指出对象和关键条件。\r
- C5百分数错误：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L045《杠杆模型与平衡条件》的绕固定点转动的硬棒可抽象为杠杆。\r
\r
## 下一课会发生什么\r
\r
为L047《分子热运动与内能》准备宏观温度现象连接微观模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Vr=`---\r
lesson_id: L047\r
title: 分子热运动与内能\r
grade: 九年级\r
semester: 全一册\r
big_idea: 内能与能源\r
importance: ★★★\r
curriculum_standard: [2.1.2, 3.3.1]\r
pep_mapping: 九年第13章\r
core_question: 打开香水后，远处为什么也能闻到？\r
core_concept: 分子不停做无规则运动；内能是微观能量总和\r
core_model: 宏观温度现象连接微观模型\r
formula: "—"\r
math_prerequisite: [无]\r
math_connection: 本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
from_previous: 承接L046《机械效率：有用功占多少》的机械效率表示有用功占总功的比例。\r
to_next: 为L048《改变内能的两条路》准备能量转移与能量转化两类路径。\r
knowledge_links: [L046, L042]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1分子热运动等同物体移动, C2内能等同热量]\r
review_links: [L046, L044, L040]\r
---\r
\r
# 第47课：分子热运动与内能\r
\r
## 今天只学一件事\r
\r
回答：**打开香水后，远处为什么也能闻到？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：无。本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
\r
**数学小补丁**：无需数学补丁；直接进入观察、比较或画图任务。\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：冷水与热水各滴一滴色素，比较扩散。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：冷水与热水各滴一滴色素，比较扩散。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**分子不停做无规则运动；内能是微观能量总和**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**扩散微粒图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**宏观温度现象连接微观模型**。\r
\r
## 正式物理知识\r
\r
- 概念：分子不停做无规则运动；内能是微观能量总和。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：内能不能只由温度判断；比较时要明确对象、质量、状态等条件。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：同一物体、状态不变时温度升高，分子运动和内能通常怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“宏观温度现象连接微观模型” → 检查单位和意义。\r
\r
**答案**：分子无规则运动更剧烈，内能通常增大。\r
\r
## 一句话收束\r
\r
今天记住：**分子不停做无规则运动；内能是微观能量总和；宏观温度现象连接微观模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“冷水与热水各滴一滴色素，比较扩散”中，有同学忽略了“C2内能等同热量”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“宏观温度现象连接微观模型”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 同一物体、状态不变时温度升高，分子运动和内能通常怎样。\r
\r
   **答案**：分子无规则运动更剧烈，内能通常增大。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“扩散微粒图”，标出研究对象、关键方向或变量，并用图得出“宏观温度现象连接微观模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“冷水与热水各滴一滴色素，比较扩散”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“宏观温度现象连接微观模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“打开香水后，远处为什么也能闻到？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“宏观温度现象连接微观模型”连接证据与结论。若出现“C1分子热运动等同物体移动”，归入 **C1分子热运动等同物体移动** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1分子热运动等同物体移动：回到本课模型卡，重新指出对象和关键条件。\r
- C2内能等同热量：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L046《机械效率：有用功占多少》的机械效率表示有用功占总功的比例。\r
\r
## 下一课会发生什么\r
\r
为L048《改变内能的两条路》准备能量转移与能量转化两类路径。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Hr=`---\r
lesson_id: L048\r
title: 改变内能的两条路\r
grade: 九年级\r
semester: 全一册\r
big_idea: 内能与能源\r
importance: ★★★\r
curriculum_standard: [3.1.2, 3.3.1]\r
pep_mapping: 九年第13章\r
core_question: 搓手和烤火都能变暖，能量路径相同吗？\r
core_concept: 热传递和做功都能改变内能\r
core_model: 能量转移与能量转化两类路径\r
formula: "—"\r
math_prerequisite: [无]\r
math_connection: 本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
from_previous: 承接L047《分子热运动与内能》的分子不停做无规则运动；内能是微观能量总和。\r
to_next: 为L049《比热容：相同热量为何升温不同》准备质量、温差、物质共同决定吸热。\r
knowledge_links: [L047, L043]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1热量说成物体含有, C2两路径混淆]\r
review_links: [L047, L045, L041]\r
---\r
\r
# 第48课：改变内能的两条路\r
\r
## 今天只学一件事\r
\r
回答：**搓手和烤火都能变暖，能量路径相同吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：无。本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
\r
**数学小补丁**：无需数学补丁；直接进入观察、比较或画图任务。\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：搓手、弯折铁丝、接触温水，给路径分类。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：搓手、弯折铁丝、接触温水，给路径分类。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**热传递和做功都能改变内能**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**内能路径图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**能量转移与能量转化两类路径**。\r
\r
## 正式物理知识\r
\r
- 概念：热传递和做功都能改变内能。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：能量转移与能量转化两类路径。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：压缩空气使其变热属于哪种？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“能量转移与能量转化两类路径” → 检查单位和意义。\r
\r
**答案**：做功，机械能转化为内能。\r
\r
## 一句话收束\r
\r
今天记住：**热传递和做功都能改变内能；能量转移与能量转化两类路径。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“搓手、弯折铁丝、接触温水，给路径分类”中，有同学忽略了“C2两路径混淆”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“能量转移与能量转化两类路径”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 压缩空气使其变热属于哪种。\r
\r
   **答案**：做功，机械能转化为内能。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“内能路径图”，标出研究对象、关键方向或变量，并用图得出“能量转移与能量转化两类路径”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“搓手、弯折铁丝、接触温水，给路径分类”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“能量转移与能量转化两类路径”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“搓手和烤火都能变暖，能量路径相同吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“能量转移与能量转化两类路径”连接证据与结论。若出现“C1热量说成物体含有”，归入 **C1热量说成物体含有** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1热量说成物体含有：回到本课模型卡，重新指出对象和关键条件。\r
- C2两路径混淆：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L047《分子热运动与内能》的分子不停做无规则运动；内能是微观能量总和。\r
\r
## 下一课会发生什么\r
\r
为L049《比热容：相同热量为何升温不同》准备质量、温差、物质共同决定吸热。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Ur=`---\r
lesson_id: L049\r
title: 比热容：相同热量为何升温不同\r
grade: 九年级\r
semester: 全一册\r
big_idea: 内能与能源\r
importance: ★★★\r
curriculum_standard: [3.3.2]\r
pep_mapping: 九年第13章\r
core_question: 海边昼夜温差为什么比沙漠小？\r
core_concept: 比热容表示单位质量升高1℃所需热量\r
core_model: 质量、温差、物质共同决定吸热\r
formula: "Q=cmΔT"\r
math_prerequisite: [乘法, 正负数]\r
math_connection: 把乘法、正负数用于真实测量、图示或数量关系。\r
from_previous: 承接L048《改变内能的两条路》的热传递和做功都能改变内能。\r
to_next: 为L050《燃料热值：同质量燃料放热不同》准备燃料质量与完全燃烧放热的比例模型。\r
knowledge_links: [L048, L044]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C5温差用末温, C6科学记数法错]\r
review_links: [L048, L046, L042]\r
---\r
\r
# 第49课：比热容：相同热量为何升温不同\r
\r
## 今天只学一件事\r
\r
回答：**海边昼夜温差为什么比沙漠小？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、正负数。把乘法、正负数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、正负数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：等质量水和沙接受相同加热，比较升温。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：等质量水和沙接受相同加热，比较升温。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**比热容表示单位质量升高1℃所需热量**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**水沙升温曲线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**质量、温差、物质共同决定吸热**。\r
\r
## 正式物理知识\r
\r
- 概念：比热容表示单位质量升高1℃所需热量。\r
- 关系：Q=cmΔT\r
- 为什么需要：用一个数量关系回答“海边昼夜温差为什么比沙漠小？”。\r
- 量与单位：c用J/(kg·℃)，m用kg，ΔT是温度变化量，Q用J。\r
- 怎样变化：同质量同温差时c越大吸放热越多。\r
- 适用边界：适用于无物态变化的吸放热计算；ΔT不是末温。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：2 kg水升高5℃，c=4.2×10³，吸热？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“质量、温差、物质共同决定吸热” → 检查单位和意义。\r
\r
**答案**：4.2×10^4 J。\r
\r
## 一句话收束\r
\r
今天记住：**比热容表示单位质量升高1℃所需热量；质量、温差、物质共同决定吸热。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“等质量水和沙接受相同加热，比较升温”中，有同学忽略了“C6科学记数法错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“质量、温差、物质共同决定吸热”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 2 kg水升高5℃，c=4.2×10³，吸热。\r
\r
   **答案**：4.2×10^4 J。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“水沙升温曲线图”，标出研究对象、关键方向或变量，并用图得出“质量、温差、物质共同决定吸热”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“等质量水和沙接受相同加热，比较升温”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“质量、温差、物质共同决定吸热”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“海边昼夜温差为什么比沙漠小？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“质量、温差、物质共同决定吸热”连接证据与结论。若出现“C5温差用末温”，归入 **C5温差用末温** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C5温差用末温：回到本课模型卡，重新指出对象和关键条件。\r
- C6科学记数法错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L048《改变内能的两条路》的热传递和做功都能改变内能。\r
\r
## 下一课会发生什么\r
\r
为L050《燃料热值：同质量燃料放热不同》准备燃料质量与完全燃烧放热的比例模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Wr=`---\r
lesson_id: L050\r
title: 燃料热值：同质量燃料放热不同\r
grade: 九年级\r
semester: 全一册\r
big_idea: 内能与能源\r
importance: ★★\r
curriculum_standard: [3.3.1, 3.3.3]\r
pep_mapping: 九年第14章\r
core_question: 同质量木柴和天然气为什么放热不同？\r
core_concept: 热值描述单位质量燃料完全燃烧时放出的热量\r
core_model: 燃料质量与完全燃烧放热的比例模型\r
formula: "Q=mq"\r
math_prerequisite: [乘法, 科学记数法]\r
math_connection: 把乘法、科学记数法用于真实测量、图示或数量关系。\r
from_previous: 承接L049《比热容：相同热量为何升温不同》的比热容表示单位质量升高1℃所需热量。\r
to_next: 为L051《能量守恒、效率与方向》准备输入能量=有效+散失。\r
knowledge_links: [L049, L045]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4漏完全燃烧条件, C7把热值随质量改变]\r
review_links: [L049, L047, L043]\r
---\r
\r
# 第50课：燃料热值：同质量燃料放热不同\r
\r
## 今天只学一件事\r
\r
回答：**同质量木柴和天然气为什么放热不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、科学记数法。把乘法、科学记数法用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、科学记数法，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：比较资料中同质量不同燃料完全燃烧的放热量并画能量链。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：比较资料中同质量不同燃料完全燃烧的放热量并画能量链。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：涉及热水或热源时由成人管理；温度计不碰容器底壁，禁止直接加热密闭容器。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**热值描述单位质量燃料完全燃烧时放出的热量**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**燃料能量流图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**燃料质量与完全燃烧放热的比例模型**。\r
\r
## 正式物理知识\r
\r
- 概念：热值描述单位质量燃料完全燃烧时放出的热量。\r
- 关系：Q=mq\r
- 为什么需要：用一个数量关系回答“同质量木柴和天然气为什么放热不同？”。\r
- 量与单位：m用kg，q用J/kg，Q用J。\r
- 怎样变化：同种燃料完全燃烧时质量越大放热越多。\r
- 适用边界：q是燃料属性；公式按完全燃烧的理想放热量计算。\r
\r
**课后教材融合卡（不占本课20分钟）**：简易热机模型只用教师提供的低温安全演示或视频数据，画出内能→机械能及散失能量的完整能量链。\r
\r
## 一个典型例题\r
\r
**题目**：0.1 kg燃料热值3×10^7 J/kg，完全燃烧放热？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“燃料质量与完全燃烧放热的比例模型” → 检查单位和意义。\r
\r
**答案**：3×10^6 J。\r
\r
## 一句话收束\r
\r
今天记住：**热值描述单位质量燃料完全燃烧时放出的热量；燃料质量与完全燃烧放热的比例模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“比较资料中同质量不同燃料完全燃烧的放热量并画能量链”中，有同学忽略了“C7把热值随质量改变”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“燃料质量与完全燃烧放热的比例模型”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 0.1 kg燃料热值3×10^7 J/kg，完全燃烧放热。\r
\r
   **答案**：3×10^6 J。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“燃料能量流图”，标出研究对象、关键方向或变量，并用图得出“燃料质量与完全燃烧放热的比例模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“比较资料中同质量不同燃料完全燃烧的放热量并画能量链”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“燃料质量与完全燃烧放热的比例模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“同质量木柴和天然气为什么放热不同？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“燃料质量与完全燃烧放热的比例模型”连接证据与结论。若出现“C4漏完全燃烧条件”，归入 **C4漏完全燃烧条件** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4漏完全燃烧条件：回到本课模型卡，重新指出对象和关键条件。\r
- C7把热值随质量改变：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L049《比热容：相同热量为何升温不同》的比热容表示单位质量升高1℃所需热量。\r
\r
## 下一课会发生什么\r
\r
为L051《能量守恒、效率与方向》准备输入能量=有效+散失。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Gr=`---\r
lesson_id: L051\r
title: 能量守恒、效率与方向\r
grade: 九年级\r
semester: 全一册\r
big_idea: 内能与能源\r
importance: ★★★\r
curriculum_standard: [3.5.1, 3.5.2, 3.5.3]\r
pep_mapping: 九年第14章\r
core_question: 能量守恒，永动机为什么仍不可能？\r
core_concept: 能量总量守恒但转化有方向且品质会分散\r
core_model: 输入能量=有效+散失\r
formula: "E入=E有+E散"\r
math_prerequisite: [加法, 百分数]\r
math_connection: 把加法、百分数用于真实测量、图示或数量关系。\r
from_previous: 承接L050《燃料热值：同质量燃料放热不同》的热值描述单位质量燃料完全燃烧时放出的热量。\r
to_next: 为L052《闭合电路：电流怎样形成通路》准备电源—导线—用电器—开关闭环。\r
knowledge_links: [L050, L046]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1守恒等同不变形式, C7效率超过100%]\r
review_links: [L050, L048, L044]\r
---\r
\r
# 第51课：能量守恒、效率与方向\r
\r
## 今天只学一件事\r
\r
回答：**能量守恒，永动机为什么仍不可能？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：加法、百分数。把加法、百分数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习加法、百分数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：给手机充电能量流贴标签并找散失。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：给手机充电能量流贴标签并找散失。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**能量总量守恒但转化有方向且品质会分散**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**能量流桑基简图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**输入能量=有效+散失**。\r
\r
## 正式物理知识\r
\r
- 概念：能量总量守恒但转化有方向且品质会分散。\r
- 关系：E入=E有+E散\r
- 为什么需要：用一个数量关系回答“能量守恒，永动机为什么仍不可能？”。\r
- 量与单位：各项都用同一种能量单位。\r
- 怎样变化：输入固定时散失越少，有效能量越多。\r
- 适用边界：守恒不等于所有能量都能无条件再次利用。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：输入100 J，有用70 J，散失多少？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“输入能量=有效+散失” → 检查单位和意义。\r
\r
**答案**：30 J；守恒不等于都能再利用。\r
\r
## 一句话收束\r
\r
今天记住：**能量总量守恒但转化有方向且品质会分散；输入能量=有效+散失。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“给手机充电能量流贴标签并找散失”中，有同学忽略了“C7效率超过100%”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“输入能量=有效+散失”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 输入100 J，有用70 J，散失多少。\r
\r
   **答案**：30 J；守恒不等于都能再利用。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“能量流桑基简图”，标出研究对象、关键方向或变量，并用图得出“输入能量=有效+散失”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“给手机充电能量流贴标签并找散失”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“输入能量=有效+散失”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“能量守恒，永动机为什么仍不可能？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“输入能量=有效+散失”连接证据与结论。若出现“C1守恒等同不变形式”，归入 **C1守恒等同不变形式** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1守恒等同不变形式：回到本课模型卡，重新指出对象和关键条件。\r
- C7效率超过100%：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L050《燃料热值：同质量燃料放热不同》的热值描述单位质量燃料完全燃烧时放出的热量。\r
\r
## 下一课会发生什么\r
\r
为L052《闭合电路：电流怎样形成通路》准备电源—导线—用电器—开关闭环。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Kr=`---\r
lesson_id: L052\r
title: 闭合电路：电流怎样形成通路\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电路\r
importance: ★★★\r
curriculum_standard: [2.4.1, 3.4.1]\r
pep_mapping: 九年第15章\r
core_question: 灯泡亮起来，电流必须走怎样的路？\r
core_concept: 持续电流需要电源和闭合通路\r
core_model: 电源—导线—用电器—开关闭环\r
formula: "—"\r
math_prerequisite: [无]\r
math_connection: 本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
from_previous: 承接L051《能量守恒、效率与方向》的能量总量守恒但转化有方向且品质会分散。\r
to_next: 为L053《串联和并联：电流有几条路》准备从电流路径识别连接方式。\r
knowledge_links: [L051, L047]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2把电流消耗掉, C3电路图元件画错]\r
review_links: [L051, L049, L045]\r
---\r
\r
# 第52课：闭合电路：电流怎样形成通路\r
\r
## 今天只学一件事\r
\r
回答：**灯泡亮起来，电流必须走怎样的路？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：无。本课不要求新的数学工具，重点用观察、分类或画图表达证据。\r
\r
**数学小补丁**：无需数学补丁；直接进入观察、比较或画图任务。\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：电池、灯泡、开关试接，先检查短路风险。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：电池、灯泡、开关试接，先检查短路风险。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**持续电流需要电源和闭合通路**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**最简电路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电源—导线—用电器—开关闭环**。\r
\r
## 正式物理知识\r
\r
- 概念：持续电流需要电源和闭合通路。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：持续电流要求电源和闭合通路；静电现象不能等同持续电流。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**静电阅读卡（2.4.1）**：摩擦可使物体带电；静电可被利用，也可能引发放电风险。它与持续电流不同，持续电流还需要闭合通路。\r
\r
## 一个典型例题\r
\r
**题目**：开关闭合但灯不亮先查什么？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电源—导线—用电器—开关闭环” → 检查单位和意义。\r
\r
**答案**：通路是否完整、接触是否可靠。\r
\r
## 一句话收束\r
\r
今天记住：**持续电流需要电源和闭合通路；电源—导线—用电器—开关闭环。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“电池、灯泡、开关试接，先检查短路风险”中，有同学忽略了“C3电路图元件画错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电源—导线—用电器—开关闭环”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 开关闭合但灯不亮先查什么。\r
\r
   **答案**：通路是否完整、接触是否可靠。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“最简电路图”，标出研究对象、关键方向或变量，并用图得出“电源—导线—用电器—开关闭环”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“电池、灯泡、开关试接，先检查短路风险”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电源—导线—用电器—开关闭环”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“灯泡亮起来，电流必须走怎样的路？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电源—导线—用电器—开关闭环”连接证据与结论。若出现“C2把电流消耗掉”，归入 **C2把电流消耗掉** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2把电流消耗掉：回到本课模型卡，重新指出对象和关键条件。\r
- C3电路图元件画错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L051《能量守恒、效率与方向》的能量总量守恒但转化有方向且品质会分散。\r
\r
## 下一课会发生什么\r
\r
为L053《串联和并联：电流有几条路》准备从电流路径识别连接方式。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,qr=`---\r
lesson_id: L053\r
title: 串联和并联：电流有几条路\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电路\r
importance: ★★★\r
curriculum_standard: [3.4.4]\r
pep_mapping: 九年第15章\r
core_question: 家里一盏灯坏了，其他灯为什么还能亮？\r
core_concept: 串联一条路径，并联多条支路\r
core_model: 从电流路径识别连接方式\r
formula: "—"\r
math_prerequisite: [分类]\r
math_connection: 把分类用于真实测量、图示或数量关系。\r
from_previous: 承接L052《闭合电路：电流怎样形成通路》的持续电流需要电源和闭合通路。\r
to_next: 为L054《电流表：让电流可测量》准备串联、正进负出、量程合适。\r
knowledge_links: [L052, L048]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3按元件摆放形状判断, C4漏节点]\r
review_links: [L052, L050, L046]\r
---\r
\r
# 第53课：串联和并联：电流有几条路\r
\r
## 今天只学一件事\r
\r
回答：**家里一盏灯坏了，其他灯为什么还能亮？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：分类。把分类用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习分类，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：用两灯搭串联与并联，断开一灯观察另一灯。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：用两灯搭串联与并联，断开一灯观察另一灯。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**串联一条路径，并联多条支路**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**串并联路径图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**从电流路径识别连接方式**。\r
\r
## 正式物理知识\r
\r
- 概念：串联一条路径，并联多条支路。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：从电流路径识别连接方式。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：家庭灯为什么并联？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“从电流路径识别连接方式” → 检查单位和意义。\r
\r
**答案**：各支路可独立工作且两端电压相同。\r
\r
## 一句话收束\r
\r
今天记住：**串联一条路径，并联多条支路；从电流路径识别连接方式。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“用两灯搭串联与并联，断开一灯观察另一灯”中，有同学忽略了“C4漏节点”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“从电流路径识别连接方式”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 家庭灯为什么并联。\r
\r
   **答案**：各支路可独立工作且两端电压相同。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“串并联路径图”，标出研究对象、关键方向或变量，并用图得出“从电流路径识别连接方式”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“用两灯搭串联与并联，断开一灯观察另一灯”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“从电流路径识别连接方式”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“家里一盏灯坏了，其他灯为什么还能亮？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“从电流路径识别连接方式”连接证据与结论。若出现“C3按元件摆放形状判断”，归入 **C3按元件摆放形状判断** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3按元件摆放形状判断：回到本课模型卡，重新指出对象和关键条件。\r
- C4漏节点：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L052《闭合电路：电流怎样形成通路》的持续电流需要电源和闭合通路。\r
\r
## 下一课会发生什么\r
\r
为L054《电流表：让电流可测量》准备串联、正进负出、量程合适。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Jr=`---\r
lesson_id: L054\r
title: 电流表：让电流可测量\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电流电压电阻\r
importance: ★★★\r
curriculum_standard: [3.4.3, 4.1.7]\r
pep_mapping: 九年第15章\r
core_question: 电流表为什么必须串进被测支路？\r
core_concept: 电流表测通过某处的电流\r
core_model: 串联、正进负出、量程合适\r
formula: "—"\r
math_prerequisite: [刻度, 小数]\r
math_connection: 把刻度、小数用于真实测量、图示或数量关系。\r
from_previous: 承接L053《串联和并联：电流有几条路》的串联一条路径，并联多条支路。\r
to_next: 为L055《核心实验：串并联电流特点》准备节点电流守恒模型。\r
knowledge_links: [L053, L049]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3并联电流表, C9量程读错]\r
review_links: [L053, L051, L047]\r
---\r
\r
# 第54课：电流表：让电流可测量\r
\r
## 今天只学一件事\r
\r
回答：**电流表为什么必须串进被测支路？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：刻度、小数。把刻度、小数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习刻度、小数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：识别量程和分度值，安全接入小灯泡支路。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：识别量程和分度值，安全接入小灯泡支路。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量类，无自变量。\r
- 因变量/观察测量：支路电流。\r
- 关键控制与规范：量程、正负接线、串联位置和试触。\r
- 证据记录：量程、分度值和示数。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电流表测通过某处的电流**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**电流表接线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**串联、正进负出、量程合适**。\r
\r
## 正式物理知识\r
\r
- 概念：电流表测通过某处的电流。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：串联、正进负出、量程合适。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：0～0.6 A量程每小格0.02 A，指17格？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“串联、正进负出、量程合适” → 检查单位和意义。\r
\r
**答案**：0.34 A。\r
\r
## 一句话收束\r
\r
今天记住：**电流表测通过某处的电流；串联、正进负出、量程合适。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“识别量程和分度值，安全接入小灯泡支路”中，有同学忽略了“C9量程读错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“串联、正进负出、量程合适”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 0～0.6 A量程每小格0.02 A，指17格。\r
\r
   **答案**：0.34 A。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“电流表接线图”，标出研究对象、关键方向或变量，并用图得出“串联、正进负出、量程合适”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“识别量程和分度值，安全接入小灯泡支路”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“串联、正进负出、量程合适”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电流表为什么必须串进被测支路？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“串联、正进负出、量程合适”连接证据与结论。若出现“C3并联电流表”，归入 **C3并联电流表** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3并联电流表：回到本课模型卡，重新指出对象和关键条件。\r
- C9量程读错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L053《串联和并联：电流有几条路》的串联一条路径，并联多条支路。\r
\r
## 下一课会发生什么\r
\r
为L055《核心实验：串并联电流特点》准备节点电流守恒模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Yr=`---\r
lesson_id: L055\r
title: 核心实验：串并联电流特点\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电流电压电阻\r
importance: ★★★\r
curriculum_standard: [3.4.4, 4.2.11]\r
pep_mapping: 九年第15章\r
core_question: 电流经过灯泡后会被“用掉”吗？\r
core_concept: 串联各处电流相等，并联干路电流等于支路和\r
core_model: 节点电流守恒模型\r
formula: "I=I1=I2；I干=I1+I2"\r
math_prerequisite: [加法, 表格]\r
math_connection: 把加法、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L054《电流表：让电流可测量》的电流表测通过某处的电流。\r
to_next: 为L056《电压表：测量“推动差”》准备电压表并联在被测元件两端。\r
knowledge_links: [L054, L050]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4只测一组, C1把电流当消耗品]\r
review_links: [L054, L052, L048]\r
---\r
\r
# 第55课：核心实验：串并联电流特点\r
\r
## 今天只学一件事\r
\r
回答：**电流经过灯泡后会被“用掉”吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：加法、表格。把加法、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习加法、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：换测多个位置和不同灯泡，记录三组数据。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：换测多个位置和不同灯泡，记录三组数据。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量位置或支路。\r
- 因变量/观察测量：各处电流。\r
- 关键控制与规范：电源、灯泡组合、量程和连接方式。\r
- 证据记录：不同位置和不同灯泡组合的多组电流。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**串联各处电流相等，并联干路电流等于支路和**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**节点电流箭头图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**节点电流守恒模型**。\r
\r
## 正式物理知识\r
\r
- 概念：串联各处电流相等，并联干路电流等于支路和。\r
- 关系：I=I1=I2；I干=I1+I2\r
- 为什么需要：用一个数量关系回答“电流经过灯泡后会被“用掉”吗？”。\r
- 量与单位：各电流均用A，先辨串联或并联节点。\r
- 怎样变化：并联增加支路时干路电流通常随电路条件改变。\r
- 适用边界：不能把串联关系套到并联，也不能忽略电源承受能力。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：并联两支路0.2 A与0.3 A，干路？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“节点电流守恒模型” → 检查单位和意义。\r
\r
**答案**：0.5 A。\r
\r
## 一句话收束\r
\r
今天记住：**串联各处电流相等，并联干路电流等于支路和；节点电流守恒模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“换测多个位置和不同灯泡，记录三组数据”中，有同学忽略了“C1把电流当消耗品”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“节点电流守恒模型”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 并联两支路0.2 A与0.3 A，干路。\r
\r
   **答案**：0.5 A。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“节点电流箭头图”，标出研究对象、关键方向或变量，并用图得出“节点电流守恒模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“换测多个位置和不同灯泡，记录三组数据”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“节点电流守恒模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电流经过灯泡后会被“用掉”吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“节点电流守恒模型”连接证据与结论。若出现“C4只测一组”，归入 **C4只测一组** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4只测一组：回到本课模型卡，重新指出对象和关键条件。\r
- C1把电流当消耗品：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L054《电流表：让电流可测量》的电流表测通过某处的电流。\r
\r
## 下一课会发生什么\r
\r
为L056《电压表：测量“推动差”》准备电压表并联在被测元件两端。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Xr=`---\r
lesson_id: L056\r
title: 电压表：测量“推动差”\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电流电压电阻\r
importance: ★★★\r
curriculum_standard: [3.4.2, 3.4.3, 4.1.8]\r
pep_mapping: 九年第16章\r
core_question: 电池为什么能推动电荷定向移动？\r
core_concept: 电压是形成电流的原因之一\r
core_model: 电压表并联在被测元件两端\r
formula: "—"\r
math_prerequisite: [刻度, 小数]\r
math_connection: 把刻度、小数用于真实测量、图示或数量关系。\r
from_previous: 承接L055《核心实验：串并联电流特点》的串联各处电流相等，并联干路电流等于支路和。\r
to_next: 为L057《核心实验：串并联电压特点》准备回路电压分配模型。\r
knowledge_links: [L055, L051]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3把电压表串联, C9正负接线错]\r
review_links: [L055, L053, L049]\r
---\r
\r
# 第56课：电压表：测量“推动差”\r
\r
## 今天只学一件事\r
\r
回答：**电池为什么能推动电荷定向移动？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：刻度、小数。把刻度、小数用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习刻度、小数，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：辨量程、分度值，把电压表跨接在灯泡两端。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：辨量程、分度值，把电压表跨接在灯泡两端。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量类，无自变量。\r
- 因变量/观察测量：元件两端电压。\r
- 关键控制与规范：量程、正负接线和并联端点。\r
- 证据记录：量程、分度值和示数。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电压是形成电流的原因之一**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**电压表接线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电压表并联在被测元件两端**。\r
\r
## 正式物理知识\r
\r
- 概念：电压是形成电流的原因之一。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：电压表并联在被测元件两端。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：0～3 V量程每小格0.1 V，指23格？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电压表并联在被测元件两端” → 检查单位和意义。\r
\r
**答案**：2.3 V。\r
\r
## 一句话收束\r
\r
今天记住：**电压是形成电流的原因之一；电压表并联在被测元件两端。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“辨量程、分度值，把电压表跨接在灯泡两端”中，有同学忽略了“C9正负接线错”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电压表并联在被测元件两端”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 0～3 V量程每小格0.1 V，指23格。\r
\r
   **答案**：2.3 V。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“电压表接线图”，标出研究对象、关键方向或变量，并用图得出“电压表并联在被测元件两端”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“辨量程、分度值，把电压表跨接在灯泡两端”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电压表并联在被测元件两端”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电池为什么能推动电荷定向移动？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电压表并联在被测元件两端”连接证据与结论。若出现“C3把电压表串联”，归入 **C3把电压表串联** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3把电压表串联：回到本课模型卡，重新指出对象和关键条件。\r
- C9正负接线错：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L055《核心实验：串并联电流特点》的串联各处电流相等，并联干路电流等于支路和。\r
\r
## 下一课会发生什么\r
\r
为L057《核心实验：串并联电压特点》准备回路电压分配模型。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Zr=`---\r
lesson_id: L057\r
title: 核心实验：串并联电压特点\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电流电压电阻\r
importance: ★★★\r
curriculum_standard: [3.4.4, 4.2.11]\r
pep_mapping: 九年第16章\r
core_question: 两只串联灯怎样“分”电压？\r
core_concept: 串联总电压等于各部分之和，并联各支路电压相等\r
core_model: 回路电压分配模型\r
formula: "U总=U1+U2；U=U1=U2"\r
math_prerequisite: [加法, 表格]\r
math_connection: 把加法、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L056《电压表：测量“推动差”》的电压是形成电流的原因之一。\r
to_next: 为L058《电阻与滑动变阻器》准备同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节。\r
knowledge_links: [L056, L052]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3测量端点错, C4把电流规律套给电压]\r
review_links: [L056, L054, L050]\r
---\r
\r
# 第57课：核心实验：串并联电压特点\r
\r
## 今天只学一件事\r
\r
回答：**两只串联灯怎样“分”电压？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：加法、表格。把加法、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习加法、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：分别测电源、各灯两端电压并换灯复测。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：分别测电源、各灯两端电压并换灯复测。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：测量元件或支路。\r
- 因变量/观察测量：各部分两端电压。\r
- 关键控制与规范：电源、元件组合、量程和连接方式。\r
- 证据记录：串联总分电压与并联支路电压多组数据。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**串联总电压等于各部分之和，并联各支路电压相等**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**串并联电压图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**回路电压分配模型**。\r
\r
## 正式物理知识\r
\r
- 概念：串联总电压等于各部分之和，并联各支路电压相等。\r
- 关系：U总=U1+U2；U=U1=U2\r
- 为什么需要：用一个数量关系回答“两只串联灯怎样“分”电压？”。\r
- 量与单位：各电压均用V，电压表跨接在对应两端。\r
- 怎样变化：串联各部分电压之和等于电源两端总电压。\r
- 适用边界：先确认测量端点；不能把电流关系直接套给电压。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：串联两灯1.2 V、1.8 V，电源电压？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“回路电压分配模型” → 检查单位和意义。\r
\r
**答案**：3.0 V。\r
\r
## 一句话收束\r
\r
今天记住：**串联总电压等于各部分之和，并联各支路电压相等；回路电压分配模型。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“分别测电源、各灯两端电压并换灯复测”中，有同学忽略了“C4把电流规律套给电压”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“回路电压分配模型”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 串联两灯1.2 V、1.8 V，电源电压。\r
\r
   **答案**：3.0 V。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“串并联电压图”，标出研究对象、关键方向或变量，并用图得出“回路电压分配模型”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“分别测电源、各灯两端电压并换灯复测”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“回路电压分配模型”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“两只串联灯怎样“分”电压？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“回路电压分配模型”连接证据与结论。若出现“C3测量端点错”，归入 **C3测量端点错** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3测量端点错：回到本课模型卡，重新指出对象和关键条件。\r
- C4把电流规律套给电压：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L056《电压表：测量“推动差”》的电压是形成电流的原因之一。\r
\r
## 下一课会发生什么\r
\r
为L058《电阻与滑动变阻器》准备同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,Qr=`---\r
lesson_id: L058\r
title: 电阻与滑动变阻器\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电流电压电阻\r
importance: ★★★\r
curriculum_standard: [3.4.2]\r
pep_mapping: 九年第16章\r
core_question: 同一电源接不同灯丝，电流为什么不同？\r
core_concept: 电阻表示导体对电流的阻碍作用\r
core_model: 同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节\r
formula: "—"\r
math_prerequisite: [比例]\r
math_connection: 把比例用于真实测量、图示或数量关系。\r
from_previous: 承接L057《核心实验：串并联电压特点》的串联总电压等于各部分之和，并联各支路电压相等。\r
to_next: 为L059《核心实验：电流与电压、电阻关系》准备控制变量建立I-U-R关系。\r
knowledge_links: [L057, L053]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3同时接上面两个端子, C4不看有效段]\r
review_links: [L057, L055, L051]\r
---\r
\r
# 第58课：电阻与滑动变阻器\r
\r
## 今天只学一件事\r
\r
回答：**同一电源接不同灯丝，电流为什么不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：比例。把比例用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习比例，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：铅笔芯长短对电流影响演示，再判断变阻器接入段。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：铅笔芯长短对电流影响演示，再判断变阻器接入段。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电阻表示导体对电流的阻碍作用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**变阻器有效段图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节**。\r
\r
## 正式物理知识\r
\r
- 概念：电阻表示导体对电流的阻碍作用。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：导体电阻还受温度影响；滑动变阻器按接入电路的有效电阻丝长度调节。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用低压电源和滑动变阻器制作简易调光台灯，闭合开关前把接入电阻调到最大并核对有效接线段。\r
\r
## 一个典型例题\r
\r
**题目**：滑片远离已接下端时电阻怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节” → 检查单位和意义。\r
\r
**答案**：有效长度变长，接入电阻增大。\r
\r
## 一句话收束\r
\r
今天记住：**电阻表示导体对电流的阻碍作用；同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“铅笔芯长短对电流影响演示，再判断变阻器接入段”中，有同学忽略了“C4不看有效段”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 滑片远离已接下端时电阻怎样。\r
\r
   **答案**：有效长度变长，接入电阻增大。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“变阻器有效段图”，标出研究对象、关键方向或变量，并用图得出“同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“铅笔芯长短对电流影响演示，再判断变阻器接入段”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“同一电源接不同灯丝，电流为什么不同？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节”连接证据与结论。若出现“C3同时接上面两个端子”，归入 **C3同时接上面两个端子** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3同时接上面两个端子：回到本课模型卡，重新指出对象和关键条件。\r
- C4不看有效段：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L057《核心实验：串并联电压特点》的串联总电压等于各部分之和，并联各支路电压相等。\r
\r
## 下一课会发生什么\r
\r
为L059《核心实验：电流与电压、电阻关系》准备控制变量建立I-U-R关系。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,$r=`---\r
lesson_id: L059\r
title: 核心实验：电流与电压、电阻关系\r
grade: 九年级\r
semester: 全一册\r
big_idea: 欧姆定律\r
importance: ★★★\r
curriculum_standard: [3.4.2, 4.2.12]\r
pep_mapping: 九年第17章\r
core_question: 电流会怎样随电压和电阻改变？\r
core_concept: 同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比\r
core_model: 控制变量建立I-U-R关系\r
formula: "I=U/R"\r
math_prerequisite: [比例, 图像]\r
math_connection: 把比例、图像用于真实测量、图示或数量关系。\r
from_previous: 承接L058《电阻与滑动变阻器》的电阻表示导体对电流的阻碍作用。\r
to_next: 为L060《欧姆定律建模应用》准备圈定研究对象再配U、I、R。\r
knowledge_links: [L058, L054]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4控制量未保持, C7倒写关系]\r
review_links: [L058, L056, L052]\r
---\r
\r
# 第59课：核心实验：电流与电压、电阻关系\r
\r
## 今天只学一件事\r
\r
回答：**电流会怎样随电压和电阻改变？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：比例、图像。把比例、图像用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习比例、图像，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：分别保持R或U不变，调变阻器测多组数据。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：分别保持R或U不变，调变阻器测多组数据。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：电压或电阻，每轮只改一个。\r
- 因变量/观察测量：电流。\r
- 关键控制与规范：被要求保持不变的量、温度和电表量程。\r
- 证据记录：I-U数据图与I-R比较表。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**I-U图像与电路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**控制变量建立I-U-R关系**。\r
\r
## 正式物理知识\r
\r
- 概念：同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比。\r
- 关系：I=U/R\r
- 为什么需要：用一个数量关系回答“电流会怎样随电压和电阻改变？”。\r
- 量与单位：U用V，R用Ω，I用A。\r
- 怎样变化：同一电阻温度近似不变时I随U增大；U一定时R越大I越小。\r
- 适用边界：数据必须来自同一段电路同一状态；导体温度明显变化时不能机械套比例。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：6 V加在3 Ω电阻上，电流？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“控制变量建立I-U-R关系” → 检查单位和意义。\r
\r
**答案**：2 A。\r
\r
## 一句话收束\r
\r
今天记住：**同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比；控制变量建立I-U-R关系。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“分别保持R或U不变，调变阻器测多组数据”中，有同学忽略了“C7倒写关系”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“控制变量建立I-U-R关系”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 6 V加在3 Ω电阻上，电流。\r
\r
   **答案**：2 A。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“I-U图像与电路图”，标出研究对象、关键方向或变量，并用图得出“控制变量建立I-U-R关系”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“分别保持R或U不变，调变阻器测多组数据”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“控制变量建立I-U-R关系”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电流会怎样随电压和电阻改变？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“控制变量建立I-U-R关系”连接证据与结论。若出现“C4控制量未保持”，归入 **C4控制量未保持** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4控制量未保持：回到本课模型卡，重新指出对象和关键条件。\r
- C7倒写关系：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L058《电阻与滑动变阻器》的电阻表示导体对电流的阻碍作用。\r
\r
## 下一课会发生什么\r
\r
为L060《欧姆定律建模应用》准备圈定研究对象再配U、I、R。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ei=`---\r
lesson_id: L060\r
title: 欧姆定律建模应用\r
grade: 九年级\r
semester: 全一册\r
big_idea: 欧姆定律\r
importance: ★★★\r
curriculum_standard: [3.4.2]\r
pep_mapping: 九年第17章\r
core_question: 电路题怎样先找对象再列式？\r
core_concept: 欧姆定律只对同一段电路同一状态配对\r
core_model: 圈定研究对象再配U、I、R\r
formula: "U=IR"\r
math_prerequisite: [方程, 单位换算]\r
math_connection: 把方程、单位换算用于真实测量、图示或数量关系。\r
from_previous: 承接L059《核心实验：电流与电压、电阻关系》的同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比。\r
to_next: 为L061《核心实验：伏安法测电阻》准备电流表串联、电压表并联、变阻器保护。\r
knowledge_links: [L059, L055]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2对象边界错, C7跨对象拼数据]\r
review_links: [L059, L057, L053]\r
---\r
\r
# 第60课：欧姆定律建模应用\r
\r
## 今天只学一件事\r
\r
回答：**电路题怎样先找对象再列式？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：方程、单位换算。把方程、单位换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习方程、单位换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：给电路某电阻框边界，标其电压电流再计算。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：给电路某电阻框边界，标其电压电流再计算。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**欧姆定律只对同一段电路同一状态配对**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**局部电路框图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**圈定研究对象再配U、I、R**。\r
\r
## 正式物理知识\r
\r
- 概念：欧姆定律只对同一段电路同一状态配对。\r
- 关系：U=IR\r
- 为什么需要：用一个数量关系回答“电路题怎样先找对象再列式？”。\r
- 量与单位：U用V，I用A，R用Ω。\r
- 怎样变化：知道任意两个量可求第三个量。\r
- 适用边界：只给同一段电路配对数据；先圈定研究对象。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：0.5 A通过12 Ω电阻，电压？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“圈定研究对象再配U、I、R” → 检查单位和意义。\r
\r
**答案**：6 V。\r
\r
## 一句话收束\r
\r
今天记住：**欧姆定律只对同一段电路同一状态配对；圈定研究对象再配U、I、R。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“给电路某电阻框边界，标其电压电流再计算”中，有同学忽略了“C7跨对象拼数据”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“圈定研究对象再配U、I、R”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 0.5 A通过12 Ω电阻，电压。\r
\r
   **答案**：6 V。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“局部电路框图”，标出研究对象、关键方向或变量，并用图得出“圈定研究对象再配U、I、R”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“给电路某电阻框边界，标其电压电流再计算”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“圈定研究对象再配U、I、R”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电路题怎样先找对象再列式？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“圈定研究对象再配U、I、R”连接证据与结论。若出现“C2对象边界错”，归入 **C2对象边界错** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2对象边界错：回到本课模型卡，重新指出对象和关键条件。\r
- C7跨对象拼数据：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L059《核心实验：电流与电压、电阻关系》的同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比。\r
\r
## 下一课会发生什么\r
\r
为L061《核心实验：伏安法测电阻》准备电流表串联、电压表并联、变阻器保护。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ti=`---\r
lesson_id: L061\r
title: 核心实验：伏安法测电阻\r
grade: 九年级\r
semester: 全一册\r
big_idea: 欧姆定律\r
importance: ★★★\r
curriculum_standard: [4.1.9]\r
pep_mapping: 九年第17章\r
core_question: 未知电阻怎样用两个表测出来？\r
core_concept: 由同一状态的U和I间接求R\r
core_model: 电流表串联、电压表并联、变阻器保护\r
formula: "R=U/I"\r
math_prerequisite: [除法, 表格]\r
math_connection: 把除法、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L060《欧姆定律建模应用》的欧姆定律只对同一段电路同一状态配对。\r
to_next: 为L062《电功与电能表》准备电压、电流和时间共同决定电功。\r
knowledge_links: [L060, L056]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4电表数据非同一时刻, C9闭合前未调最大]\r
review_links: [L060, L058, L054]\r
---\r
\r
# 第61课：核心实验：伏安法测电阻\r
\r
## 今天只学一件事\r
\r
回答：**未知电阻怎样用两个表测出来？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：除法、表格。把除法、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习除法、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：先最大电阻保护，再测三组U、I并分析。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：先最大电阻保护，再测三组U、I并分析。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：滑动变阻器造成的工作状态。\r
- 因变量/观察测量：同一时刻U、I及算得R。\r
- 关键控制与规范：待测电阻、接线、量程和闭合前最大阻值。\r
- 证据记录：不少于三组U、I、R及异常值分析。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**由同一状态的U和I间接求R**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**伏安法电路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电流表串联、电压表并联、变阻器保护**。\r
\r
## 正式物理知识\r
\r
- 概念：由同一状态的U和I间接求R。\r
- 关系：R=U/I\r
- 为什么需要：用一个数量关系回答“未知电阻怎样用两个表测出来？”。\r
- 量与单位：U用V，I用A，R用Ω。\r
- 怎样变化：定值电阻可用多组数据检查稳定性。\r
- 适用边界：R不是由一次U/I‘创造’出来；小灯泡电阻会随温度变化。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：2.4 V、0.3 A，电阻？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电流表串联、电压表并联、变阻器保护” → 检查单位和意义。\r
\r
**答案**：8 Ω。\r
\r
## 一句话收束\r
\r
今天记住：**由同一状态的U和I间接求R；电流表串联、电压表并联、变阻器保护。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“先最大电阻保护，再测三组U、I并分析”中，有同学忽略了“C9闭合前未调最大”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电流表串联、电压表并联、变阻器保护”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 2.4 V、0.3 A，电阻。\r
\r
   **答案**：8 Ω。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“伏安法电路图”，标出研究对象、关键方向或变量，并用图得出“电流表串联、电压表并联、变阻器保护”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“先最大电阻保护，再测三组U、I并分析”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电流表串联、电压表并联、变阻器保护”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“未知电阻怎样用两个表测出来？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电流表串联、电压表并联、变阻器保护”连接证据与结论。若出现“C4电表数据非同一时刻”，归入 **C4电表数据非同一时刻** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4电表数据非同一时刻：回到本课模型卡，重新指出对象和关键条件。\r
- C9闭合前未调最大：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L060《欧姆定律建模应用》的欧姆定律只对同一段电路同一状态配对。\r
\r
## 下一课会发生什么\r
\r
为L062《电功与电能表》准备电压、电流和时间共同决定电功。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ni=`---\r
lesson_id: L062\r
title: 电功与电能表\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电功与电功率\r
importance: ★★★\r
curriculum_standard: [3.4.5]\r
pep_mapping: 九年第18章\r
core_question: 电器工作一段时间，转化了多少电能？\r
core_concept: 电功表示电能转化的多少\r
core_model: 电压、电流和时间共同决定电功\r
formula: "W=UIt"\r
math_prerequisite: [乘法, 时间换算]\r
math_connection: 把乘法、时间换算用于真实测量、图示或数量关系。\r
from_previous: 承接L061《核心实验：伏安法测电阻》的由同一状态的U和I间接求R。\r
to_next: 为L063《电功率与小灯泡测量》准备同一工作状态测U和I后相乘。\r
knowledge_links: [L061, L057]\r
experiment_level: NONE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1电功与功率混淆, C6小时秒混用]\r
review_links: [L061, L059, L055]\r
---\r
\r
# 第62课：电功与电能表\r
\r
## 今天只学一件事\r
\r
回答：**电器工作一段时间，转化了多少电能？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、时间换算。把乘法、时间换算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、时间换算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：读取家用电能表前后示数，计算一段时间的用电量。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：读取家用电能表前后示数，计算一段时间的用电量。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电功表示电能转化的多少**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**电能流与电能表图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电压、电流和时间共同决定电功**。\r
\r
## 正式物理知识\r
\r
- 概念：电功表示电能转化的多少。\r
- 关系：W=UIt\r
- 为什么需要：用一个数量关系回答“电器工作一段时间，转化了多少电能？”。\r
- 量与单位：U用V，I用A，t用s，W用J；生活用电还常用kW·h。\r
- 怎样变化：同一用电器工作越久，转化电能越多。\r
- 适用边界：四个量必须属于同一用电器同一工作状态。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：220 V、2 A电器工作10 s，电功？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电压、电流和时间共同决定电功” → 检查单位和意义。\r
\r
**答案**：4400 J。\r
\r
## 一句话收束\r
\r
今天记住：**电功表示电能转化的多少；电压、电流和时间共同决定电功。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“读取家用电能表前后示数，计算一段时间的用电量”中，有同学忽略了“C6小时秒混用”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电压、电流和时间共同决定电功”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 220 V、2 A电器工作10 s，电功。\r
\r
   **答案**：4400 J。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“电能流与电能表图”，标出研究对象、关键方向或变量，并用图得出“电压、电流和时间共同决定电功”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“读取家用电能表前后示数，计算一段时间的用电量”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电压、电流和时间共同决定电功”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电器工作一段时间，转化了多少电能？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电压、电流和时间共同决定电功”连接证据与结论。若出现“C1电功与功率混淆”，归入 **C1电功与功率混淆** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1电功与功率混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C6小时秒混用：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L061《核心实验：伏安法测电阻》的由同一状态的U和I间接求R。\r
\r
## 下一课会发生什么\r
\r
为L063《电功率与小灯泡测量》准备同一工作状态测U和I后相乘。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ri=`---\r
lesson_id: L063\r
title: 电功率与小灯泡测量\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电功与电功率\r
importance: ★★★\r
curriculum_standard: [3.4.5]\r
pep_mapping: 九年第18章\r
core_question: 小灯泡在不同电压下亮度为何不同？\r
core_concept: 电功率表示电能转化的快慢\r
core_model: 同一工作状态测U和I后相乘\r
formula: "P=UI"\r
math_prerequisite: [乘法, 表格]\r
math_connection: 把乘法、表格用于真实测量、图示或数量关系。\r
from_previous: 承接L062《电功与电能表》的电功表示电能转化的多少。\r
to_next: 为L064《焦耳定律：电流为什么发热》准备控制变量比较电阻丝产热。\r
knowledge_links: [L062, L058]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4把实际与额定混用, C9超额定过多]\r
review_links: [L062, L060, L056]\r
---\r
\r
# 第63课：电功率与小灯泡测量\r
\r
## 今天只学一件事\r
\r
回答：**小灯泡在不同电压下亮度为何不同？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：乘法、表格。把乘法、表格用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习乘法、表格，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：调变阻器使灯泡在低于、等于、略高额定电压下工作。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：调变阻器使灯泡在低于、等于、略高额定电压下工作。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：小灯泡实际电压。\r
- 因变量/观察测量：实际电流、功率和亮度。\r
- 关键控制与规范：同一灯泡、接线、量程和升压上限。\r
- 证据记录：低于、等于、略高额定电压的U、I、P。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电功率表示电能转化的快慢**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**测功率电路图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**同一工作状态测U和I后相乘**。\r
\r
## 正式物理知识\r
\r
- 概念：电功率表示电能转化的快慢。\r
- 关系：P=UI\r
- 为什么需要：用一个数量关系回答“小灯泡在不同电压下亮度为何不同？”。\r
- 量与单位：U用V，I用A，P用W。\r
- 怎样变化：灯泡实际电压改变时实际功率和亮度会改变。\r
- 适用边界：额定功率只对应额定电压；不得把任意实际值叫额定值。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：额定2.5 V时0.3 A，额定功率？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“同一工作状态测U和I后相乘” → 检查单位和意义。\r
\r
**答案**：0.75 W。\r
\r
## 一句话收束\r
\r
今天记住：**电功率表示电能转化的快慢；同一工作状态测U和I后相乘。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“调变阻器使灯泡在低于、等于、略高额定电压下工作”中，有同学忽略了“C9超额定过多”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“同一工作状态测U和I后相乘”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 额定2.5 V时0.3 A，额定功率。\r
\r
   **答案**：0.75 W。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“测功率电路图”，标出研究对象、关键方向或变量，并用图得出“同一工作状态测U和I后相乘”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“调变阻器使灯泡在低于、等于、略高额定电压下工作”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“同一工作状态测U和I后相乘”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“小灯泡在不同电压下亮度为何不同？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“同一工作状态测U和I后相乘”连接证据与结论。若出现“C4把实际与额定混用”，归入 **C4把实际与额定混用** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4把实际与额定混用：回到本课模型卡，重新指出对象和关键条件。\r
- C9超额定过多：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L062《电功与电能表》的电功表示电能转化的多少。\r
\r
## 下一课会发生什么\r
\r
为L064《焦耳定律：电流为什么发热》准备控制变量比较电阻丝产热。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ii=`---\r
lesson_id: L064\r
title: 焦耳定律：电流为什么发热\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电功与电功率\r
importance: ★★★\r
curriculum_standard: [3.4.6]\r
pep_mapping: 九年第18章\r
core_question: 电炉丝很热，连接导线为什么不该同样热？\r
core_concept: 电热与电流平方、电阻、时间有关\r
core_model: 控制变量比较电阻丝产热\r
formula: "Q=I²Rt"\r
math_prerequisite: [平方, 乘法]\r
math_connection: 把平方、乘法用于真实测量、图示或数量关系。\r
from_previous: 承接L063《电功率与小灯泡测量》的电功率表示电能转化的快慢。\r
to_next: 为L065《家庭电路与安全用电》准备火线—用电器—零线与接地保护。\r
knowledge_links: [L063, L059]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C5漏平方, C4串并联时没辨相同量]\r
review_links: [L063, L061, L057]\r
---\r
\r
# 第64课：焦耳定律：电流为什么发热\r
\r
## 今天只学一件事\r
\r
回答：**电炉丝很热，连接导线为什么不该同样热？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：平方、乘法。把平方、乘法用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习平方、乘法，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：串联两不同电阻丝，用相同电流比较温升。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：串联两不同电阻丝，用相同电流比较温升。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电热与电流平方、电阻、时间有关**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**串联电热对比图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**控制变量比较电阻丝产热**。\r
\r
## 正式物理知识\r
\r
- 概念：电热与电流平方、电阻、时间有关。\r
- 关系：Q=I²Rt\r
- 为什么需要：用一个数量关系回答“电炉丝很热，连接导线为什么不该同样热？”。\r
- 量与单位：I用A，R用Ω，t用s，Q用J。\r
- 怎样变化：I变为2倍时，其他不变，电热变为4倍。\r
- 适用边界：比较实验必须说清相同量；不要漏掉电流的平方。\r
\r
**课后教材融合卡（不占本课20分钟）**：读取三种家电铭牌，用功率和使用时间提出一条可验证的节电建议，不把‘少用电’写成没有数据的口号。\r
\r
## 一个典型例题\r
\r
**题目**：电流变2倍，其他不变，电热变几倍？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“控制变量比较电阻丝产热” → 检查单位和意义。\r
\r
**答案**：4倍。\r
\r
## 一句话收束\r
\r
今天记住：**电热与电流平方、电阻、时间有关；控制变量比较电阻丝产热。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“串联两不同电阻丝，用相同电流比较温升”中，有同学忽略了“C4串并联时没辨相同量”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“控制变量比较电阻丝产热”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 电流变2倍，其他不变，电热变几倍。\r
\r
   **答案**：4倍。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“串联电热对比图”，标出研究对象、关键方向或变量，并用图得出“控制变量比较电阻丝产热”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“串联两不同电阻丝，用相同电流比较温升”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“控制变量比较电阻丝产热”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“电炉丝很热，连接导线为什么不该同样热？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“控制变量比较电阻丝产热”连接证据与结论。若出现“C5漏平方”，归入 **C5漏平方** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C5漏平方：回到本课模型卡，重新指出对象和关键条件。\r
- C4串并联时没辨相同量：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L063《电功率与小灯泡测量》的电功率表示电能转化的快慢。\r
\r
## 下一课会发生什么\r
\r
为L065《家庭电路与安全用电》准备火线—用电器—零线与接地保护。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ai=`---\r
lesson_id: L065\r
title: 家庭电路与安全用电\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电功与电功率\r
importance: ★★★\r
curriculum_standard: [3.4.7]\r
pep_mapping: 九年第19章\r
core_question: 保险装置为什么装在火线上？\r
core_concept: 家庭电路并联，保护装置切断危险通路\r
core_model: 火线—用电器—零线与接地保护\r
formula: "—"\r
math_prerequisite: [估算]\r
math_connection: 把估算用于真实测量、图示或数量关系。\r
from_previous: 承接L064《焦耳定律：电流为什么发热》的电热与电流平方、电阻、时间有关。\r
to_next: 为L066《磁场：看不见但能用作用检验》准备小磁针N极受力方向定义场方向。\r
knowledge_links: [L064, L060]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3开关接零线, C8湿手操作]\r
review_links: [L064, L062, L058]\r
---\r
\r
# 第65课：家庭电路与安全用电\r
\r
## 今天只学一件事\r
\r
回答：**保险装置为什么装在火线上？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：估算。把估算用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习估算，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：识别三孔插座、总开关和漏电保护器，不接触市电。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：识别三孔插座、总开关和漏电保护器，不接触市电。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只观察断电模型、图片或演示板；不拆插座，不触碰或改接家庭市电线路。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**家庭电路并联，保护装置切断危险通路**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**家庭电路安全图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**火线—用电器—零线与接地保护**。\r
\r
## 正式物理知识\r
\r
- 概念：家庭电路并联，保护装置切断危险通路。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：家庭电路结论用于规范交流低压供电系统；学习时只操作断电模型，不接触市电。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：只在断电模型图上设计家庭电路，说明并联、总开关、保护装置和接地的作用，禁止改接真实线路。\r
\r
## 一个典型例题\r
\r
**题目**：多个大功率电器同插座有何风险？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“火线—用电器—零线与接地保护” → 检查单位和意义。\r
\r
**答案**：总电流过大导致导线过热和火灾风险。\r
\r
## 一句话收束\r
\r
今天记住：**家庭电路并联，保护装置切断危险通路；火线—用电器—零线与接地保护。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“识别三孔插座、总开关和漏电保护器，不接触市电”中，有同学忽略了“C8湿手操作”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“火线—用电器—零线与接地保护”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 多个大功率电器同插座有何风险。\r
\r
   **答案**：总电流过大导致导线过热和火灾风险。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“家庭电路安全图”，标出研究对象、关键方向或变量，并用图得出“火线—用电器—零线与接地保护”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“识别三孔插座、总开关和漏电保护器，不接触市电”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“火线—用电器—零线与接地保护”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“保险装置为什么装在火线上？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“火线—用电器—零线与接地保护”连接证据与结论。若出现“C3开关接零线”，归入 **C3开关接零线** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3开关接零线：回到本课模型卡，重新指出对象和关键条件。\r
- C8湿手操作：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L064《焦耳定律：电流为什么发热》的电热与电流平方、电阻、时间有关。\r
\r
## 下一课会发生什么\r
\r
为L066《磁场：看不见但能用作用检验》准备小磁针N极受力方向定义场方向。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,oi=`---\r
lesson_id: L066\r
title: 磁场：看不见但能用作用检验\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电与磁\r
importance: ★★★\r
curriculum_standard: [2.4.2]\r
pep_mapping: 九年第20章\r
core_question: 磁体没有接触，为什么能推动小磁针？\r
core_concept: 磁场对放入其中的磁体有力作用\r
core_model: 小磁针N极受力方向定义场方向\r
formula: "—"\r
math_prerequisite: [方向, 空间方向]\r
math_connection: 把方向、空间方向用于真实测量、图示或数量关系。\r
from_previous: 承接L065《家庭电路与安全用电》的家庭电路并联，保护装置切断危险通路。\r
to_next: 为L067《核心实验：电流的磁场与通电螺线管》准备电流方向决定磁场方向。\r
knowledge_links: [L065, L061]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C1把磁感线当真实线, C3方向画反]\r
review_links: [L065, L063, L059]\r
---\r
\r
# 第66课：磁场：看不见但能用作用检验\r
\r
## 今天只学一件事\r
\r
回答：**磁体没有接触，为什么能推动小磁针？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：方向、空间方向。把方向、空间方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习方向、空间方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：磁体周围放多枚小磁针并标N极方向。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：磁体周围放多枚小磁针并标N极方向。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：强磁体远离磁卡、机械手表和电子设备；避免夹手或误吞小磁体。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**磁场对放入其中的磁体有力作用**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**条形磁体场线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**小磁针N极受力方向定义场方向**。\r
\r
## 正式物理知识\r
\r
- 概念：磁场对放入其中的磁体有力作用。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：小磁针N极受力方向定义场方向。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：条形磁体外部磁感线方向？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“小磁针N极受力方向定义场方向” → 检查单位和意义。\r
\r
**答案**：从N极到S极。\r
\r
## 一句话收束\r
\r
今天记住：**磁场对放入其中的磁体有力作用；小磁针N极受力方向定义场方向。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“磁体周围放多枚小磁针并标N极方向”中，有同学忽略了“C3方向画反”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“小磁针N极受力方向定义场方向”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 条形磁体外部磁感线方向。\r
\r
   **答案**：从N极到S极。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“条形磁体场线图”，标出研究对象、关键方向或变量，并用图得出“小磁针N极受力方向定义场方向”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“磁体周围放多枚小磁针并标N极方向”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“小磁针N极受力方向定义场方向”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“磁体没有接触，为什么能推动小磁针？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“小磁针N极受力方向定义场方向”连接证据与结论。若出现“C1把磁感线当真实线”，归入 **C1把磁感线当真实线** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C1把磁感线当真实线：回到本课模型卡，重新指出对象和关键条件。\r
- C3方向画反：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L065《家庭电路与安全用电》的家庭电路并联，保护装置切断危险通路。\r
\r
## 下一课会发生什么\r
\r
为L067《核心实验：电流的磁场与通电螺线管》准备电流方向决定磁场方向。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,si=`---\r
lesson_id: L067\r
title: 核心实验：电流的磁场与通电螺线管\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电与磁\r
importance: ★★★\r
curriculum_standard: [2.4.3, 4.2.9]\r
pep_mapping: 九年第20章\r
core_question: 改变电流方向，螺线管磁极会变吗？\r
core_concept: 电流周围有磁场，螺线管外部像条形磁体\r
core_model: 电流方向决定磁场方向\r
formula: "—"\r
math_prerequisite: [空间方向, 方向]\r
math_connection: 把空间方向、方向用于真实测量、图示或数量关系。\r
from_previous: 承接L066《磁场：看不见但能用作用检验》的磁场对放入其中的磁体有力作用。\r
to_next: 为L068《磁场对电流的作用与电动机》准备电能→机械能；电流或磁场反向则受力反向。\r
knowledge_links: [L066, L062]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C3电流方向与场方向混淆, C4只改电池位置不记录]\r
review_links: [L066, L064, L060]\r
---\r
\r
# 第67课：核心实验：电流的磁场与通电螺线管\r
\r
## 今天只学一件事\r
\r
回答：**改变电流方向，螺线管磁极会变吗？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：空间方向、方向。把空间方向、方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习空间方向、方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：改变电流方向，记录两端小磁针N极指向。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：改变电流方向，记录两端小磁针N极指向。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：电流方向。\r
- 因变量/观察测量：螺线管两端磁极方向。\r
- 关键控制与规范：线圈绕向、位置和小磁针初始状态。\r
- 证据记录：电流方向与N/S极对应记录。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电流周围有磁场，螺线管外部像条形磁体**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**螺线管小磁针图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电流方向决定磁场方向**。\r
\r
## 正式物理知识\r
\r
- 概念：电流周围有磁场，螺线管外部像条形磁体。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：电流方向决定磁场方向。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用低压电磁铁吸起回形针，说明电磁继电器怎样用低压控制电路间接控制另一条电路；不连接家庭市电。\r
\r
## 一个典型例题\r
\r
**题目**：电流反向后磁极怎样？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电流方向决定磁场方向” → 检查单位和意义。\r
\r
**答案**：N、S极对调。\r
\r
## 一句话收束\r
\r
今天记住：**电流周围有磁场，螺线管外部像条形磁体；电流方向决定磁场方向。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“改变电流方向，记录两端小磁针N极指向”中，有同学忽略了“C4只改电池位置不记录”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电流方向决定磁场方向”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 电流反向后磁极怎样。\r
\r
   **答案**：N、S极对调。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“螺线管小磁针图”，标出研究对象、关键方向或变量，并用图得出“电流方向决定磁场方向”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“改变电流方向，记录两端小磁针N极指向”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电流方向决定磁场方向”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“改变电流方向，螺线管磁极会变吗？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电流方向决定磁场方向”连接证据与结论。若出现“C3电流方向与场方向混淆”，归入 **C3电流方向与场方向混淆** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C3电流方向与场方向混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C4只改电池位置不记录：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L066《磁场：看不见但能用作用检验》的磁场对放入其中的磁体有力作用。\r
\r
## 下一课会发生什么\r
\r
为L068《磁场对电流的作用与电动机》准备电能→机械能；电流或磁场反向则受力反向。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ci=`---\r
lesson_id: L068\r
title: 磁场对电流的作用与电动机\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电与磁\r
importance: ★★★\r
curriculum_standard: [2.4.4]\r
pep_mapping: 九年第20章\r
core_question: 通电线圈为什么能转起来？\r
core_concept: 通电导线在磁场中受力\r
core_model: 电能→机械能；电流或磁场反向则受力反向\r
formula: "—"\r
math_prerequisite: [方向]\r
math_connection: 把方向用于真实测量、图示或数量关系。\r
from_previous: 承接L067《核心实验：电流的磁场与通电螺线管》的电流周围有磁场，螺线管外部像条形磁体。\r
to_next: 为L069《核心实验：电磁感应与发电机》准备机械运动—磁场变化—电能。\r
knowledge_links: [L067, L063]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C2与发电机混淆, C3只反一项却判方向不变]\r
review_links: [L067, L065, L061]\r
---\r
\r
# 第68课：磁场对电流的作用与电动机\r
\r
## 今天只学一件事\r
\r
回答：**通电线圈为什么能转起来？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：方向。把方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：让通电线框在磁场中运动并分别反向电流、磁场。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：让通电线框在磁场中运动并分别反向电流、磁场。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**通电导线在磁场中受力**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**电动机受力图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**电能→机械能；电流或磁场反向则受力反向**。\r
\r
## 正式物理知识\r
\r
- 概念：通电导线在磁场中受力。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：电能→机械能；电流或磁场反向则受力反向。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
**课后教材融合卡（不占本课20分钟）**：用低压电源制作简易直流电动机，改变电流或磁场方向验证转动方向；强磁体防夹手。\r
\r
## 一个典型例题\r
\r
**题目**：电动机主要把什么能转为什么能？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“电能→机械能；电流或磁场反向则受力反向” → 检查单位和意义。\r
\r
**答案**：电能转化为机械能。\r
\r
## 一句话收束\r
\r
今天记住：**通电导线在磁场中受力；电能→机械能；电流或磁场反向则受力反向。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“让通电线框在磁场中运动并分别反向电流、磁场”中，有同学忽略了“C3只反一项却判方向不变”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“电能→机械能；电流或磁场反向则受力反向”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 电动机主要把什么能转为什么能。\r
\r
   **答案**：电能转化为机械能。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“电动机受力图”，标出研究对象、关键方向或变量，并用图得出“电能→机械能；电流或磁场反向则受力反向”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“让通电线框在磁场中运动并分别反向电流、磁场”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“电能→机械能；电流或磁场反向则受力反向”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“通电线圈为什么能转起来？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“电能→机械能；电流或磁场反向则受力反向”连接证据与结论。若出现“C2与发电机混淆”，归入 **C2与发电机混淆** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C2与发电机混淆：回到本课模型卡，重新指出对象和关键条件。\r
- C3只反一项却判方向不变：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L067《核心实验：电流的磁场与通电螺线管》的电流周围有磁场，螺线管外部像条形磁体。\r
\r
## 下一课会发生什么\r
\r
为L069《核心实验：电磁感应与发电机》准备机械运动—磁场变化—电能。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,li=`---\r
lesson_id: L069\r
title: 核心实验：电磁感应与发电机\r
grade: 九年级\r
semester: 全一册\r
big_idea: 电与磁\r
importance: ★★★\r
curriculum_standard: [2.4.5, 4.2.10]\r
pep_mapping: 九年第20章\r
core_question: 没有电池，怎样让导线中出现电流？\r
core_concept: 闭合电路一部分导体切割磁感线可产生感应电流\r
core_model: 机械运动—磁场变化—电能\r
formula: "—"\r
math_prerequisite: [方向]\r
math_connection: 把方向用于真实测量、图示或数量关系。\r
from_previous: 承接L068《磁场对电流的作用与电动机》的通电导线在磁场中受力。\r
to_next: 为L070《信息、能源与可持续未来》准备需求—证据—约束—方案—评价。\r
knowledge_links: [L068, L064]\r
experiment_level: CORE\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4漏闭合条件, C2与电动机能量链混淆]\r
review_links: [L068, L066, L062]\r
---\r
\r
# 第69课：核心实验：电磁感应与发电机\r
\r
## 今天只学一件事\r
\r
回答：**没有电池，怎样让导线中出现电流？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：方向。把方向用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习方向，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：改变导体运动方向、磁场方向与是否闭合，观察灵敏电流计。本课只追一个变化，不追所有细节。\r
\r
## 先猜并设计\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 操作与取证\r
\r
任务：改变导体运动方向、磁场方向与是否闭合，观察灵敏电流计。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
先写自变量、因变量和至少两个控制量；按安全规范完成操作，至少取得三组有效数据。若课堂器材未就绪，使用教师提供的同结构数据做分析，本实验仍需另行完成实操。\r
\r
### 核心实验设计卡\r
\r
- 自变量/主动改变：导体运动方向、磁场方向或电路通断，每轮只改一个。\r
- 因变量/观察测量：灵敏电流计是否偏转及方向。\r
- 关键控制与规范：导体、磁体、运动速度范围和接线。\r
- 证据记录：条件组合表和偏转结果。\r
- 结论规则：先描述数据共同趋势，再回答问题；异常数据不许静默删除，要复测或说明。\r
\r
\r
安全提示：只用实验室低压直流电源；改接电路前先断电，禁止接触家庭市电。 \`CORE\`实验应在教师或成人指导下完成。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**闭合电路一部分导体切割磁感线可产生感应电流**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 整理证据，建立模型\r
\r
画：**切割磁感线图**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**机械运动—磁场变化—电能**。\r
\r
## 正式物理知识\r
\r
- 概念：闭合电路一部分导体切割磁感线可产生感应电流。\r
- 关系：本课无须背公式，先稳定概念和图。\r
- 本课不用计算公式。模型边界：产生感应电流要求闭合电路的一部分导体切割磁感线；仅有磁场或仅有运动都不充分。\r
- 先用图和证据判断，不把一句口诀套到所有情境。\r
\r
\r
\r
## 一个典型例题\r
\r
**题目**：导体静止在磁场中是否有感应电流？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“机械运动—磁场变化—电能” → 检查单位和意义。\r
\r
**答案**：没有；还需闭合且切割磁感线。\r
\r
## 一句话收束\r
\r
今天记住：**闭合电路一部分导体切割磁感线可产生感应电流；机械运动—磁场变化—电能。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“改变导体运动方向、磁场方向与是否闭合，观察灵敏电流计”中，有同学忽略了“C2与电动机能量链混淆”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“机械运动—磁场变化—电能”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 导体静止在磁场中是否有感应电流。\r
\r
   **答案**：没有；还需闭合且切割磁感线。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“切割磁感线图”，标出研究对象、关键方向或变量，并用图得出“机械运动—磁场变化—电能”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“改变导体运动方向、磁场方向与是否闭合，观察灵敏电流计”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“机械运动—磁场变化—电能”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“没有电池，怎样让导线中出现电流？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“机械运动—磁场变化—电能”连接证据与结论。若出现“C4漏闭合条件”，归入 **C4漏闭合条件** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4漏闭合条件：回到本课模型卡，重新指出对象和关键条件。\r
- C2与电动机能量链混淆：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L068《磁场对电流的作用与电动机》的通电导线在磁场中受力。\r
\r
## 下一课会发生什么\r
\r
为L070《信息、能源与可持续未来》准备需求—证据—约束—方案—评价。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,ui=`---\r
lesson_id: L070\r
title: 信息、能源与可持续未来\r
grade: 九年级\r
semester: 全一册\r
big_idea: 能源与现代技术\r
importance: ★★\r
curriculum_standard: [2.4.6, 3.6.1, 3.6.2, 3.6.3, 5.1.1, 5.1.2, 5.1.3, 5.2.1, 5.2.2, 5.2.3, 5.3.1, 5.3.2, 5.3.3]\r
pep_mapping: 九年第21-22章\r
core_question: 技术选择怎样同时看物理可行性与社会影响？\r
core_concept: 电磁波传信息，能源选择需看来源、效率、安全和环境\r
core_model: 需求—证据—约束—方案—评价\r
formula: "v=λf"\r
math_prerequisite: [科学记数法, 比例, 大小比较]\r
math_connection: 把科学记数法、比例、大小比较用于真实测量、图示或数量关系。\r
from_previous: 承接L069《核心实验：电磁感应与发电机》的闭合电路一部分导体切割磁感线可产生感应电流。\r
to_next: 课程终点：用证据评价技术与社会选择。\r
knowledge_links: [L069, L065]\r
experiment_level: MICRO\r
visual_required: true\r
estimated_teaching_minutes: 20\r
estimated_practice_minutes: 10\r
difficulty: 基础—典型\r
common_errors: [C4只看单一指标, C1可再生等同无影响]\r
review_links: [L069, L067, L063]\r
---\r
\r
# 第70课：信息、能源与可持续未来\r
\r
## 今天只学一件事\r
\r
回答：**技术选择怎样同时看物理可行性与社会影响？**\r
\r
\r
## 开课前｜数学准备\r
\r
数学前置：科学记数法、比例、大小比较。把科学记数法、比例、大小比较用于真实测量、图示或数量关系。\r
\r
**数学小补丁**：若不稳定，先做5分钟补丁：用一个生活数例复习科学记数法、比例、大小比较，只练本课会用到的一步。\r
\r
## 为什么要学它？\r
\r
先不要找公式。想象这个生活场景：为“节能小屋”在太阳能、风能和市电间做证据化选择。本课只追一个变化，不追所有细节。\r
\r
## 先猜一猜\r
\r
把答案先写成一句话：结果会怎样？你依据的是“看起来”，还是一个可检查的条件？先保留答案，不马上判对错。\r
\r
## 看现象 / 做实验\r
\r
任务：为“节能小屋”在太阳能、风能和市电间做证据化选择。\r
\r
1. 指出研究对象。\r
2. 圈出改变的量和保持不变的量。\r
3. 记录一个现象或一组数据。\r
4. 立刻说一句：“我看到的证据是……”。\r
\r
只改变本课研究的一个因素，取得一个清楚现象或一组可比较数据。\r
\r
\r
\r
安全提示：使用小型、稳定、无尖锐边缘的器材；发现器材异常立即停止。\r
\r
## 你发现了什么？\r
\r
现象支持的最短结论是：**电磁波传信息，能源选择需看来源、效率、安全和环境**。若证据不足，只写“目前支持”，不要把猜想当结论。\r
\r
## 把现象画出来，建立模型\r
\r
画：**方案评价矩阵**。图上只保留对象、关键方向/变量和边界。\r
\r
模型句：**需求—证据—约束—方案—评价**。\r
\r
## 正式物理知识\r
\r
- 概念：电磁波传信息，能源选择需看来源、效率、安全和环境。\r
- 关系：v=λf\r
- 为什么需要：用一个数量关系回答“技术选择怎样同时看物理可行性与社会影响？”。\r
- 量与单位：v用m/s，λ用m，f用Hz。\r
- 怎样变化：同一传播介质中波速确定时，频率越高波长越短。\r
- 适用边界：电磁波在真空中的速度约3.0×10⁸ m/s；其他介质中速度不同。\r
\r
**跨学科项目卡（5.1—5.3）**：为节能小屋完成‘需求—证据—约束—方案—评价’五格表。至少比较能耗、安全、稳定性、材料和环境影响，不以单一指标下结论。\r
\r
## 一个典型例题\r
\r
**题目**：波速3×10^8 m/s、频率10^8 Hz，波长？\r
\r
**六步建模**：对象是谁 → 已知什么 → 求什么 → 画最简图 → 选“需求—证据—约束—方案—评价” → 检查单位和意义。\r
\r
**答案**：3 m；方案还需评价稳定性与环境影响。\r
\r
## 一句话收束\r
\r
今天记住：**电磁波传信息，能源选择需看来源、效率、安全和环境；需求—证据—约束—方案—评价。**\r
\r
## 10分钟练习\r
\r
1. **[基础·北京题型：概念辨析]** 在“为“节能小屋”在太阳能、风能和市电间做证据化选择”中，有同学忽略了“C1可再生等同无影响”。这个结论可靠吗？\r
\r
   **答案**：不可靠。应先按“需求—证据—约束—方案—评价”核对研究对象和条件。\r
2. **[基础·北京题型：读数/计算]** 波速3×10^8 m/s、频率10^8 Hz，波长。\r
\r
   **答案**：3 m；方案还需评价稳定性与环境影响。关键条件：对象、过程和单位必须配对。\r
3. **[典型·北京题型：读图作图]** 围绕“方案评价矩阵”，标出研究对象、关键方向或变量，并用图得出“需求—证据—约束—方案—评价”这一结论。\r
\r
   **答案**：图中至少出现对象、方向/变量、条件和结论；箭头、刻度、虚实线必须符合物理意义。\r
4. **[典型·北京题型：实验探究]** 要完成“为“节能小屋”在太阳能、风能和市电间做证据化选择”，写出本次只改变或重点比较的量，以及判断结论所需的证据。\r
\r
   **答案**：围绕“需求—证据—约束—方案—评价”只改变一个关键因素，其他条件保持一致；至少取得可比较的数据或清楚现象，不能由一次偶然结果下结论。\r
5. **[提升·北京题型：解释/论证]** 把“技术选择怎样同时看物理可行性与社会影响？”改成可检验的问题，并写出需要取得的证据。\r
\r
   **答案**：先圈定对象和条件，再用“需求—证据—约束—方案—评价”连接证据与结论。若出现“C4只看单一指标”，归入 **C4只看单一指标** 并只修对应步骤。\r
\r
## 为什么错\r
\r
- C4只看单一指标：回到本课模型卡，重新指出对象和关键条件。\r
- C1可再生等同无影响：只修这一步，再做第4题；不要整课重听。\r
- 若是C9注意丢失：在题目旁画“对象—条件—单位”三格，完成一格勾一格。\r
\r
## 和上一课的关系\r
\r
承接L069《核心实验：电磁感应与发电机》的闭合电路一部分导体切割磁感线可产生感应电流。\r
\r
## 下一课会发生什么\r
\r
课程终点：用证据评价技术与社会选择。\r
\r
## 间隔复习\r
\r
D0口述核心句；D1做一道基础题；D3换情境；D7混入相邻模型；D14不看卡片解释一次。复习优先处理错因，不重复抄答案。\r
`,di=JSON.parse(`[{"id":1,"title":"长度和时间：先学会可靠测量","grade":"八年级","semester":"上册","big_idea":"测量与科学方法","importance":"★★★","curriculum_standard":["2.2.1","4.1.4"],"pep_mapping":"八上第1章","core_question":"怎样把“差不多”变成可比较的数据？","core_concept":"测量值由数值和单位组成","core_model":"选量程、分度值、估读并记录","formula":"—","math_prerequisite":["小数","单位换算"],"experiment_level":"CORE","visual":"刻度尺读数图","activity":"测书本宽度并测30次脉搏时间","example":"尺上12.30 cm表示精确到毫米并估读一位","answer":"12.30 cm；末位是估读","lesson_id":"L001","common_errors":["C6单位错误","C9漏读分度值"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"课程起点：从感觉进入可测量的证据。","to_next":"为L002《运动和静止：先选参照物》准备相对参照物比较位置。","knowledge_links":[],"review_links":[],"math_connection":"把小数、单位换算用于真实测量、图示或数量关系。"},{"id":2,"title":"运动和静止：先选参照物","grade":"八年级","semester":"上册","big_idea":"运动","importance":"★★★","curriculum_standard":["2.1.1","2.1.3"],"pep_mapping":"八上第1章","core_question":"同一个人为什么既能说在动，也能说没动？","core_concept":"机械运动是位置随时间改变","core_model":"相对参照物比较位置","formula":"—","math_prerequisite":["坐标与方向"],"experiment_level":"MICRO","visual":"参照物位置对比图","activity":"玩具车旁放橡皮，分别以桌面和车为参照观察","example":"坐在行驶列车中的人相对座椅静止、相对站台运动","answer":"两种说法都对，关键是参照物不同","lesson_id":"L002","common_errors":["C1把运动说成绝对","C4漏参照物"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L001《长度和时间：先学会可靠测量》的测量值由数值和单位组成。","to_next":"为L003《速度：每1秒走多远》准备单位时间通过的路程。","knowledge_links":["L001"],"review_links":["L001"],"math_connection":"把坐标与方向用于真实测量、图示或数量关系。"},{"id":3,"title":"速度：每1秒走多远","grade":"八年级","semester":"上册","big_idea":"运动","importance":"★★★","curriculum_standard":["2.2.2"],"pep_mapping":"八上第1章","core_question":"路程和时间都不同，怎样公平比快慢？","core_concept":"速度描述运动快慢","core_model":"单位时间通过的路程","formula":"v=s/t","math_prerequisite":["除法","比率","单位换算"],"experiment_level":"NONE","visual":"路程时间条形图","activity":"比较两辆玩具车不同路程与时间，统一到每1秒","example":"60 m用12 s，速度是多少","answer":"5 m/s，表示每秒通过5 m","lesson_id":"L003","common_errors":["C5除法错误","C6单位错误","C7只比路程"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L002《运动和静止：先选参照物》的机械运动是位置随时间改变。","to_next":"为L004《平均速度：一段路整体有多快》准备总路程除以总时间。","knowledge_links":["L002","L001"],"review_links":["L002"],"math_connection":"把除法、比率、单位换算用于真实测量、图示或数量关系。"},{"id":4,"title":"平均速度：一段路整体有多快","grade":"八年级","semester":"上册","big_idea":"运动","importance":"★★★","curriculum_standard":["2.2.2"],"pep_mapping":"八上第1章","core_question":"忽快忽慢时，怎样描述整段运动？","core_concept":"平均速度对应一段总过程","core_model":"总路程除以总时间","formula":"v平均=s总/t总","math_prerequisite":["分数","加法","图像"],"experiment_level":"NONE","visual":"分段时间轴","activity":"走快10 m再慢走10 m，记录各段和总时间","example":"前10 m用2 s、后10 m用3 s，整段平均速度","answer":"20/5=4 m/s，不能平均两个速度","lesson_id":"L004","common_errors":["C2分段模型错","C7速度直接平均"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L003《速度：每1秒走多远》的速度描述运动快慢。","to_next":"为L005《核心实验：测量物体运动速度》准备测距、计时、配对、计算。","knowledge_links":["L003","L001"],"review_links":["L003","L001"],"math_connection":"把分数、加法、图像用于真实测量、图示或数量关系。"},{"id":5,"title":"核心实验：测量物体运动速度","grade":"八年级","semester":"上册","big_idea":"运动","importance":"★★★","curriculum_standard":["2.2.2","4.1.5"],"pep_mapping":"八上第1章","core_question":"怎样用证据判断小车在哪一段更快？","core_concept":"速度由同一段的路程和时间得到","core_model":"测距、计时、配对、计算","formula":"v=s/t","math_prerequisite":["小数","单位换算","表格"],"experiment_level":"CORE","visual":"斜面小车测量图","activity":"在缓斜面标两段，重复计时并记录数据","example":"0.8 m用1.6 s，速度是多少","answer":"0.50 m/s；路程和时间必须来自同一段","lesson_id":"L005","common_errors":["C4数据配错","C8只测一次"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L004《平均速度：一段路整体有多快》的平均速度对应一段总过程。","to_next":"为L006《声音从哪里来、怎样传过去》准备声源振动→介质传递→耳接收。","knowledge_links":["L004","L001"],"review_links":["L004","L002"],"math_connection":"把小数、单位换算、表格用于真实测量、图示或数量关系。"},{"id":6,"title":"声音从哪里来、怎样传过去","grade":"八年级","semester":"上册","big_idea":"声音与波的现象","importance":"★★★","curriculum_standard":["2.3.1"],"pep_mapping":"八上第2章","core_question":"看不见的声音为什么能让纸屑跳动？","core_concept":"声音由振动产生并需介质传播","core_model":"声源振动→介质传递→耳接收","formula":"—","math_prerequisite":["无"],"experiment_level":"MICRO","visual":"振动传播链图","activity":"摸喉咙、拨橡皮筋，再用纸杯电话比较","example":"太空舱外爆炸能否直接听见","answer":"不能；真空不能传声","lesson_id":"L006","common_errors":["C1把声音当物质","C2漏介质"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L005《核心实验：测量物体运动速度》的速度由同一段的路程和时间得到。","to_next":"为L007《音调、响度和音色别混淆》准备频率管高低、振幅管强弱、音色辨声源。","knowledge_links":["L005","L001"],"review_links":["L005","L003"],"math_connection":"本课不要求新的数学工具，重点用观察、分类或画图表达证据。"},{"id":7,"title":"音调、响度和音色别混淆","grade":"八年级","semester":"上册","big_idea":"声音与波的现象","importance":"★★★","curriculum_standard":["2.3.2"],"pep_mapping":"八上第2章","core_question":"同一首歌为什么能听出是谁唱的？","core_concept":"声音有音调、响度、音色三种特性","core_model":"频率管高低、振幅管强弱、音色辨声源","formula":"—","math_prerequisite":["大小比较","坐标图像"],"experiment_level":"MICRO","visual":"三种波形对比图","activity":"弹不同长度橡皮筋并改变拨动力度","example":"用力拨同一根弦主要改变什么","answer":"响度；弦的振动频率近似不变","lesson_id":"L007","common_errors":["C1三特性混淆","C3波形读错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L006《声音从哪里来、怎样传过去》的声音由振动产生并需介质传播。","to_next":"为L008《声音的利用与噪声控制》准备声源—传播—接收三处分析。","knowledge_links":["L006","L002"],"review_links":["L006","L004"],"math_connection":"把大小比较、坐标图像用于真实测量、图示或数量关系。"},{"id":8,"title":"声音的利用与噪声控制","grade":"八年级","semester":"上册","big_idea":"声音与波的现象","importance":"★★","curriculum_standard":["2.3.2"],"pep_mapping":"八上第2章","core_question":"同样是声音，为什么超声能检查身体，噪声却要阻断？","core_concept":"声可传递信息和能量","core_model":"声源—传播—接收三处分析","formula":"—","math_prerequisite":["分类"],"experiment_level":"MICRO","visual":"噪声三环节图","activity":"用软布包住响铃，比较声源与传播途径控制","example":"给临街房间选降噪措施","answer":"关窗主要在传播途径减弱噪声","lesson_id":"L008","common_errors":["C2控制环节混乱","C4忽略情境"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L007《音调、响度和音色别混淆》的声音有音调、响度、音色三种特性。","to_next":"为L009《温度与温度计》准备测温物质随温度规律变化。","knowledge_links":["L007","L003"],"review_links":["L007","L005","L001"],"math_connection":"把分类用于真实测量、图示或数量关系。"},{"id":9,"title":"温度与温度计","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★★","curriculum_standard":["1.1.2","4.1.3"],"pep_mapping":"八上第3章","core_question":"手觉得一冷一热，能当作可靠测量吗？","core_concept":"温度表示冷热程度","core_model":"测温物质随温度规律变化","formula":"—","math_prerequisite":["正负数","刻度"],"experiment_level":"CORE","visual":"温度计读数图","activity":"三杯水先用手判断再用温度计测量","example":"温度计示数在0下4格、每格1℃","answer":"−4℃；视线与液柱顶端相平","lesson_id":"L009","common_errors":["C3读数方向错","C6漏摄氏度"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L008《声音的利用与噪声控制》的声可传递信息和能量。","to_next":"为L010《三态与物态变化地图》准备三态之间六种变化方向。","knowledge_links":["L008","L004"],"review_links":["L008","L006","L002"],"math_connection":"把正负数、刻度用于真实测量、图示或数量关系。"},{"id":10,"title":"三态与物态变化地图","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★★","curriculum_standard":["1.1.1","1.1.3"],"pep_mapping":"八上第3章","core_question":"冰、水和水蒸气是三种物质吗？","core_concept":"同种物质可处于固液气三态","core_model":"三态之间六种变化方向","formula":"—","math_prerequisite":["箭头","分类"],"experiment_level":"MICRO","visual":"三态六箭头图","activity":"观察冰融化和杯外水珠，只先标起点与终点","example":"冰变水属于什么变化","answer":"熔化：固态到液态","lesson_id":"L010","common_errors":["C1把水珠说成杯中渗出","C3箭头反向"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L009《温度与温度计》的温度表示冷热程度。","to_next":"为L011《熔化和凝固：温度怎样变》准备晶体熔化时吸热、温度保持在熔点。","knowledge_links":["L009","L005"],"review_links":["L009","L007","L003"],"math_connection":"把箭头、分类用于真实测量、图示或数量关系。"},{"id":11,"title":"熔化和凝固：温度怎样变","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★★","curriculum_standard":["1.1.3"],"pep_mapping":"八上第3章","core_question":"冰在熔化时一直吸热，温度会一直升吗？","core_concept":"晶体在一定条件下有确定熔点","core_model":"晶体熔化时吸热、温度保持在熔点","formula":"—","math_prerequisite":["坐标图像","坐标系"],"experiment_level":"MICRO","visual":"熔化曲线图","activity":"用碎冰和温度计观察，或读取规范实验数据","example":"加热晶体的曲线出现温度平台，同时仍有固液两态，说明什么","answer":"晶体正在熔化，继续吸热但温度保持在熔点","lesson_id":"L011","common_errors":["C3平台读错","C1把不升温当不吸热"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L010《三态与物态变化地图》的同种物质可处于固液气三态。","to_next":"为L012《核心实验：水沸腾前后温度变化》准备持续吸热但沸腾时温度近似不变。","knowledge_links":["L010","L006"],"review_links":["L010","L008","L004"],"math_connection":"把坐标图像、坐标系用于真实测量、图示或数量关系。"},{"id":12,"title":"核心实验：水沸腾前后温度变化","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★★","curriculum_standard":["1.1.3","4.2.1"],"pep_mapping":"八上第3章","core_question":"水沸腾后继续加热，温度还会升吗？","core_concept":"沸腾在内部和表面同时汽化","core_model":"持续吸热但沸腾时温度近似不变","formula":"—","math_prerequisite":["表格","坐标图像"],"experiment_level":"CORE","visual":"沸腾装置与曲线图","activity":"按分钟记录温度和气泡，画温度—时间图","example":"水沸腾后读数保持98℃说明什么","answer":"当地条件下沸点约98℃，继续吸热用于汽化","lesson_id":"L012","common_errors":["C3图像轴错","C8用一次读数下结论"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L011《熔化和凝固：温度怎样变》的晶体在一定条件下有确定熔点。","to_next":"为L013《汽化与液化：水去哪了又怎么回来》准备液体↔气体的能量过程。","knowledge_links":["L011","L007"],"review_links":["L011","L009","L005"],"math_connection":"把表格、坐标图像用于真实测量、图示或数量关系。"},{"id":13,"title":"汽化与液化：水去哪了又怎么回来","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★★","curriculum_standard":["1.1.3"],"pep_mapping":"八上第3章","core_question":"湿衣服的水不沸腾，为什么也会消失？","core_concept":"蒸发可在任何温度发生，液化会放热","core_model":"液体↔气体的能量过程","formula":"—","math_prerequisite":["大小比较"],"experiment_level":"MICRO","visual":"蒸发条件对比图","activity":"两滴等量水分别摊开与成滴，比较干燥速度","example":"夏天冰饮料杯外水珠来自哪里","answer":"空气中水蒸气液化，不是杯内渗水","lesson_id":"L013","common_errors":["C1蒸发等同沸腾","C2水珠来源错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L012《核心实验：水沸腾前后温度变化》的沸腾在内部和表面同时汽化。","to_next":"为L014《升华、凝华与水循环》准备固↔气与水循环状态链。","knowledge_links":["L012","L008"],"review_links":["L012","L010","L006"],"math_connection":"把大小比较用于真实测量、图示或数量关系。"},{"id":14,"title":"升华、凝华与水循环","grade":"八年级","semester":"上册","big_idea":"热与物态","importance":"★★","curriculum_standard":["1.1.3","1.1.4"],"pep_mapping":"八上第3章","core_question":"霜为什么不是从天空落下来的？","core_concept":"物质可直接在固态和气态间变化","core_model":"固↔气与水循环状态链","formula":"—","math_prerequisite":["无"],"experiment_level":"MICRO","visual":"水循环箭头图","activity":"观察冷冻室霜或碘升华视频，只追踪物质去向","example":"窗上冰花通常形成在哪一侧","answer":"室内侧；水蒸气遇冷凝华","lesson_id":"L014","common_errors":["C3状态箭头错","C4忽略冷热位置"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L013《汽化与液化：水去哪了又怎么回来》的蒸发可在任何温度发生，液化会放热。","to_next":"为L015《光沿直线传播》准备用光线表示传播路径。","knowledge_links":["L013","L009"],"review_links":["L013","L011","L007"],"math_connection":"本课不要求新的数学工具，重点用观察、分类或画图表达证据。"},{"id":15,"title":"光沿直线传播","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.6"],"pep_mapping":"八上第4章","core_question":"为什么手电筒的光过三个小孔时必须对齐？","core_concept":"光在同种均匀介质中沿直线传播","core_model":"用光线表示传播路径","formula":"—","math_prerequisite":["几何直线","方向"],"experiment_level":"MICRO","visual":"三孔与影子光路图","activity":"让手电筒光通过三张带孔纸，移动中间纸","example":"影子怎样形成","answer":"光沿直线传播，物体挡住部分光","lesson_id":"L015","common_errors":["C1漏适用条件","C3光线不画箭头"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L014《升华、凝华与水循环》的物质可直接在固态和气态间变化。","to_next":"为L016《核心实验：光的反射定律》准备反射角等于入射角，两线分居法线两侧。","knowledge_links":["L014","L010"],"review_links":["L014","L012","L008"],"math_connection":"把几何直线、方向用于真实测量、图示或数量关系。"},{"id":16,"title":"核心实验：光的反射定律","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.3","4.2.6"],"pep_mapping":"八上第4章","core_question":"镜子能把光“弹”到哪里？","core_concept":"反射光线、入射光线和法线在同一平面内","core_model":"反射角等于入射角，两线分居法线两侧","formula":"∠r=∠i","math_prerequisite":["几何角","垂线"],"experiment_level":"CORE","visual":"反射光路图","activity":"用平面镜、纸屏和量角器改变入射角测三组数据","example":"入射光与镜面夹30°，反射角是多少","answer":"60°；入射角和反射角都相对法线测量","lesson_id":"L016","common_errors":["C3角相对镜面量","C8由一组数据定律"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L015《光沿直线传播》的光在同种均匀介质中沿直线传播。","to_next":"为L017《核心实验：平面镜成像》准备像物关于镜面对称。","knowledge_links":["L015","L011"],"review_links":["L015","L013","L009"],"math_connection":"把几何角、垂线用于真实测量、图示或数量关系。"},{"id":17,"title":"核心实验：平面镜成像","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.4","4.2.7"],"pep_mapping":"八上第4章","core_question":"镜中的像能落在纸屏上吗？","core_concept":"平面镜成等大正立虚像","core_model":"像物关于镜面对称","formula":"像距=物距","math_prerequisite":["垂线","对称"],"experiment_level":"CORE","visual":"玻璃板成像图","activity":"玻璃板前后用两支相同蜡烛定位像，再放光屏","example":"人离镜1 m，像离人多远","answer":"2 m；像在镜后1 m","lesson_id":"L017","common_errors":["C3把像画成实线光线会聚","C5漏总距离"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L016《核心实验：光的反射定律》的反射光线、入射光线和法线在同一平面内。","to_next":"为L018《光的折射：方向为什么改变》准备入射介质—界面—折射光线模型。","knowledge_links":["L016","L012"],"review_links":["L016","L014","L010"],"math_connection":"把垂线、对称用于真实测量、图示或数量关系。"},{"id":18,"title":"光的折射：方向为什么改变","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.3"],"pep_mapping":"八上第4章","core_question":"水里的筷子为什么像折断了？","core_concept":"光斜入不同介质时传播方向通常改变","core_model":"入射介质—界面—折射光线模型","formula":"—","math_prerequisite":["几何角","垂线"],"experiment_level":"MICRO","visual":"空气水界面光路图","activity":"激光斜射入水，观察并画入射与折射路径","example":"从空气斜射入水，光线通常靠近哪条线","answer":"法线","lesson_id":"L018","common_errors":["C3法线漏画","C7背方向不看传播介质"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L017《核心实验：平面镜成像》的平面镜成等大正立虚像。","to_next":"为L019《透镜怎样改变光束》准备三条特殊光线建立透镜模型。","knowledge_links":["L017","L013"],"review_links":["L017","L015","L011"],"math_connection":"把几何角、垂线用于真实测量、图示或数量关系。"},{"id":19,"title":"透镜怎样改变光束","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.5"],"pep_mapping":"八上第5章","core_question":"放大镜为什么能把太阳光聚成亮点？","core_concept":"凸透镜会聚、凹透镜发散","core_model":"三条特殊光线建立透镜模型","formula":"—","math_prerequisite":["几何直线","对称"],"experiment_level":"MICRO","visual":"凸凹透镜光路图","activity":"用手电筒和平行光纸卡观察两类透镜后的光束","example":"平行光经凸透镜后经过哪里","answer":"焦点","lesson_id":"L019","common_errors":["C1凭厚薄认错","C3折射光线方向错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L018《光的折射：方向为什么改变》的光斜入不同介质时传播方向通常改变。","to_next":"为L020《核心实验：凸透镜成像规律》准备物距—焦距区间决定像的位置与性质。","knowledge_links":["L018","L014"],"review_links":["L018","L016","L012"],"math_connection":"把几何直线、对称用于真实测量、图示或数量关系。"},{"id":20,"title":"核心实验：凸透镜成像规律","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★★","curriculum_standard":["2.3.5","4.2.8"],"pep_mapping":"八上第5章","core_question":"物体靠近透镜，像会怎样变？","core_concept":"像的性质随物距区间改变","core_model":"物距—焦距区间决定像的位置与性质","formula":"—","math_prerequisite":["不等式","表格"],"experiment_level":"CORE","visual":"光具座区间图","activity":"固定焦距，改变物距并在光屏上找清晰像","example":"物距大于2f时像有何特点","answer":"倒立、缩小、实像，像在f与2f之间","lesson_id":"L020","common_errors":["C4未先比较u与f","C8找不到像就下结论"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L019《透镜怎样改变光束》的凸透镜会聚、凹透镜发散。","to_next":"为L021《凸透镜应用与眼睛》准备成像区间→器件功能。","knowledge_links":["L019","L015"],"review_links":["L019","L017","L013"],"math_connection":"把不等式、表格用于真实测量、图示或数量关系。"},{"id":21,"title":"凸透镜应用与眼睛","grade":"八年级","semester":"上册","big_idea":"光","importance":"★★","curriculum_standard":["2.3.5"],"pep_mapping":"八上第5章","core_question":"照相机、投影仪、放大镜为什么都用凸透镜？","core_concept":"不同物距区间对应不同应用","core_model":"成像区间→器件功能","formula":"—","math_prerequisite":["区间","比例"],"experiment_level":"MICRO","visual":"三种应用对比图","activity":"用凸透镜分别看近字和远景，比较能否在纸上接像","example":"近视眼用什么透镜矫正","answer":"凹透镜，使光先发散再进入眼睛","lesson_id":"L021","common_errors":["C2器件区间混淆","C1虚像可接屏"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L020《核心实验：凸透镜成像规律》的像的性质随物距区间改变。","to_next":"为L022《质量：物体含有多少物质》准备天平比较物体质量。","knowledge_links":["L020","L016"],"review_links":["L020","L018","L014"],"math_connection":"把区间、比例用于真实测量、图示或数量关系。"},{"id":22,"title":"质量：物体含有多少物质","grade":"八年级","semester":"上册","big_idea":"质量与密度","importance":"★★★","curriculum_standard":["1.2.2","4.1.1"],"pep_mapping":"八上第6章","core_question":"冰化成水后，质量会改变吗？","core_concept":"质量不随形状、状态、位置轻易改变","core_model":"天平比较物体质量","formula":"—","math_prerequisite":["小数","单位换算"],"experiment_level":"CORE","visual":"天平平衡图","activity":"按调平—左物右码—读数测木块和水质量","example":"砝码50 g、游码2.4 g，物体质量","answer":"52.4 g","lesson_id":"L022","common_errors":["C6千克克换算错","C9天平未调平"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L021《凸透镜应用与眼睛》的不同物距区间对应不同应用。","to_next":"为L023《密度：相同体积为什么轻重不同》准备质量—体积比率模型。","knowledge_links":["L021","L017"],"review_links":["L021","L019","L015"],"math_connection":"把小数、单位换算用于真实测量、图示或数量关系。"},{"id":23,"title":"密度：相同体积为什么轻重不同","grade":"八年级","semester":"上册","big_idea":"质量与密度","importance":"★★★","curriculum_standard":["1.2.3"],"pep_mapping":"八上第6章","core_question":"同样大小的铁块和木块为什么轻重不同？","core_concept":"密度是单位体积的质量","core_model":"质量—体积比率模型","formula":"ρ=m/V","math_prerequisite":["比","体积","单位换算"],"experiment_level":"NONE","visual":"等体积质量对比图","activity":"比较等体积水和食用油质量，统一到1 cm³","example":"质量178 g、体积20 cm³，密度","answer":"8.9 g/cm³","lesson_id":"L023","common_errors":["C5比值颠倒","C6密度单位错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L022《质量：物体含有多少物质》的质量不随形状、状态、位置轻易改变。","to_next":"为L024《核心实验：测固体和液体密度》准备天平测质量、排水测体积、计算密度。","knowledge_links":["L022","L018"],"review_links":["L022","L020","L016"],"math_connection":"把比、体积、单位换算用于真实测量、图示或数量关系。"},{"id":24,"title":"核心实验：测固体和液体密度","grade":"八年级","semester":"上册","big_idea":"质量与密度","importance":"★★★","curriculum_standard":["1.2.3","4.1.2"],"pep_mapping":"八上第6章","core_question":"不规则石块的体积怎样测？","core_concept":"密度测量需配对同一物体的质量和体积","core_model":"天平测质量、排水测体积、计算密度","formula":"ρ=m/V","math_prerequisite":["体积差","小数"],"experiment_level":"CORE","visual":"量筒排水图","activity":"测石块质量，再读放入前后水体积差；另测液体密度","example":"石块54 g，水从30到50 mL，密度","answer":"2.7 g/cm³","lesson_id":"L024","common_errors":["C4质量体积非同一对象","C5体积差错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L023《密度：相同体积为什么轻重不同》的密度是单位体积的质量。","to_next":"为L025《物质属性、微观结构与尺度》准备属性—用途—尺度证据链。","knowledge_links":["L023","L019"],"review_links":["L023","L021","L017"],"math_connection":"把体积差、小数用于真实测量、图示或数量关系。"},{"id":25,"title":"物质属性、微观结构与尺度","grade":"八年级","semester":"上册","big_idea":"测量与科学方法","importance":"★","curriculum_standard":["1.2.1","1.2.4","1.3.1","1.3.2","1.3.3","1.3.4"],"pep_mapping":"八上第6章融合阅读","core_question":"材料为什么要按用途选择？","core_concept":"物质属性来自结构并服务技术选择","core_model":"属性—用途—尺度证据链","formula":"—","math_prerequisite":["数量级","排序"],"experiment_level":"MICRO","visual":"宏观到微观尺度轴","activity":"比较金属和木材导热，给原子到宇宙排序","example":"锅身和锅柄应分别看重什么属性","answer":"锅身导热好，锅柄导热差且耐热","lesson_id":"L025","common_errors":["C1把用途当属性","C4忽略选择条件"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础","visual_required":true,"from_previous":"承接L024《核心实验：测固体和液体密度》的密度测量需配对同一物体的质量和体积。","to_next":"为L026《力：看作用效果与相互作用》准备施力物—受力物成对分析。","knowledge_links":["L024","L020"],"review_links":["L024","L022","L018"],"math_connection":"把数量级、排序用于真实测量、图示或数量关系。"},{"id":26,"title":"力：看作用效果与相互作用","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.3"],"pep_mapping":"八下第7章","core_question":"手推墙时，为什么手也会疼？","core_concept":"力是物体对物体的作用","core_model":"施力物—受力物成对分析","formula":"—","math_prerequisite":["方向","箭头"],"experiment_level":"MICRO","visual":"相互作用对象图","activity":"挤气球、推墙，分别说出施力物和受力物","example":"脚踢球时谁受力","answer":"球受脚的力，脚也受球的力","lesson_id":"L026","common_errors":["C1只说“有力”不说对象","C2漏相互作用"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L025《物质属性、微观结构与尺度》的物质属性来自结构并服务技术选择。","to_next":"为L027《力的三要素与示意图》准备用带比例或标值箭头表示力。","knowledge_links":["L025","L021"],"review_links":["L025","L023","L019"],"math_connection":"把方向、箭头用于真实测量、图示或数量关系。"},{"id":27,"title":"力的三要素与示意图","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.4"],"pep_mapping":"八下第7章","core_question":"同样大小的力，为什么推门位置不同效果不同？","core_concept":"力有大小、方向、作用点","core_model":"用带比例或标值箭头表示力","formula":"—","math_prerequisite":["比例","方向"],"experiment_level":"NONE","visual":"规范力箭头图","activity":"在门上不同位置推，画出作用点和方向","example":"画水平向右5 N的推力","answer":"箭头起于作用点、向右并标F=5 N","lesson_id":"L027","common_errors":["C3箭头起点错","C6漏力值单位"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L026《力：看作用效果与相互作用》的力是物体对物体的作用。","to_next":"为L028《重力：方向总指向哪里》准备重心处竖直向下。","knowledge_links":["L026","L022"],"review_links":["L026","L024","L020"],"math_connection":"把比例、方向用于真实测量、图示或数量关系。"},{"id":28,"title":"重力：方向总指向哪里","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.3"],"pep_mapping":"八下第7章","core_question":"站在斜坡上，重力会沿斜坡向下吗？","core_concept":"重力是地球对物体的吸引","core_model":"重心处竖直向下","formula":"G=mg","math_prerequisite":["乘法","比例"],"experiment_level":"MICRO","visual":"斜面重力图","activity":"悬挂小重物观察重垂线，再在斜面图画重力","example":"2 kg物体重力约多少，取g=10 N/kg","answer":"20 N，方向竖直向下","lesson_id":"L028","common_errors":["C3把竖直当垂直斜面","C6质量单位未化kg"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L027《力的三要素与示意图》的力有大小、方向、作用点。","to_next":"为L029《弹力与弹簧测力计》准备在限度内形变量反映力大小。","knowledge_links":["L027","L023"],"review_links":["L027","L025","L021"],"math_connection":"把乘法、比例用于真实测量、图示或数量关系。"},{"id":29,"title":"弹力与弹簧测力计","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.3","4.1.6"],"pep_mapping":"八下第7章","core_question":"拉得越长，弹簧的拉力一定越大吗？","core_concept":"弹性形变产生弹力且有弹性限度","core_model":"在限度内形变量反映力大小","formula":"—","math_prerequisite":["刻度","比例"],"experiment_level":"CORE","visual":"测力计读数图","activity":"检查零点、量程、分度值，体验并测量1 N与书的重力","example":"测力计每大格1 N分5小格，指3小格","answer":"0.6 N","lesson_id":"L029","common_errors":["C9未校零","C7超过量程仍使用"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L028《重力：方向总指向哪里》的重力是地球对物体的吸引。","to_next":"为L030《核心实验：滑动摩擦力受什么影响》准备水平匀速时拉力等于摩擦力。","knowledge_links":["L028","L024"],"review_links":["L028","L026","L022"],"math_connection":"把刻度、比例用于真实测量、图示或数量关系。"},{"id":30,"title":"核心实验：滑动摩擦力受什么影响","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.3","4.2.2"],"pep_mapping":"八下第8章","core_question":"给箱子加重和铺毛巾，哪种更难拉？","core_concept":"滑动摩擦与压力和接触面粗糙程度有关","core_model":"水平匀速时拉力等于摩擦力","formula":"F拉=f","math_prerequisite":["表格"],"experiment_level":"CORE","visual":"水平匀速测摩擦图","activity":"只改变压力或粗糙程度，匀速拉木块记录力","example":"研究粗糙程度时什么必须相同","answer":"压力等条件相同","lesson_id":"L030","common_errors":["C2未利用平衡间接测量","C4同时改两个变量"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L029《弹力与弹簧测力计》的弹性形变产生弹力且有弹性限度。","to_next":"为L031《牛顿第一定律：没有力会怎样》准备阻力逐渐减小→运动保持更久→理想无阻力。","knowledge_links":["L029","L025"],"review_links":["L029","L027","L023"],"math_connection":"把表格用于真实测量、图示或数量关系。"},{"id":31,"title":"牛顿第一定律：没有力会怎样","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.5"],"pep_mapping":"八下第8章","core_question":"小车不推为什么会停，真是“不受力就停”吗？","core_concept":"力不是维持运动的原因","core_model":"阻力逐渐减小→运动保持更久→理想无阻力","formula":"—","math_prerequisite":["逻辑推理","图像趋势"],"experiment_level":"MICRO","visual":"斜面小车推理图","activity":"比较毛巾、木板、玻璃面上小车滑行距离并外推","example":"运动物体不受力将怎样","answer":"保持匀速直线运动","lesson_id":"L031","common_errors":["C1把力当维持运动","C2实验结论直接等同无阻力"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L030《核心实验：滑动摩擦力受什么影响》的滑动摩擦与压力和接触面粗糙程度有关。","to_next":"为L032《惯性：物体想保持原状态》准备刹车前后分别比较人和车状态。","knowledge_links":["L030","L026"],"review_links":["L030","L028","L024"],"math_connection":"把逻辑推理、图像趋势用于真实测量、图示或数量关系。"},{"id":32,"title":"惯性：物体想保持原状态","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.5"],"pep_mapping":"八下第8章","core_question":"公交车急刹车，人为什么向前倾？","core_concept":"一切物体都有保持原运动状态的性质","core_model":"刹车前后分别比较人和车状态","formula":"—","math_prerequisite":["大小比较"],"experiment_level":"MICRO","visual":"刹车状态时间轴","activity":"抽走纸片观察硬币落杯，再口述前后状态","example":"跳远助跑为什么有用","answer":"起跳后身体因惯性保持较大向前速度","lesson_id":"L032","common_errors":["C1说“受到惯性力”","C4漏原状态"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L031《牛顿第一定律：没有力会怎样》的力不是维持运动的原因。","to_next":"为L033《同一直线上二力的合成：平衡是特殊情况》准备先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线。","knowledge_links":["L031","L027"],"review_links":["L031","L029","L025"],"math_connection":"把大小比较用于真实测量、图示或数量关系。"},{"id":33,"title":"同一直线上二力的合成：平衡是特殊情况","grade":"八年级","semester":"下册","big_idea":"力与运动","importance":"★★★","curriculum_standard":["2.2.4"],"pep_mapping":"八下第8章","core_question":"两个方向相同或相反的力一起作用，总效果怎样判断？","core_concept":"同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况","core_model":"先定正方向；同向相加、反向相减；合力为零时检查同体等大反向共线","formula":"—","math_prerequisite":["加法","减法","方向"],"experiment_level":"MICRO","visual":"同一直线二力合成与平衡图","activity":"用两端钩码拉卡片，先比较同向与反向合力，再让反向二力等大观察平衡","example":"物体受向右6 N和向左4 N的力，合力怎样","answer":"合力为2 N，方向向右；若两力等大反向且作用在同一物体同一直线上，合力才为零","lesson_id":"L033","common_errors":["C2把相互作用力当平衡力","C3反向相减后漏合力方向"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L032《惯性：物体想保持原状态》的一切物体都有保持原运动状态的性质。","to_next":"为L034《压强：同样的力为什么效果不同》准备压力与受力面积共同决定效果。","knowledge_links":["L032","L028"],"review_links":["L032","L030","L026"],"math_connection":"把加法、减法、方向用于真实测量、图示或数量关系。"},{"id":34,"title":"压强：同样的力为什么效果不同","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.7"],"pep_mapping":"八下第9章","core_question":"书包带为什么要做宽？","core_concept":"压强表示单位面积承受的压力","core_model":"压力与受力面积共同决定效果","formula":"p=F/S","math_prerequisite":["面积","除法","单位换算"],"experiment_level":"MICRO","visual":"压力面积对比图","activity":"同一块橡皮分别平放和竖放在海绵上","example":"600 N站在0.04 m²地面，压强","answer":"15000 Pa","lesson_id":"L034","common_errors":["C5面积换算错","C7只看压力"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L033《同一直线上二力的合成：平衡是特殊情况》的同一直线上同向二力相加、反向二力相减；合力为零是二力平衡的特殊情况。","to_next":"为L035《核心实验：液体压强受什么影响》准备同种液体压强随深度增加；同深度看密度。","knowledge_links":["L033","L029"],"review_links":["L033","L031","L027"],"math_connection":"把面积、除法、单位换算用于真实测量、图示或数量关系。"},{"id":35,"title":"核心实验：液体压强受什么影响","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.8","4.2.3"],"pep_mapping":"八下第9章","core_question":"潜水越深，耳朵为什么越不舒服？","core_concept":"液体内部向各方向有压强","core_model":"同种液体压强随深度增加；同深度看密度","formula":"—","math_prerequisite":["表格","位置与距离"],"experiment_level":"CORE","visual":"压强计深度图","activity":"改变探头深度、方向和液体种类，观察U形管高度差","example":"研究深度影响时保持什么相同","answer":"液体种类和探头方向等相同","lesson_id":"L035","common_errors":["C4把离容器底距离当深度","C8一次数据下结论"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L034《压强：同样的力为什么效果不同》的压强表示单位面积承受的压力。","to_next":"为L036《大气压：空气也在用力》准备内外压强差产生效果。","knowledge_links":["L034","L030"],"review_links":["L034","L032","L028"],"math_connection":"把表格、位置与距离用于真实测量、图示或数量关系。"},{"id":36,"title":"大气压：空气也在用力","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★","curriculum_standard":["2.2.8"],"pep_mapping":"八下第9章","core_question":"吸盘为什么能贴在墙上？","core_concept":"大气有压强且向各方向作用","core_model":"内外压强差产生效果","formula":"—","math_prerequisite":["面积","估算"],"experiment_level":"MICRO","visual":"吸盘压强差图","activity":"用装水杯和纸片倒置，观察纸片不落","example":"吸管吸饮料是谁把液体压上来","answer":"大气压把液体压入低压的吸管","lesson_id":"L036","common_errors":["C1说嘴把水“吸上来”","C2漏压强差"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L035《核心实验：液体压强受什么影响》的液体内部向各方向有压强。","to_next":"为L037《流体压强与流速》准备两侧流速差→压强差→受力。","knowledge_links":["L035","L031"],"review_links":["L035","L033","L029"],"math_connection":"把面积、估算用于真实测量、图示或数量关系。"},{"id":37,"title":"流体压强与流速","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★","curriculum_standard":["2.2.8"],"pep_mapping":"八下第9章","core_question":"两张纸中间吹气，为什么纸反而靠近？","core_concept":"在常见稳定流动比较中，流速较大处压强较小","core_model":"两侧流速差→压强差→受力","formula":"—","math_prerequisite":["大小比较","箭头"],"experiment_level":"MICRO","visual":"机翼流线图","activity":"平行悬挂两纸条，从中间吹气并预测","example":"火车站安全线为什么要退后","answer":"列车旁空气流速较大、压强较小，外侧压强可能把人推近","lesson_id":"L037","common_errors":["C1说气流把纸吹开","C3压强箭头反"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L036《大气压：空气也在用力》的大气有压强且向各方向作用。","to_next":"为L038《浮力：浸在流体里的向上作用》准备弹簧测力计示数差测浮力。","knowledge_links":["L036","L032"],"review_links":["L036","L034","L030"],"math_connection":"把大小比较、箭头用于真实测量、图示或数量关系。"},{"id":38,"title":"浮力：浸在流体里的向上作用","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.9"],"pep_mapping":"八下第10章","core_question":"铁块在水里为什么“变轻”？","core_concept":"浮力是流体对浸入物体向上的作用","core_model":"弹簧测力计示数差测浮力","formula":"F浮=G-F示","math_prerequisite":["减法"],"experiment_level":"MICRO","visual":"称重法受力图","activity":"先在空气再浸水读取测力计，比较示数","example":"空气5 N、水中3 N，浮力","answer":"2 N","lesson_id":"L038","common_errors":["C2把示数当浮力","C3漏竖直向上"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L037《流体压强与流速》的在常见稳定流动比较中，流速较大处压强较小。","to_next":"为L039《核心实验：浮力大小受什么影响》准备控制变量比较称重差。","knowledge_links":["L037","L033"],"review_links":["L037","L035","L031"],"math_connection":"把减法用于真实测量、图示或数量关系。"},{"id":39,"title":"核心实验：浮力大小受什么影响","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.9","4.2.4"],"pep_mapping":"八下第10章","core_question":"物体浸得更深，浮力一定更大吗？","core_concept":"浮力与排开液体体积、液体密度有关","core_model":"控制变量比较称重差","formula":"F浮=G-F示","math_prerequisite":["表格"],"experiment_level":"CORE","visual":"浸入体积对比图","activity":"改变浸入体积、液体种类；完全浸没后再改深度","example":"完全浸没后继续下沉，浮力通常怎样","answer":"若液体密度不变且未触底，浮力不变","lesson_id":"L039","common_errors":["C4把深度与排开体积混淆","C8触底数据仍采用"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L038《浮力：浸在流体里的向上作用》的浮力是流体对浸入物体向上的作用。","to_next":"为L040《阿基米德原理：浮力等于排开液体的重》准备排液质量→排液重力→浮力。","knowledge_links":["L038","L034"],"review_links":["L038","L036","L032"],"math_connection":"把表格用于真实测量、图示或数量关系。"},{"id":40,"title":"阿基米德原理：浮力等于排开液体的重","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.9"],"pep_mapping":"八下第10章","core_question":"溢出的水和物体受到的浮力有什么关系？","core_concept":"浮力等于排开流体所受重力","core_model":"排液质量→排液重力→浮力","formula":"F浮=G排=ρ液gV排","math_prerequisite":["体积","乘法","比例"],"experiment_level":"MICRO","visual":"溢水杯证据链图","activity":"用溢水杯收集排水并比较其重与浮力","example":"排开0.2 kg水，取g=10，浮力","answer":"2 N","lesson_id":"L040","common_errors":["C6密度单位错","C7用物体总体积代排液体积"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L039《核心实验：浮力大小受什么影响》的浮力与排开液体体积、液体密度有关。","to_next":"为L041《物体浮沉：比较浮力和重力》准备F浮与G比较；漂浮时相等。","knowledge_links":["L039","L035"],"review_links":["L039","L037","L033"],"math_connection":"把体积、乘法、比例用于真实测量、图示或数量关系。"},{"id":41,"title":"物体浮沉：比较浮力和重力","grade":"八年级","semester":"下册","big_idea":"压强与浮力","importance":"★★★","curriculum_standard":["2.2.9"],"pep_mapping":"八下第10章","core_question":"钢铁会沉，钢船为什么能浮？","core_concept":"浮沉取决于竖直方向浮力和重力关系","core_model":"F浮与G比较；漂浮时相等","formula":"—","math_prerequisite":["不等式"],"experiment_level":"MICRO","visual":"浮沉三状态图","activity":"橡皮泥先团成球再捏成船形放水中","example":"漂浮物质量增大后排水怎样变","answer":"在仍能漂浮且液体不变时，会排开更多水，直到浮力重新等于重力","lesson_id":"L041","common_errors":["C2只比较材料密度","C3浮沉力箭头错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L040《阿基米德原理：浮力等于排开液体的重》的浮力等于排开流体所受重力。","to_next":"为L042《功：力什么时候产生了“成果”》准备力与力方向距离的乘积。","knowledge_links":["L040","L036"],"review_links":["L040","L038","L034"],"math_connection":"把不等式用于真实测量、图示或数量关系。"},{"id":42,"title":"功：力什么时候产生了“成果”","grade":"八年级","semester":"下册","big_idea":"功机械与能量","importance":"★★★","curriculum_standard":["3.1.3","3.2.2"],"pep_mapping":"八下第11章","core_question":"提着书包水平走，手对书包做机械功吗？","core_concept":"功需要力且物体沿力方向移动距离","core_model":"力与力方向距离的乘积","formula":"W=Fs","math_prerequisite":["乘法","单位换算"],"experiment_level":"NONE","visual":"力与位移夹向图","activity":"对比推车前进、提物静止、提物水平走","example":"10 N水平推物前进3 m，做功","answer":"30 J","lesson_id":"L042","common_errors":["C4漏力方向","C7有力就判做功"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L041《物体浮沉：比较浮力和重力》的浮沉取决于竖直方向浮力和重力关系。","to_next":"为L043《功率：做功有多快》准备功与时间的比率。","knowledge_links":["L041","L037"],"review_links":["L041","L039","L035"],"math_connection":"把乘法、单位换算用于真实测量、图示或数量关系。"},{"id":43,"title":"功率：做功有多快","grade":"八年级","semester":"下册","big_idea":"功机械与能量","importance":"★★★","curriculum_standard":["3.2.2"],"pep_mapping":"八下第11章","core_question":"同样爬楼，跑上去和走上去哪里不同？","core_concept":"功率表示单位时间做功","core_model":"功与时间的比率","formula":"P=W/t","math_prerequisite":["除法","比率"],"experiment_level":"MICRO","visual":"爬楼功时间图","activity":"记录走与快走同一楼梯的时间，比较功率","example":"做600 J功用3 s，功率","answer":"200 W","lesson_id":"L043","common_errors":["C1功多等同功率大","C6瓦特单位错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L042《功：力什么时候产生了“成果”》的功需要力且物体沿力方向移动距离。","to_next":"为L044《动能、势能与机械能转化》准备动能↔势能，考虑阻力时部分转为内能。","knowledge_links":["L042","L038"],"review_links":["L042","L040","L036"],"math_connection":"把除法、比率用于真实测量、图示或数量关系。"},{"id":44,"title":"动能、势能与机械能转化","grade":"八年级","semester":"下册","big_idea":"功机械与能量","importance":"★★★","curriculum_standard":["3.1.1","3.1.2","3.2.1"],"pep_mapping":"八下第11章","core_question":"秋千为什么能来回摆但不会越摆越高？","core_concept":"运动和位置可储存机械能","core_model":"动能↔势能，考虑阻力时部分转为内能","formula":"—","math_prerequisite":["图像趋势"],"experiment_level":"MICRO","visual":"秋千能量条图","activity":"滚小球下斜面撞纸盒，改变高度或质量比较","example":"小球从高处下滑时能量怎样变","answer":"重力势能减小、动能增大","lesson_id":"L044","common_errors":["C2忽略系统与阻力","C1把能量说成力"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L043《功率：做功有多快》的功率表示单位时间做功。","to_next":"为L045《杠杆模型与平衡条件》准备力×力臂两侧平衡。","knowledge_links":["L043","L039"],"review_links":["L043","L041","L037"],"math_connection":"把图像趋势用于真实测量、图示或数量关系。"},{"id":45,"title":"杠杆模型与平衡条件","grade":"八年级","semester":"下册","big_idea":"功机械与能量","importance":"★★★","curriculum_standard":["2.2.6","4.2.5"],"pep_mapping":"八下第12章","core_question":"为什么用长扳手更省力？","core_concept":"绕固定点转动的硬棒可抽象为杠杆","core_model":"力×力臂两侧平衡","formula":"F1l1=F2l2","math_prerequisite":["乘法","比例","垂线"],"experiment_level":"CORE","visual":"杠杆五要素图","activity":"改变钩码位置与数量，记录平衡时力和力臂","example":"阻力20 N、阻力臂0.1 m，动力臂0.5 m","answer":"动力4 N","lesson_id":"L045","common_errors":["C3力臂画成杆长","C5比例求解错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L044《动能、势能与机械能转化》的运动和位置可储存机械能。","to_next":"为L046《机械效率：有用功占多少》准备有用功、额外功与总功的能量账本。","knowledge_links":["L044","L040"],"review_links":["L044","L042","L038"],"math_connection":"把乘法、比例、垂线用于真实测量、图示或数量关系。"},{"id":46,"title":"机械效率：有用功占多少","grade":"八年级","semester":"下册","big_idea":"功机械与能量","importance":"★★★","curriculum_standard":["3.2.3","3.2.4","3.5.2"],"pep_mapping":"八下第12章","core_question":"使用机械省了力，是否也省了功？","core_concept":"机械效率表示有用功占总功的比例","core_model":"有用功、额外功与总功的能量账本","formula":"η=W有/W总","math_prerequisite":["分数","百分数"],"experiment_level":"MICRO","visual":"有用额外总功流图","activity":"用定滑轮和动滑轮提同一物体，比较有用功、额外功和总功","example":"有用功80 J、总功100 J，效率","answer":"80%；效率不可能超过100%","lesson_id":"L046","common_errors":["C7说机械省功","C5百分数错误"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L045《杠杆模型与平衡条件》的绕固定点转动的硬棒可抽象为杠杆。","to_next":"为L047《分子热运动与内能》准备宏观温度现象连接微观模型。","knowledge_links":["L045","L041"],"review_links":["L045","L043","L039"],"math_connection":"把分数、百分数用于真实测量、图示或数量关系。"},{"id":47,"title":"分子热运动与内能","grade":"九年级","semester":"全一册","big_idea":"内能与能源","importance":"★★★","curriculum_standard":["2.1.2","3.3.1"],"pep_mapping":"九年第13章","core_question":"打开香水后，远处为什么也能闻到？","core_concept":"分子不停做无规则运动；内能是微观能量总和","core_model":"宏观温度现象连接微观模型","formula":"—","math_prerequisite":["无"],"experiment_level":"MICRO","visual":"扩散微粒图","activity":"冷水与热水各滴一滴色素，比较扩散","example":"同一物体、状态不变时温度升高，分子运动和内能通常怎样","answer":"分子无规则运动更剧烈，内能通常增大","lesson_id":"L047","common_errors":["C1分子热运动等同物体移动","C2内能等同热量"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L046《机械效率：有用功占多少》的机械效率表示有用功占总功的比例。","to_next":"为L048《改变内能的两条路》准备能量转移与能量转化两类路径。","knowledge_links":["L046","L042"],"review_links":["L046","L044","L040"],"math_connection":"本课不要求新的数学工具，重点用观察、分类或画图表达证据。"},{"id":48,"title":"改变内能的两条路","grade":"九年级","semester":"全一册","big_idea":"内能与能源","importance":"★★★","curriculum_standard":["3.1.2","3.3.1"],"pep_mapping":"九年第13章","core_question":"搓手和烤火都能变暖，能量路径相同吗？","core_concept":"热传递和做功都能改变内能","core_model":"能量转移与能量转化两类路径","formula":"—","math_prerequisite":["无"],"experiment_level":"MICRO","visual":"内能路径图","activity":"搓手、弯折铁丝、接触温水，给路径分类","example":"压缩空气使其变热属于哪种","answer":"做功，机械能转化为内能","lesson_id":"L048","common_errors":["C1热量说成物体含有","C2两路径混淆"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L047《分子热运动与内能》的分子不停做无规则运动；内能是微观能量总和。","to_next":"为L049《比热容：相同热量为何升温不同》准备质量、温差、物质共同决定吸热。","knowledge_links":["L047","L043"],"review_links":["L047","L045","L041"],"math_connection":"本课不要求新的数学工具，重点用观察、分类或画图表达证据。"},{"id":49,"title":"比热容：相同热量为何升温不同","grade":"九年级","semester":"全一册","big_idea":"内能与能源","importance":"★★★","curriculum_standard":["3.3.2"],"pep_mapping":"九年第13章","core_question":"海边昼夜温差为什么比沙漠小？","core_concept":"比热容表示单位质量升高1℃所需热量","core_model":"质量、温差、物质共同决定吸热","formula":"Q=cmΔT","math_prerequisite":["乘法","正负数"],"experiment_level":"MICRO","visual":"水沙升温曲线图","activity":"等质量水和沙接受相同加热，比较升温","example":"2 kg水升高5℃，c=4.2×10³，吸热","answer":"4.2×10^4 J","lesson_id":"L049","common_errors":["C5温差用末温","C6科学记数法错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L048《改变内能的两条路》的热传递和做功都能改变内能。","to_next":"为L050《燃料热值：同质量燃料放热不同》准备燃料质量与完全燃烧放热的比例模型。","knowledge_links":["L048","L044"],"review_links":["L048","L046","L042"],"math_connection":"把乘法、正负数用于真实测量、图示或数量关系。"},{"id":50,"title":"燃料热值：同质量燃料放热不同","grade":"九年级","semester":"全一册","big_idea":"内能与能源","importance":"★★","curriculum_standard":["3.3.1","3.3.3"],"pep_mapping":"九年第14章","core_question":"同质量木柴和天然气为什么放热不同？","core_concept":"热值描述单位质量燃料完全燃烧时放出的热量","core_model":"燃料质量与完全燃烧放热的比例模型","formula":"Q=mq","math_prerequisite":["乘法","科学记数法"],"experiment_level":"MICRO","visual":"燃料能量流图","activity":"比较资料中同质量不同燃料完全燃烧的放热量并画能量链","example":"0.1 kg燃料热值3×10^7 J/kg，完全燃烧放热","answer":"3×10^6 J","lesson_id":"L050","common_errors":["C4漏完全燃烧条件","C7把热值随质量改变"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L049《比热容：相同热量为何升温不同》的比热容表示单位质量升高1℃所需热量。","to_next":"为L051《能量守恒、效率与方向》准备输入能量=有效+散失。","knowledge_links":["L049","L045"],"review_links":["L049","L047","L043"],"math_connection":"把乘法、科学记数法用于真实测量、图示或数量关系。"},{"id":51,"title":"能量守恒、效率与方向","grade":"九年级","semester":"全一册","big_idea":"内能与能源","importance":"★★★","curriculum_standard":["3.5.1","3.5.2","3.5.3"],"pep_mapping":"九年第14章","core_question":"能量守恒，永动机为什么仍不可能？","core_concept":"能量总量守恒但转化有方向且品质会分散","core_model":"输入能量=有效+散失","formula":"E入=E有+E散","math_prerequisite":["加法","百分数"],"experiment_level":"NONE","visual":"能量流桑基简图","activity":"给手机充电能量流贴标签并找散失","example":"输入100 J，有用70 J，散失多少","answer":"30 J；守恒不等于都能再利用","lesson_id":"L051","common_errors":["C1守恒等同不变形式","C7效率超过100%"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L050《燃料热值：同质量燃料放热不同》的热值描述单位质量燃料完全燃烧时放出的热量。","to_next":"为L052《闭合电路：电流怎样形成通路》准备电源—导线—用电器—开关闭环。","knowledge_links":["L050","L046"],"review_links":["L050","L048","L044"],"math_connection":"把加法、百分数用于真实测量、图示或数量关系。"},{"id":52,"title":"闭合电路：电流怎样形成通路","grade":"九年级","semester":"全一册","big_idea":"电路","importance":"★★★","curriculum_standard":["2.4.1","3.4.1"],"pep_mapping":"九年第15章","core_question":"灯泡亮起来，电流必须走怎样的路？","core_concept":"持续电流需要电源和闭合通路","core_model":"电源—导线—用电器—开关闭环","formula":"—","math_prerequisite":["无"],"experiment_level":"MICRO","visual":"最简电路图","activity":"电池、灯泡、开关试接，先检查短路风险","example":"开关闭合但灯不亮先查什么","answer":"通路是否完整、接触是否可靠","lesson_id":"L052","common_errors":["C2把电流消耗掉","C3电路图元件画错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L051《能量守恒、效率与方向》的能量总量守恒但转化有方向且品质会分散。","to_next":"为L053《串联和并联：电流有几条路》准备从电流路径识别连接方式。","knowledge_links":["L051","L047"],"review_links":["L051","L049","L045"],"math_connection":"本课不要求新的数学工具，重点用观察、分类或画图表达证据。"},{"id":53,"title":"串联和并联：电流有几条路","grade":"九年级","semester":"全一册","big_idea":"电路","importance":"★★★","curriculum_standard":["3.4.4"],"pep_mapping":"九年第15章","core_question":"家里一盏灯坏了，其他灯为什么还能亮？","core_concept":"串联一条路径，并联多条支路","core_model":"从电流路径识别连接方式","formula":"—","math_prerequisite":["分类"],"experiment_level":"MICRO","visual":"串并联路径图","activity":"用两灯搭串联与并联，断开一灯观察另一灯","example":"家庭灯为什么并联","answer":"各支路可独立工作且两端电压相同","lesson_id":"L053","common_errors":["C3按元件摆放形状判断","C4漏节点"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L052《闭合电路：电流怎样形成通路》的持续电流需要电源和闭合通路。","to_next":"为L054《电流表：让电流可测量》准备串联、正进负出、量程合适。","knowledge_links":["L052","L048"],"review_links":["L052","L050","L046"],"math_connection":"把分类用于真实测量、图示或数量关系。"},{"id":54,"title":"电流表：让电流可测量","grade":"九年级","semester":"全一册","big_idea":"电流电压电阻","importance":"★★★","curriculum_standard":["3.4.3","4.1.7"],"pep_mapping":"九年第15章","core_question":"电流表为什么必须串进被测支路？","core_concept":"电流表测通过某处的电流","core_model":"串联、正进负出、量程合适","formula":"—","math_prerequisite":["刻度","小数"],"experiment_level":"CORE","visual":"电流表接线图","activity":"识别量程和分度值，安全接入小灯泡支路","example":"0～0.6 A量程每小格0.02 A，指17格","answer":"0.34 A","lesson_id":"L054","common_errors":["C3并联电流表","C9量程读错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L053《串联和并联：电流有几条路》的串联一条路径，并联多条支路。","to_next":"为L055《核心实验：串并联电流特点》准备节点电流守恒模型。","knowledge_links":["L053","L049"],"review_links":["L053","L051","L047"],"math_connection":"把刻度、小数用于真实测量、图示或数量关系。"},{"id":55,"title":"核心实验：串并联电流特点","grade":"九年级","semester":"全一册","big_idea":"电流电压电阻","importance":"★★★","curriculum_standard":["3.4.4","4.2.11"],"pep_mapping":"九年第15章","core_question":"电流经过灯泡后会被“用掉”吗？","core_concept":"串联各处电流相等，并联干路电流等于支路和","core_model":"节点电流守恒模型","formula":"I=I1=I2；I干=I1+I2","math_prerequisite":["加法","表格"],"experiment_level":"CORE","visual":"节点电流箭头图","activity":"换测多个位置和不同灯泡，记录三组数据","example":"并联两支路0.2 A与0.3 A，干路","answer":"0.5 A","lesson_id":"L055","common_errors":["C4只测一组","C1把电流当消耗品"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L054《电流表：让电流可测量》的电流表测通过某处的电流。","to_next":"为L056《电压表：测量“推动差”》准备电压表并联在被测元件两端。","knowledge_links":["L054","L050"],"review_links":["L054","L052","L048"],"math_connection":"把加法、表格用于真实测量、图示或数量关系。"},{"id":56,"title":"电压表：测量“推动差”","grade":"九年级","semester":"全一册","big_idea":"电流电压电阻","importance":"★★★","curriculum_standard":["3.4.2","3.4.3","4.1.8"],"pep_mapping":"九年第16章","core_question":"电池为什么能推动电荷定向移动？","core_concept":"电压是形成电流的原因之一","core_model":"电压表并联在被测元件两端","formula":"—","math_prerequisite":["刻度","小数"],"experiment_level":"CORE","visual":"电压表接线图","activity":"辨量程、分度值，把电压表跨接在灯泡两端","example":"0～3 V量程每小格0.1 V，指23格","answer":"2.3 V","lesson_id":"L056","common_errors":["C3把电压表串联","C9正负接线错"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L055《核心实验：串并联电流特点》的串联各处电流相等，并联干路电流等于支路和。","to_next":"为L057《核心实验：串并联电压特点》准备回路电压分配模型。","knowledge_links":["L055","L051"],"review_links":["L055","L053","L049"],"math_connection":"把刻度、小数用于真实测量、图示或数量关系。"},{"id":57,"title":"核心实验：串并联电压特点","grade":"九年级","semester":"全一册","big_idea":"电流电压电阻","importance":"★★★","curriculum_standard":["3.4.4","4.2.11"],"pep_mapping":"九年第16章","core_question":"两只串联灯怎样“分”电压？","core_concept":"串联总电压等于各部分之和，并联各支路电压相等","core_model":"回路电压分配模型","formula":"U总=U1+U2；U=U1=U2","math_prerequisite":["加法","表格"],"experiment_level":"CORE","visual":"串并联电压图","activity":"分别测电源、各灯两端电压并换灯复测","example":"串联两灯1.2 V、1.8 V，电源电压","answer":"3.0 V","lesson_id":"L057","common_errors":["C3测量端点错","C4把电流规律套给电压"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L056《电压表：测量“推动差”》的电压是形成电流的原因之一。","to_next":"为L058《电阻与滑动变阻器》准备同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节。","knowledge_links":["L056","L052"],"review_links":["L056","L054","L050"],"math_connection":"把加法、表格用于真实测量、图示或数量关系。"},{"id":58,"title":"电阻与滑动变阻器","grade":"九年级","semester":"全一册","big_idea":"电流电压电阻","importance":"★★★","curriculum_standard":["3.4.2"],"pep_mapping":"九年第16章","core_question":"同一电源接不同灯丝，电流为什么不同？","core_concept":"电阻表示导体对电流的阻碍作用","core_model":"同温下材料、长度、横截面积影响电阻；变阻器靠有效长度调节","formula":"—","math_prerequisite":["比例"],"experiment_level":"MICRO","visual":"变阻器有效段图","activity":"铅笔芯长短对电流影响演示，再判断变阻器接入段","example":"滑片远离已接下端时电阻怎样","answer":"有效长度变长，接入电阻增大","lesson_id":"L058","common_errors":["C3同时接上面两个端子","C4不看有效段"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L057《核心实验：串并联电压特点》的串联总电压等于各部分之和，并联各支路电压相等。","to_next":"为L059《核心实验：电流与电压、电阻关系》准备控制变量建立I-U-R关系。","knowledge_links":["L057","L053"],"review_links":["L057","L055","L051"],"math_connection":"把比例用于真实测量、图示或数量关系。"},{"id":59,"title":"核心实验：电流与电压、电阻关系","grade":"九年级","semester":"全一册","big_idea":"欧姆定律","importance":"★★★","curriculum_standard":["3.4.2","4.2.12"],"pep_mapping":"九年第17章","core_question":"电流会怎样随电压和电阻改变？","core_concept":"同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比","core_model":"控制变量建立I-U-R关系","formula":"I=U/R","math_prerequisite":["比例","图像"],"experiment_level":"CORE","visual":"I-U图像与电路图","activity":"分别保持R或U不变，调变阻器测多组数据","example":"6 V加在3 Ω电阻上，电流","answer":"2 A","lesson_id":"L059","common_errors":["C4控制量未保持","C7倒写关系"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L058《电阻与滑动变阻器》的电阻表示导体对电流的阻碍作用。","to_next":"为L060《欧姆定律建模应用》准备圈定研究对象再配U、I、R。","knowledge_links":["L058","L054"],"review_links":["L058","L056","L052"],"math_connection":"把比例、图像用于真实测量、图示或数量关系。"},{"id":60,"title":"欧姆定律建模应用","grade":"九年级","semester":"全一册","big_idea":"欧姆定律","importance":"★★★","curriculum_standard":["3.4.2"],"pep_mapping":"九年第17章","core_question":"电路题怎样先找对象再列式？","core_concept":"欧姆定律只对同一段电路同一状态配对","core_model":"圈定研究对象再配U、I、R","formula":"U=IR","math_prerequisite":["方程","单位换算"],"experiment_level":"NONE","visual":"局部电路框图","activity":"给电路某电阻框边界，标其电压电流再计算","example":"0.5 A通过12 Ω电阻，电压","answer":"6 V","lesson_id":"L060","common_errors":["C2对象边界错","C7跨对象拼数据"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L059《核心实验：电流与电压、电阻关系》的同一导体温度近似不变时电流与电压成正比；电压一定时与电阻成反比。","to_next":"为L061《核心实验：伏安法测电阻》准备电流表串联、电压表并联、变阻器保护。","knowledge_links":["L059","L055"],"review_links":["L059","L057","L053"],"math_connection":"把方程、单位换算用于真实测量、图示或数量关系。"},{"id":61,"title":"核心实验：伏安法测电阻","grade":"九年级","semester":"全一册","big_idea":"欧姆定律","importance":"★★★","curriculum_standard":["4.1.9"],"pep_mapping":"九年第17章","core_question":"未知电阻怎样用两个表测出来？","core_concept":"由同一状态的U和I间接求R","core_model":"电流表串联、电压表并联、变阻器保护","formula":"R=U/I","math_prerequisite":["除法","表格"],"experiment_level":"CORE","visual":"伏安法电路图","activity":"先最大电阻保护，再测三组U、I并分析","example":"2.4 V、0.3 A，电阻","answer":"8 Ω","lesson_id":"L061","common_errors":["C4电表数据非同一时刻","C9闭合前未调最大"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L060《欧姆定律建模应用》的欧姆定律只对同一段电路同一状态配对。","to_next":"为L062《电功与电能表》准备电压、电流和时间共同决定电功。","knowledge_links":["L060","L056"],"review_links":["L060","L058","L054"],"math_connection":"把除法、表格用于真实测量、图示或数量关系。"},{"id":62,"title":"电功与电能表","grade":"九年级","semester":"全一册","big_idea":"电功与电功率","importance":"★★★","curriculum_standard":["3.4.5"],"pep_mapping":"九年第18章","core_question":"电器工作一段时间，转化了多少电能？","core_concept":"电功表示电能转化的多少","core_model":"电压、电流和时间共同决定电功","formula":"W=UIt","math_prerequisite":["乘法","时间换算"],"experiment_level":"NONE","visual":"电能流与电能表图","activity":"读取家用电能表前后示数，计算一段时间的用电量","example":"220 V、2 A电器工作10 s，电功","answer":"4400 J","lesson_id":"L062","common_errors":["C1电功与功率混淆","C6小时秒混用"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L061《核心实验：伏安法测电阻》的由同一状态的U和I间接求R。","to_next":"为L063《电功率与小灯泡测量》准备同一工作状态测U和I后相乘。","knowledge_links":["L061","L057"],"review_links":["L061","L059","L055"],"math_connection":"把乘法、时间换算用于真实测量、图示或数量关系。"},{"id":63,"title":"电功率与小灯泡测量","grade":"九年级","semester":"全一册","big_idea":"电功与电功率","importance":"★★★","curriculum_standard":["3.4.5"],"pep_mapping":"九年第18章","core_question":"小灯泡在不同电压下亮度为何不同？","core_concept":"电功率表示电能转化的快慢","core_model":"同一工作状态测U和I后相乘","formula":"P=UI","math_prerequisite":["乘法","表格"],"experiment_level":"CORE","visual":"测功率电路图","activity":"调变阻器使灯泡在低于、等于、略高额定电压下工作","example":"额定2.5 V时0.3 A，额定功率","answer":"0.75 W","lesson_id":"L063","common_errors":["C4把实际与额定混用","C9超额定过多"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L062《电功与电能表》的电功表示电能转化的多少。","to_next":"为L064《焦耳定律：电流为什么发热》准备控制变量比较电阻丝产热。","knowledge_links":["L062","L058"],"review_links":["L062","L060","L056"],"math_connection":"把乘法、表格用于真实测量、图示或数量关系。"},{"id":64,"title":"焦耳定律：电流为什么发热","grade":"九年级","semester":"全一册","big_idea":"电功与电功率","importance":"★★★","curriculum_standard":["3.4.6"],"pep_mapping":"九年第18章","core_question":"电炉丝很热，连接导线为什么不该同样热？","core_concept":"电热与电流平方、电阻、时间有关","core_model":"控制变量比较电阻丝产热","formula":"Q=I²Rt","math_prerequisite":["平方","乘法"],"experiment_level":"MICRO","visual":"串联电热对比图","activity":"串联两不同电阻丝，用相同电流比较温升","example":"电流变2倍，其他不变，电热变几倍","answer":"4倍","lesson_id":"L064","common_errors":["C5漏平方","C4串并联时没辨相同量"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L063《电功率与小灯泡测量》的电功率表示电能转化的快慢。","to_next":"为L065《家庭电路与安全用电》准备火线—用电器—零线与接地保护。","knowledge_links":["L063","L059"],"review_links":["L063","L061","L057"],"math_connection":"把平方、乘法用于真实测量、图示或数量关系。"},{"id":65,"title":"家庭电路与安全用电","grade":"九年级","semester":"全一册","big_idea":"电功与电功率","importance":"★★★","curriculum_standard":["3.4.7"],"pep_mapping":"九年第19章","core_question":"保险装置为什么装在火线上？","core_concept":"家庭电路并联，保护装置切断危险通路","core_model":"火线—用电器—零线与接地保护","formula":"—","math_prerequisite":["估算"],"experiment_level":"MICRO","visual":"家庭电路安全图","activity":"识别三孔插座、总开关和漏电保护器，不接触市电","example":"多个大功率电器同插座有何风险","answer":"总电流过大导致导线过热和火灾风险","lesson_id":"L065","common_errors":["C3开关接零线","C8湿手操作"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L064《焦耳定律：电流为什么发热》的电热与电流平方、电阻、时间有关。","to_next":"为L066《磁场：看不见但能用作用检验》准备小磁针N极受力方向定义场方向。","knowledge_links":["L064","L060"],"review_links":["L064","L062","L058"],"math_connection":"把估算用于真实测量、图示或数量关系。"},{"id":66,"title":"磁场：看不见但能用作用检验","grade":"九年级","semester":"全一册","big_idea":"电与磁","importance":"★★★","curriculum_standard":["2.4.2"],"pep_mapping":"九年第20章","core_question":"磁体没有接触，为什么能推动小磁针？","core_concept":"磁场对放入其中的磁体有力作用","core_model":"小磁针N极受力方向定义场方向","formula":"—","math_prerequisite":["方向","空间方向"],"experiment_level":"MICRO","visual":"条形磁体场线图","activity":"磁体周围放多枚小磁针并标N极方向","example":"条形磁体外部磁感线方向","answer":"从N极到S极","lesson_id":"L066","common_errors":["C1把磁感线当真实线","C3方向画反"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L065《家庭电路与安全用电》的家庭电路并联，保护装置切断危险通路。","to_next":"为L067《核心实验：电流的磁场与通电螺线管》准备电流方向决定磁场方向。","knowledge_links":["L065","L061"],"review_links":["L065","L063","L059"],"math_connection":"把方向、空间方向用于真实测量、图示或数量关系。"},{"id":67,"title":"核心实验：电流的磁场与通电螺线管","grade":"九年级","semester":"全一册","big_idea":"电与磁","importance":"★★★","curriculum_standard":["2.4.3","4.2.9"],"pep_mapping":"九年第20章","core_question":"改变电流方向，螺线管磁极会变吗？","core_concept":"电流周围有磁场，螺线管外部像条形磁体","core_model":"电流方向决定磁场方向","formula":"—","math_prerequisite":["空间方向","方向"],"experiment_level":"CORE","visual":"螺线管小磁针图","activity":"改变电流方向，记录两端小磁针N极指向","example":"电流反向后磁极怎样","answer":"N、S极对调","lesson_id":"L067","common_errors":["C3电流方向与场方向混淆","C4只改电池位置不记录"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L066《磁场：看不见但能用作用检验》的磁场对放入其中的磁体有力作用。","to_next":"为L068《磁场对电流的作用与电动机》准备电能→机械能；电流或磁场反向则受力反向。","knowledge_links":["L066","L062"],"review_links":["L066","L064","L060"],"math_connection":"把空间方向、方向用于真实测量、图示或数量关系。"},{"id":68,"title":"磁场对电流的作用与电动机","grade":"九年级","semester":"全一册","big_idea":"电与磁","importance":"★★★","curriculum_standard":["2.4.4"],"pep_mapping":"九年第20章","core_question":"通电线圈为什么能转起来？","core_concept":"通电导线在磁场中受力","core_model":"电能→机械能；电流或磁场反向则受力反向","formula":"—","math_prerequisite":["方向"],"experiment_level":"MICRO","visual":"电动机受力图","activity":"让通电线框在磁场中运动并分别反向电流、磁场","example":"电动机主要把什么能转为什么能","answer":"电能转化为机械能","lesson_id":"L068","common_errors":["C2与发电机混淆","C3只反一项却判方向不变"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L067《核心实验：电流的磁场与通电螺线管》的电流周围有磁场，螺线管外部像条形磁体。","to_next":"为L069《核心实验：电磁感应与发电机》准备机械运动—磁场变化—电能。","knowledge_links":["L067","L063"],"review_links":["L067","L065","L061"],"math_connection":"把方向用于真实测量、图示或数量关系。"},{"id":69,"title":"核心实验：电磁感应与发电机","grade":"九年级","semester":"全一册","big_idea":"电与磁","importance":"★★★","curriculum_standard":["2.4.5","4.2.10"],"pep_mapping":"九年第20章","core_question":"没有电池，怎样让导线中出现电流？","core_concept":"闭合电路一部分导体切割磁感线可产生感应电流","core_model":"机械运动—磁场变化—电能","formula":"—","math_prerequisite":["方向"],"experiment_level":"CORE","visual":"切割磁感线图","activity":"改变导体运动方向、磁场方向与是否闭合，观察灵敏电流计","example":"导体静止在磁场中是否有感应电流","answer":"没有；还需闭合且切割磁感线","lesson_id":"L069","common_errors":["C4漏闭合条件","C2与电动机能量链混淆"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L068《磁场对电流的作用与电动机》的通电导线在磁场中受力。","to_next":"为L070《信息、能源与可持续未来》准备需求—证据—约束—方案—评价。","knowledge_links":["L068","L064"],"review_links":["L068","L066","L062"],"math_connection":"把方向用于真实测量、图示或数量关系。"},{"id":70,"title":"信息、能源与可持续未来","grade":"九年级","semester":"全一册","big_idea":"能源与现代技术","importance":"★★","curriculum_standard":["2.4.6","3.6.1","3.6.2","3.6.3","5.1.1","5.1.2","5.1.3","5.2.1","5.2.2","5.2.3","5.3.1","5.3.2","5.3.3"],"pep_mapping":"九年第21-22章","core_question":"技术选择怎样同时看物理可行性与社会影响？","core_concept":"电磁波传信息，能源选择需看来源、效率、安全和环境","core_model":"需求—证据—约束—方案—评价","formula":"v=λf","math_prerequisite":["科学记数法","比例","大小比较"],"experiment_level":"MICRO","visual":"方案评价矩阵","activity":"为“节能小屋”在太阳能、风能和市电间做证据化选择","example":"波速3×10^8 m/s、频率10^8 Hz，波长","answer":"3 m；方案还需评价稳定性与环境影响","lesson_id":"L070","common_errors":["C4只看单一指标","C1可再生等同无影响"],"estimated_teaching_minutes":20,"estimated_practice_minutes":10,"difficulty":"基础—典型","visual_required":true,"from_previous":"承接L069《核心实验：电磁感应与发电机》的闭合电路一部分导体切割磁感线可产生感应电流。","to_next":"课程终点：用证据评价技术与社会选择。","knowledge_links":["L069","L065"],"review_links":["L069","L067","L063"],"math_connection":"把科学记数法、比例、大小比较用于真实测量、图示或数量关系。"}]`),fi={status:`VERIFIED_OFFICIAL_2026-08-17`,default_start:{volume:`八年级上册`,chapter_number:1,section_number:1},chapters:[{chapter_number:1,volume:`八年级上册`,title:`机械运动`,official_heading:`第一章 机械运动`,sections:[{section_number:1,title:`长度和时间的测量`,lesson_ids:[`L001`],mode:`核心课/整合课`},{section_number:2,title:`运动的描述`,lesson_ids:[`L002`],mode:`核心课/整合课`},{section_number:3,title:`运动的快慢`,lesson_ids:[`L003`,`L004`],mode:`拆成短课`},{section_number:4,title:`速度的测量`,lesson_ids:[`L005`],mode:`核心课/整合课`}]},{chapter_number:2,volume:`八年级上册`,title:`声现象`,official_heading:`第二章 声现象`,sections:[{section_number:1,title:`声音的产生与传播`,lesson_ids:[`L006`],mode:`核心课/整合课`},{section_number:2,title:`声音的特性`,lesson_ids:[`L007`],mode:`核心课/整合课`},{section_number:3,title:`声的利用`,lesson_ids:[`L008`],mode:`核心课/整合课`},{section_number:4,title:`噪声的危害和控制`,lesson_ids:[`L008`],mode:`核心课/整合课`},{section_number:5,title:`跨学科实践：制作隔音房间模型`,lesson_ids:[`L008`],mode:`课后融合`}]},{chapter_number:3,volume:`八年级上册`,title:`物态变化`,official_heading:`第三章 物态变化`,sections:[{section_number:1,title:`温度`,lesson_ids:[`L009`],mode:`核心课/整合课`},{section_number:2,title:`熔化和凝固`,lesson_ids:[`L010`,`L011`],mode:`拆成短课`},{section_number:3,title:`汽化和液化`,lesson_ids:[`L012`,`L013`],mode:`拆成短课`},{section_number:4,title:`升华和凝华`,lesson_ids:[`L014`],mode:`核心课/整合课`},{section_number:5,title:`跨学科实践：探索厨房中的物态变化问题`,lesson_ids:[`L014`],mode:`课后融合`}]},{chapter_number:4,volume:`八年级上册`,title:`光现象`,official_heading:`第四章 光现象`,sections:[{section_number:1,title:`光的直线传播`,lesson_ids:[`L015`],mode:`核心课/整合课`},{section_number:2,title:`光的反射`,lesson_ids:[`L016`],mode:`核心课/整合课`},{section_number:3,title:`平面镜成像`,lesson_ids:[`L017`],mode:`核心课/整合课`},{section_number:4,title:`光的折射`,lesson_ids:[`L018`],mode:`核心课/整合课`},{section_number:5,title:`光的色散`,lesson_ids:[`L015`],mode:`核心课/整合课`}]},{chapter_number:5,volume:`八年级上册`,title:`透镜及其应用`,official_heading:`第五章 透镜及其应用`,sections:[{section_number:1,title:`透镜`,lesson_ids:[`L019`],mode:`核心课/整合课`},{section_number:2,title:`生活中的透镜`,lesson_ids:[`L021`],mode:`核心课/整合课`},{section_number:3,title:`凸透镜成像的规律`,lesson_ids:[`L020`],mode:`核心课/整合课`},{section_number:4,title:`眼睛和眼镜`,lesson_ids:[`L021`],mode:`核心课/整合课`},{section_number:5,title:`跨学科实践：制作望远镜`,lesson_ids:[`L021`],mode:`课后融合`}]},{chapter_number:6,volume:`八年级上册`,title:`质量与密度`,official_heading:`第六章 质量与密度`,sections:[{section_number:1,title:`质量`,lesson_ids:[`L022`],mode:`核心课/整合课`},{section_number:2,title:`密度`,lesson_ids:[`L023`],mode:`核心课/整合课`},{section_number:3,title:`测量液体和固体的密度`,lesson_ids:[`L024`],mode:`核心课/整合课`},{section_number:4,title:`密度的应用`,lesson_ids:[`L023`,`L025`],mode:`拆成短课`}]},{chapter_number:7,volume:`八年级下册`,title:`力`,official_heading:`第七章 力`,sections:[{section_number:1,title:`力`,lesson_ids:[`L026`,`L027`],mode:`拆成短课`},{section_number:2,title:`弹力`,lesson_ids:[`L029`],mode:`核心课/整合课`},{section_number:3,title:`重力`,lesson_ids:[`L028`],mode:`核心课/整合课`}]},{chapter_number:8,volume:`八年级下册`,title:`运动和力`,official_heading:`第八章 运动和力`,sections:[{section_number:1,title:`牛顿第一定律`,lesson_ids:[`L031`,`L032`],mode:`拆成短课`},{section_number:2,title:`二力平衡`,lesson_ids:[`L033`],mode:`核心课/整合课`},{section_number:3,title:`摩擦力`,lesson_ids:[`L030`],mode:`核心课/整合课`},{section_number:4,title:`同一直线上二力的合成`,lesson_ids:[`L033`],mode:`核心课/整合课`}]},{chapter_number:9,volume:`八年级下册`,title:`压强`,official_heading:`第九章 压强`,sections:[{section_number:1,title:`压强`,lesson_ids:[`L034`],mode:`核心课/整合课`},{section_number:2,title:`液体的压强`,lesson_ids:[`L035`],mode:`核心课/整合课`},{section_number:3,title:`大气压强`,lesson_ids:[`L036`],mode:`核心课/整合课`},{section_number:4,title:`跨学科实践：制作简易活塞式抽水机`,lesson_ids:[`L036`],mode:`课后融合`},{section_number:5,title:`流体压强与流速的关系`,lesson_ids:[`L037`],mode:`核心课/整合课`}]},{chapter_number:10,volume:`八年级下册`,title:`浮力`,official_heading:`第十章 浮力`,sections:[{section_number:1,title:`浮力`,lesson_ids:[`L038`,`L039`],mode:`拆成短课`},{section_number:2,title:`阿基米德原理`,lesson_ids:[`L040`],mode:`核心课/整合课`},{section_number:3,title:`物体的浮沉条件及应用`,lesson_ids:[`L041`],mode:`核心课/整合课`},{section_number:4,title:`跨学科实践：制作微型密度计`,lesson_ids:[`L041`],mode:`课后融合`}]},{chapter_number:11,volume:`八年级下册`,title:`功和机械能`,official_heading:`第十一章 功和机械能`,sections:[{section_number:1,title:`功`,lesson_ids:[`L042`],mode:`核心课/整合课`},{section_number:2,title:`功率`,lesson_ids:[`L043`],mode:`核心课/整合课`},{section_number:3,title:`动能和势能`,lesson_ids:[`L044`],mode:`核心课/整合课`},{section_number:4,title:`机械能及其转化`,lesson_ids:[`L044`],mode:`核心课/整合课`}]},{chapter_number:12,volume:`八年级下册`,title:`简单机械`,official_heading:`第十二章 简单机械`,sections:[{section_number:1,title:`杠杆`,lesson_ids:[`L045`],mode:`核心课/整合课`},{section_number:2,title:`跨学科实践：制作简易杆秤`,lesson_ids:[`L045`],mode:`课后融合`},{section_number:3,title:`滑轮`,lesson_ids:[`L046`],mode:`核心课/整合课`},{section_number:4,title:`机械效率`,lesson_ids:[`L046`],mode:`核心课/整合课`}]},{chapter_number:13,volume:`九年级全一册`,title:`内能`,official_heading:`第十三章 内能`,sections:[{section_number:1,title:`热量　比热容`,lesson_ids:[`L049`],mode:`核心课/整合课`},{section_number:2,title:`分子动理论的初步知识`,lesson_ids:[`L047`],mode:`核心课/整合课`},{section_number:3,title:`内能`,lesson_ids:[`L047`,`L048`],mode:`拆成短课`}]},{chapter_number:14,volume:`九年级全一册`,title:`内能的利用`,official_heading:`第十四章 内能的利用`,sections:[{section_number:1,title:`能量的转化与守恒`,lesson_ids:[`L051`],mode:`核心课/整合课`},{section_number:2,title:`热机`,lesson_ids:[`L050`],mode:`核心课/整合课`},{section_number:3,title:`热机的效率`,lesson_ids:[`L050`,`L051`],mode:`拆成短课`},{section_number:4,title:`跨学科实践：制作简易热机模型`,lesson_ids:[`L050`],mode:`课后融合`}]},{chapter_number:15,volume:`九年级全一册`,title:`电流和电路`,official_heading:`第十五章 电流和电路`,sections:[{section_number:1,title:`两种电荷`,lesson_ids:[`L052`],mode:`核心课/整合课`},{section_number:2,title:`电流和电路`,lesson_ids:[`L052`],mode:`核心课/整合课`},{section_number:3,title:`串联电路和并联电路`,lesson_ids:[`L053`],mode:`核心课/整合课`},{section_number:4,title:`电流的测量`,lesson_ids:[`L054`],mode:`核心课/整合课`},{section_number:5,title:`串、并联电路中电流的规律`,lesson_ids:[`L055`],mode:`核心课/整合课`}]},{chapter_number:16,volume:`九年级全一册`,title:`电压 电阻`,official_heading:`第十六章 电压 电阻`,sections:[{section_number:1,title:`电压`,lesson_ids:[`L056`],mode:`核心课/整合课`},{section_number:2,title:`串、并联电路中电压的规律`,lesson_ids:[`L057`],mode:`核心课/整合课`},{section_number:3,title:`电阻`,lesson_ids:[`L058`],mode:`核心课/整合课`},{section_number:4,title:`变阻器`,lesson_ids:[`L058`],mode:`核心课/整合课`},{section_number:5,title:`跨学科实践：制作简易调光台灯`,lesson_ids:[`L058`],mode:`课后融合`}]},{chapter_number:17,volume:`九年级全一册`,title:`欧姆定律`,official_heading:`第十七章 欧姆定律`,sections:[{section_number:1,title:`电流与电压、电阻的关系`,lesson_ids:[`L059`],mode:`核心课/整合课`},{section_number:2,title:`欧姆定律`,lesson_ids:[`L060`],mode:`核心课/整合课`},{section_number:3,title:`电阻的测量`,lesson_ids:[`L061`],mode:`核心课/整合课`},{section_number:4,title:`欧姆定律在串、并联电路中的应用`,lesson_ids:[`L060`],mode:`核心课/整合课`}]},{chapter_number:18,volume:`九年级全一册`,title:`电功率`,official_heading:`第十八章 电功率`,sections:[{section_number:1,title:`电能　电功`,lesson_ids:[`L062`],mode:`核心课/整合课`},{section_number:2,title:`电功率`,lesson_ids:[`L063`],mode:`核心课/整合课`},{section_number:3,title:`跨学科实践：为家庭节约用电提建议`,lesson_ids:[`L064`],mode:`课后融合`},{section_number:4,title:`焦耳定律`,lesson_ids:[`L064`],mode:`核心课/整合课`}]},{chapter_number:19,volume:`九年级全一册`,title:`生活用电`,official_heading:`第十九章 生活用电`,sections:[{section_number:1,title:`安全用电`,lesson_ids:[`L065`],mode:`核心课/整合课`},{section_number:2,title:`家庭电路的基本组成`,lesson_ids:[`L065`],mode:`核心课/整合课`},{section_number:3,title:`跨学科实践：为家庭电路做设计`,lesson_ids:[`L065`],mode:`课后融合`}]},{chapter_number:20,volume:`九年级全一册`,title:`电与磁`,official_heading:`第二十章 电与磁`,sections:[{section_number:1,title:`磁现象　磁场`,lesson_ids:[`L066`],mode:`核心课/整合课`},{section_number:2,title:`电生磁`,lesson_ids:[`L067`],mode:`核心课/整合课`},{section_number:3,title:`电磁铁　电磁继电器`,lesson_ids:[`L067`],mode:`核心课/整合课`},{section_number:4,title:`电动机`,lesson_ids:[`L068`],mode:`核心课/整合课`},{section_number:5,title:`跨学科实践：制作简易直流电动机`,lesson_ids:[`L068`],mode:`课后融合`},{section_number:6,title:`磁生电`,lesson_ids:[`L069`],mode:`核心课/整合课`}]},{chapter_number:21,volume:`九年级全一册`,title:`电磁波及其应用`,official_heading:`第二十一章 电磁波及其应用`,sections:[{section_number:1,title:`电磁波的海洋`,lesson_ids:[`L070`],mode:`核心课/整合课`},{section_number:2,title:`广播、电视和移动通信`,lesson_ids:[`L070`],mode:`核心课/整合课`},{section_number:3,title:`卫星通信和光纤通信`,lesson_ids:[`L070`],mode:`核心课/整合课`}]},{chapter_number:22,volume:`九年级全一册`,title:`能源与可持续发展`,official_heading:`第二十二章 能源与可持续发展`,sections:[{section_number:1,title:`能源利用的现状和面临的挑战`,lesson_ids:[`L070`],mode:`核心课/整合课`},{section_number:2,title:`新能源的发展`,lesson_ids:[`L070`],mode:`核心课/整合课`},{section_number:3,title:`跨学科实践：为节约能源设计方案`,lesson_ids:[`L070`],mode:`课后融合`}]}]},pi=di,mi=fi.chapters;function hi(e){return pi.find(t=>t.lesson_id===e)}var gi=Object.assign({"../lessons/L001.md":Yn,"../lessons/L002.md":Xn,"../lessons/L003.md":Zn,"../lessons/L004.md":Qn,"../lessons/L005.md":$n,"../lessons/L006.md":er,"../lessons/L007.md":tr,"../lessons/L008.md":nr,"../lessons/L009.md":rr,"../lessons/L010.md":ir,"../lessons/L011.md":ar,"../lessons/L012.md":or,"../lessons/L013.md":sr,"../lessons/L014.md":cr,"../lessons/L015.md":lr,"../lessons/L016.md":ur,"../lessons/L017.md":dr,"../lessons/L018.md":fr,"../lessons/L019.md":pr,"../lessons/L020.md":mr,"../lessons/L021.md":hr,"../lessons/L022.md":gr,"../lessons/L023.md":_r,"../lessons/L024.md":vr,"../lessons/L025.md":yr,"../lessons/L026.md":br,"../lessons/L027.md":xr,"../lessons/L028.md":Sr,"../lessons/L029.md":Cr,"../lessons/L030.md":wr,"../lessons/L031.md":Tr,"../lessons/L032.md":Er,"../lessons/L033.md":Dr,"../lessons/L034.md":Or,"../lessons/L035.md":kr,"../lessons/L036.md":Ar,"../lessons/L037.md":jr,"../lessons/L038.md":Mr,"../lessons/L039.md":Nr,"../lessons/L040.md":Pr,"../lessons/L041.md":Fr,"../lessons/L042.md":Ir,"../lessons/L043.md":Lr,"../lessons/L044.md":Rr,"../lessons/L045.md":zr,"../lessons/L046.md":Br,"../lessons/L047.md":Vr,"../lessons/L048.md":Hr,"../lessons/L049.md":Ur,"../lessons/L050.md":Wr,"../lessons/L051.md":Gr,"../lessons/L052.md":Kr,"../lessons/L053.md":qr,"../lessons/L054.md":Jr,"../lessons/L055.md":Yr,"../lessons/L056.md":Xr,"../lessons/L057.md":Zr,"../lessons/L058.md":Qr,"../lessons/L059.md":$r,"../lessons/L060.md":ei,"../lessons/L061.md":ti,"../lessons/L062.md":ni,"../lessons/L063.md":ri,"../lessons/L064.md":ii,"../lessons/L065.md":ai,"../lessons/L066.md":oi,"../lessons/L067.md":si,"../lessons/L068.md":ci,"../lessons/L069.md":li,"../lessons/L070.md":ui});function _i(e){let t=Object.entries(gi).find(([t])=>t.endsWith(`/${e}.md`));return t?t[1].replace(/^---[\s\S]*?---\s*/,``):``}var vi=[`八年级上册`,`八年级下册`,`九年级全一册`];function yi(){let[e,t]=(0,S.useState)(vi[0]),n=(0,S.useMemo)(()=>mi.filter(t=>t.volume===e),[e]);return(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`page-heading`,children:[(0,M.jsx)(`span`,{className:`eyebrow`,children:`第二套导航 · 不改变70课知识主线`}),(0,M.jsx)(`h1`,{children:`按人教版课本章节找课`}),(0,M.jsx)(`p`,{children:`刚开学建议选择“八年级上册”，从第一章第一节开始。`})]}),(0,M.jsx)(`div`,{className:`tabs`,role:`tablist`,children:vi.map(n=>(0,M.jsx)(`button`,{className:n===e?`active`:``,onClick:()=>t(n),children:n},n))}),(0,M.jsx)(`div`,{className:`chapter-list`,children:n.map((t,n)=>(0,M.jsxs)(`details`,{className:`chapter`,open:e===vi[0]&&n===0,children:[(0,M.jsxs)(`summary`,{children:[(0,M.jsxs)(`span`,{children:[`第`,t.chapter_number,`章`]}),(0,M.jsx)(`strong`,{children:t.title}),(0,M.jsxs)(`small`,{children:[t.sections.length,`节`]})]}),(0,M.jsx)(`div`,{className:`section-list`,children:t.sections.map(e=>(0,M.jsxs)(`div`,{className:`section-row`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`span`,{className:`section-number`,children:[`第`,e.section_number,`节`]}),(0,M.jsx)(`strong`,{children:e.title}),(0,M.jsx)(`small`,{children:e.mode})]}),(0,M.jsx)(`div`,{className:`lesson-links`,children:e.lesson_ids.map(e=>{let t=hi(e);return(0,M.jsxs)(An,{to:`/lessons/${e}`,children:[e,` `,t?.title]},e)})})]},e.section_number))})]},t.chapter_number))})]})}function bi(){let e=pi.reduce((e,t)=>{let n=e.get(t.big_idea)||[];return n.push(t),e.set(t.big_idea,n),e},new Map);return(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`page-heading`,children:[(0,M.jsx)(`span`,{className:`eyebrow`,children:`默认学习路径`}),(0,M.jsx)(`h1`,{children:`70课知识主线`}),(0,M.jsx)(`p`,{children:`每课20分钟正课＋10分钟练习，按前后依赖顺序排列。`})]}),[...e].map(([e,t])=>(0,M.jsxs)(`section`,{className:`course-group`,children:[(0,M.jsx)(`h2`,{children:e}),(0,M.jsx)(`div`,{className:`course-grid`,children:t.map(e=>(0,M.jsxs)(An,{className:`course-card`,to:`/lessons/${e.lesson_id}`,children:[(0,M.jsxs)(`span`,{children:[e.lesson_id,` · `,e.importance]}),(0,M.jsx)(`strong`,{children:e.title}),(0,M.jsx)(`small`,{children:e.core_question})]},e.lesson_id))})]},e))]})}function xi(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Si=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ci=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wi={};function Ti(e,t){return((t||wi).jsx?Ci:Si).test(e)}var Ei=/[ \t\n\f\r]/g;function Di(e){return typeof e==`object`?e.type===`text`&&Oi(e.value):Oi(e)}function Oi(e){return e.replace(Ei,``)===``}var ki=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};ki.prototype.normal={},ki.prototype.property={},ki.prototype.space=void 0;function Ai(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new ki(n,r,t)}function ji(e){return e.toLowerCase()}var Mi=class{constructor(e,t){this.attribute=t,this.property=e}};Mi.prototype.attribute=``,Mi.prototype.booleanish=!1,Mi.prototype.boolean=!1,Mi.prototype.commaOrSpaceSeparated=!1,Mi.prototype.commaSeparated=!1,Mi.prototype.defined=!1,Mi.prototype.mustUseProperty=!1,Mi.prototype.number=!1,Mi.prototype.overloadedBoolean=!1,Mi.prototype.property=``,Mi.prototype.spaceSeparated=!1,Mi.prototype.space=void 0;var Ni=s({boolean:()=>N,booleanish:()=>Fi,commaOrSpaceSeparated:()=>L,commaSeparated:()=>I,number:()=>P,overloadedBoolean:()=>Ii,spaceSeparated:()=>F}),Pi=0,N=Li(),Fi=Li(),Ii=Li(),P=Li(),F=Li(),I=Li(),L=Li();function Li(){return 2**++Pi}var Ri=Object.keys(Ni),zi=class extends Mi{constructor(e,t,n,r){let i=-1;if(super(e,t),Bi(this,`space`,r),typeof n==`number`)for(;++i<Ri.length;){let e=Ri[i];Bi(this,Ri[i],(n&Ni[e])===Ni[e])}}};zi.prototype.defined=!0;function Bi(e,t,n){n&&(e[t]=n)}function Vi(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new zi(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[ji(r)]=r,n[ji(a.attribute)]=r}return new ki(t,n,e.space)}var Hi=Vi({properties:{ariaActiveDescendant:null,ariaAtomic:Fi,ariaAutoComplete:null,ariaBusy:Fi,ariaChecked:Fi,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:F,ariaCurrent:null,ariaDescribedBy:F,ariaDetails:null,ariaDisabled:Fi,ariaDropEffect:F,ariaErrorMessage:null,ariaExpanded:Fi,ariaFlowTo:F,ariaGrabbed:Fi,ariaHasPopup:null,ariaHidden:Fi,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:F,ariaLevel:P,ariaLive:null,ariaModal:Fi,ariaMultiLine:Fi,ariaMultiSelectable:Fi,ariaOrientation:null,ariaOwns:F,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:Fi,ariaReadOnly:Fi,ariaRelevant:null,ariaRequired:Fi,ariaRoleDescription:F,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:Fi,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function Ui(e,t){return t in e?e[t]:t}function Wi(e,t){return Ui(e,t.toLowerCase())}var Gi=Vi({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:I,acceptCharset:F,accessKey:F,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alpha:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:F,autoFocus:N,autoPlay:N,blocking:F,capture:null,charSet:null,checked:N,cite:null,className:F,closedBy:null,colorSpace:null,cols:P,colSpan:P,command:null,commandFor:null,content:null,contentEditable:Fi,controls:N,controlsList:F,coords:P|I,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:Ii,draggable:Fi,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:F,height:P,hidden:Ii,high:P,href:null,hrefLang:null,htmlFor:F,httpEquiv:F,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:F,itemRef:F,itemScope:N,itemType:F,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:P,pattern:null,ping:F,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:F,required:N,reversed:N,rows:P,rowSpan:P,sandbox:F,scope:null,scoped:N,seamless:N,selected:N,shadowRootClonable:N,shadowRootCustomElementRegistry:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shadowRootSerializable:N,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:Fi,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:Fi,width:P,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:F,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:Fi,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:N,disablePictureInPicture:N,disableRemotePlayback:N,exportParts:I,part:F,prefix:null,property:null,results:P,security:null,unselectable:null},space:`html`,transform:Wi}),Ki=Vi({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:L,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:F,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:I,g2:I,glyphName:I,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:L,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:F,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:L,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:L,rev:L,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:L,requiredFeatures:L,requiredFonts:L,requiredFormats:L,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:L,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:L,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:L,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:Ui}),qi=Vi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),Ji=Vi({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:Wi}),Yi=Vi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),Xi={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},Zi=/[A-Z]/g,Qi=/-[a-z]/g,$i=/^data[-\w.:]+$/i;function ea(e,t){let n=ji(t),r=t,i=Mi;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&$i.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Qi,na);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Qi.test(e)){let n=e.replace(Zi,ta);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=zi}return new i(r,t)}function ta(e){return`-`+e.toLowerCase()}function na(e){return e.charAt(1).toUpperCase()}var ra=Ai([Hi,Gi,qi,Ji,Yi],`html`),ia=Ai([Hi,Ki,qi,Ji,Yi],`svg`);function aa(e){return e.join(` `).trim()}var oa=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),sa=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(oa());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),ca=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),la=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(sa()),r=ca();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),ua=fa(`end`),da=fa(`start`);function fa(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function pa(e){let t=da(e),n=ua(e);if(t&&n)return{start:t,end:n}}function ma(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?ga(e.position):`start`in e||`end`in e?ga(e):`line`in e||`column`in e?ha(e):``}function ha(e){return _a(e&&e.line)+`:`+_a(e&&e.column)}function ga(e){return ha(e&&e.start)+`-`+ha(e&&e.end)}function _a(e){return e&&typeof e==`number`?e:1}var va=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=ma(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};va.prototype.file=``,va.prototype.name=``,va.prototype.reason=``,va.prototype.message=``,va.prototype.stack=``,va.prototype.column=void 0,va.prototype.line=void 0,va.prototype.ancestors=void 0,va.prototype.cause=void 0,va.prototype.fatal=void 0,va.prototype.place=void 0,va.prototype.ruleId=void 0,va.prototype.source=void 0;var ya=l(la(),1),ba={}.hasOwnProperty,xa=new Map,Sa=/[A-Z]/g,Ca=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),wa=new Set([`td`,`th`]);function Ta(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=Ia(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Fa(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ia:ra,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Ea(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ea(e,t,n){if(t.type===`element`)return Da(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return Oa(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Aa(e,t,n);if(t.type===`mdxjsEsm`)return ka(e,t);if(t.type===`root`)return ja(e,t,n);if(t.type===`text`)return Ma(e,t)}function Da(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ia,e.schema=i),e.ancestors.push(t);let a=Ha(e,t.tagName,!1),o=La(e,t),s=za(e,t);return Ca.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!Di(e)})),Na(e,o,a,t),Pa(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Oa(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Ua(e,t.position)}function ka(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ua(e,t.position)}function Aa(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ia,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ha(e,t.name,!0),o=Ra(e,t),s=za(e,t);return Na(e,o,a,t),Pa(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function ja(e,t,n){let r={};return Pa(r,za(e,t)),e.create(t,e.Fragment,r,n)}function Ma(e,t){return t.value}function Na(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Pa(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Fa(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function Ia(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=da(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function La(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&ba.call(t.properties,i)){let a=Ba(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&wa.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Ra(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Ua(e,t.position)}else{let i=r.name,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Ua(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function za(e,t){let n=[],r=-1,i=e.passKeys?new Map:xa;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Ea(e,a,o);s!==void 0&&n.push(s)}return n}function Ba(e,t,n){let r=ea(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?xi(n):aa(n)),r.property===`style`){let t=typeof n==`object`?n:Va(e,String(n));return e.stylePropertyNameCase===`css`&&(t=Wa(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?Xi[r.property]||r.property:r.attribute,n]}}function Va(e,t){try{return(0,ya.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new va("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,r}}function Ha(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Ti(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Ti(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return ba.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ua(e)}function Ua(e,t){let n=new va("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,n}function Wa(e){let t={},n;for(n in e)ba.call(e,n)&&(t[Ga(n)]=e[n]);return t}function Ga(e){let t=e.replace(Sa,Ka);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function Ka(e){return`-`+e.toLowerCase()}var qa={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},Ja={};function Ya(e,t){let n=t||Ja;return Xa(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function Xa(e,t,n){if(Qa(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return Za(e.children,t,n)}return Array.isArray(e)?Za(e,t,n):``}function Za(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Xa(e[i],t,n);return r.join(``)}function Qa(e){return!!(e&&typeof e==`object`)}var $a=document.createElement(`i`);function eo(e){let t=`&`+e+`;`;$a.innerHTML=t;let n=$a.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function to(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function no(e,t){return e.length>0?(to(e,e.length,0,t),e):t}var ro={}.hasOwnProperty;function io(e){let t={},n=-1;for(;++n<e.length;)ao(t,e[n]);return t}function ao(e,t){let n;for(n in t){let r=(ro.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){ro.call(r,a)||(r[a]=[]);let e=i[a];oo(r[a],Array.isArray(e)?e:e?[e]:[])}}}function oo(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);to(e,0,0,r)}function so(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function co(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var lo=_o(/[A-Za-z]/),uo=_o(/[\dA-Za-z]/),fo=_o(/[#-'*+\--9=?A-Z^-~]/);function R(e){return e!==null&&(e<32||e===127)}var po=_o(/\d/),mo=_o(/[\dA-Fa-f]/),z=_o(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function H(e){return e===-2||e===-1||e===32}var ho=_o(/\p{P}|\p{S}/u),go=_o(/\s/);function _o(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function vo(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&uo(e.charCodeAt(n+1))&&uo(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function U(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return H(r)?(e.enter(n),s(r)):t(r)}function s(r){return H(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var yo={tokenize:bo};function bo(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),U(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return B(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var xo={tokenize:Co},So={tokenize:wo};function Co(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return to(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(So,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(So,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return B(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;to(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function wo(e,t,n){return U(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function To(e){if(e===null||V(e)||go(e))return 1;if(ho(e))return 2}function Eo(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Do={name:`attention`,resolveAll:Oo,tokenize:ko};function Oo(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Ao(d,-c),Ao(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=no(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=no(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=no(l,Eo(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=no(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=no(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,to(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function ko(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=To(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=To(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Ao(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var jo={name:`autolink`,tokenize:Mo};function Mo(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return lo(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||uo(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||uo(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||R(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):fo(t)?(e.consume(t),l):n(t)}function u(e){return uo(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||uo(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var No={partial:!0,tokenize:Po};function Po(e,t,n){return r;function r(t){return H(t)?U(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||B(e)?t(e):n(e)}}var Fo={continuation:{tokenize:Lo},exit:Ro,name:`blockQuote`,tokenize:Io};function Io(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return H(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Lo(e,t,n){let r=this;return i;function i(t){return H(t)?U(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Fo,t,n)(r)}}function Ro(e){e.exit(`blockQuote`)}var zo={name:`characterEscape`,tokenize:Bo};function Bo(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return z(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Vo={name:`characterReference`,tokenize:Ho};function Ho(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=uo,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=mo,u):(e.enter(`characterReferenceValue`),a=7,o=po,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===uo&&!eo(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Uo={partial:!0,tokenize:Ko},Wo={concrete:!0,name:`codeFenced`,tokenize:Go};function Go(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),H(t)?U(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||B(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Uo,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||B(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),U(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||B(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||B(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&H(t)?U(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||B(t)?e.check(Uo,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||B(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),H(t)?U(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),H(t)?U(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||B(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function Ko(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var qo={name:`codeIndented`,tokenize:Yo},Jo={partial:!0,tokenize:Xo};function Yo(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),U(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):B(t)?e.attempt(Jo,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||B(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function Xo(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):B(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):U(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):B(e)?i(e):n(e)}}var Zo={name:`codeText`,previous:$o,resolve:Qo,tokenize:es};function Qo(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function $o(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function es(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):B(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||B(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var ts=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&ns(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),ns(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),ns(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);ns(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);ns(this.left,t.reverse())}}}};function ns(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function rs(e){let t={},n=-1,r,i,a,o,s,c,l,u=new ts(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,is(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return to(e,0,1/0,u.slice(0)),!l}function is(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var as={resolve:ss,tokenize:cs},os={partial:!0,tokenize:ls};function ss(e){return rs(e),e}function cs(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):B(t)?e.check(os,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function ls(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),U(e,a,`linePrefix`)}function a(i){if(i===null||B(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function us(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||R(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||B(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||V(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||R(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function ds(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):B(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||B(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!H(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function fs(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):B(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),U(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||B(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function ps(e,t){let n;return r;function r(i){return B(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):H(i)?U(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var ms={name:`definition`,tokenize:gs},hs={partial:!0,tokenize:_s};function gs(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return ds.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=co(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return V(t)?ps(e,l)(t):l(t)}function l(t){return us(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(hs,d,d)(t)}function d(t){return H(t)?U(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||B(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function _s(e,t,n){return r;function r(t){return V(t)?ps(e,i)(t):n(t)}function i(t){return fs(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return H(t)?U(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||B(e)?t(e):n(e)}}var vs={name:`hardBreakEscape`,tokenize:ys};function ys(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return B(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var bs={name:`headingAtx`,resolve:xs,tokenize:Ss};function xs(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},to(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Ss(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||V(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||B(n)?(e.exit(`atxHeading`),t(n)):H(n)?U(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||V(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Cs=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),ws=[`pre`,`script`,`style`,`textarea`],Ts={concrete:!0,name:`htmlFlow`,resolveTo:Os,tokenize:ks},Es={partial:!0,tokenize:js},Ds={partial:!0,tokenize:As};function Os(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function ks(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:k):lo(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):lo(a)?(e.consume(a),i=4,r.interrupt?t:k):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:k):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return lo(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||V(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&ws.includes(l)?(i=1,r.interrupt?t(s):D(s)):Cs.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||uo(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return H(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||lo(t)?(e.consume(t),b):H(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||uo(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):H(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):H(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||B(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||V(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||H(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||B(t)?D(t):H(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),ie):t===62&&i===4?(e.consume(t),A):t===63&&i===3?(e.consume(t),k):t===93&&i===5?(e.consume(t),oe):B(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Es,se,O)(t)):t===null||B(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(Ds,te,se)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||B(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function re(t){return t===45?(e.consume(t),k):D(t)}function ie(t){return t===47?(e.consume(t),o=``,ae):D(t)}function ae(t){if(t===62){let n=o.toLowerCase();return ws.includes(n)?(e.consume(t),A):D(t)}return lo(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ae):D(t)}function oe(t){return t===93?(e.consume(t),k):D(t)}function k(t){return t===62?(e.consume(t),A):t===45&&i===2?(e.consume(t),k):D(t)}function A(t){return t===null||B(t)?(e.exit(`htmlFlowData`),se(t)):(e.consume(t),A)}function se(n){return e.exit(`htmlFlow`),t(n)}}function As(e,t,n){let r=this;return i;function i(t){return B(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function js(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(No,t,n)}}var Ms={name:`htmlText`,tokenize:Ns};function Ns(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):lo(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):lo(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):B(t)?(o=d,ie(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):B(t)?(o=h,ie(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):B(t)?(o=v,ie(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):B(t)?(o=y,ie(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return lo(t)?(e.consume(t),S):n(t)}function S(t){return t===45||uo(t)?(e.consume(t),S):C(t)}function C(t){return B(t)?(o=C,ie(t)):H(t)?(e.consume(t),C):re(t)}function w(t){return t===45||uo(t)?(e.consume(t),w):t===47||t===62||V(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||lo(t)?(e.consume(t),E):B(t)?(o=T,ie(t)):H(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||uo(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):B(t)?(o=ee,ie(t)):H(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):B(t)?(o=D,ie(t)):H(t)?(e.consume(t),D):(e.consume(t),te)}function O(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):B(t)?(o=O,ie(t)):(e.consume(t),O)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||V(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||V(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ie(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ae}function ae(t){return H(t)?U(e,oe,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):oe(t)}function oe(t){return e.enter(`htmlTextData`),o(t)}}var Ps={name:`labelEnd`,resolveAll:Rs,resolveTo:zs,tokenize:Bs},Fs={tokenize:Vs},Is={tokenize:Hs},Ls={tokenize:Us};function Rs(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&to(e,0,e.length,n),e}function zs(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=no(s,e.slice(a+1,a+r+3)),s=no(s,[[`enter`,u,t]]),s=no(s,Eo(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=no(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=no(s,e.slice(o+1)),s=no(s,[[`exit`,c,t]]),to(e,a,e.length,s),e}function Bs(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(co(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Fs,u,o?u:d)(t):t===91?e.attempt(Is,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Ls,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Vs(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return V(t)?ps(e,a)(t):a(t)}function a(t){return t===41?u(t):us(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return V(t)?ps(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?fs(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return V(t)?ps(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Hs(e,t,n){let r=this;return i;function i(t){return ds.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(co(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function Us(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Ws={name:`labelStartImage`,resolveAll:Ps.resolveAll,tokenize:Gs};function Gs(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Ks={name:`labelStartLink`,resolveAll:Ps.resolveAll,tokenize:qs};function qs(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Js={name:`lineEnding`,tokenize:Ys};function Ys(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),U(e,t,`linePrefix`)}}var Xs={name:`thematicBreak`,tokenize:Zs};function Zs(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||B(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),H(t)?U(e,s,`whitespace`)(t):s(t))}}var Qs={continuation:{tokenize:nc},exit:ic,name:`list`,tokenize:tc},$s={partial:!0,tokenize:ac},ec={partial:!0,tokenize:rc};function tc(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:po(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(Xs,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return po(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(No,r.interrupt?n:u,e.attempt($s,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return H(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function nc(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(No,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,U(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!H(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ec,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,U(e,e.attempt(Qs,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function rc(e,t,n){let r=this;return U(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function ic(e){e.exit(this.containerState.type)}function ac(e,t,n){let r=this;return U(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!H(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var oc={name:`setextUnderline`,resolveTo:sc,tokenize:cc};function sc(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function cc(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),H(t)?U(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||B(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var lc={tokenize:uc};function uc(e){let t=this,n=e.attempt(No,r,e.attempt(this.parser.constructs.flowInitial,i,U(e,e.attempt(this.parser.constructs.flow,i,e.attempt(as,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var dc={resolveAll:hc()},fc=mc(`string`),pc=mc(`text`);function mc(e){return{resolveAll:hc(e===`text`?gc:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function hc(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function gc(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var _c=s({attentionMarkers:()=>Tc,contentInitial:()=>yc,disable:()=>Ec,document:()=>vc,flow:()=>xc,flowInitial:()=>bc,insideSpan:()=>wc,string:()=>Sc,text:()=>Cc}),vc={42:Qs,43:Qs,45:Qs,48:Qs,49:Qs,50:Qs,51:Qs,52:Qs,53:Qs,54:Qs,55:Qs,56:Qs,57:Qs,62:Fo},yc={91:ms},bc={[-2]:qo,[-1]:qo,32:qo},xc={35:bs,42:Xs,45:[oc,Xs],60:Ts,61:oc,95:Xs,96:Wo,126:Wo},Sc={38:Vo,92:zo},Cc={[-5]:Js,[-4]:Js,[-3]:Js,33:Ws,38:Vo,42:Do,60:[jo,Ms],91:Ks,92:[vs,zo],93:Ps,95:Do,96:Zo},wc={null:[Do,dc]},Tc={null:[42,95]},Ec={null:[]};function Dc(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=no(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Eo(a,l.events,l),l.events):[]}function f(e,t){return kc(p(e),t)}function p(e){return Oc(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){B(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&to(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Oc(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function kc(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Ac(e){let t={constructs:io([_c,...(e||{}).extensions||[]]),content:n(yo),defined:[],document:n(xo),flow:n(lc),lazy:{},string:n(fc),text:n(pc)};return t;function n(e){return n;function n(n){return Dc(t,e,n)}}}function jc(e){for(;!rs(e););return e}var Mc=/[\0\t\n\r]/g;function Nc(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Mc.lastIndex=u,c=Mc.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Pc=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fc(e){return e.replace(Pc,Ic)}function Ic(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return so(n.slice(t?2:1),t?16:10)}return eo(n)||e}var Lc={}.hasOwnProperty;function W(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Rc(n)(jc(Ac(n).document().write(Nc()(e,t,!0))))}function Rc(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Ce),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(ye),blockQuote:a(me),characterEscape:T,characterReference:T,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(_e),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ve),hardBreakEscape:a(be),hardBreakTrailing:a(be),htmlFlow:a(xe,o),htmlFlowData:T,htmlText:a(xe,o),htmlTextData:T,image:a(Se),label:o,link:a(Ce),listItem:a(Te),listItemValue:f,listOrdered:a(we,d),listUnordered:a(we),paragraph:a(Ee),reference:ce,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ye),strong:a(De),thematicBreak:a(ke)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:de,characterReference:j,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(O),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(ie),label:oe,labelText:ae,lineEnding:ee,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:le,resourceDestinationString:k,resourceTitleString:A,resource:se,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Bc(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Lc.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Hc).call(a,void 0,e[0])}for(r.position={start:zc(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:zc(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:zc(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Hc).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+ma({start:e.start,end:e.end})+`): it’s not open`);n.position.end=zc(e.end)}function u(){return Ya(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=co(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:zc(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=zc(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=zc(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ie(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Fc(t),n.identifier=co(t).toLowerCase()}function oe(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function se(){this.data.inReference=void 0}function ce(){this.data.referenceType=`collapsed`}function le(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=co(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function ue(e){this.data.characterReferenceType=e.type}function de(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=so(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=eo(t);let i=this.stack[this.stack.length-1];i.value+=r}function j(e){let t=this.stack.pop();t.position.end=zc(e.end)}function fe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[]}}function he(){return{type:`code`,lang:null,meta:null,value:``}}function ge(){return{type:`inlineCode`,value:``}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ve(){return{type:`emphasis`,children:[]}}function ye(){return{type:`heading`,depth:0,children:[]}}function be(){return{type:`break`}}function xe(){return{type:`html`,value:``}}function Se(){return{type:`image`,title:null,url:``,alt:null}}function Ce(){return{type:`link`,title:null,url:``,children:[]}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ee(){return{type:`paragraph`,children:[]}}function De(){return{type:`strong`,children:[]}}function Oe(){return{type:`text`,value:``}}function ke(){return{type:`thematicBreak`}}}function zc(e){return{line:e.line,column:e.column,offset:e.offset}}function Bc(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Bc(e,r):Vc(e,r)}}function Vc(e,t){let n;for(n in t)if(Lc.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Hc(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+ma({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ma({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+ma({start:t.start,end:t.end})+`) is still open`)}function Uc(e){let t=this;t.parser=n;function n(n){return W(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function Wc(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Gc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Kc(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function qc(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Jc(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=vo(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Xc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zc(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Qc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function $c(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qc(e,t);let i={src:vo(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function el(e,t){let n={src:vo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function tl(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function nl(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qc(e,t);let i={href:vo(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function rl(e,t){let n={href:vo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function il(e,t,n){let r=e.all(t),i=n?al(n):ol(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function al(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=ol(n[r])}return t}function ol(e){return e.spread??e.children.length>1}function sl(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function cl(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ll(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ul(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function dl(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=da(t.children[1]),o=ua(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function fl(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function pl(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var ml=9,hl=32;function gl(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(_l(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(_l(t.slice(i),i>0,!1)),a.join(``)}function _l(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===ml||t===hl;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===ml||t===hl;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function vl(e,t){let n={type:`text`,value:gl(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function yl(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var bl={blockquote:Wc,break:Gc,code:Kc,delete:qc,emphasis:Jc,footnoteReference:Yc,heading:Xc,html:Zc,imageReference:$c,image:el,inlineCode:tl,linkReference:nl,link:rl,listItem:il,list:sl,paragraph:cl,root:ll,strong:ul,table:dl,tableCell:pl,tableRow:fl,text:vl,thematicBreak:yl,toml:xl,yaml:xl,definition:xl,footnoteDefinition:xl};function xl(){}var Sl=typeof self==`object`?self:globalThis,Cl=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Sl[e](t)},wl=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Sl[e]==`function`?Cl(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Cl(a,o),i)};return r},Tl=e=>wl(new Map,e)(0),El=``,{toString:Dl}={},{keys:Ol}=Object,kl=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Dl.call(e).slice(8,-1);switch(n){case`Array`:return[1,El];case`Object`:return[2,El];case`Date`:return[3,El];case`RegExp`:return[4,El];case`Map`:return[5,El];case`Set`:return[6,El];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Al=([e,t])=>e===0&&(t===`function`||t===`symbol`),jl=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=kl(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Ol(r))(e||!Al(kl(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?El:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Al(kl(n))||Al(kl(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Al(kl(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},Ml=(e,{json:t,lossy:n}={})=>{let r=[];return jl(!(t||n),!!t,new Map,r)(e),r},Nl=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Tl(Ml(e,t)):structuredClone(e):(e,t)=>Tl(Ml(e,t));function Pl(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Fl(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Il(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Pl,r=e.options.footnoteBackLabel||Fl,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=vo(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Nl(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Ll=(function(e){if(e==null)return q;if(typeof e==`function`)return K(e);if(typeof e==`object`)return Array.isArray(e)?Rl(e):zl(e);if(typeof e==`string`)return G(e);throw Error(`Expected function, string, or object as test`)});function Rl(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ll(e[n]);return K(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function zl(e){let t=e;return K(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function G(e){return K(t);function t(t){return t&&t.type===e}}function K(e){return t;function t(t,n,r){return!!(J(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function q(){return!0}function J(e){return typeof e==`object`&&!!e&&`type`in e}function Y(e){return e}var Bl=[];function Vl(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Ll(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+Y(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Bl,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=Hl(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function Hl(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Bl:[e]}function Ul(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Vl(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var Wl={}.hasOwnProperty,Gl={};function Kl(e,t){let n=t||Gl,r=new Map,i=new Map,a={all:s,applyData:Jl,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...bl,...n.handlers},one:o,options:n,patch:ql,wrap:Xl};return Ul(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(Wl.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Nl(n);return r.children=a.all(e),r}return Nl(e)}return(a.options.unknownHandler||Yl)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Zl(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Zl(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function ql(e,t){e.position&&(t.position=pa(e))}function Jl(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Nl(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Yl(e,t){let n=t.data||{},r=`value`in t&&!(Wl.call(n,`hProperties`)||Wl.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Xl(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Zl(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ql(e,t){let n=Kl(e,t),r=n.one(e,void 0),i=Il(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function $l(e,t){return e&&`run`in e?async function(n,r){let i=Ql(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ql(n,{file:r,...e||t})}}function eu(e){if(e)throw e}var tu=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function nu(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ru(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?iu(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function iu(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var X={basename:au,dirname:ou,extname:su,join:cu,sep:`/`};function au(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);du(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function ou(e){if(du(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function su(e){du(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function cu(...e){let t=-1,n;for(;++t<e.length;)du(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:lu(n)}function lu(e){du(e);let t=e.codePointAt(0)===47,n=uu(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function uu(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function du(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var fu={cwd:pu};function pu(){return`/`}function mu(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function hu(e){if(typeof e==`string`)e=new URL(e);else if(!mu(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return gu(e)}function gu(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var _u=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],vu=class{constructor(e){let t;t=e?mu(e)?{path:e}:typeof e==`string`||Su(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:fu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<_u.length;){let e=_u[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)_u.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?X.basename(this.path):void 0}set basename(e){bu(e,`basename`),yu(e,`basename`),this.path=X.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?X.dirname(this.path):void 0}set dirname(e){xu(this.basename,`dirname`),this.path=X.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?X.extname(this.path):void 0}set extname(e){if(yu(e,`extname`),xu(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=X.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){mu(e)&&(e=hu(e)),bu(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?X.basename(this.path,this.extname):void 0}set stem(e){bu(e,`stem`),yu(e,`stem`),this.path=X.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new va(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function yu(e,t){if(e&&e.includes(X.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+X.sep+"`")}function bu(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function xu(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function Su(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Cu=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),wu=l(tu(),1),Tu={}.hasOwnProperty,Eu=new class e extends Cu{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ru()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,wu.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(ku(`data`,this.frozen),this.namespace[e]=t,this):Tu.call(this.namespace,e)&&this.namespace[e]||void 0:e?(ku(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=Mu(e),n=this.parser||this.Parser;return Du(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Du(`process`,this.parser||this.Parser),Ou(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=Mu(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Pu(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Du(`processSync`,this.parser||this.Parser),Ou(`processSync`,this.compiler||this.Compiler),this.process(e,r),ju(`processSync`,`process`,t),n;function r(e,r){t=!0,eu(e),n=r}}run(e,t,n){Au(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=Mu(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),ju(`runSync`,`run`,n),r;function i(e,t){eu(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=Mu(t),r=this.compiler||this.Compiler;return Ou(`stringify`,r),Au(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(ku(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,wu.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];nu(o)&&nu(r)&&(r=(0,wu.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Du(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Ou(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function ku(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Au(e){if(!nu(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function ju(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function Mu(e){return Nu(e)?e:new vu(e)}function Nu(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Pu(e){return typeof e==`string`||Fu(e)}function Fu(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Iu=[],Lu={allowDangerousHtml:!0},Ru=/^(https?|ircs?|mailto|xmpp)$/i,zu=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Bu(e){let t=Vu(e),n=Hu(e);return Uu(t.runSync(t.parse(n),n),e)}function Vu(e){let t=e.rehypePlugins||Iu,n=e.remarkPlugins||Iu,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Lu}:Lu;return Eu().use(Uc).use(n).use($l,r).use(t)}function Hu(e){let t=e.children||``,n=new vu;return typeof t==`string`?n.value=t:``+t,n}function Uu(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||Wu;for(let e of zu)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return Ul(e,l),Ta(e,{Fragment:M.Fragment,components:i,ignoreInvalidStyle:!0,jsx:M.jsx,jsxs:M.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in qa)if(Object.hasOwn(qa,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=qa[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function Wu(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Ru.test(e.slice(0,t))?e:``}function Z(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Gu(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Ku(e,t,n){let r=Ll((n||{}).ignore||[]),i=qu(t),a=-1;for(;++a<i.length;)Vl(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function qu(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Ju(e[0]),Yu(e[1])])}return t}function Ju(e){return typeof e==`string`?new RegExp(Gu(e),`g`):e}function Yu(e){return typeof e==`function`?e:function(){return e}}var Xu=`phrasing`,Zu=[`autolink`,`link`,`image`,`label`];function Qu(){return{transforms:[od],enter:{literalAutolink:ed,literalAutolinkEmail:td,literalAutolinkHttp:td,literalAutolinkWww:td},exit:{literalAutolink:ad,literalAutolinkEmail:id,literalAutolinkHttp:nd,literalAutolinkWww:rd}}}function $u(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Xu,notInConstruct:Zu},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Xu,notInConstruct:Zu},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Xu,notInConstruct:Zu}]}}function ed(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function td(e){this.config.enter.autolinkProtocol.call(this,e)}function nd(e){this.config.exit.autolinkProtocol.call(this,e)}function rd(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function id(e){this.config.exit.autolinkEmail.call(this,e)}function ad(e){this.exit(e)}function od(e){Ku(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sd],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,cd]],{ignore:[`link`,`linkReference`]})}function sd(e,t,n,r,i){let a=``;if(!dd(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!ld(n)))return!1;let o=ud(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function cd(e,t,n,r){return!dd(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function ld(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function ud(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Z(e,`(`),a=Z(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function dd(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||go(n)||ho(n))&&(!t||n!==47)}bd.peek=Q;function fd(){this.buffer()}function pd(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function md(){this.buffer()}function hd(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function gd(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=co(this.sliceSerialize(e)).toLowerCase(),n.label=t}function _d(e){this.exit(e)}function vd(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=co(this.sliceSerialize(e)).toLowerCase(),n.label=t}function yd(e){this.exit(e)}function Q(){return`[`}function bd(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function xd(){return{enter:{gfmFootnoteCallString:fd,gfmFootnoteCall:pd,gfmFootnoteDefinitionLabelString:md,gfmFootnoteDefinition:hd},exit:{gfmFootnoteCallString:gd,gfmFootnoteCall:_d,gfmFootnoteDefinitionLabelString:vd,gfmFootnoteDefinition:yd}}}function Sd(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:bd},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?wd:Cd))),s(),o}}function Cd(e,t,n){return t===0?e:wd(e,t,n)}function wd(e,t,n){return(n?``:`    `)+e}var Td=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Ad.peek=jd;function Ed(){return{canContainEols:[`delete`],enter:{strikethrough:Od},exit:{strikethrough:kd}}}function Dd(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:Td}],handlers:{delete:Ad}}}function Od(e){this.enter({type:`delete`,children:[]},e)}function kd(e){this.exit(e)}function Ad(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function jd(){return`~`}function Md(e){return e.length}function $(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Md,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=Nd(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Pd(r[d]);else{let e=Pd(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&(n.alignDelimiters!==!1||i!==``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function Nd(e){return e==null?``:String(e)}function Pd(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Fd(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Id);return i(),o}function Id(e,t,n){return`>`+(n?``:` `)+e}function Ld(e,t){return Rd(e,t.inConstruct,!0)&&!Rd(e,t.notInConstruct,!1)}function Rd(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function zd(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Ld(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function Bd(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Vd(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Hd(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Ud(e,t,n,r){let i=Hd(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Vd(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Wd);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(Bd(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Wd(e,t,n){return(n?``:`    `)+e}function Gd(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Kd(e,t,n,r){let i=Gd(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function qd(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Jd(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Yd(e,t,n){let r=To(e),i=To(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Xd.peek=Zd;function Xd(e,t,n,r){let i=qd(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Yd(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Jd(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Yd(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Jd(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Zd(e,t,n){return n.options.emphasis||`*`}function Qd(e,t){let n=!1;return Ul(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&Ya(e)&&(t.options.setext||n))}function $d(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Qd(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=Jd(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}ef.peek=tf;function ef(e){return e.value||``}function tf(){return`<`}nf.peek=rf;function nf(e,t,n,r){let i=Gd(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function rf(){return`!`}af.peek=of;function af(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function of(){return`!`}sf.peek=cf;function sf(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function cf(){return"`"}function lf(e,t){let n=Ya(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}uf.peek=df;function uf(e,t,n,r){let i=Gd(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(lf(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function df(e,t,n){return lf(e,n)?`<`:`[`}ff.peek=pf;function ff(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function pf(){return`[`}function mf(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function hf(e){let t=mf(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function gf(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function _f(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function vf(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?gf(n):mf(n),s=e.ordered?o===`.`?`)`:`.`:hf(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),_f(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function yf(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function bf(e,t,n,r){let i=yf(n),a=n.bulletCurrent||mf(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function xf(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Sf=Ll([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Cf(e,t,n,r){return(e.children.some(function(e){return Sf(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function wf(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Tf.peek=Ef;function Tf(e,t,n,r){let i=wf(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Yd(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Jd(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Yd(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Jd(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Ef(e,t,n){return n.options.strong||`*`}function Df(e,t,n,r){return n.safe(e.value,r)}function Of(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function kf(e,t,n){let r=(_f(n)+(n.options.ruleSpaces?` `:``)).repeat(Of(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Af={blockquote:Fd,break:zd,code:Ud,definition:Kd,emphasis:Xd,hardBreak:zd,heading:$d,html:ef,image:nf,imageReference:af,inlineCode:sf,link:uf,linkReference:ff,list:vf,listItem:bf,paragraph:xf,root:Cf,strong:Tf,text:Df,thematicBreak:kf};function jf(){return{enter:{table:Mf,tableData:If,tableHeader:If,tableRow:Pf},exit:{codeText:Lf,table:Nf,tableData:Ff,tableHeader:Ff,tableRow:Ff}}}function Mf(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Nf(e){this.exit(e),this.data.inTable=void 0}function Pf(e){this.enter({type:`tableRow`,children:[]},e)}function Ff(e){this.exit(e)}function If(e){this.enter({type:`tableCell`,children:[]},e)}function Lf(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Rf));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Rf(e,t){return t===`|`?t:e}function zf(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return $(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Af.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Bf(){return{exit:{taskListCheckValueChecked:Hf,taskListCheckValueUnchecked:Hf,paragraph:Uf}}}function Vf(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Wf}}}function Hf(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Uf(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Wf(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Af.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Gf(){return[Qu(),xd(),Ed(),jf(),Bf()]}function Kf(e){return{extensions:[$u(),Sd(e),Dd(),zf(e),Vf()]}}var qf={tokenize:sp,partial:!0},Jf={tokenize:cp,partial:!0},Yf={tokenize:lp,partial:!0},Xf={tokenize:up,partial:!0},Zf={tokenize:dp,partial:!0},Qf={name:`wwwAutolink`,tokenize:ap,previous:fp},$f={name:`protocolAutolink`,tokenize:op,previous:pp},ep={name:`emailAutolink`,tokenize:ip,previous:mp},tp={};function np(){return{text:tp}}for(var rp=48;rp<123;)tp[rp]=ep,rp++,rp===58?rp=65:rp===91&&(rp=97);tp[43]=ep,tp[45]=ep,tp[46]=ep,tp[95]=ep,tp[72]=[ep,$f],tp[104]=[ep,$f],tp[87]=[ep,Qf],tp[119]=[ep,Qf];function ip(e,t,n){let r=this,i,a;return o;function o(t){return!hp(t)||!mp.call(r,r.previous)||gp(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return hp(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Zf,u,l)(t):t===45||t===95||uo(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&lo(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function ap(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!fp.call(r,r.previous)||gp(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(qf,e.attempt(Jf,e.attempt(Yf,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function op(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&pp.call(r,r.previous)&&!gp(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(lo(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||R(t)||V(t)||go(t)||ho(t)?n(t):e.attempt(Jf,e.attempt(Yf,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function sp(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function cp(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Xf,c,s)(t):t===null||V(t)||go(t)||t!==45&&ho(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function lp(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Xf,t,a)(o):o===null||V(o)||go(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function up(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||V(o)||go(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||V(e)||go(e)?t(e):r(e)}function a(e){return lo(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):lo(t)?(e.consume(t),o):n(t)}}function dp(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return uo(e)?n(e):t(e)}}function fp(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function pp(e){return!lo(e)}function mp(e){return!(e===47||hp(e))}function hp(e){return e===43||e===45||e===46||e===95||uo(e)}function gp(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var _p={tokenize:Tp,partial:!0};function vp(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Sp,continuation:{tokenize:Cp},exit:wp}},text:{91:{name:`gfmFootnoteCall`,tokenize:xp},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:yp,resolveTo:bp}}}}function yp(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=co(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function bp(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function xp(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||V(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(co(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return V(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Sp(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||V(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=co(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return V(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),U(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Cp(e,t,n){return e.check(No,t,e.attempt(_p,t,n))}function wp(e){e.exit(`gfmFootnoteDefinition`)}function Tp(e,t,n){let r=this;return U(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Ep(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&to(o,o.length,0,Eo(s,e.slice(r+1,n),t)),to(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),to(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=To(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=To(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Dp=class{constructor(){this.map=[]}add(e,t,n){Op(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Op(e,t,n,r){let i=0;if(n!==0||r.length!==0){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function kp(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Ap(){return{flow:{null:{name:`table`,tokenize:jp,resolveAll:Mp}}}}function jp(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):B(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):H(t)?U(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||V(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,H(t)?U(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return H(t)?U(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||B(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return H(t)?U(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||B(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||B(n)?(e.exit(`tableRow`),t(n)):H(n)?U(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||V(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Mp(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Dp;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Pp(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Np(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Np(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Np(f,t,o,i,n,d)):(o[0]=o[1],d=Np(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Pp(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=kp(t.events,n))}return e}function Np(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Fp(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Fp(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Fp(t.events,n[2]),a=Fp(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Fp(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Pp(e,t,n,r,i){let a=[],o=Fp(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Fp(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Ip={name:`tasklistCheck`,tokenize:Rp};function Lp(){return{text:{91:Ip}}}function Rp(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return V(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return B(r)?t(r):H(r)?e.check({tokenize:zp},t,n)(r):n(r)}}function zp(e,t,n){return U(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function Bp(e){return io([np(),vp(),Ep(e),Ap(),Lp()])}var Vp={};function Hp(e){let t=this,n=e||Vp,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(Bp(n)),a.push(Gf()),o.push(Kf(n))}var Up={version:2,scope:`八年级上册 L001-L025`,design_note:`原创轻漫画式科普：先用生活比喻建立直觉，再用看谁—比什么—看到什么—得结论的读图链回到可检验模型；比喻不代替定义。`,explainers:[{lesson_id:`L001`,title:`尺子不是报数员，是翻译官`,abstract_point:`测量值为什么必须同时有数值和单位`,analogy:`只说“书宽18”，就像只说“我买了3”却不说3个苹果还是3箱苹果。单位给数字配上身份证。`,physics_truth:`测量值由数值和单位共同组成。读刻度尺时先认量程和分度值，再读准确值并估读一位。`,boundary:`“估读”不是随便猜，而是在最小分度值的下一位作有依据的估计。`,memory_hook:`数字带单位，测量才落地。`,diagram_kind:`measurement`,stages:[`先看尺子的最小格`,`物体左端对准零刻线`,`读准确值，再估读一位`],reading_guide:{object:`刻度尺与被测物体`,change:`分度值、起点和末端读数`,result:`读数由准确值和估读值组成`,conclusion:`测量结果必须写数值和单位；估读不是随意猜。`}},{lesson_id:`L002`,title:`参照物像摄影师的机位`,abstract_point:`同一个人为什么既可以说在动，也可以说没动`,analogy:`坐在行驶列车里拍同桌，同桌一直在画面中央；站台摄像头拍你们，却会看见整列车远去。换机位，判断会变。`,physics_truth:`先选参照物，再比较研究对象相对它的位置是否随时间改变。位置改变叫运动，不改变叫静止。`,boundary:`参照物不是“原因”，也不能省略；运动和静止的说法必须带着参照物理解。`,memory_hook:`先问“相对谁”，再说动不动。`,diagram_kind:`reference-frame`,stages:[`车内看：人与座椅位置不变`,`站台看：人与站台位置改变`,`两个判断都对，参照物不同`],reading_guide:{object:`乘客的位置`,change:`分别以座椅和站台为参照`,result:`相对座椅不变，相对站台改变`,conclusion:`运动和静止取决于研究对象相对参照物的位置是否改变。`}},{lesson_id:`L003`,title:`速度是“每秒通行证”`,abstract_point:`路程和时间都不同时怎样公平比较快慢`,analogy:`两位跑者成绩单不同，裁判把成绩都换算成“每1秒跑多少米”，就像把不同包装统一成单价再比较。`,physics_truth:`速度表示运动快慢，数值等于路程与时间之比：v=s/t。5 m/s表示每秒通过5 m。`,boundary:`速度不是只看路程，也不是只看时间；路程和时间必须属于同一段运动。`,memory_hook:`先统一到每1秒，再比较谁更快。`,diagram_kind:`speed`,stages:[`甲跑10 m用2 s`,`把路程平均分到每1 s`,`得到5 m/s，再和别人比较`],reading_guide:{object:`同一运动物体`,change:`每段都取相同的1秒`,result:`1秒内路程越大，运动越快`,conclusion:`速度就是单位时间通过的路程，v=s/t。`}},{lesson_id:`L004`,title:`平均速度是整段旅程的总账`,abstract_point:`为什么不能把各段速度直接平均`,analogy:`旅行中有快跑、慢走和停留。结账时不能只平均几张“速度标签”，要把全程路程和全程时间一起算总账。`,physics_truth:`某段运动的平均速度等于这段总路程除以总时间，停车时间若属于研究过程也要计入总时间。`,boundary:`平均速度只描述整体快慢，不代表物体每一时刻都以这个速度运动。`,memory_hook:`平均速度看总路程、总时间。`,diagram_kind:`average-speed`,stages:[`第一段快，第二段慢`,`把各段路程相加、时间相加`,`只做一次总路程÷总时间`],reading_guide:{object:`一段完整行程`,change:`把快行、停留和慢行都计入`,result:`得到总路程和总时间`,conclusion:`平均速度必须用总路程除以总时间，不能把各段速度直接平均。`}},{lesson_id:`L005`,title:`路程和时间要结成同桌`,abstract_point:`测速度时为什么路程和时间必须一一配对`,analogy:`不能拿小明的身高配小华的体重做“身体指数”。测小车也一样，同一段路程必须配同一段经历的时间。`,physics_truth:`确定同一起点和终点，测出这段路程及小车通过这段路程的时间，再用v=s/t计算。`,boundary:`计时起止点与测距区间不一致，会产生系统性的配对错误。`,memory_hook:`同一段，成一对，再相除。`,diagram_kind:`paired-measurement`,stages:[`在斜面标出A、B两点`,`测AB并计小车从A到B的时间`,`把同一段的s和t配对计算`],reading_guide:{object:`小车在同一段斜面上的运动`,change:`配对测同一段的路程和时间`,result:`各段算出的速度可比较`,conclusion:`只有同一路段的s和t配对，才能得到该段速度。`}},{lesson_id:`L006`,title:`声音是一场接力赛`,abstract_point:`声音怎样从振动物体传到耳朵`,analogy:`鼓面先推旁边空气，空气粒子再把扰动传给邻居，像看台上的人依次做“人浪”；人没有跑到终点，扰动却传了过去。`,physics_truth:`声音由物体振动产生，并通过介质传播。真空不能传声；空气粒子主要在平衡位置附近振动，不随声音整体跑到耳朵。`,boundary:`声波传播的是振动状态和能量，不是把一团空气从声源搬到耳朵。`,memory_hook:`声源振，介质传，耳朵收。`,diagram_kind:`sound-chain`,stages:[`鼓面振动`,`邻近空气依次受到扰动`,`扰动到达耳膜，引起耳膜振动`],reading_guide:{object:`声源、介质和耳朵`,change:`让声源振动并改变传播条件`,result:`介质传递扰动，耳朵接收到声音`,conclusion:`声音由振动产生，传播需要介质；真空不能传声。`}},{lesson_id:`L007`,title:`声音也有身高、力气和脸`,abstract_point:`音调、响度和音色为什么不能混为一谈`,analogy:`音调像声音的“高矮”，响度像说话的“力气”，音色像声音的“脸”；同一句话高低、大小、是谁说，是三件不同的事。`,physics_truth:`音调主要由频率决定，响度与振幅和距离等有关，音色由声源结构及振动特征决定。`,boundary:`波形画得更高通常表示振幅更大，不等于音调更高；音调高低看振动快慢。`,memory_hook:`快慢管高低，幅度管强弱，波形认身份。`,diagram_kind:`sound-traits`,stages:[`数疏密：频率决定音调`,`看高矮：振幅影响响度`,`看形状：不同声源有不同音色`],reading_guide:{object:`声音的波形与听感`,change:`分别比较频率、振幅和波形`,result:`对应音调、响度和音色的差别`,conclusion:`频率决定音调，振幅影响响度，波形特征反映音色。`}},{lesson_id:`L008`,title:`治理噪声像拦截快递`,abstract_point:`为什么控制噪声有三个位置`,analogy:`不想收到吵闹“包裹”，可以让发件人别发、在路上拦住，或让收件人戴上防护。`,physics_truth:`噪声控制可从声源处减弱、传播过程中减弱、接收处减弱三方面入手。声音还可传递信息和能量。`,boundary:`同一种声音是否构成噪声还与环境和人的需要有关，但声强过大会损害健康。`,memory_hook:`源头、路上、耳边，三处都能拦。`,diagram_kind:`noise-chain`,stages:[`声源：降低机器振动`,`传播：隔声、吸声`,`接收：耳塞等个人防护`],reading_guide:{object:`声源—传播途径—接收端`,change:`在三处分别采取措施`,result:`接收端获得的信息或噪声强弱改变`,conclusion:`声音能传信息和能量；控制噪声要先判断作用环节。`}},{lesson_id:`L009`,title:`温度计是热胀冷缩的翻译官`,abstract_point:`看不见的冷热程度怎样变成刻度读数`,analogy:`温度躲在幕后，液柱像它的“代言人”：温度改变，测温物质的某个性质规律变化，刻度把变化翻译成数值。`,physics_truth:`常见液体温度计利用测温液体热胀冷缩。使用时要看量程和分度值，玻璃泡充分接触被测物，示数稳定后视线与液柱端面相平。`,boundary:`温度表示冷热程度，不等同于物体含有“多少热”；读数时玻璃泡不能碰容器底或壁。`,memory_hook:`看范围、泡进去、等稳定、平视线。`,diagram_kind:`thermometer`,stages:[`温度变化让液柱升降`,`刻度把液柱位置变成数值`,`平视液柱顶端读数`],reading_guide:{object:`温度计内的测温液体`,change:`让温度改变并观察液柱`,result:`液柱位置随温度规律变化`,conclusion:`温度计把冷热程度转换为可读刻度，读数时视线要与液柱顶端相平。`}},{lesson_id:`L010`,title:`固液气是物质的三间房`,abstract_point:`六种物态变化怎样放进一张地图`,analogy:`同一种物质会在“固态房、液态房、气态房”之间搬家。箭头方向决定搬家的名字，不能只背六个散乱词。`,physics_truth:`固→液熔化，液→固凝固，液→气汽化，气→液液化，固→气升华，气→固凝华。`,boundary:`状态变化时物质种类通常不变；箭头方向反过来，名称和吸放热也随之改变。`,memory_hook:`先画三态，再沿箭头叫名字。`,diagram_kind:`state-map`,stages:[`摆好固、液、气三个状态`,`沿相邻状态箭头命名四种变化`,`补上固态和气态间的升华、凝华`],reading_guide:{object:`同一种物质`,change:`改变吸放热条件`,result:`固、液、气三态互相转化`,conclusion:`判断物态变化要先写初态和末态，再按箭头命名。`}},{lesson_id:`L011`,title:`晶体熔化时，热量先忙着“拆队形”`,abstract_point:`持续吸热时温度为什么可能不升高`,analogy:`冰粒子原来排着整齐队伍。到熔点后，送来的能量先用来松开原有结构，而不是继续提高温度计读数。`,physics_truth:`晶体达到熔点后继续吸热，在完全熔化前温度保持不变；非晶体没有确定熔点，软化过程中温度通常继续变化。`,boundary:`温度不变不表示没有吸热，也不表示粒子停止运动。`,memory_hook:`平台仍吸热，能量在改状态。`,diagram_kind:`melting-curve`,stages:[`固体吸热，温度升高`,`到熔点后出现平台`,`熔化完成，液体温度再升高`],reading_guide:{object:`晶体熔化过程`,change:`持续加热并按时测温`,result:`熔化阶段吸热但温度保持不变`,conclusion:`晶体有确定熔点；平台段仍在吸热，只是温度不升。`}},{lesson_id:`L012`,title:`沸腾像全锅一起开“气泡电梯”`,abstract_point:`沸腾和蒸发有什么本质区别`,analogy:`蒸发像只有水面的人悄悄离场；沸腾像锅内到处开启气泡电梯，液体内部和表面同时有分子进入气态。`,physics_truth:`沸腾是在一定温度下、液体内部和表面同时发生的剧烈汽化。继续加热时液体吸热，温度保持在沸点附近。`,boundary:`沸点会随液面上方气压改变；看到气泡不一定已经稳定沸腾，要结合温度和气泡变化判断。`,memory_hook:`内部表面一起汽化，吸热但温度近似不变。`,diagram_kind:`boiling-curve`,stages:[`沸腾前：底部小气泡上升变小`,`沸腾时：气泡上升变大并破裂`,`温度曲线进入沸点平台`],reading_guide:{object:`正在加热的水`,change:`比较沸腾前和沸腾时的温度`,result:`沸腾时气泡剧烈形成，温度近似不变`,conclusion:`液体达到沸点并继续吸热才沸腾；沸腾时温度保持不变。`}},{lesson_id:`L013`,title:`蒸发是分子中的“尖子生先离场”`,abstract_point:`蒸发为什么能制冷，液化为什么放热`,analogy:`液面上运动较快的分子更容易逃出去，留下来的平均“活跃程度”下降，所以液体变凉；气体分子回到液体时会把能量交给周围。`,physics_truth:`蒸发可在任何温度下发生，液体蒸发吸热；降低温度或压缩体积可使气体液化，液化放热。`,boundary:`“白气”通常是悬浮小液滴，不是看得见的水蒸气；水蒸气本身无色透明。`,memory_hook:`蒸发带走能量，液化交出能量。`,diagram_kind:`phase-energy`,stages:[`液面快分子逃出`,`液体从周围吸热而降温`,`气体液化时向周围放热`],reading_guide:{object:`液态水与水蒸气`,change:`改变温度、表面积或空气流动`,result:`蒸发快慢变化；水蒸气遇冷成小水滴`,conclusion:`汽化吸热，液化放热；白雾是小液滴，不是水蒸气。`}},{lesson_id:`L014`,title:`水循环是一条不断换装的路线`,abstract_point:`升华、凝华和自然界水循环怎样连接`,analogy:`水分子像旅行者，会换成水、冰或水蒸气的“衣服”。有时不经过液态，直接在固态和气态之间换装。`,physics_truth:`固态直接变气态叫升华，气态直接变固态叫凝华。自然界水循环包含汽化、液化、凝固、熔化、升华和凝华等过程。`,boundary:`冬天口中的“白气”是液化小水滴；霜是水蒸气凝华形成，不是液态水先结冰。`,memory_hook:`先认初态和末态，再给变化命名。`,diagram_kind:`water-cycle`,stages:[`地表水汽化进入空气`,`水蒸气液化或凝华形成云滴、冰晶`,`降水回到地表继续循环`],reading_guide:{object:`水在固态与气态间的变化`,change:`比较物质的初态和末态`,result:`可跳过液态直接变化`,conclusion:`固态直接变气态叫升华，气态直接变固态叫凝华。`}},{lesson_id:`L015`,title:`光线是给光画的导航箭头`,abstract_point:`为什么看不见光的路径，却能用光线研究`,analogy:`导航软件用一条箭头线表示汽车的路线，箭头线不是汽车本身；物理光线也只是表示传播路径和方向的模型。`,physics_truth:`光在同种均匀介质中沿直线传播。光线是带箭头的几何线，用来表示光的传播路径和方向。`,boundary:`光线是模型，不是真实存在的细线；“沿直线传播”有同种、均匀介质的条件。`,memory_hook:`实物发光，模型画线，箭头指方向。`,diagram_kind:`light-ray`,stages:[`光源向各方向发光`,`用三孔实验筛出同一直线路径`,`画带箭头的光线表示传播`],reading_guide:{object:`光在同一种均匀介质中的路径`,change:`移动中间带孔纸板`,result:`三孔共线时光才能通过`,conclusion:`光在同种均匀介质中沿直线传播，光线箭头表示传播方向。`}},{lesson_id:`L016`,title:`法线是镜面上的裁判中线`,abstract_point:`反射角为什么必须相对法线测量`,analogy:`球撞到边界后反弹，裁判先在撞点画一条垂直中线，再比较来和去的角度。镜面倾斜时，中线也跟着变。`,physics_truth:`反射光线、入射光线和法线在同一平面；两线分居法线两侧；反射角等于入射角。角均相对法线测量。`,boundary:`入射角和反射角不是光线与镜面的夹角；法线是辅助线，不是一束光。`,memory_hook:`过入射点画法线，角都向法线量。`,diagram_kind:`reflection`,stages:[`先找入射点并作法线`,`标出入射角`,`在法线另一侧画等大的反射角`],reading_guide:{object:`入射光线、法线和反射光线`,change:`改变入射光线相对法线的角度`,result:`反射光线随之改变且两角相等`,conclusion:`反射角等于入射角；角度都从法线量起。`}},{lesson_id:`L017`,title:`镜子像一台“对称复印机”`,abstract_point:`平面镜的虚像在哪里、为什么接不到`,analogy:`镜子把物体按镜面做一次对称复印，像仿佛站在镜后；但镜后没有真实光线会聚，所以屏幕接不到。`,physics_truth:`平面镜成正立、等大的虚像，像与物关于镜面对称，像距等于物距，像物连线垂直镜面。`,boundary:`眼睛看到像，是反射光反向延长线相交造成的视觉判断；虚像不能用光屏承接。`,memory_hook:`等大、正立、虚像，像物关于镜面对称。`,diagram_kind:`mirror-symmetry`,stages:[`从物体画两条入射光线`,`按反射定律画反射光线`,`反向延长线在镜后相交成虚像`],reading_guide:{object:`物体、平面镜和像`,change:`改变物体到镜面的距离`,result:`像距同步改变且始终与物距相等`,conclusion:`平面镜成等大正立虚像，像与物关于镜面对称。`}},{lesson_id:`L018`,title:`折射像小车斜着驶入慢速路面`,abstract_point:`光进入另一种介质时为什么偏折`,analogy:`小车斜着从光滑地面驶进沙地，一侧轮子先减速，车头就会转向。光跨过不同介质界面时，传播方向通常也会改变。`,physics_truth:`光从一种介质斜射入另一种介质时通常发生折射。空气斜射入水或玻璃时，折射光线通常向法线偏折；反向传播时光路可逆。`,boundary:`垂直入射时方向不变但传播介质已改变；“向法线偏”不是所有方向都通用，要先认入射介质。`,memory_hook:`先画界面和法线，再判断向哪边偏。`,diagram_kind:`refraction`,stages:[`画界面与入射点法线`,`空气斜射入水，折射光向法线偏`,`沿原路反向照射，光路可逆`],reading_guide:{object:`斜射到界面的光线`,change:`让光从一种介质斜射入另一种介质`,result:`传播方向在界面处改变`,conclusion:`光斜入不同介质通常发生折射；从空气斜入水时折向法线。`}},{lesson_id:`L019`,title:`凸透镜是“收队长”，凹透镜是“散队长”`,abstract_point:`透镜如何改变光束方向`,analogy:`一排平行光像放学队伍：凸透镜把队伍召集到焦点，凹透镜让队伍散开，反向延长后仿佛来自虚焦点。`,physics_truth:`凸透镜对光有会聚作用，凹透镜对光有发散作用。通过光心、平行主轴、经过焦点等特殊光线可建立成像模型。`,boundary:`会聚作用不等于所有折射光一定相交；发散光线的反向延长线相交于虚焦点。`,memory_hook:`凸会聚、凹发散；先找主轴、光心和焦点。`,diagram_kind:`lenses`,stages:[`平行光射向凸透镜`,`折射后会聚于实焦点`,`平行光射向凹透镜后发散`],reading_guide:{object:`平行光束与透镜`,change:`换用凸透镜或凹透镜`,result:`光束分别会聚或发散`,conclusion:`凸透镜使平行光会聚，凹透镜使平行光发散；虚焦点是反向延长线交点。`}},{lesson_id:`L020`,title:`凸透镜成像像“跨越两道门”`,abstract_point:`物距变化为什么会让像的性质改变`,analogy:`物体从远处靠近透镜，会依次跨过2f和f两道门。每跨过一道门，像的大小、位置或虚实就会换一套规则。`,physics_truth:`u>2f成倒立缩小实像；u=2f成倒立等大实像；f<u<2f成倒立放大实像；u=f不成清晰像；u<f成正立放大虚像。`,boundary:`实像可由光屏承接，虚像不能；“物近像远像变大”只适用于物体在焦点外并向焦点靠近的过程。`,memory_hook:`先判物距区间，再谈像的性质。`,diagram_kind:`image-zones`,stages:[`在主轴上标出F和2F`,`把物体放进对应物距区间`,`用两条特殊光线确定像的位置和性质`],reading_guide:{object:`蜡烛、凸透镜和光屏`,change:`改变物距与焦距的关系`,result:`像的位置、大小和虚实发生变化`,conclusion:`先判断物距所在区间，再判断像的性质；实像可承接，虚像不可。`}},{lesson_id:`L021`,title:`同一片凸透镜，三份不同工作`,abstract_point:`照相机、投影仪和放大镜为什么都用凸透镜`,analogy:`凸透镜像一位多岗位员工：物体站得远，它做“缩小照相师”；站在F和2F之间，它做“放大投影师”；走进F以内，它做“正立放大镜”。`,physics_truth:`照相机利用倒立缩小实像，投影仪利用倒立放大实像，放大镜利用正立放大虚像；眼睛通过改变晶状体调焦。`,boundary:`应用名称不能替代物距判断；投影仪在屏上得到的是实像，放大镜看到的是虚像。`,memory_hook:`远处照相，中间投影，焦内放大。`,diagram_kind:`optical-apps`,stages:[`u>2f：照相机`,`f<u<2f：投影仪`,`u<f：放大镜`],reading_guide:{object:`凸透镜成像装置`,change:`把物体放在不同物距区间`,result:`得到缩小实像、放大实像或放大虚像`,conclusion:`照相机、投影仪、放大镜的差别来自物距区间不同。`}},{lesson_id:`L022`,title:`质量是物质的“库存量”`,abstract_point:`物体变形、搬家或改变状态后质量为什么通常不变`,analogy:`一团橡皮泥捏成小鸭，仓库里的“材料库存”并没有凭空多或少；只是形状变了。`,physics_truth:`质量表示物体所含物质的多少。通常不随形状、状态和位置改变；用天平通过平衡比较质量。`,boundary:`质量不是重力，也不是大小或体积；若物质逸出或加入，质量会改变。`,memory_hook:`只换造型不换料，质量通常不变。`,diagram_kind:`mass-invariance`,stages:[`同一团橡皮泥放上天平`,`改变形状但不增减材料`,`天平示数仍表示同样的质量`],reading_guide:{object:`同一个物体`,change:`改变形状、状态或位置`,result:`所含物质多少不变，质量不变`,conclusion:`质量是物体本身的属性，通常不随形状、状态和位置改变。`}},{lesson_id:`L023`,title:`密度是材料的“拥挤指数”`,abstract_point:`相同体积的不同物质为什么质量不同`,analogy:`两辆一样大的电梯，一辆只站几个人，一辆挤满人。体积相同，里面“装得多不多”不同；密度描述单位体积里有多少质量。`,physics_truth:`密度等于质量与体积之比ρ=m/V，是物质的一种特性。同种物质在一定状态下质量与体积比值近似不变。`,boundary:`密度大不等于物体质量一定大；比较密度时必须控制体积相同或计算单位体积的质量。`,memory_hook:`同体积比质量，单位体积看密度。`,diagram_kind:`density-cubes`,stages:[`取两个同体积方块`,`比较它们的质量`,`换算成每1 cm³的质量来描述材料`],reading_guide:{object:`同体积的不同物质`,change:`比较各自质量`,result:`质量较大的物质单位体积质量更大`,conclusion:`密度表示单位体积的质量，ρ=m/V；必须比较同种状态下的物质。`}},{lesson_id:`L024`,title:`测密度要给同一件物体建双档案`,abstract_point:`为什么质量和体积必须来自同一份样品`,analogy:`身份证上的身高和体重必须属于同一个人。测密度也要给同一块物体登记质量档案和体积档案。`,physics_truth:`用天平测同一样品的质量，用量筒直接或排水测其体积，再计算ρ=m/V。排水法体积为放入前后示数之差。`,boundary:`吸水、漂浮、可溶或体积过大的物体不能直接照搬普通排水法，必须调整实验方案。`,memory_hook:`同一样品，两份数据，最后相除。`,diagram_kind:`density-measurement`,stages:[`天平测质量m`,`量筒前后读数求V=V₂−V₁`,`把同一样品的m和V代入ρ=m/V`],reading_guide:{object:`同一块不规则固体`,change:`先称质量，再用排水法测体积`,result:`排开水的体积等于浸没固体体积`,conclusion:`同一物体的m与V必须配对，再用ρ=m/V计算密度。`}},{lesson_id:`L025`,title:`看材料要像侦探一样跨尺度`,abstract_point:`宏观性质、微观结构和技术用途怎样连接`,analogy:`侦探不只看物体“长什么样”，还会追问内部怎样排列、因此有什么本领、适合完成什么任务。`,physics_truth:`物质的宏观属性与其组成、结构有关，材料选择应依据性能、使用条件、资源与环境影响等证据。`,boundary:`微观结构图多是模型，不按真实比例绘制；不能只凭一个性质断定所有用途。`,memory_hook:`结构影响属性，属性服务用途，结论要有证据。`,diagram_kind:`scale-chain`,stages:[`宏观看性质：硬、软、导电等`,`缩小尺度看组成与结构`,`根据任务条件选择合适材料`],reading_guide:{object:`材料的结构、属性和用途`,change:`比较材料尺度结构与物理属性`,result:`不同属性适合不同技术用途`,conclusion:`选择材料要建立结构—属性—用途证据链，不能只凭外观。`}}]};function Wp({explainer:e,phase:t}){let n=[{label:`① 看谁`,value:e.reading_guide.object,active:t===0},{label:`② 改什么 / 比什么`,value:e.reading_guide.change,active:t===1},{label:`③ 看到什么`,value:e.reading_guide.result,active:t===2}];return(0,M.jsxs)(`div`,{className:`principle-guide`,"aria-label":`读图步骤`,children:[(0,M.jsx)(`div`,{className:`principle-flow`,children:n.map((e,t)=>(0,M.jsxs)(`div`,{className:`principle-step ${e.active?`active`:``}`,children:[(0,M.jsx)(`strong`,{children:e.label}),(0,M.jsx)(`span`,{children:e.value}),t<n.length-1&&(0,M.jsx)(`b`,{"aria-hidden":`true`,children:`→`})]},e.label))}),(0,M.jsxs)(`div`,{className:`principle-conclusion`,children:[(0,M.jsx)(`span`,{children:`所以`}),(0,M.jsx)(`strong`,{children:e.reading_guide.conclusion})]})]})}var Gp=Up.explainers,Kp={measurement:[`📏`,`🔢`,`🏷️`],"reference-frame":[`🚆`,`🧒`,`🚉`],speed:[`🏃`,`⏱️`,`5 m/s`],"average-speed":[`🚴`,`🛑`,`总账`],"paired-measurement":[`🛝`,`📐`,`⏱️`],"sound-chain":[`🥁`,`〰️`,`👂`],"sound-traits":[`🎵`,`🔊`,`🎻`],"noise-chain":[`🔨`,`🧱`,`🎧`],thermometer:[`🌡️`,`↕️`,`👀`],"state-map":[`🧊`,`💧`,`☁️`],"melting-curve":[`🧊`,`♨️`,`💧`],"boiling-curve":[`💧`,`🫧`,`100℃`],"phase-energy":[`💧`,`💨`,`♨️`],"water-cycle":[`🌊`,`☁️`,`🌧️`],"light-ray":[`🔦`,`➡️`,`🌑`],reflection:[`🔦`,`🪞`,`↗️`],"mirror-symmetry":[`🧍`,`🪞`,`🧍`],refraction:[`🔦`,`🌊`,`↘️`],lenses:[`➡️`,`🔍`,`🎯`],"image-zones":[`2F`,`F`,`👁️`],"optical-apps":[`📷`,`📽️`,`🔍`],"mass-invariance":[`🟠`,`⚖️`,`🦆`],"density-cubes":[`🧊`,`⚖️`,`🧱`],"density-measurement":[`⚖️`,`🧪`,`ρ`],"scale-chain":[`🔎`,`🧬`,`🛠️`]};function qp({yLabel:e=`温度`,xLabel:t=`时间`}){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`92`,y1:`238`,x2:`356`,y2:`238`,className:`model-line`}),(0,M.jsx)(`line`,{x1:`92`,y1:`238`,x2:`92`,y2:`52`,className:`model-line`}),(0,M.jsx)(`text`,{x:`324`,y:`264`,className:`model-label`,children:t}),(0,M.jsx)(`text`,{x:`35`,y:`60`,className:`model-label`,children:e})]})}function Jp({kind:e,phase:t}){let n=e=>t>=e?`model-active`:`model-muted`,r=`arrow-${e}`;return e===`reference-frame`?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":`参照物位置对比图`,children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:r,markerWidth:`8`,markerHeight:`8`,refX:`7`,refY:`4`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L8,4 L0,8 z`})})}),(0,M.jsx)(`rect`,{x:`80`,y:`105`,width:`350`,height:`90`,rx:`18`,className:`model-object`}),(0,M.jsx)(`circle`,{cx:`255`,cy:`105`,r:`24`,className:`model-person`}),(0,M.jsx)(`text`,{x:`236`,y:`112`,children:`乘客`}),(0,M.jsx)(`rect`,{x:`215`,y:`145`,width:`80`,height:`20`,rx:`6`,className:`model-seat`}),(0,M.jsx)(`text`,{x:`226`,y:`185`,children:`相对座椅：位置不变`}),(0,M.jsx)(`line`,{x1:`445`,y1:`210`,x2:`650`,y2:`210`,className:`model-ground`}),(0,M.jsx)(`rect`,{x:`540`,y:`165`,width:`12`,height:`45`,className:`model-station`}),(0,M.jsx)(`line`,{x1:`420`,y1:`130`,x2:`615`,y2:`130`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`485`,y:`112`,className:n(1),children:`相对站台：位置改变`})]}):e===`speed`||e===`average-speed`?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":e===`speed`?`速度单位时间图`:`平均速度总过程图`,children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:r,markerWidth:`8`,markerHeight:`8`,refX:`7`,refY:`4`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L8,4 L0,8 z`})})}),e===`speed`?(0,M.jsxs)(M.Fragment,{children:[[0,1,2,3,4].map(e=>(0,M.jsxs)(`g`,{className:n(+(e>0)),children:[(0,M.jsx)(`rect`,{x:75+e*110,y:`116`,width:`82`,height:`42`,rx:`8`}),(0,M.jsx)(`text`,{x:98+e*110,y:`144`,children:`1秒`})]},e)),(0,M.jsx)(`line`,{x1:`70`,y1:`190`,x2:`630`,y2:`190`,className:`model-line`,markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`250`,y:`226`,className:n(2),children:`每格5 m → 速度5 m/s`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`80`,y1:`170`,x2:`650`,y2:`170`,className:`model-line`,markerEnd:`url(#${r})`}),(0,M.jsx)(`rect`,{x:`90`,y:`112`,width:`205`,height:`38`,rx:`8`,className:`model-fast`}),(0,M.jsx)(`text`,{x:`145`,y:`138`,children:`快行：s₁、t₁`}),(0,M.jsx)(`rect`,{x:`310`,y:`112`,width:`125`,height:`38`,rx:`8`,className:`model-stop`}),(0,M.jsx)(`text`,{x:`342`,y:`138`,children:`停留t₂`}),(0,M.jsx)(`rect`,{x:`450`,y:`112`,width:`175`,height:`38`,rx:`8`,className:`model-slow`}),(0,M.jsx)(`text`,{x:`494`,y:`138`,children:`慢行：s₃、t₃`}),(0,M.jsx)(`text`,{x:`170`,y:`224`,className:n(2),children:`平均速度 = 总路程 ÷ 总时间`})]})]}):e===`sound-chain`?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":`声音振动传播链`,children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:r,markerWidth:`8`,markerHeight:`8`,refX:`7`,refY:`4`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L8,4 L0,8 z`})})}),(0,M.jsx)(`ellipse`,{cx:`95`,cy:`150`,rx:`45`,ry:`72`,className:`model-drum`}),(0,M.jsx)(`path`,{d:`M95 88 Q78 150 95 212 Q112 150 95 88`,className:`model-wave`}),[0,1,2,3,4,5,6].map(e=>(0,M.jsx)(`circle`,{cx:190+e*58,cy:150+(e%2?10:-10),r:`12`,className:n(e<2?0:e<5?1:2)},e)),(0,M.jsx)(`path`,{d:`M600 90 Q675 150 600 210 Q630 150 600 90`,className:`model-ear`}),(0,M.jsx)(`line`,{x1:`145`,y1:`150`,x2:`580`,y2:`150`,className:`model-arrow`,markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`270`,y:`245`,children:`粒子原地附近振动，扰动向前传播`})]}):e===`sound-traits`?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":`音调响度音色波形对比`,children:[(0,M.jsx)(`line`,{x1:`40`,y1:`80`,x2:`680`,y2:`80`,className:`model-axis`}),(0,M.jsx)(`path`,{d:`M45 80 Q65 25 85 80 T125 80 T165 80 T205 80`,className:`model-wave`}),(0,M.jsx)(`text`,{x:`245`,y:`86`,children:`更密 → 频率高 → 音调高`}),(0,M.jsx)(`line`,{x1:`40`,y1:`160`,x2:`680`,y2:`160`,className:`model-axis`}),(0,M.jsx)(`path`,{d:`M45 160 Q85 80 125 160 T205 160`,className:n(1)}),(0,M.jsx)(`text`,{x:`245`,y:`166`,className:n(1),children:`振幅大 → 响度通常大`}),(0,M.jsx)(`line`,{x1:`40`,y1:`240`,x2:`680`,y2:`240`,className:`model-axis`}),(0,M.jsx)(`path`,{d:`M45 240 Q65 195 85 240 Q105 270 125 240 Q145 185 165 240 Q185 260 205 240`,className:n(2)}),(0,M.jsx)(`text`,{x:`245`,y:`246`,className:n(2),children:`形状不同 → 音色不同`})]}):e===`state-map`||e===`water-cycle`?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":e===`state-map`?`三态六种变化图`:`水循环状态变化图`,children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:r,markerWidth:`8`,markerHeight:`8`,refX:`7`,refY:`4`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L8,4 L0,8 z`})})}),e===`state-map`?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`circle`,{cx:`120`,cy:`150`,r:`62`,className:`model-solid`}),(0,M.jsx)(`text`,{x:`98`,y:`157`,children:`固态`}),(0,M.jsx)(`circle`,{cx:`360`,cy:`150`,r:`62`,className:`model-liquid`}),(0,M.jsx)(`text`,{x:`338`,y:`157`,children:`液态`}),(0,M.jsx)(`circle`,{cx:`600`,cy:`150`,r:`62`,className:`model-gas`}),(0,M.jsx)(`text`,{x:`578`,y:`157`,children:`气态`}),(0,M.jsx)(`path`,{d:`M185 125 L292 125`,className:`model-arrow`,markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`213`,y:`112`,children:`熔化`}),(0,M.jsx)(`path`,{d:`M295 178 L188 178`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`213`,y:`205`,className:n(1),children:`凝固`}),(0,M.jsx)(`path`,{d:`M425 125 L532 125`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`453`,y:`112`,className:n(1),children:`汽化`}),(0,M.jsx)(`path`,{d:`M535 178 L428 178`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`453`,y:`205`,className:n(1),children:`液化`}),(0,M.jsx)(`path`,{d:`M155 82 Q360 6 565 82`,className:n(2),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`337`,y:`42`,className:n(2),children:`升华`}),(0,M.jsx)(`path`,{d:`M565 220 Q360 294 155 220`,className:n(2),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`337`,y:`282`,className:n(2),children:`凝华`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M55 220 Q170 175 280 220 T500 220 T700 220`,className:`model-water`}),(0,M.jsx)(`text`,{x:`70`,y:`260`,children:`海洋、河湖、地表`}),(0,M.jsx)(`ellipse`,{cx:`420`,cy:`78`,rx:`116`,ry:`42`,className:`model-cloud`}),(0,M.jsx)(`text`,{x:`385`,y:`85`,children:`云滴 / 冰晶`}),(0,M.jsx)(`path`,{d:`M180 210 Q190 95 335 85`,className:`model-arrow`,markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`160`,y:`125`,children:`汽化`}),(0,M.jsx)(`path`,{d:`M485 115 Q560 160 590 210`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`545`,y:`150`,className:n(1),children:`降水`}),(0,M.jsx)(`text`,{x:`310`,y:`145`,className:n(2),children:`液化 / 凝华`})]})]}):e===`melting-curve`||e===`boiling-curve`?(0,M.jsxs)(`svg`,{viewBox:`0 0 440 300`,role:`img`,"aria-label":e===`melting-curve`?`晶体熔化曲线`:`水沸腾曲线`,children:[(0,M.jsx)(qp,{}),(0,M.jsx)(`path`,{d:e===`melting-curve`?`M105 220 L190 150 L285 150 L345 82`:`M105 220 Q190 105 275 88 L350 88`,className:`model-curve`}),(0,M.jsx)(`line`,{x1:e===`melting-curve`?`188`:`266`,y1:e===`melting-curve`?`150`:`88`,x2:`350`,y2:e===`melting-curve`?`150`:`88`,className:n(1)}),(0,M.jsx)(`text`,{x:`195`,y:e===`melting-curve`?`136`:`72`,className:n(1),children:e===`melting-curve`?`熔化平台：吸热，温度不变`:`沸点平台：继续吸热`})]}):[`light-ray`,`reflection`,`mirror-symmetry`,`refraction`,`lenses`,`image-zones`].includes(e)?(0,M.jsxs)(`svg`,{viewBox:`0 0 720 320`,role:`img`,"aria-label":`光学模型图`,children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:r,markerWidth:`8`,markerHeight:`8`,refX:`7`,refY:`4`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L8,4 L0,8 z`})})}),e===`light-ray`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`circle`,{cx:`90`,cy:`160`,r:`30`,className:`model-light`}),(0,M.jsx)(`text`,{x:`65`,y:`215`,children:`光源`}),[270,360,450].map((e,t)=>(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`rect`,{x:e,y:`80`,width:`12`,height:`160`,className:`model-screen`}),(0,M.jsx)(`circle`,{cx:e+6,cy:`160`,r:`11`,className:`model-hole`}),(0,M.jsx)(`text`,{x:e-3,y:`265`,children:t+1})]},e)),(0,M.jsx)(`line`,{x1:`120`,y1:`160`,x2:`630`,y2:`160`,className:`model-ray`,markerEnd:`url(#${r})`})]}),e===`reflection`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`85`,y1:`242`,x2:`635`,y2:`242`,className:`model-mirror`}),(0,M.jsx)(`line`,{x1:`360`,y1:`40`,x2:`360`,y2:`270`,className:`model-normal`}),(0,M.jsx)(`line`,{x1:`155`,y1:`60`,x2:`360`,y2:`242`,className:`model-ray`,markerEnd:`url(#${r})`}),(0,M.jsx)(`line`,{x1:`360`,y1:`242`,x2:`565`,y2:`60`,className:n(2),markerEnd:`url(#${r})`}),(0,M.jsx)(`path`,{d:`M312 200 A66 66 0 0 1 360 176 M360 176 A66 66 0 0 1 408 200`,className:`model-angle`}),(0,M.jsx)(`text`,{x:`278`,y:`176`,children:`入射角`}),(0,M.jsx)(`text`,{x:`410`,y:`176`,className:n(2),children:`反射角`}),(0,M.jsx)(`text`,{x:`370`,y:`55`,children:`法线`})]}),e===`mirror-symmetry`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`360`,y1:`35`,x2:`360`,y2:`285`,className:`model-mirror`}),(0,M.jsx)(`text`,{x:`340`,y:`308`,children:`镜面`}),(0,M.jsx)(`circle`,{cx:`205`,cy:`112`,r:`28`,className:`model-person`}),(0,M.jsx)(`line`,{x1:`205`,y1:`140`,x2:`205`,y2:`230`,className:`model-body`}),(0,M.jsx)(`text`,{x:`165`,y:`265`,children:`物体`}),(0,M.jsx)(`circle`,{cx:`515`,cy:`112`,r:`28`,className:`model-virtual`}),(0,M.jsx)(`line`,{x1:`515`,y1:`140`,x2:`515`,y2:`230`,className:`model-virtual`}),(0,M.jsx)(`text`,{x:`475`,y:`265`,className:n(2),children:`虚像`}),(0,M.jsx)(`line`,{x1:`205`,y1:`185`,x2:`515`,y2:`185`,className:`model-normal`}),(0,M.jsx)(`text`,{x:`310`,y:`174`,children:`物距 = 像距`})]}),e===`refraction`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{x:`0`,y:`160`,width:`720`,height:`160`,className:`model-water-fill`}),(0,M.jsx)(`line`,{x1:`0`,y1:`160`,x2:`720`,y2:`160`,className:`model-interface`}),(0,M.jsx)(`line`,{x1:`360`,y1:`30`,x2:`360`,y2:`300`,className:`model-normal`}),(0,M.jsx)(`line`,{x1:`160`,y1:`40`,x2:`360`,y2:`160`,className:`model-ray`,markerEnd:`url(#${r})`}),(0,M.jsx)(`line`,{x1:`360`,y1:`160`,x2:`465`,y2:`290`,className:n(1),markerEnd:`url(#${r})`}),(0,M.jsx)(`text`,{x:`595`,y:`65`,children:`空气`}),(0,M.jsx)(`text`,{x:`595`,y:`205`,children:`水`}),(0,M.jsx)(`text`,{x:`430`,y:`235`,className:n(1),children:`向法线偏`})]}),e===`lenses`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`40`,y1:`160`,x2:`680`,y2:`160`,className:`model-axis`}),t<2?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M340 45 Q290 160 340 275 Q390 160 340 45`,className:`model-lens`}),[105,160,215].map(e=>(0,M.jsx)(`line`,{x1:`60`,y1:e,x2:`340`,y2:e,className:`model-ray`,markerEnd:`url(#${r})`},e)),(0,M.jsx)(`line`,{x1:`340`,y1:`105`,x2:`560`,y2:`160`,className:n(1)}),(0,M.jsx)(`line`,{x1:`340`,y1:`160`,x2:`560`,y2:`160`,className:n(1)}),(0,M.jsx)(`line`,{x1:`340`,y1:`215`,x2:`560`,y2:`160`,className:n(1)}),(0,M.jsx)(`circle`,{cx:`560`,cy:`160`,r:`8`,className:`model-focus`}),(0,M.jsx)(`text`,{x:`550`,y:`190`,children:`实焦点 F`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M315 45 Q365 160 315 275 L365 275 Q315 160 365 45 Z`,className:`model-lens`}),[105,160,215].map(e=>(0,M.jsx)(`line`,{x1:`60`,y1:e,x2:`315`,y2:e,className:`model-ray`,markerEnd:`url(#${r})`},e)),(0,M.jsx)(`line`,{x1:`315`,y1:`105`,x2:`610`,y2:`55`,className:`model-ray`}),(0,M.jsx)(`line`,{x1:`315`,y1:`160`,x2:`610`,y2:`160`,className:`model-ray`}),(0,M.jsx)(`line`,{x1:`315`,y1:`215`,x2:`610`,y2:`265`,className:`model-ray`}),(0,M.jsx)(`line`,{x1:`315`,y1:`105`,x2:`155`,y2:`132`,className:`model-normal`}),(0,M.jsx)(`line`,{x1:`315`,y1:`215`,x2:`155`,y2:`188`,className:`model-normal`}),(0,M.jsx)(`circle`,{cx:`155`,cy:`160`,r:`7`,className:`model-focus`}),(0,M.jsx)(`text`,{x:`115`,y:`190`,children:`虚焦点 F`})]})]}),e===`image-zones`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`40`,y1:`180`,x2:`680`,y2:`180`,className:`model-axis`}),(0,M.jsx)(`path`,{d:`M360 55 Q320 180 360 305 Q400 180 360 55`,className:`model-lens`}),[120,240,480,600].map((e,t)=>(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`line`,{x1:e,y1:`165`,x2:e,y2:`195`,className:`model-tick`}),(0,M.jsx)(`text`,{x:e-14,y:`220`,children:t===0||t===3?`2F`:`F`})]},e)),(0,M.jsx)(`path`,{d:`M80 180 L80 75 L68 93 M80 75 L92 93`,className:`model-object-arrow`}),(0,M.jsx)(`path`,{d:`M520 180 L520 230 L508 212 M520 230 L532 212`,className:n(2)}),(0,M.jsx)(`line`,{x1:`80`,y1:`75`,x2:`360`,y2:`75`,className:`model-ray`}),(0,M.jsx)(`line`,{x1:`360`,y1:`75`,x2:`520`,y2:`230`,className:n(2)})]})]}):e===`density-cubes`||e===`density-measurement`?(0,M.jsx)(`svg`,{viewBox:`0 0 720 300`,role:`img`,"aria-label":`密度模型图`,children:e===`density-cubes`?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{x:`90`,y:`75`,width:`150`,height:`150`,rx:`12`,className:`model-cube light`}),(0,M.jsx)(`text`,{x:`130`,y:`155`,children:`同体积`}),(0,M.jsx)(`text`,{x:`125`,y:`260`,children:`质量较小`}),(0,M.jsx)(`rect`,{x:`480`,y:`75`,width:`150`,height:`150`,rx:`12`,className:`model-cube heavy`}),(0,M.jsx)(`text`,{x:`520`,y:`155`,children:`同体积`}),(0,M.jsx)(`text`,{x:`515`,y:`260`,children:`质量较大`}),(0,M.jsx)(`text`,{x:`280`,y:`135`,children:`比较每1 cm³`}),(0,M.jsx)(`text`,{x:`300`,y:`175`,className:n(2),children:`ρ = m / V`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M70 110 L250 110 L225 210 L95 210 Z`,className:`model-balance`}),(0,M.jsx)(`text`,{x:`120`,y:`160`,children:`天平：m`}),(0,M.jsx)(`path`,{d:`M360 60 L510 60 L495 230 L375 230 Z`,className:`model-cylinder`}),(0,M.jsx)(`rect`,{x:`378`,y:`145`,width:`114`,height:`80`,className:`model-water-fill`}),(0,M.jsx)(`circle`,{cx:`435`,cy:`174`,r:`30`,className:n(1)}),(0,M.jsx)(`text`,{x:`365`,y:`265`,children:`V = V₂ − V₁`}),(0,M.jsx)(`text`,{x:`550`,y:`155`,className:n(2),children:`ρ = m / V`})]})}):null}function Yp({explainer:e,phase:t}){let n=Kp[e.diagram_kind]||[`🔎`,`💡`,`✅`];return(0,M.jsx)(`div`,{className:`comic-strip`,"aria-label":`${e.title}漫画三格`,children:e.stages.map((e,r)=>(0,M.jsxs)(`div`,{className:`comic-panel ${t===r?`active`:``}`,children:[(0,M.jsx)(`span`,{className:`comic-number`,children:r+1}),(0,M.jsx)(`div`,{className:`comic-icon`,"aria-hidden":`true`,children:n[r]||`💡`}),(0,M.jsx)(`p`,{children:e})]},e))})}function Xp({lessonId:e}){let t=(0,S.useMemo)(()=>Gp.find(t=>t.lesson_id===e),[e]),[n,r]=(0,S.useState)(0),[i,a]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{r(0),a(!1)},[e]),(0,S.useEffect)(()=>{if(!i||!t)return;let e=window.setInterval(()=>{r(e=>e>=t.stages.length-1?(a(!1),e):e+1)},2800);return()=>window.clearInterval(e)},[i,t]),t?(0,M.jsxs)(`section`,{className:`visual-explainer`,"aria-labelledby":`visual-${e}`,children:[(0,M.jsxs)(`div`,{className:`visual-heading`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`span`,{className:`visual-kicker`,children:`原创轻漫画图解 · 先有画面，再建模型`}),(0,M.jsx)(`h2`,{id:`visual-${e}`,children:t.title})]}),(0,M.jsx)(`span`,{className:`visual-lesson-id`,children:e})]}),(0,M.jsxs)(`p`,{className:`visual-question`,children:[`这张图要解决：`,t.abstract_point]}),(0,M.jsx)(Yp,{explainer:t,phase:n}),(0,M.jsx)(`div`,{className:`model-diagram`,children:(0,M.jsx)(Jp,{kind:t.diagram_kind,phase:n})}),(0,M.jsx)(Wp,{explainer:t,phase:n}),(0,M.jsxs)(`div`,{className:`visual-controls`,"aria-label":`图解播放控制`,children:[(0,M.jsx)(`button`,{onClick:()=>{a(!1),r(Math.max(0,n-1))},disabled:n===0,children:`上一格`}),(0,M.jsxs)(`span`,{children:[`第 `,n+1,` / `,t.stages.length,` 格`]}),(0,M.jsx)(`button`,{className:`play`,onClick:()=>{n===t.stages.length-1&&r(0),a(!i)},children:i?`暂停`:`自动播放`}),(0,M.jsx)(`button`,{onClick:()=>{a(!1),r(Math.min(t.stages.length-1,n+1))},disabled:n===t.stages.length-1,children:`下一格`})]}),(0,M.jsxs)(`div`,{className:`analogy-grid`,children:[(0,M.jsxs)(`div`,{className:`analogy-card everyday`,children:[(0,M.jsx)(`strong`,{children:`漫画怎么说`}),(0,M.jsx)(`p`,{children:t.analogy})]}),(0,M.jsxs)(`div`,{className:`analogy-card formal`,children:[(0,M.jsx)(`strong`,{children:`物理真正怎么说`}),(0,M.jsx)(`p`,{children:t.physics_truth})]})]}),(0,M.jsxs)(`div`,{className:`analogy-boundary`,children:[(0,M.jsx)(`strong`,{children:`⚠ 比喻到这里就停：`}),t.boundary]}),(0,M.jsxs)(`div`,{className:`memory-hook`,children:[(0,M.jsx)(`span`,{children:`一句话钩子`}),(0,M.jsx)(`strong`,{children:t.memory_hook})]})]}):null}var Zp=`https://shihjcnpk.github.io/math-course/#/lectures/`,Qp=[{keywords:[`正负数`],lecture:2,title:`正负数与数的扩展`},{keywords:[`小数`,`分数`,`加法`,`减法`,`乘法`,`除法`,`单位换算`,`时间换算`,`百分数`,`平方`,`科学记数法`,`估算`],lecture:4,title:`有理数运算与科学记数法`},{keywords:[`比`,`比率`,`比例`],lecture:13,title:`实际问题中的数量关系`},{keywords:[`方程`,`相等关系`],lecture:12,title:`方程思想与一元一次方程`},{keywords:[`坐标系`,`坐标与方向`,`位置与距离`],lecture:31,title:`平面直角坐标系`},{keywords:[`图像`,`图像趋势`],lecture:33,title:`变量、函数与图像`},{keywords:[`表格`,`排序`,`分类`],lecture:36,title:`统计图与数据表达`},{keywords:[`几何角`,`几何直线`,`垂线`,`方向`,`空间方向`,`箭头`],lecture:19,title:`线段与角的基本语言`},{keywords:[`面积`,`体积`,`体积差`,`对称`],lecture:32,title:`坐标方法与图形面积`}];function $p({lesson:e}){let t=e.math_prerequisite||[],n=t.length===0||t.every(e=>e===`无`),r=Qp.find(e=>e.keywords.some(e=>t.includes(e)));return(0,M.jsxs)(`section`,{className:`math-entry-card`,"aria-labelledby":`math-entry-${e.lesson_id}`,children:[(0,M.jsxs)(`div`,{className:`math-entry-heading`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`span`,{children:`开课前`}),(0,M.jsx)(`h2`,{id:`math-entry-${e.lesson_id}`,children:`先检查数学工具`})]}),(0,M.jsx)(`strong`,{children:n?`直接开始`:t.join(` · `)})]}),(0,M.jsx)(`p`,{children:n?`本课没有额外数学门槛，可以直接进入物理问题。`:`数学前置：${t.join(`、`)}。${e.math_connection}`}),!n&&(0,M.jsxs)(`div`,{className:`math-entry-action`,children:[(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`b`,{children:`5分钟小补丁：`}),`先用一个生活数例，只练本课真正会用到的一步；做对后立即回到物理。`]}),r&&(0,M.jsxs)(`a`,{href:`${Zp}${r.lecture}`,target:`_blank`,rel:`noreferrer`,children:[`打开数学第`,r.lecture,`讲：`,r.title,` ↗`]})]})]})}function em(){let{lessonId:e=``}=yt(),t=hi(e),[n,r]=(0,S.useState)(()=>Kn().includes(e));if((0,S.useEffect)(()=>{r(Kn().includes(e)),window.scrollTo(0,0)},[e]),!t)return(0,M.jsxs)(`div`,{className:`empty`,children:[`没有找到这节课。`,(0,M.jsx)(An,{to:`/textbook`,children:`返回课本目录`})]});let i=pi.findIndex(t=>t.lesson_id===e),a=pi[i-1],o=pi[i+1],s=()=>{let t=!n;r(t),qn(e,t)},c=_i(e).replace(/## 开课前｜数学准备[\s\S]*?(?=\n## 为什么要学它？)/,``);return(0,M.jsxs)(`article`,{className:`lesson-page`,children:[(0,M.jsxs)(`div`,{className:`lesson-topline`,children:[(0,M.jsx)(An,{to:`/textbook`,children:`← 课本目录`}),(0,M.jsxs)(`span`,{children:[t.grade,t.semester,` · `,t.big_idea]})]}),(0,M.jsxs)(`div`,{className:`lesson-title`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`span`,{className:`eyebrow`,children:[t.lesson_id,` · `,t.importance]}),(0,M.jsx)(`h1`,{children:t.title}),(0,M.jsx)(`p`,{children:t.core_question})]}),(0,M.jsxs)(`div`,{className:`time-card`,children:[(0,M.jsx)(`strong`,{children:`20 + 10`}),(0,M.jsx)(`small`,{children:`分钟`})]})]}),(0,M.jsxs)(`div`,{className:`lesson-focus`,children:[(0,M.jsx)(`span`,{children:`今天的核心`}),(0,M.jsx)(`strong`,{children:t.core_concept})]}),(0,M.jsx)($p,{lesson:t}),(0,M.jsx)(Xp,{lessonId:e}),(0,M.jsx)(`div`,{className:`markdown`,children:(0,M.jsx)(Bu,{remarkPlugins:[Hp],children:c})}),(0,M.jsx)(`button`,{className:`complete-button ${n?`done`:``}`,onClick:s,children:n?`✓ 已完成本课`:`标记为已完成`}),(0,M.jsxs)(`nav`,{className:`lesson-nav`,children:[a?(0,M.jsxs)(An,{to:`/lessons/${a.lesson_id}`,children:[`← `,a.title]}):(0,M.jsx)(`span`,{}),o?(0,M.jsxs)(An,{to:`/lessons/${o.lesson_id}`,children:[o.title,` →`]}):(0,M.jsx)(`span`,{})]})]})}function tm(){let e=new Set(Kn()),t=Math.round(e.size/pi.length*100);return(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`page-heading`,children:[(0,M.jsx)(`span`,{className:`eyebrow`,children:`保存在当前浏览器`}),(0,M.jsx)(`h1`,{children:`学习进度`}),(0,M.jsxs)(`p`,{children:[`已完成 `,e.size,`/70 课，`,t,`%`]})]}),(0,M.jsx)(`div`,{className:`progress-track`,children:(0,M.jsx)(`span`,{style:{width:`${t}%`}})}),(0,M.jsx)(`div`,{className:`progress-grid`,children:pi.map(t=>(0,M.jsxs)(An,{className:e.has(t.lesson_id)?`complete`:``,to:`/lessons/${t.lesson_id}`,children:[(0,M.jsx)(`span`,{children:e.has(t.lesson_id)?`✓`:`○`}),t.lesson_id,` `,t.title]},t.lesson_id))})]})}function nm(){return(0,M.jsx)(Wt,{children:(0,M.jsxs)(Ht,{element:(0,M.jsx)(Wn,{}),children:[(0,M.jsx)(Ht,{path:`/`,element:(0,M.jsx)(Jn,{})}),(0,M.jsx)(Ht,{path:`/textbook`,element:(0,M.jsx)(yi,{})}),(0,M.jsx)(Ht,{path:`/courses`,element:(0,M.jsx)(bi,{})}),(0,M.jsx)(Ht,{path:`/lessons/:lessonId`,element:(0,M.jsx)(em,{})}),(0,M.jsx)(Ht,{path:`/progress`,element:(0,M.jsx)(tm,{})}),(0,M.jsx)(Ht,{path:`*`,element:(0,M.jsx)(Jn,{})})]})})}(0,Un.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(S.StrictMode,{children:(0,M.jsx)(kn,{children:(0,M.jsx)(nm,{})})}));