import{r as t,h as r,a as n}from"./p-91bd2b52.js";import{C as e}from"./p-b3b3b4f2.js";import{s as o}from"./p-2bcbafcb.js";import{S as a}from"./p-b3b05428.js";import{s as l,a as i}from"./p-adeb63a3.js";const s=".t-dropdown-menu {\r\n  position: static;\r\n}\r\n\r\n.t-dropdown-menu .t-button::after {\r\n  display: none;\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu {\r\n  backdrop-filter: var(--t-popover-backdrop-filter);\r\n  background-color: unset;\r\n  border-radius: var(--t-popover-border-radius);\r\n  border: none;\r\n  box-shadow: var(--t-popover-shadow);\r\n  color: var(--t-font-colour-default);\r\n  list-style: none;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  z-index: var(--t-z-index-dropdown-menu);\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu .dropdown-item {\r\n  --menu-item-background-colour-base: var(--t-popover-background-colour-base);\r\n  --menu-item-background-colour: var(--menu-item-background-colour-base);\r\n  align-items: center;\r\n  background-color: var(--menu-item-background-colour);\r\n  border: none;\r\n  color: var(--t-font-colour-default);\r\n  cursor: pointer;\r\n  display: inline-grid;\r\n  font-size: var(--t-default-font-size);\r\n  gap: var(--t-spacing-inline);\r\n  grid-template-columns: auto 1fr auto;\r\n  padding: .5rem;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu li:first-child .dropdown-item {\r\n  border-top-left-radius: var(--t-popover-border-radius);\r\n  border-top-right-radius: var(--t-popover-border-radius);\r\n  box-shadow: color-mix(in oklab, var(--menu-item-background-colour) 85%, white) inset 0 1px;\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu li:last-child .dropdown-item {\r\n  border-bottom-left-radius: var(--t-popover-border-radius);\r\n  border-bottom-right-radius: var(--t-popover-border-radius);\r\n  box-shadow: color-mix(in oklab, var(--menu-item-background-colour) 85%, black) inset 0 -1px;\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu .dropdown-item:hover,\r\n.t-dropdown-menu .dropdown-menu .dropdown-item:focus-within {\r\n  --menu-item-background-colour: color-mix(\r\n    in oklab,\r\n    var(--menu-item-background-colour-base) 90%,\r\n    var(--t-colour-full-contrast)\r\n  );\r\n}\r\n\r\n.t-dropdown-menu .dropdown-menu .dropdown-item.selected {\r\n  --menu-item-background-colour: color-mix(in oklab, var(--t-colour-base-component) calc(var(--t-popover-alpha) * 100%), transparent);\r\n  );\r\n}\r\n";const d=s;const c=class{constructor(r){t(this,r);this.hueoffset=0;this.label=undefined;this.value=undefined;this.buttonAttributes=undefined;this.items=[];this.variant="default";this.expanded=false;this.focusedIndex=-1}connectedCallback(){o(this.host,this.hueoffset)}get menu(){return this.host.shadowRoot.querySelector("#menu")}get menuItems(){return this.menu.querySelectorAll("button")}collapse(){this.expanded=false;this.focusedIndex=-1}expand(){this.expanded=true}focusOnIndex(t){this.focusedIndex=t}handleKeyDown(t){const{key:r}=t;switch(r){case"ArrowDown":t.preventDefault();this.expand();this.focusOnIndex(0);break;case"ArrowUp":t.preventDefault();this.expand();this.focusOnIndex(this.items.length-1);break;case"Escape":this.collapse();break}}componentDidRender(){if(this.focusedIndex>-1){setTimeout((()=>this.menuItems[this.focusedIndex].focus()))}}render(){return r("t-floating-element",{key:"706cb1587808d01f7832f43f5a8914e754f32735",class:"t-dropdown-menu",onClickOutside:()=>this.collapse(),placement:"bottom",visible:this.expanded},r("t-button",{key:"f297d3c44410c5d44b8314f6083652760d236090",buttonAttributes:Object.assign({"aria-expanded":this.expanded?"true":"false",onClick:()=>this.expanded=!this.expanded,onKeyDown:t=>this.handleKeyDown(t)},this.buttonAttributes),hueoffset:this.hueoffset,slot:"anchor",variant:this.variant},r("slot",{key:"cebd404f6103e504ede3b184ea4ecf08060078e4",slot:"icon",name:"icon"}),this.label),r("ul",{key:"6995114f76c97098a730ac48645a0c4f8041a663",class:"dropdown-menu",slot:"content",id:"menu"},this.items.map(((t,r)=>this.renderOption(t,r)))))}renderOption({label:t,action:n,selected:o,icon:a,buttonAttributes:l},i){const s=t=>{this.collapse();n(t)};const d=t=>{switch(t.key){case"ArrowDown":t.preventDefault();this.focusOnIndex(Math.min(i+1,this.items.length-1));break;case"ArrowUp":t.preventDefault();this.focusOnIndex(Math.max(0,i-1));break;case"Escape":this.collapse();break}};return r("li",null,r("button",Object.assign({class:{"dropdown-item":true,selected:o},onClick:s,onKeyDown:d,tabIndex:this.focusedIndex===i?0:-1},l),a,t,o&&r(e,null)))}get host(){return n(this)}};c.style=d;var u=undefined&&undefined.__rest||function(t,r){var n={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0)n[e]=t[e];if(t!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++){if(r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o]))n[e[o]]=t[e[o]]}return n};const b="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061l1.415-1.414ZM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.413Z";const m="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061l1.415-1.414ZM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.413Z";const h=t=>{var{fill:n}=t,e=u(t,["fill"]);return r(a,Object.assign({},e),r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:n?b:m,fill:"currentColor"}))};var p=undefined&&undefined.__rest||function(t,r){var n={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0)n[e]=t[e];if(t!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++){if(r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o]))n[e[o]]=t[e[o]]}return n};const f="M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Z";const v="M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Zm1.747 2.016c.117.605.179 1.23.179 1.869 0 5.385-4.365 9.75-9.75 9.75a9.803 9.803 0 0 1-1.87-.18A8.25 8.25 0 1 0 16.57 5.13Z";const w=t=>{var{fill:n}=t,e=p(t,["fill"]);return r(a,Object.assign({},e),r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:n?f:v,fill:"currentColor"}))};var k=undefined&&undefined.__rest||function(t,r){var n={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0)n[e]=t[e];if(t!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++){if(r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o]))n[e[o]]=t[e[o]]}return n};const g="M9.814 2.823a.75.75 0 0 1 .73-.573h2.913a.75.75 0 0 1 .729.573l.459 1.89c.217.08.43.167.637.265l1.675-1.02a.75.75 0 0 1 .92.11l2.056 2.054a.75.75 0 0 1 .11.92l-1.02 1.676c.097.207.185.42.264.637l1.89.46a.75.75 0 0 1 .573.728v2.914a.75.75 0 0 1-.573.729l-1.89.459a7.69 7.69 0 0 1-.265.637l1.02 1.675a.75.75 0 0 1-.11.92l-2.054 2.056a.75.75 0 0 1-.92.11l-1.676-1.02c-.207.097-.42.185-.637.264l-.46 1.89a.75.75 0 0 1-.728.573h-2.914a.75.75 0 0 1-.729-.573l-.459-1.89a7.725 7.725 0 0 1-.637-.264l-1.675 1.02a.75.75 0 0 1-.92-.11l-2.056-2.055a.75.75 0 0 1-.11-.92l1.02-1.676a7.707 7.707 0 0 1-.264-.637l-1.89-.46a.75.75 0 0 1-.573-.728v-2.914a.75.75 0 0 1 .573-.729l1.89-.459c.079-.217.167-.43.265-.637l-1.02-1.675a.75.75 0 0 1 .11-.92l2.054-2.056a.75.75 0 0 1 .92-.11l1.676 1.02c.207-.097.42-.185.637-.264l.46-1.89ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z";const Z="M10.543 2.25a.75.75 0 0 0-.729.573l-.459 1.89c-.217.08-.43.167-.637.265l-1.675-1.02a.75.75 0 0 0-.92.11L4.066 6.121a.75.75 0 0 0-.11.92l1.02 1.676c-.097.207-.185.42-.264.637l-1.89.46a.75.75 0 0 0-.573.728v2.914a.75.75 0 0 0 .573.729l1.89.459c.079.217.167.43.265.637l-1.02 1.675a.75.75 0 0 0 .11.92l2.054 2.056a.75.75 0 0 0 .92.11l1.676-1.02c.207.097.42.185.637.264l.46 1.89a.75.75 0 0 0 .728.573h2.914a.75.75 0 0 0 .729-.573l.459-1.89c.217-.079.43-.167.637-.264l1.675 1.02a.75.75 0 0 0 .92-.11l2.056-2.055a.75.75 0 0 0 .11-.92l-1.02-1.676a7.69 7.69 0 0 0 .264-.637l1.89-.46a.75.75 0 0 0 .573-.728v-2.914a.75.75 0 0 0-.573-.729l-1.89-.459a7.693 7.693 0 0 0-.265-.637l1.02-1.675a.75.75 0 0 0-.11-.92l-2.054-2.056a.75.75 0 0 0-.92-.11l-1.676 1.02a7.706 7.706 0 0 0-.637-.264l-.46-1.89a.75.75 0 0 0-.728-.573h-2.914Zm.172 3.221.418-1.721h1.734l.418 1.721a.75.75 0 0 0 .513.541c.407.122.796.285 1.163.483a.75.75 0 0 0 .747-.02l1.526-.93 1.221 1.22-.93 1.527a.75.75 0 0 0-.02.747c.198.367.36.756.483 1.163a.75.75 0 0 0 .541.513l1.721.418v1.734l-1.72.418a.75.75 0 0 0-.542.513 6.207 6.207 0 0 1-.483 1.163.75.75 0 0 0 .02.747l.93 1.526-1.22 1.221-1.527-.93a.75.75 0 0 0-.747-.02 6.21 6.21 0 0 1-1.163.483.75.75 0 0 0-.513.541l-.418 1.721h-1.734l-.418-1.72a.75.75 0 0 0-.513-.542 6.21 6.21 0 0 1-1.163-.483.75.75 0 0 0-.747.02l-1.526.93-1.221-1.22.93-1.527a.75.75 0 0 0 .02-.747 6.206 6.206 0 0 1-.483-1.163.75.75 0 0 0-.541-.513l-1.721-.418v-1.734l1.721-.418a.75.75 0 0 0 .541-.513c.122-.407.285-.796.483-1.163a.75.75 0 0 0-.02-.747l-.93-1.526 1.22-1.221 1.527.93a.75.75 0 0 0 .747.02c.367-.198.756-.36 1.163-.483a.75.75 0 0 0 .513-.541ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z";const j=t=>{var{fill:n}=t,e=k(t,["fill"]);return r(a,Object.assign({},e),r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:n?g:Z,fill:"currentColor"}))};const M=".label{margin-left:0.5em}";const O=M;const y=class{constructor(r){t(this,r);this.hueoffset=0;this.systemSelected=true;this.label=undefined}render(){const t=l.mode==="light"?r(h,{class:"icon",slot:"icon"}):r(w,{fill:true,class:"icon",slot:"icon"});return r("t-dropdown-menu",{key:"93c0cc74e74653dd333f1d4eb1f5336f0412995b",label:this.label,buttonAttributes:{title:"Velg modus"},items:[{label:"Automatisk",action:()=>this.selectMode("system"),selected:l.selectedMode==="system",icon:r(j,null),buttonAttributes:{title:"Bruk samme innstilling som nettleseren"}},{label:"Lys modus",action:()=>this.selectMode("light"),selected:l.selectedMode==="light",icon:r(h,null),buttonAttributes:{title:"Velg lys modus"}},{label:"Mørk modus",action:()=>this.selectMode("dark"),selected:l.selectedMode==="dark",icon:r(w,null),buttonAttributes:{title:"Velg mørk modus"}}],hueoffset:this.hueoffset,variant:"transparent"},t)}selectMode(t){i(t)}};y.style=O;export{c as t_dropdown_menu,y as t_mode_switcher};
//# sourceMappingURL=p-d97bed09.entry.js.map