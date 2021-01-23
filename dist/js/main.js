/**
 * Bundle of AWEMA indigo-layout
 * Generated: 2021-01-23 12:39:21
 * Version: 1.10.16
 */

!function(){"use strict";var e={data:()=>({togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}),methods:{toggleBodyFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify(e,t="success",i="bottom-right"){this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu(e){this.toggleBodyMobileFix(e)},showHelpers(e){this.toggleBodyMobileFix(e)}}};var t=function(e,t,i,s,n,a,o,l,r,c){"boolean"!=typeof o&&(r=l,l=o,o=!1);var d,h="function"==typeof i?i.options:i;if(e&&e.render&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0,n&&(h.functional=!0)),s&&(h._scopeId=s),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},h._ssrRegister=d):t&&(d=o?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(h.functional){var m=h.render;h.render=function(e,t){return d.call(t),m(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,d):[d]}return i};var i=t({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"frame__aside-nav-wrap",class:{"is-expanded":e.expanded}},[e.links?i("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,s){return i("li",{key:s,staticClass:"frame__aside-li"},[t.children?i("div",[i(e.expanded&&!t.link?"span":"a",{tag:"component",class:["frame__aside-link frame__aside-link_sub",{"is-active":e.active===s||e.itemActive(s),"no-hover":e.expanded&&!t.link}],attrs:{href:e.expanded&&t.link||""},on:{click:function(i){!t.link&&e.toggleActive(i,s)}}},[t.icon?i("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),i("span",[e._v(e._s(t.name))]),e._v(" "),e.expanded?e._e():i("i",{staticClass:"icon icon-angle-bottom",on:{click:function(t){return e.toggleActive(t,s)}}})]),e._v(" "),i("slide-up-down",{attrs:{show:e.active===s||e.expanded||e.itemActive(s)}},[i("ul",{staticClass:"frame__aside-hidden",class:{"has-background":!e.expanded||e.active===s||e.itemActive(s)}},e._l(t.children,function(t,s){return i("li",{key:s,staticClass:"frame__aside-inlist"},[i("a",{class:["frame__aside-inlink",{"is-active":t.active}],attrs:{href:t.link||""}},[i("span",{class:{"text-strong":t.active}},[e._v(e._s(t.name))])])])}),0)])],1):i("a",{class:["frame__aside-link",{"frame__aside-link_active":e.active===s||e.itemActive(s)}],attrs:{href:t.link||""}},[t.icon?i("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),i("span",[e._v(e._s(t.name))])])])}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator(e){let t=[];return e.forEach(function e(i){i.name&&i.link||(i.name&&i.children&&Array.isArray(i.children)?i.children.forEach(e):t.push(i))}),!t.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",t),!1)}},expanded:{type:Boolean,default:!1}},data:()=>({active:null}),watch:{links:{handler(e){this.active=e.findIndex(e=>e.active||e.children&&e.children.some(e=>e.active))},immediate:!0}},methods:{itemActive(e){return this.links[e].active||this.expanded||this.hasActiveChildren(e)},hasActiveChildren(e){return this.links[e].children&&this.links[e].children.some(e=>e.active)},toggleActive(e,t){e.stopPropagation(),e.preventDefault(),this.expanded||(this.active===t?this.active=null:this.active=t)}}},void 0,!1,void 0,void 0,void 0);var s=t({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data(){return{isOpened:this.show}},watch:{show(e){this.isOpened=e}},methods:{slideDown(e,t){const i=this._getHeight(e),s=(new Date).getTime();e.style.overflow="hidden",e.style.height=0,e.style.opacity=0;const n=()=>{let a=(new Date).getTime()-s;if(a<this.slideDownDuration){let t=function(e,t){return(e=e/t-1)*e*e+1}(a,this.slideDownDuration);e.style.height=`${Math.round(t*i)}px`,e.style.opacity=t.toFixed(1),this.__animDown=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()};this.__animDown=requestAnimationFrame(n)},stopDown(){cancelAnimationFrame(this.__animDown)},slideUp(e,t){const i=this._getHeight(e);e.style.overflow="hidden";const s=(new Date).getTime(),n=()=>{let a=(new Date).getTime()-s;if(a<this.slideUpDuration){let t=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(a,this.slideUpDuration);e.style.height=`${Math.round(t*i)}px`,e.style.opacity=t.toFixed(1),this.__animUp=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()};this.__animUp=requestAnimationFrame(n)},stopUp(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null,e.style.overflow=null},close(){this.isOpened=!1,this.$emit("update:show",!1)},open(){this.isOpened=!0,this.$emit("update:show",!0)},toggle(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)},_getHeight(e){if(e.children){let t=0,i=e.children;for(let e=0;e<i.length;e++){let s=getComputedStyle(i[e]);t+=i[e].clientHeight+parseInt(s.marginTop)+parseInt(s.marginBottom)}return t}return e.offsetHeight}},render(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);var n=t({render:function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{attrs:{"data-language":this.language}},[t("button",{staticClass:"hljs-copy has-wave",on:{click:this.copy}},[this._v(this._s(this.$lang.CODE_COPY)),t("span",{staticClass:"wave"})]),t("code",{pre:!0},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"code-block",props:{language:String},methods:{copy(){let e=document,t=e.createElement("TEXTAREA"),i=this.$el.querySelector("code");t.id="copy-text",t.style.height=0,t.position="fixed",e.body.appendChild(t);try{t.value=i.innerText.split("\n").filter(e=>""!==e&&"\t"!==e).join("\n"),t.select(),e.execCommand("copy"),AWEMA.notify({message:AWEMA.lang.CODE_COPIED_MSG})}catch(e){AWEMA.notify({status:"error",message:e.message})}finally{e.body.removeChild(t)}},loadHighlight(e){AWEMA.utils.loadModules({highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:e}})},initHighlight(){let e=this.$el.querySelector("code");e.className=`${this.language}`,hljs.highlightBlock(e),hljs.lineNumbersBlock(e)}},mounted(){this.$nextTick(()=>{this.loadHighlight(this.initHighlight)})}},void 0,!1,void 0,void 0,void 0);const a={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awemaLayoutCrm=new Vue(e),Vue.component("content-placeholder",{functional:!0,render:e=>null}),Vue.component("frame-nav",i),Vue.component("slide-up-down",s),Vue.component("code-block",n))}};var o={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."};function l(){let e=document.querySelectorAll('pre > code[class^="language"]');e&&e.forEach(e=>{let t=e.parentElement,i=t.parentElement,s=e.className.match(/language-([a-z]*)/),n=document.createElement("code-block");n.setAttribute("language",s[1]),n.innerHTML="<template v-pre>"+e.innerHTML+"</template>",i.replaceChild(n,t),t=null,i=null,n=null})}const r=1e3;class c{constructor(e){e&&(this.initElObserver(),this.addElements(),this.initRootObserver(e))}addElements(e=document){let t=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWEMA_CONFIG.waves);this._elements=e.querySelectorAll(t.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}addElement(e){if(e.__AWEMA_WAVE__)return;e.classList.contains("has-wave")||e.classList.add("has-wave"),this._elObserver.observe(e,{attributes:!0,attributeFilter:["class"]});let t=e.querySelector("span.wave");t||((t=document.createElement("span")).classList.add("wave"),e.appendChild(t)),e.__AWEMA_WAVE__={wave:t,active:!1},c.resetWave(e),e.addEventListener("mousedown",c.showWave,!1),e.addEventListener("mouseup",c.hideWave,!1)}initElObserver(){this._elObserver=new MutationObserver(e=>{e.forEach(e=>{let t=e.target,i=t.className;/has-wave/.test(i)||(t.className=i?i+" has-wave":"has-wave")})})}initRootObserver(e){this._rootObserver=new MutationObserver(e=>{clearTimeout(this.__tm),this.__tm=setTimeout(this.addElements.bind(this),300)}),this._rootObserver.observe(e,{childList:!0,subtree:!0})}static showWave(e){let{wave:t,active:i}=this.__AWEMA_WAVE__;i?(clearTimeout(this._tm),c.resetWave(this)):this.__AWEMA_WAVE__.active=!0,t.style.cssText=`\n            transition: transform ${.6*r}ms ease, opacity ${.6*r}ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ${e.offsetY}px;\n            left: ${e.offsetX}px\n        `}static hideWave(e){this.__AWEMA_WAVE__.wave.style.opacity="0",this._tm=setTimeout(()=>{this.__AWEMA_WAVE__.active=!1,c.resetWave(this)},.4*r)}static resetWave(e){e.__AWEMA_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete e._tm}}const d={name:"indigo-layout",version:"1.10.16",install(e){e.lang=o,l(),e.on("core:popstate",l),e._watchedNames.push("code-block"),Vue.use(a),e.once("core:inited",()=>{e.Waves=new c(document.body)})}};window&&"AWEMA"in window?AWEMA.use(d):(window.__awema_plugins_stack__=window.__awema_plugins_stack__||[],window.__awema_plugins_stack__.push(d))}();
