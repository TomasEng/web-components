import{r as t,h as e,d as r,a}from"./p-dd8293da.js";import{s as n}from"./p-2bcbafcb.js";const o="fieldset{border:none;padding:0}legend{display:contents;font-weight:bold}";const s=o;const i=class{constructor(e){t(this,e)}render(){return e("fieldset",{key:"2cc247bdef1da4c893c0a654e9379396709c191a"},e("legend",{key:"bcd367d0fe52c12dfd6ca36248bc142d4cadcec3"},this.legend),e("slot",{key:"2c6d657d5ea53e823e2171f68d59cc17d060f28a"}))}};i.style=s;const c=":host{--chroma:0.4;--lightness:0.8;--hue-offset:0;--slider-background:linear-gradient(\r\n    in oklch longer hue to right,\r\n    oklch(var(--lightness) var(--chroma) var(--hue-offset)),\r\n    oklch(var(--lightness) var(--chroma) calc(var(--hue-offset) + 360))\r\n  )}";const l=c;const h=class{constructor(e){t(this,e);this.hueChange=r(this,"hueChange",7);this.withOffset=false;this.handleSliderChange=t=>this.hueChange.emit(t.detail)}connectedCallback(){if(this.withOffset){this.element.style.setProperty("--hue-offset",`var(--t-colour-base-app-hue)`)}}render(){return e("t-slider",{key:"2a3a4255cd55f999e49869c95318dc140b0c0535",label:this.label,max:360,min:0,onSliderChange:this.handleSliderChange,step:1,value:this.value})}get element(){return a(this)}};h.style=l;const d="input::-webkit-inner-spin-button{height:var(--height);cursor:pointer;margin-right:calc(-1 * var(--padding));margin-left:var(--padding)}";const u=d;const f=".text-input{--font-size:var(--t-default-font-size);--height:var(--t-clickable-area-size);--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-colour-input-field-background);border-radius:6px;border:1px solid var(--t-colour-base-component-high-contrast);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);font-family:var(--t-default-font-family);font-size:var(--font-size);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-colour-page-background);box-shadow:color-mix(in oklab, var(--t-colour-base-component-high-contrast) 20%, transparent) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";const b=f;const p=class{constructor(e){t(this,e);this.integerChange=r(this,"integerChange",7);this.hueoffset=0;this.handleChange=t=>{const e=t.target;this.integerChange.emit(e.valueAsNumber)}}connectedCallback(){n(this.element,this.hueoffset)}render(){return e("internal-input-wrapper",{key:"f834316111f7c1bb2b11b23de7693120c32463a0"},e("label",{key:"38042b61f5c7d95c4f276be9e245108b21376174",htmlFor:"input",slot:"label"},this.label),e("input",{key:"aa646e1d4833af1490334dbdc249508f6af903e1",class:"text-input",id:"input",max:this.max,min:this.min,onChange:this.handleChange,slot:"input",type:"number",value:this.value}))}get element(){return a(this)}};p.style=u+b;const g=":host{--slider-background:linear-gradient(\r\n    to right,\r\n    oklch(0.8 0 var(--t-colour-base-app-hue)),\r\n    oklch(0.8 0.4 var(--t-colour-base-app-hue))\r\n  )}";const v=g;const k=class{constructor(e){t(this,e);this.saturationChange=r(this,"saturationChange",7);this.handleSliderChange=t=>this.saturationChange.emit(t.detail)}render(){return e("t-slider",{key:"e67904f0be9223c326a88e22483e628ce0347735",label:this.label,max:.3,min:0,onSliderChange:this.handleSliderChange,step:.01,value:this.value})}};k.style=v;export{i as t_fieldset,h as t_hue_picker,p as t_integer_picker,k as t_saturation_picker};
//# sourceMappingURL=p-6be5d812.entry.js.map