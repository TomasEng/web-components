import { r as registerInstance, h, e as Host, g as getElement } from './index-d1462df2.js';
import { S as SOURCE_ID_PREFIX } from './constants-500bbf63.js';
import { f as findUniqueIndex } from './arrayUtils-fdd6bbb6.js';

const tSourceRefCss = "sup{font-size:smaller;vertical-align:super}";

const TSourceRef = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sourceId = undefined;
    }
    async getSourceId() {
        var _a;
        await customElements.whenDefined('t-source-ref');
        return (_a = this.sourceId) !== null && _a !== void 0 ? _a : this.element.getAttribute('sourceid');
    }
    get tLink() {
        return this.element.shadowRoot.querySelector('t-link');
    }
    get tSource() {
        return this.element.shadowRoot.querySelector('t-source');
    }
    render() {
        const article = this.element.closest('t-article');
        return (h(Host, { key: 'e0df845216c67e871eba6ad8372ead8b7c965295' }, h("t-tooltip", { key: '10a29a983578b3ab5f3c0556423630053745e973' }, h("sup", { key: '29411758f267487c108579497f937d7690acdf3b', slot: "trigger" }, h("t-link", { key: '0bc9e5517557ba15870000bd13d5f50f9aec0a3a', href: `#${SOURCE_ID_PREFIX}${this.sourceId}` })), h("t-source", { key: 'b8fb76eeb7dc379aa846dddb65859d92f011a1d6', slot: "content", source: article.sources[this.sourceId] }))));
    }
    componentDidRender() {
        this.getArticle().then(async (article) => {
            const sourceOrder = await article.getSourceOrder();
            const sourceId = await this.getSourceId();
            const sourceNumber = findUniqueIndex(sourceOrder, sourceId) + 1;
            const tSource = this.tSource;
            tSource.source = article.sources[sourceId];
            const sourceRefLink = this.tLink;
            sourceRefLink.innerText = `[${sourceNumber}]`;
            sourceRefLink.href = `#${SOURCE_ID_PREFIX}${sourceId}`;
        });
    }
    async getArticle() {
        await customElements.whenDefined('t-article');
        return this.element.closest('t-article');
    }
    get element() { return getElement(this); }
};
TSourceRef.style = tSourceRefCss;

export { TSourceRef as t_source_ref };

//# sourceMappingURL=t-source-ref.entry.js.map