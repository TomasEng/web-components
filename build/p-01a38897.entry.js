import{r as t,h as e,a as n}from"./p-0957a5e6.js";import{a as s}from"./p-32ee385c.js";const o=":host{display:block}";const a=o;const c=class{constructor(e){t(this,e);this.label=undefined}get tree(){return this.element.shadowRoot.querySelector("t-tree")}componentDidLoad(){const t=[];this.findHeadings().then((e=>{e.forEach(((e,n)=>{const o=e.id||null;const a=e.level;const c=e.textContent;const r=s(t,(t=>t.level<a));const i={id:o,level:a,parentIndex:r,text:c,element:e};t.push(i)}));t.forEach((e=>{const{id:n,text:s,parentIndex:o,element:a,level:c}=e;const r=document.createElement("t-tree-item");r.label=s;if(n){r.href=`#${n}`}else{r.addEventListener("labelClick",(()=>{a.scrollIntoView()}))}e.treeItem=r;if(c>1){const e=c<3?this.tree:t[o].treeItem;e.appendChild(r)}}))})).then((async()=>{await customElements.whenDefined("t-tree");await this.tree.makeFirstItemFocusable()}))}render(){return e("t-tree",{key:"0ad34462b9b2f8e73b2663bd6f78bf0fbc937f9a",label:this.label})}async findHeadings(){await customElements.whenDefined("t-heading");return Array.from(document.querySelectorAll("t-heading"))}get element(){return n(this)}};c.style=a;export{c as t_table_of_contents};
//# sourceMappingURL=p-01a38897.entry.js.map