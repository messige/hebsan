(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-013061d2"],{9321:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_menu",(function(){return g})),e.d(i,"ion_menu_button",(function(){return C})),e.d(i,"ion_menu_toggle",(function(){return E}));var n=e("037e"),o=e("6606"),a=e("38cb"),s=(e("6edb"),e("6c2e")),r=e("cb4f"),d=(e("f113"),e("8c99")),h=e("ef89");const l=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;transform:translate3d(-9999px,  0,  0);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",c=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;transform:translate3d(-9999px,  0,  0);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}",u="cubic-bezier(0.32,0.72,0,1)",p="cubic-bezier(0.0,0.0,0.2,1)",m="cubic-bezier(1, 0, 0.68, 0.28)",b="cubic-bezier(0.4, 0, 0.6, 1)",g=class{constructor(t){Object(n["o"])(this,t),this.ionWillOpen=Object(n["g"])(this,"ionWillOpen",7),this.ionWillClose=Object(n["g"])(this,"ionWillClose",7),this.ionDidOpen=Object(n["g"])(this,"ionDidOpen",7),this.ionDidClose=Object(n["g"])(this,"ionDidClose",7),this.ionMenuChange=Object(n["g"])(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=r["a"].createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,i){const e=this.contentEl;e&&(void 0!==i&&e.classList.remove("menu-content-"+i),e.classList.add("menu-content-"+t),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(a["j"])(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=o["c"].get("menuType","overlay"));const t=this.el,i=t.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n');const n=void 0!==this.contentId?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]");n&&n.tagName?(this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),d["a"]._register(this),this.gesture=(await Promise.resolve().then(e.bind(null,"896a"))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),d["a"]._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){const i=!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl);i&&(t.preventDefault(),t.stopPropagation(),this.close())}}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return d["a"]._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen)&&(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),!0)}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await d["a"]._createAnimation(this.type,this),o["c"].getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,i){const e=!t,n=Object(o["b"])(this),a="ios"===n?u:p,s="ios"===n?m:b,r=this.animation.direction(e?"reverse":"normal").easing(e?s:a).onFinish(()=>{"reverse"===r.getDirection()&&r.direction("normal")});i?await r.play():r.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){const i=!!document.querySelector("ion-modal.show-modal");return!(i||!this.canSwipe())&&(!!this._isOpen||!d["a"]._getOpenSync()&&f(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(a["i"])(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(a["i"])(!1,"isAnimating has to be true");const i=v(t.deltaX,this._isOpen,this.isEndSide),e=i/this.width;this.animation.progressStep(this._isOpen?1-e:e)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(a["i"])(!1,"isAnimating has to be true");const i=this._isOpen,e=this.isEndSide,n=v(t.deltaX,i,e),o=this.width,r=n/o,d=t.velocityX,h=o/2,l=d>=0&&(d>.2||t.deltaX>h),c=d<=0&&(d<-.2||t.deltaX<-h),u=i?e?l:c:e?c:l;let p=!i&&u;i&&!u&&(p=!0),this.lastOnEnd=t.currentTime;let m=u?.001:-.001;const b=r<0?.01:r;m+=Object(s["a"])([0,0],[.4,0],[.6,1],[1,1],Object(a["e"])(0,b,.9999))[0]||0;const g=this._isOpen?!u:u;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(p),{oneTimeCallback:!0}).progressEnd(g?1:0,this._isOpen?1-m:m,300)}beforeAnimation(t){Object(a["i"])(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(y),this.backdropEl&&this.backdropEl.classList.add(w),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(a["i"])(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(x),this.ionDidOpen.emit()):(this.el.classList.remove(y),this.contentEl&&this.contentEl.classList.remove(x),this.backdropEl&&this.backdropEl.classList.remove(w),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||d["a"]._setActiveMenu(this),Object(a["i"])(!this.isAnimating,"can not be animating")}forceClosing(){Object(a["i"])(this._isOpen,"menu cannot be closed"),this.isAnimating=!0;const t=this.animation.direction("reverse");t.play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:e,isPaneVisible:a}=this,s=Object(o["b"])(this);return Object(n["j"])(n["c"],{role:"navigation",class:{[s]:!0,["menu-type-"+i]:!0,"menu-enabled":!e,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":a}},Object(n["j"])("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},Object(n["j"])("slot",null)),Object(n["j"])("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return Object(n["k"])(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},v=(t,i,e)=>Math.max(0,i!==e?-t:t),f=(t,i,e,n)=>e?i>=t.innerWidth-n:i<=n,y="show-menu",w="show-backdrop",x="menu-content-open";g.style={ios:l,md:c};const k=async t=>{const i=await d["a"].get(t);return!(!i||!await i.isActive())},O=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',j=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}',C=class{constructor(t){Object(n["o"])(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>d["a"].toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const{color:t,disabled:i}=this,e=Object(o["b"])(this),a=o["c"].get("menuIcon","ios"===e?"menu-outline":"menu-sharp"),s=this.autoHide&&!this.visible,r={type:this.type};return Object(n["j"])(n["c"],{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":s?"true":null,class:Object(h["a"])(t,{[e]:!0,button:!0,"menu-button-hidden":s,"menu-button-disabled":i,"in-toolbar":Object(h["c"])("ion-toolbar",this.el),"in-toolbar-color":Object(h["c"])("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(n["j"])("button",Object.assign({},r,{disabled:i,class:"button-native",part:"native","aria-label":"menu"}),Object(n["j"])("span",{class:"button-inner"},Object(n["j"])("slot",null,Object(n["j"])("ion-icon",{part:"icon",icon:a,mode:e,lazy:!1,"aria-hidden":"true"}))),"md"===e&&Object(n["j"])("ion-ripple-effect",{type:"unbounded"})))}get el(){return Object(n["k"])(this)}};C.style={ios:O,md:j};const A=":host(.menu-toggle-hidden){display:none}",E=class{constructor(t){Object(n["o"])(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>d["a"].toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const t=Object(o["b"])(this),i=this.autoHide&&!this.visible;return Object(n["j"])(n["c"],{onClick:this.onClick,"aria-hidden":i?"true":null,class:{[t]:!0,"menu-toggle-hidden":i}},Object(n["j"])("slot",null))}};E.style=A},ef89:function(t,i,e){"use strict";e.d(i,"a",(function(){return o})),e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"d",(function(){return d}));const n=(t,i)=>null!==i.closest(t),o=(t,i)=>"string"===typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},i):i,a=t=>{if(void 0!==t){const i=Array.isArray(t)?t:t.split(" ");return i.filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]},s=t=>{const i={};return a(t).forEach(t=>i[t]=!0),i},r=/^[a-z][a-z0-9+\-.]*:/,d=async(t,i,e,n)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=i&&i.preventDefault(),o.push(t,e,n)}return!1}}}]);
//# sourceMappingURL=chunk-013061d2.68c29174.js.map