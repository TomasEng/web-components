import{r as a,d as t,h as e}from"./p-dd8293da.js";const r="input{--height:1rem;-webkit-appearance:none;appearance:none;height:var(--height);background:var(--slider-background, grey);border-radius:calc(var(--height) / 2)}input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}input::-moz-range-thumb{width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}";const i=r;const n=class{constructor(e){a(this,e);this.sliderChange=t(this,"sliderChange",7);this.max=1;this.min=0;this.step=.01;this.handleInput=a=>{const t=a.target;this.sliderChange.emit(t.valueAsNumber)}}render(){return e("internal-input-wrapper",{key:"b0912c65810ce6967098554b06aa6206593a5e7d"},e("label",{key:"ed5ae38a8ad7add7b4ff463b16a51ba3fc7dc1bb",htmlFor:s,slot:"label"},this.label),e("input",{key:"5095a15f9a46c2ca1ea4c26153679516ebe2bdc7",id:s,max:this.max,min:this.min,onInput:this.handleInput,slot:"input",step:this.step,type:"range",value:this.value}))}};const s="input";n.style=i;export{n as t_slider};
//# sourceMappingURL=p-c5aa44e5.entry.js.map