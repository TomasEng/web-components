import { r as registerInstance, h } from './index-d1462df2.js';

const tFieldsetCss = "fieldset{border:none;padding:0}legend{display:contents;font-weight:bold}";

const TFieldset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.legend = undefined;
    }
    render() {
        return h("fieldset", { key: 'afedb3f535428f0da0f1f3067a81565d9e6f6a0e' }, h("legend", { key: '38df0f5cc1ae8f969344b9caafbd04282d19151c' }, this.legend), h("slot", { key: 'c57376196d1aaadc153e688f2cfcf58872b3b956' }));
    }
};
TFieldset.style = tFieldsetCss;

export { TFieldset as t_fieldset };

//# sourceMappingURL=t-fieldset.entry.js.map