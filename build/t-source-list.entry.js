import { r as registerInstance, h } from './index-d1462df2.js';
import { S as SOURCE_ID_PREFIX } from './constants-500bbf63.js';

const tSourceListCss = ":host{display:block}ol{font-size:smaller;display:flex;flex-direction:column;gap:var(--t-spacing-in-group)}li:target{background-color:var(--t-base-colour)}";

const TSourceList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sources = {};
    }
    render() {
        return (h("ol", { key: '262d6b1572828dee07f9187931729ce961d54ee5' }, Object.keys(this.sources).map(id => (h("li", { id: `${SOURCE_ID_PREFIX}${id}` }, h("t-source", { source: this.sources[id] }))))));
    }
};
TSourceList.style = tSourceListCss;

export { TSourceList as t_source_list };

//# sourceMappingURL=t-source-list.entry.js.map