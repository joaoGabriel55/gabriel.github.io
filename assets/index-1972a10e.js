var xe=Object.defineProperty;var ke=(t,e,n)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>(ke(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function v(){}function le(t){return t()}function ee(){return Object.create(null)}function U(t){t.forEach(le)}function se(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function H(t,e){return t===e?!0:(z||(z=document.createElement("a")),z.href=e,t===z.href)}function Pe(t){return Object.keys(t).length===0}function m(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function A(){return B(" ")}function Ae(){return B("")}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ee(t){return Array.from(t.childNodes)}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}let Z;function C(t){Z=t}const I=[],te=[];let j=[];const ne=[],Le=Promise.resolve();let K=!1;function Re(){K||(K=!0,Le.then(de))}function X(t){j.push(t)}const W=new Set;let O=0;function de(){if(O!==0)return;const t=Z;do{try{for(;O<I.length;){const e=I[O];O++,C(e),Me(e.$$)}}catch(e){throw I.length=0,O=0,e}for(C(null),I.length=0,O=0;te.length;)te.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];W.has(n)||(W.add(n),n())}j.length=0}while(I.length);for(;ne.length;)ne.pop()();K=!1,W.clear(),C(t)}function Me(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function De(t){const e=[],n=[];j.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),j=e}const F=new Set;let He;function y(t,e){t&&t.i&&(F.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),He.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function T(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function E(t){t&&t.c()}function k(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),X(()=>{const a=t.$$.on_mount.map(le).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...a):U(a),t.$$.on_mount=[]}),i.forEach(X)}function P(t,e){const n=t.$$;n.fragment!==null&&(De(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(I.push(t),Re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,r,i,a,o,c=[-1]){const l=Z;C(t);const s=t.$$={fragment:null,ctx:[],props:a,update:v,not_equal:i,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ee(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(w,_,...p)=>{const h=p.length?p[0]:_;return s.ctx&&i(s.ctx[w],s.ctx[w]=h)&&(!s.skip_bound&&s.bound[w]&&s.bound[w](h),f&&Oe(t,w)),_}):[],s.update(),f=!0,U(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const w=Ee(e.target);s.fragment&&s.fragment.l(w),w.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&y(t.$$.fragment),k(t,e.target,e.anchor),de()}C(l)}class M{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){P(this,1),this.$destroy=v}$on(e,n){if(!se(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function je(t){let e,n;return{c(){e=g("footer"),n=g("p"),n.textContent=`© ${t[0]} made with ❤️ by Gabriel Quaresma, Frontend developer`,u(e,"class","bg-black p-5 flex justify-center text-center text-white")},m(r,i){$(r,e,i),m(e,n)},p:v,i:v,o:v,d(r){r&&b(e)}}}function Ce(t){return[new Date().getFullYear()]}class Ne extends M{constructor(e){super(),R(this,e,Ce,je,L,{})}}function re(t,e,n){const r=t.slice();return r[1]=e[n].src,r[2]=e[n].alt,r}function ie(t){let e,n;return{c(){e=g("img"),H(e.src,n=t[1])||u(e,"src",n),u(e,"alt",t[2])},m(r,i){$(r,e,i)},p:v,d(r){r&&b(e)}}}function ze(t){let e,n=T(t[0]),r=[];for(let i=0;i<n.length;i+=1)r[i]=ie(re(t,n,i));return{c(){e=g("div");for(let i=0;i<r.length;i+=1)r[i].c();u(e,"class","bg-app-color flex lg:justify-center lg:px-48 overflow-auto")},m(i,a){$(i,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,[a]){if(a&1){n=T(i[0]);let o;for(o=0;o<n.length;o+=1){const c=re(i,n,o);r[o]?r[o].p(c,a):(r[o]=ie(c),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:v,o:v,d(i){i&&b(e),ue(r,i)}}}function Fe(t){return[[{src:"https://streak-stats.demolab.com/?user=joaoGabriel55&theme=dark&hide_border=true&border_radius=0&date_format=M%20j%5B%2C%20Y%5D",alt:"github streak"},{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=joaoGabriel55&layout=compact&show_icons=true&title_color=FFF&text_color=FFF&bg_color=151515&hide_border=true",alt:"github languages"}]]}class Te extends M{constructor(e){super(),R(this,e,Fe,ze,L,{})}}const me=""+new URL("email-b68ca2c2.svg",import.meta.url).href,ge=""+new URL("location-54882506.svg",import.meta.url).href;var d={};function J(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function oe(){if(J()){var t=window.innerWidth,e=window.innerHeight,n=Math.min(t,e),r=Math.max(t,e);return n<=480&&r<=896}else return!1}function Se(){return d.DevicePointingAccuracy==null&&(N(),!Q()&&!d.waitingForLoaded&&(d.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",N))),d.DeviceCanHover}function D(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function Q(){return document.readyState==="interactive"||document.readyState==="complete"}function V(){return d.AppRunsOnLegacyTouchDevice==null&&(d.AppRunsOnLegacyTouchDevice=!D("(pointer:fine)")&&!D("(pointer:coarse)")&&!D("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),d.AppRunsOnLegacyTouchDevice}function qe(t,e){return typeof t.item=="function"?t.item(e):t[e]}function Ue(t,e){for(var n=0,r=t.length;n<r;n++)if(e.test(qe(t,n)))return!0;return!1}function pe(){if(!d.MediaQueriesHaveBeenRewritten&&V())if(Q()){for(var t=document.styleSheets,e=0,n=t.length;e<n;e++)for(var r=t[e].cssRules||t[e].rules,i=0,a=r.length;i<a;i++){var o=r[i];if(o.type===CSSRule.MEDIA_RULE&&Ue(o.media,/handheld/i)){var c=o.media;c.mediaText=c.mediaText.replace("handheld","screen")}}for(var l=document.getElementsByTagName("link"),e=0,n=l.length;e<n;e++){var s=l[e];/handheld/i.test(s.media)&&(s.media=s.media.replace("handheld","screen"))}d.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",pe)}function S(){return d.DevicePointingAccuracy==null&&(N(),!Q()&&!d.waitingForLoaded&&(d.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",N))),d.DevicePointingAccuracy}function N(){d.DeviceCanHover=D("(hover:hover)");var t="fine";switch(!0){case D("(pointer:none)"):t="none";break;case D("(pointer:coarse)"):case D("-moz-touch-enabled"):case V():t="coarse";break}if(d.DevicePointingAccuracy=t,Q()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function he(t,e){if(typeof t!="function")throw new Error("handler function expected");d.EventHandlerRegistry==null&&(d.EventHandlerRegistry=[]);for(var n=d.EventHandlerRegistry,r=0,i=n.length;r<i;r++)if(n[r].Handler===t){n[r].onceOnly=e;return}n.push({Handler:t,onceOnly:e}),n.length===1&&Ye()}function ve(t){d.EventHandlerRegistry==null&&(d.EventHandlerRegistry=[]);for(var e=d.EventHandlerRegistry,n=0,r=e.length;n<r;n++)if(e[n].Handler===t){e.splice(n,1);break}e.length===0&&We()}function Be(t){he(t,!1)}function Qe(t){he(t,!0)}function Ge(t){ve(t)}function Ye(){d.AccuracyPoller=setInterval(function(){var t=S();N(),S()!==t&&Ke()},500)}function We(){clearInterval(d.AccuracyPoller),d.AccuracyPoller=void 0}function Ke(){d.EventHandlerRegistry==null&&(d.EventHandlerRegistry=[]);for(var t=d.EventHandlerRegistry,e=0,n=t.length;e<n;e++){var r=t[e],i=r.Handler,a=r.onceOnly;try{i(S())}catch(o){console.warn("PointingAccuracy observation function failed with",o)}a&&ve(i)}}var Xe={get isMobile(){return J()},get isPhone(){return oe()},get isTablet(){return J()&&!oe()},get isLegacyTouchDevice(){return V()},rewriteMediaQueriesOnLegacyTouchDevices:pe,get PointingAccuracy(){return S()},get canHover(){return Se()},onPointingAccuracyChanged:Be,oncePointingAccuracyChanged:Qe,offPointingAccuracyChanged:Ge,get observesPointingAccuracy(){return d.AccuracyPoller!=null}};const we=typeof window<"u"&&Xe.isMobile;function Je(t){let e,n,r,i,a,o;return{c(){e=g("div"),n=g("img"),i=A(),a=g("span"),o=B(t[1]),H(n.src,r=t[0])||u(n,"src",r),u(n,"alt",t[3]),u(a,"class",be),u(e,"class","flex items-center gap-4")},m(c,l){$(c,e,l),m(e,n),m(e,i),m(e,a),m(a,o)},p(c,l){l&1&&!H(n.src,r=c[0])&&u(n,"src",r),l&8&&u(n,"alt",c[3]),l&2&&fe(o,c[1])},d(c){c&&b(e)}}}function Ze(t){let e,n,r,i,a,o;return{c(){e=g("a"),n=g("img"),i=A(),a=g("span"),o=B(t[1]),H(n.src,r=t[0])||u(n,"src",r),u(n,"alt",t[3]),u(a,"class",be),u(e,"class","flex items-center gap-4"),u(e,"href",t[2])},m(c,l){$(c,e,l),m(e,n),m(e,i),m(e,a),m(a,o)},p(c,l){l&1&&!H(n.src,r=c[0])&&u(n,"src",r),l&8&&u(n,"alt",c[3]),l&2&&fe(o,c[1]),l&4&&u(e,"href",c[2])},d(c){c&&b(e)}}}function Ve(t){let e,n;function r(o,c){return c&4&&(e=null),e==null&&(e=!!o[2]),e?Ze:Je}let i=r(t,-1),a=i(t);return{c(){a.c(),n=Ae()},m(o,c){a.m(o,c),$(o,n,c)},p(o,[c]){i===(i=r(o,c))&&a?a.p(o,c):(a.d(1),a=i(o),a&&(a.c(),a.m(n.parentNode,n)))},i:v,o:v,d(o){o&&b(n),a.d(o)}}}const be="font-semibold text-2xl text-white";function et(t,e,n){let{icon:r}=e,{text:i}=e,{link:a=""}=e,{alt:o}=e;return t.$$set=c=>{"icon"in c&&n(0,r=c.icon),"text"in c&&n(1,i=c.text),"link"in c&&n(2,a=c.link),"alt"in c&&n(3,o=c.alt)},[r,i,a,o]}class q extends M{constructor(e){super(),R(this,e,et,Ve,L,{icon:0,text:1,link:2,alt:3})}}function tt(t){let e;return{c(){e=g("h1"),e.innerHTML="Hi! I am <br/>Gabriel Quaresma",u(e,"class","text-3xl lg:text-5xl pb-10 font-bold text-white leading-normal")},m(n,r){$(n,e,r)},p:v,i:v,o:v,d(n){n&&b(e)}}}class ye extends M{constructor(e){super(),R(this,e,null,tt,L,{})}}function nt(t){let e;return{c(){e=g("div"),e.innerHTML=`<p class="pb-4">I am Software Engineer.</p> <p>Enthusiast in the design area (UI and UX) and manual drawings. Nowadays I&#39;m
    working with React.js and love to create my own UIs using Figma tool.</p>`,u(e,"class","lg:text-3xl text-2xl py-8 text-white font-semibold")},m(n,r){$(n,e,r)},p:v,i:v,o:v,d(n){n&&b(e)}}}class $e extends M{constructor(e){super(),R(this,e,null,nt,L,{})}}const rt=""+new URL("github-icon-4683f6e0.svg",import.meta.url).href,it=""+new URL("instagram-icon-dd9d7b81.svg",import.meta.url).href,ot=""+new URL("linkedin-icon-0e3a103a.svg",import.meta.url).href,at=""+new URL("profile-37321b61.png",import.meta.url).href;function ae(t,e,n){const r=t.slice();return r[2]=e[n].icon,r[3]=e[n].alt,r[4]=e[n].link,r}function ce(t){let e,n,r,i;return{c(){e=g("a"),n=g("img"),i=A(),H(n.src,r=t[2])||u(n,"src",r),u(n,"alt",t[3]),u(n,"class","bg-white p-4 rounded-3xl"),u(n,"width",t[1]),u(e,"href",t[4]),u(e,"target","_blank"),u(e,"class","transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150")},m(a,o){$(a,e,o),m(e,n),m(e,i)},p:v,d(a){a&&b(e)}}}function ct(t){let e,n,r,i,a,o=T(t[0]),c=[];for(let l=0;l<o.length;l+=1)c[l]=ce(ae(t,o,l));return{c(){e=g("div"),n=g("img"),i=A(),a=g("div");for(let l=0;l<c.length;l+=1)c[l].c();H(n.src,r=at)||u(n,"src",r),u(n,"alt","profile"),u(n,"class","lg:w-96 w-40 justify-self-center"),u(a,"class","flex gap-12 pt-7 justify-center"),u(e,"class","lg:justify-self-center flex flex-col items-center")},m(l,s){$(l,e,s),m(e,n),m(e,i),m(e,a);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(a,null)},p(l,[s]){if(s&3){o=T(l[0]);let f;for(f=0;f<o.length;f+=1){const w=ae(l,o,f);c[f]?c[f].p(w,s):(c[f]=ce(w),c[f].c(),c[f].m(a,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=o.length}},i:v,o:v,d(l){l&&b(e),ue(c,l)}}}function lt(t){return[[{icon:rt,alt:"github-icon",link:"https://github.com/joaoGabriel55"},{icon:ot,alt:"linkedin-icon",link:"https://linkedin.com/in/gabriel-quaresma-dev"},{icon:it,alt:"instagram-icon",link:"https://instagram.com/quaresmadraw"}],we?60:80]}class _e extends M{constructor(e){super(),R(this,e,lt,ct,L,{})}}function st(t){let e,n,r,i,a,o,c,l,s,f,w,_,p;return r=new ye({}),a=new $e({}),l=new q({props:{icon:ge,text:"Natal - RN, Brazil",alt:"Location"}}),f=new q({props:{icon:me,text:"Email me",alt:"Email",link:"mailto:j.quaresmasantos98@gmail.com"}}),_=new _e({}),{c(){e=g("div"),n=g("div"),E(r.$$.fragment),i=A(),E(a.$$.fragment),o=A(),c=g("div"),E(l.$$.fragment),s=A(),E(f.$$.fragment),w=A(),E(_.$$.fragment),u(c,"class","flex gap-12 pb-5"),u(e,"class","flex flex-col justify-between")},m(h,G){$(h,e,G),m(e,n),k(r,n,null),m(n,i),k(a,n,null),m(e,o),m(e,c),k(l,c,null),m(c,s),k(f,c,null),$(h,w,G),k(_,h,G),p=!0},p:v,i(h){p||(y(r.$$.fragment,h),y(a.$$.fragment,h),y(l.$$.fragment,h),y(f.$$.fragment,h),y(_.$$.fragment,h),p=!0)},o(h){x(r.$$.fragment,h),x(a.$$.fragment,h),x(l.$$.fragment,h),x(f.$$.fragment,h),x(_.$$.fragment,h),p=!1},d(h){h&&(b(e),b(w)),P(r),P(a),P(l),P(f),P(_,h)}}}function ut(t){let e,n,r,i,a,o,c,l,s,f,w,_;return n=new ye({}),i=new _e({}),o=new $e({}),s=new q({props:{icon:ge,text:"Natal - RN, Brazil",alt:"Location"}}),w=new q({props:{icon:me,text:"Email me",alt:"Email",link:"mailto:j.quaresmasantos98@gmail.com"}}),{c(){e=g("div"),E(n.$$.fragment),r=A(),E(i.$$.fragment),a=A(),E(o.$$.fragment),c=A(),l=g("div"),E(s.$$.fragment),f=A(),E(w.$$.fragment),u(l,"class","flex lg:flex-row flex-col gap-12 lg:pt-0 pt-3 pb-5")},m(p,h){$(p,e,h),k(n,e,null),m(e,r),k(i,e,null),m(e,a),k(o,e,null),m(e,c),m(e,l),k(s,l,null),m(l,f),k(w,l,null),_=!0},p:v,i(p){_||(y(n.$$.fragment,p),y(i.$$.fragment,p),y(o.$$.fragment,p),y(s.$$.fragment,p),y(w.$$.fragment,p),_=!0)},o(p){x(n.$$.fragment,p),x(i.$$.fragment,p),x(o.$$.fragment,p),x(s.$$.fragment,p),x(w.$$.fragment,p),_=!1},d(p){p&&b(e),P(n),P(i),P(o),P(s),P(w)}}}function ft(t){let e,n,r,i;const a=[ut,st],o=[];function c(l,s){return we?0:1}return n=c(),r=o[n]=a[n](t),{c(){e=g("div"),r.c(),u(e,"class","bg-white p-8 lg:p-20 bg-no-repeat bg-cover bg-mobile-background lg:bg-desktop-background lg:grid lg:grid-cols-2 lg:gap-40 flex flex-col justify-center")},m(l,s){$(l,e,s),o[n].m(e,null),i=!0},p(l,[s]){r.p(l,s)},i(l){i||(y(r),i=!0)},o(l){x(r),i=!1},d(l){l&&b(e),o[n].d()}}}class dt extends M{constructor(e){super(),R(this,e,null,ft,L,{})}}function mt(t){let e,n,r,i,a,o,c;return n=new dt({}),i=new Te({}),o=new Ne({}),{c(){e=g("main"),E(n.$$.fragment),r=A(),E(i.$$.fragment),a=A(),E(o.$$.fragment),u(e,"class","grid lg:auto-rows-app-layout")},m(l,s){$(l,e,s),k(n,e,null),m(e,r),k(i,e,null),m(e,a),k(o,e,null),c=!0},p:v,i(l){c||(y(n.$$.fragment,l),y(i.$$.fragment,l),y(o.$$.fragment,l),c=!0)},o(l){x(n.$$.fragment,l),x(i.$$.fragment,l),x(o.$$.fragment,l),c=!1},d(l){l&&b(e),P(n),P(i),P(o)}}}function gt(t,e,n){return[!0]}class pt extends M{constructor(e){super(),R(this,e,gt,mt,L,{prerender:0})}get prerender(){return this.$$.ctx[0]}}new pt({target:document.getElementById("app")});
