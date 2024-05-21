import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';
import { o as orderObject } from './objectUtils-d84f425c.js';
import { u as uniqueItems } from './arrayUtils-fdd6bbb6.js';

const tArticleCss = ":host{display:block;color:var(--t-font-colour-default)}p{color:var(--t-font-colour-default)}";

const TArticle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sources = {};
        this.sourcesHeading = 'Kilder';
        this.heading = undefined;
    }
    async getSourceOrder() {
        await customElements.whenDefined('t-source-ref');
        const sourceRefElements = this.element.querySelectorAll('t-source-ref');
        const sourceIds = await Promise.all(Array.from(sourceRefElements).map(sourceRefElement => {
            return sourceRefElement.getSourceId();
        }));
        return uniqueItems(sourceIds);
    }
    render() {
        return (h("article", { key: '34182684258aa98f354c7fd291f5e685e5f72adc' }, h("t-heading", { key: '063b054459763235c640750d6cc4ec783fe6cd28', level: 1 }, this.heading), h("slot", { key: '9b547046d9c72260c080d7ff988af5b3f3bf0e96' }), this.sources && (h("footer", null, h("t-heading", { level: 2 }, this.sourcesHeading), h("t-source-list", { sources: {} })))));
    }
    componentDidRender() {
        this.getSourceOrder().then(sourceOrder => {
            const orderedSources = orderObject(this.sources, sourceOrder);
            const sourceList = this.element.querySelector('t-source-list');
            if (sourceList) {
                sourceList.sources = orderedSources;
            }
        });
    }
    get element() { return getElement(this); }
};
TArticle.style = tArticleCss;

export { TArticle as t_article };

//# sourceMappingURL=t-article.entry.js.map