import{r as t,h as s}from"./p-8e607993.js";import{D as e,a,b as i,P as h}from"./p-20247f45.js";const o=class{constructor(s){t(this,s);this.handleColourSettingsChange=({detail:t})=>{this.baseHue=t.hue;this.baseChroma=t.chroma;this.numberOfHues=t.numberOfHues;this.contrast=t.contrast};this.baseHue=e;this.baseChroma=a;this.numberOfHues=i;this.contrast=1;this.urlHash=window.location.hash;this.url=new URL(window.location.href)}connectedCallback(){this.setUrlHash();this.setUrl();window.addEventListener("hashchange",(()=>{this.setUrlHash()}));window.addEventListener("popstate",(()=>{this.setUrl()}))}setUrlHash(){this.urlHash=window.location.hash}setUrl(){this.url=new URL(window.location.href)}render(){const t=this.url.searchParams.get("s")===h;const e={hue:this.baseHue,chroma:this.baseChroma,numberOfHues:this.numberOfHues,contrast:this.contrast};return s("t-context",{key:"e41b183dd1c739aa4a17c72a3a428ea9c684cb7c",baseHue:this.baseHue,baseChroma:this.baseChroma,contrast:this.contrast},s("t-layout",{key:"b95efda5c26bba6e36c01e5959cf92f400a8d081"},s("t-layout-header",{key:"6548a0f0ec12c73e82ced7b06edff783b1460952",slot:"header",siteTitle:"Tomas sitt designsystem",navItems:[{label:"Oversikt",href:"?",open:!t},{label:"Om",href:"?s="+h,open:t}]}),t?s("page-about",{slot:"main"}):s("page-components",{slot:"main",colourSettings:e,onColourSettingsChange:this.handleColourSettingsChange})))}};export{o as preview_app};
//# sourceMappingURL=p-383e8115.entry.js.map