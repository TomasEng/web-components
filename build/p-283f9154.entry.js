import{r as t,h as s}from"./p-28e1c7ae.js";import{D as e,a,b as i,P as o}from"./p-c8eb6d2c.js";const h=class{constructor(s){t(this,s);this.handleColourSettingsChange=({detail:t})=>{this.baseHue=t.hue;this.baseChroma=t.chroma;this.numberOfHues=t.numberOfHues};this.baseHue=e;this.baseChroma=a;this.numberOfHues=i;this.urlHash=window.location.hash}connectedCallback(){this.setUrlHash();window.addEventListener("hashchange",(()=>{this.setUrlHash()}))}setUrlHash(){this.urlHash=window.location.hash}render(){const t=this.urlHash==="#"+o;const e={hue:this.baseHue,chroma:this.baseChroma,numberOfHues:this.numberOfHues};return s("t-context",{key:"fc7963df0b5326200fa7aaafd3a340959e6c65a3",baseHue:this.baseHue,baseChroma:this.baseChroma},s("t-layout",{key:"214348fa96ee6511243258a02988f3cf2f33b14d"},s("t-layout-header",{key:"70c5f4eb106a647923a40445d57830aae37ec7cb",slot:"header",siteTitle:"Tomas sitt designsystem",navItems:[{label:"Oversikt",href:"#",open:!t},{label:"Om",href:"#"+o,open:t}]}),t?s("page-about",{slot:"main"}):s("page-components",{slot:"main",colourSettings:e,onColourSettingsChange:this.handleColourSettingsChange})))}};export{h as preview_app};
//# sourceMappingURL=p-283f9154.entry.js.map