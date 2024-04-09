import { r as registerInstance, h } from './index-d71aeab2.js';

const tHeadingCss = "h1{margin-top:0;padding-top:0}";

const THeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.level = 1;
    }
    render() {
        switch (this.level) {
            case 1:
                return h("h1", null, h("slot", null));
            case 2:
                return h("h2", null, h("slot", null));
            case 3:
                return h("h3", null, h("slot", null));
            case 4:
                return h("h4", null, h("slot", null));
            case 5:
                return h("h5", null, h("slot", null));
            case 6:
                return h("h6", null, h("slot", null));
            default:
                return h("h1", null, h("slot", null));
        }
    }
};
THeading.style = tHeadingCss;

export { THeading as t_heading };

//# sourceMappingURL=t-heading.entry.js.map