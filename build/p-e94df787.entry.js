import{r as a,h as e,c as o,a as t}from"./p-91bd2b52.js";import{s as r}from"./p-2bcbafcb.js";const n=':host{--top-shadow-inset:color-mix(in oklab, transparent 92%, white) inset 0 1px;--bottom-shadow-inset:color-mix(in oklab, transparent 92%, black) inset 0 -1px;--top-shadow:var(--top-shadow-inset);--bottom-shadow:var(--bottom-shadow-inset);--heading-colour:var(--t-panel-heading-colour);background-attachment:fixed;background-image:var(--t-image-panel-background);background-size:100vw 100vh;border-radius:var(--t-border-radius-default);box-shadow:var(--top-shadow), var(--bottom-shadow);color:var(--t-font-colour-default);display:block;font-size:var(--t-default-font-size)}.heading{align-items:center;--background-filter-colour:color-mix(in oklab, var(--t-panel-heading-colour) 75%, transparent);--background-filter:linear-gradient(var(--background-filter-colour), var(--background-filter-colour));background-image:var(--background-filter), var(--t-background-image-app);background-size:100vw 100vh;background-attachment:fixed;border-top-left-radius:var(--t-border-radius-default);border-top-right-radius:var(--t-border-radius-default);box-shadow:var(--top-shadow-inset);color:var(--t-colour-base-component-high-contrast);display:flex;padding:.5rem}slot[name="heading"]{display:block;flex:1;margin-left:.5rem}.content{padding:1rem}';const d=n;const s=class{constructor(e){a(this,e);this.hueoffset=0}get heading(){return this.element.shadowRoot.querySelector(".heading")}connectedCallback(){r(this.element,this.hueoffset)}componentDidRender(){const a=!!this.element.querySelector('[slot="heading"]');const e=!!this.element.querySelector('[slot="icon"]');const o=a||e;if(!o){this.heading.style.display="none"}else{this.heading.style.display="flex"}}render(){return e(o,{key:"2f9d25e60cc5461dfc5285643ed2da2bf19ef924"},e("div",{key:"040075411278c3f700e368afa07ea21b64a0ae58",class:"heading"},e("slot",{key:"14a897e0342a7f6965e7980a2a30105de8548f6a",name:"icon"}),e("slot",{key:"a63515274167b69e5a05715b7a506fd1b405803a",name:"heading"})),e("div",{key:"51b2ecd166878faffc3aff74fb4728823bee154e",class:"content"},e("slot",{key:"a720281e87e9398f5c911128313b8d1c6f483a49"})))}get element(){return t(this)}};s.style=d;export{s as t_panel};
//# sourceMappingURL=p-e94df787.entry.js.map