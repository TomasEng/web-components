import{r as t,h as e,c as s,a as r}from"./p-91bd2b52.js";import{S as c}from"./p-fa7675be.js";import{f as a}from"./p-32ee385c.js";const i="sup{font-size:smaller;vertical-align:super}";const o=i;const n=class{constructor(e){t(this,e);this.sourceId=undefined}async getSourceId(){var t;await customElements.whenDefined("t-source-ref");return(t=this.sourceId)!==null&&t!==void 0?t:this.element.getAttribute("sourceid")}get tLink(){return this.element.shadowRoot.querySelector("t-link")}get tSource(){return this.element.shadowRoot.querySelector("t-source")}render(){const t=this.element.closest("t-article");return e(s,{key:"6f1280832f5716fb942637d0a002a547ce0593bd"},e("t-tooltip",{key:"5958da27531f68b3df7d5b8615ddf346d03758ac"},e("sup",{key:"6b657f7d0a9b9be0bffa18306ded6f0bc64e4a46",slot:"trigger"},e("t-link",{key:"0263bdde04552d0f295216550b97a0e722d232f5",href:`#${c}${this.sourceId}`})),e("t-source",{key:"eac18c59c6b759e70f6966d7cd64db4660aea79b",slot:"content",source:t.sources[this.sourceId]})))}componentDidRender(){this.getArticle().then((async t=>{const e=await t.getSourceOrder();const s=await this.getSourceId();const r=a(e,s)+1;const i=this.tSource;i.source=t.sources[s];const o=this.tLink;o.innerText=`[${r}]`;o.href=`#${c}${s}`}))}async getArticle(){await customElements.whenDefined("t-article");return this.element.closest("t-article")}get element(){return r(this)}};n.style=o;export{n as t_source_ref};
//# sourceMappingURL=p-7b53f484.entry.js.map