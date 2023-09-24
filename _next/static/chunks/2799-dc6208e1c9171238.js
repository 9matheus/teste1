"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2799],{81732:function(t,e,n){function o(t,e){var n;return"string"===typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}n.d(e,{I:function(){return o}})},56463:function(t,e,n){n.d(e,{m:function(){return o}});const o=t=>"function"===typeof t},52799:function(t,e,n){n.d(e,{v:function(){return C}});Object.create;Object.create;var o=n(81732);const r=new WeakMap;let i;function s({target:t,contentRect:e,borderBoxSize:n}){var o;null===(o=r.get(t))||void 0===o||o.forEach((o=>{o({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})}))}function c(t){t.forEach(s)}function l(t,e){i||"undefined"!==typeof ResizeObserver&&(i=new ResizeObserver(c));const n=(0,o.I)(t);return n.forEach((t=>{let n=r.get(t);n||(n=new Set,r.set(t,n)),n.add(e),null===i||void 0===i||i.observe(t)})),()=>{n.forEach((t=>{const n=r.get(t);null===n||void 0===n||n.delete(e),(null===n||void 0===n?void 0:n.size)||null===i||void 0===i||i.unobserve(t)}))}}const f=new Set;let a;function u(t){return f.add(t),a||(a=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};f.forEach((t=>t(e)))},window.addEventListener("resize",a)),()=>{f.delete(t),!f.size&&a&&(a=void 0)}}var d=n(56463);const g=(t,e,n)=>e-t===0?1:(n-t)/(e-t);const h={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function p(t,e,n,o){const r=n[e],{length:i,position:s}=h[e],c=r.current,l=n.time;r.current=t["scroll"+s],r.scrollLength=t["scroll"+i]-t["client"+i],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=g(0,r.scrollLength,r.current);const f=o-l;var a,u;r.velocity=f>50?0:(a=r.current-c,(u=f)?a*(1e3/u):0)}const v=t=>t,m=(t,e,n)=>-n*t+n*e+t;function y(t,e){const n=t[t.length-1];for(let o=1;o<=e;o++){const r=g(0,e,o);t.push(m(n,1,r))}}function w(t){const e=[0];return y(e,t-1),e}const E=t=>"number"===typeof t;function x(t,e){return(t=>Array.isArray(t)&&!E(t[0]))(t)?t[((t,e,n)=>{const o=e-t;return((n-t)%o+o)%o+t})(0,t.length,e)]:t}function L(t,e=w(t.length),n=v){const o=t.length,r=o-e.length;return r>0&&y(e,r),r=>{let i=0;for(;i<o-2&&!(r<e[i+1]);i++);let s=(c=0,l=1,f=g(e[i],e[i+1],r),Math.min(Math.max(f,c),l));var c,l,f;return s=x(n,i)(s),m(t[i],t[i+1],s)}}const b={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},O=t=>"string"===typeof t,W={start:0,center:.5,end:1};function z(t,e,n=0){let o=0;if(void 0!==W[t]&&(t=W[t]),O(t)){const e=parseFloat(t);t.endsWith("px")?o=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?o=e/100*document.documentElement.clientWidth:t.endsWith("vh")?o=e/100*document.documentElement.clientHeight:t=e}return E(t)&&(o=e*t),n+o}const S=[0,0];function B(t,e,n,o){let r=Array.isArray(t)?t:S,i=0,s=0;return E(t)?r=[t,t]:O(t)&&(r=(t=t.trim()).includes(" ")?t.split(" "):[t,W[t]?t:"0"]),i=z(r[0],n,o),s=z(r[1],e),i-s}const A={x:0,y:0};function H(t,e,n){let{offset:o=b.All}=n;const{target:r=t,axis:i="y"}=n,s="y"===i?"height":"width",c=r!==t?function(t,e){let n={x:0,y:0},o=t;for(;o&&o!==e;)if(o instanceof HTMLElement)n.x+=o.offsetLeft,n.y+=o.offsetTop,o=o.offsetParent;else if(o instanceof SVGGraphicsElement&&"getBBox"in o){const{top:t,left:e}=o.getBBox();for(n.x+=e,n.y+=t;o&&"svg"!==o.tagName;)o=o.parentNode}return n}(r,t):A,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:r.clientWidth,height:r.clientHeight},f={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let a=!e[i].interpolate;const u=o.length;for(let d=0;d<u;d++){const t=B(o[d],f[s],l[s],c[i]);a||t===e[i].interpolatorOffsets[d]||(a=!0),e[i].offset[d]=t}a&&(e[i].interpolate=L(w(u),e[i].offset),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=e[i].interpolate(e[i].current)}function k(t,e,n,o={}){const r=o.axis||"y";return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let o=e;for(;o&&o!=t;)n.x.targetOffset+=o.offsetLeft,n.y.targetOffset+=o.offsetTop,o=o.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,o.target,n),update:e=>{!function(t,e,n){p(t,"x",e,n),p(t,"y",e,n),e.time=n}(t,n,e),(o.offset||o.target)&&H(t,n,o)},notify:(0,d.m)(e)?()=>e(n):P(e,n[r])}}function P(t,e){return t.pause(),t.forEachNative(((t,{easing:e})=>{var n,o;if(t.updateDuration)e||(t.easing=v),t.updateDuration(1);else{const r={duration:1e3};e||(r.easing="linear"),null===(o=null===(n=t.effect)||void 0===n?void 0:n.updateTiming)||void 0===o||o.call(n,r)}})),()=>{t.currentTime=e.progress}}const M=new WeakMap,T=new WeakMap,j=new WeakMap,N=t=>t===document.documentElement?window:t;function Y(t,e={}){var{container:n=document.documentElement}=e,o=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(e,["container"]);let r=j.get(n);r||(r=new Set,j.set(n,r));const i=k(n,t,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},o);if(r.add(i),!M.has(n)){const t=()=>{const t=performance.now();for(const e of r)e.measure();for(const e of r)e.update(t);for(const e of r)e.notify()};M.set(n,t);const e=N(n);window.addEventListener("resize",t,{passive:!0}),n!==document.documentElement&&T.set(n,(s=n,c=t,(0,d.m)(s)?u(s):l(s,c))),e.addEventListener("scroll",t,{passive:!0})}var s,c;const f=M.get(n),a=requestAnimationFrame(f);return()=>{var e;"function"!==typeof t&&t.stop(),cancelAnimationFrame(a);const o=j.get(n);if(!o)return;if(o.delete(i),o.size)return;const r=M.get(n);M.delete(n),r&&(N(n).removeEventListener("scroll",r),null===(e=T.get(n))||void 0===e||e(),window.removeEventListener("resize",r))}}var X=n(33234),_=n(96681),q=n(67294),F=n(24394),G=n(58868);function I(t,e){(0,F.K)(Boolean(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const R=()=>({scrollX:(0,X.B)(0),scrollY:(0,X.B)(0),scrollXProgress:(0,X.B)(0),scrollYProgress:(0,X.B)(0)});function C({container:t,target:e,layoutEffect:n=!0,...o}={}){const r=(0,_.h)(R);return(n?G.L:q.useEffect)((()=>(I("target",e),I("container",t),Y((({x:t,y:e})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(e.current),r.scrollYProgress.set(e.progress)}),{...o,container:(null===t||void 0===t?void 0:t.current)||void 0,target:(null===e||void 0===e?void 0:e.current)||void 0}))),[]),r}}}]);