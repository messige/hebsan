(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-304e7324"],{"65a5":function(o,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));const i=async(o,e,t,i,r)=>{if(o)return o.attachViewToDom(e,t,r,i);if("string"!==typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"===typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return i&&i.forEach(o=>n.classList.add(o)),r&&Object.assign(n,r),e.appendChild(n),n.componentOnReady&&await n.componentOnReady(),n},r=(o,e)=>{if(e){if(o){const t=e.parentElement;return o.removeViewFromDom(t,e)}e.remove()}return Promise.resolve()}},a82b:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_popover",(function(){return b}));var i=t("037e"),r=t("6606"),n=(t("38cb"),t("6edb")),s=t("7d85"),p=(t("f113"),t("3c55")),a=t("ef89"),c=t("65a5");const l=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),s=r.getBoundingClientRect(),p=s.width,a=s.height,c=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:l/2-a/2,m=null!=h&&"left"in h?h.left:c/2,u=h&&h.width||0,f=h&&h.height||0,b=o.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,x=g.height;null==h&&(b.style.display="none");const y={top:v+f,left:m+u/2-w/2},j={top:v+f+(x-1),left:m+u/2-p/2};let O=!1,k=!1;j.left<d+25?(O=!0,j.left=d):p+d+j.left+25>c&&(k=!0,j.left=c-p-d,i="right"),v+f+a>l&&v-a>0?(y.top=v-(x+1),j.top=v-a-(x-1),o.className=o.className+" popover-bottom",t="bottom"):v+f+a>l&&(r.style.bottom=d+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",O&&(r.style.left=`calc(${j.left}px + var(--ion-safe-area-left, 0px))`),k&&(r.style.left=`calc(${j.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const D=Object(n["a"])(),E=Object(n["a"])(),P=Object(n["a"])();return E.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(100).addAnimation([E,P])},d=5,h=o=>{const e=Object(n["a"])(),t=Object(n["a"])(),i=Object(n["a"])();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},v=(o,e)=>{const t=12,i=o.ownerDocument,r="rtl"===i.dir;let s="top",p=r?"right":"left";const a=o.querySelector(".popover-content"),c=a.getBoundingClientRect(),l=c.width,d=c.height,h=i.defaultView.innerWidth,v=i.defaultView.innerHeight,m=e&&e.target&&e.target.getBoundingClientRect(),u=null!=m&&"bottom"in m?m.bottom:v/2-d/2,f=null!=m&&"left"in m?r?m.left-l+m.width:m.left:h/2-l/2,b=m&&m.height||0,g={top:u,left:f};g.left<t?(g.left=t,p="left"):l+t+g.left>h&&(g.left=h-l-t,p="right"),u+b+d>v&&u-d>0?(g.top=u-d-b,o.className=o.className+" popover-bottom",s="bottom"):u+b+d>v&&(a.style.bottom=t+"px");const w=Object(n["a"])(),x=Object(n["a"])(),y=Object(n["a"])(),j=Object(n["a"])(),O=Object(n["a"])();return x.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),y.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(a).beforeStyles({top:g.top+"px",left:g.left+"px","transform-origin":`${s} ${p}`}).fromTo("transform","scale(0.001)","scale(1)"),O.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,y,j,O])},m=o=>{const e=Object(n["a"])(),t=Object(n["a"])(),i=Object(n["a"])();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},u='.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports (backdrop-filter: blur(0)){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}',f=".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{transform-origin:right top}.popover-viewport.sc-ion-popover-md{transition-delay:100ms}",b=class{constructor(o){Object(i["o"])(this,o),this.didPresent=Object(i["g"])(this,"ionPopoverDidPresent",7),this.willPresent=Object(i["g"])(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i["g"])(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i["g"])(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p["a"])},this.onLifecycle=o=>{const e=this.usersElement,t=g[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}}}connectedCallback(){Object(p["f"])(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(c["a"])(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e),await Object(s["d"])(this.usersElement),Object(p["e"])(this,"popoverEnter",l,v,this.event)}async dismiss(o,e){const t=await Object(p["g"])(this,o,e,"popoverLeave",h,m,this.event);return t&&await Object(c["b"])(this.delegate,this.usersElement),t}onDidDismiss(){return Object(p["h"])(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(p["h"])(this.el,"ionPopoverWillDismiss")}render(){const o=Object(r["b"])(this),{onLifecycle:e}=this;return Object(i["j"])(i["c"],{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a["b"])(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i["j"])("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i["j"])("div",{tabindex:"0"}),Object(i["j"])("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(i["j"])("div",{class:"popover-arrow"}),Object(i["j"])("div",{class:"popover-content"})),Object(i["j"])("div",{tabindex:"0"}))}get el(){return Object(i["k"])(this)}},g={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};b.style={ios:u,md:f}},ef89:function(o,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a}));const i=(o,e)=>null!==e.closest(o),r=(o,e)=>"string"===typeof o&&o.length>0?Object.assign({"ion-color":!0,["ion-color-"+o]:!0},e):e,n=o=>{if(void 0!==o){const e=Array.isArray(o)?o:o.split(" ");return e.filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o)}return[]},s=o=>{const e={};return n(o).forEach(o=>e[o]=!0),e},p=/^[a-z][a-z0-9+\-.]*:/,a=async(o,e,t,i)=>{if(null!=o&&"#"!==o[0]&&!p.test(o)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(o,t,i)}return!1}}}]);
//# sourceMappingURL=chunk-304e7324.dcf86f7a.js.map