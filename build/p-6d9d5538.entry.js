import{h as n,r as t,d as e,a as i}from"./p-0957a5e6.js";import{S as a}from"./p-d7608b6c.js";import{s as o}from"./p-2bcbafcb.js";var r=undefined&&undefined.__rest||function(n,t){var e={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0)e[i]=n[i];if(n!=null&&typeof Object.getOwnPropertySymbols==="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++){if(t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a]))e[i[a]]=n[i[a]]}return e};const c="m18.19 4.75-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72v5.69a.75.75 0 0 0 1.5 0V4a.747.747 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69ZM8.408 15.591a2.25 2.25 0 0 0 3.182 0l4.305-4.305a.5.5 0 0 1 .854.353V19A1.75 1.75 0 0 1 15 20.75H5A1.75 1.75 0 0 1 3.25 19V9c0-.966.784-1.75 1.75-1.75h7.361a.5.5 0 0 1 .354.854l-4.306 4.305a2.25 2.25 0 0 0 0 3.182Z";const l=`\n    M 20.532 3.471\n    A .748 .748 0 0 1 20.75 4\n    v 7.5\n    a .75 .75 0 0 1 -1.5 0\n    V 5.81\n    l -8.72 8.72\n    a .75.75 0 1 1 -1.06 -1.06\n    l 8.72 -8.72\n    H 12.5\n    a .75 .75 0 0 1 0 -1.5\n    H 20\n    c .206 0 .393 .083 .529 .218\n    l .001 .002 .002 .001\n    Z\n    M 4.75 9\n    A .25 .25 0 0 1 5 8.75\n    h 7\n    a .75 .75 0 0 0 0 -1.5\n    H 5\n    A 1.75 1.75 0 0 0 3.25 9\n    v 10\n    c 0 .966 .784 1.75 1.75 1.75\n    h 10\n    A 1.75 1.75 0 0 0 16.75 19\n    v -7\n    a .75 .75 0 0 0 -1.5 0\n    v 7\n    a .25 .25 0 0 1 -.25 .25\n    H 5\n    a .25 .25 0 0 1 -.25 -.25\n    V 9\n    Z\n`;const s=t=>{var{fill:e}=t,i=r(t,["fill"]);return n(a,Object.assign({},i),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:e?c:l,fill:"currentColor"}))};const h='.link{--colour:var(--t-colour-base-component-high-contrast);text-decoration:none}.link:link{color:var(--colour)}.link:visited{color:oklch(from var(--colour) l c calc(h + var(--t-colour-base-hue-offset-visited-link)))}.link[href^="#"]:visited{color:var(--colour)}.link:hover{text-decoration:underline}';const d=h;const u=class{constructor(n){t(this,n);this.linkClick=e(this,"linkClick",7);this.handleClick=n=>{this.linkClick.emit(n)};this.hueoffset=0;this.href=undefined;this.target=undefined;this.external=undefined;this.focusable=true}async focusOnAnchor(){await customElements.whenDefined("t-link");this.anchor.focus()}connectedCallback(){o(this.element,this.hueoffset)}get anchor(){return this.element.shadowRoot.querySelector("a")}render(){const t=this.target||(this.external?"_blank":undefined);return n("a",{key:"270c72d250d58994dbbad9bcaae832a17c7de1a2",class:"link",href:this.href,onClick:n=>this.handleClick(n),part:"link",tabIndex:this.focusable?0:-1,target:t},n("slot",{key:"f540618bbad60ee46b8c370398e2eac350281c05"}),this.external&&n(s,null))}get element(){return i(this)}};u.style=d;export{u as t_link};
//# sourceMappingURL=p-6d9d5538.entry.js.map