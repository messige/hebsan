(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c20a0"],{4938:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_ripple_effect",(function(){return s}));var o=n("037e"),i=n("6606");const a=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}",s=class{constructor(t){Object(o["o"])(this,t),this.type="bounded"}async addRipple(t,e){return new Promise(n=>{Object(o["h"])(()=>{const i=this.el.getBoundingClientRect(),a=i.width,s=i.height,l=Math.sqrt(a*a+s*s),u=Math.max(s,a),p=this.unbounded?u:l+c,f=Math.floor(u*d),m=p/f;let h=t-i.left,b=e-i.top;this.unbounded&&(h=.5*a,b=.5*s);const y=h-.5*f,w=b-.5*f,g=.5*a-h,v=.5*s-b;Object(o["f"])(()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const e=t.style;e.top=w+"px",e.left=y+"px",e.width=e.height=f+"px",e.setProperty("--final-scale",""+m),e.setProperty("--translate-end",`${g}px, ${v}px`);const o=this.el.shadowRoot||this.el;o.appendChild(t),setTimeout(()=>{n(()=>{r(t)})},325)})})})}get unbounded(){return"unbounded"===this.type}render(){const t=Object(i["b"])(this);return Object(o["j"])(o["c"],{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return Object(o["k"])(this)}},r=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},c=10,d=.5;s.style=a}}]);
//# sourceMappingURL=chunk-2d0c20a0.dd1df77c.js.map