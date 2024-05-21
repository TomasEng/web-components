import { r as registerInstance, h, e as Host } from './index-d1462df2.js';

const tDetailsCss = "summary {\n  cursor: pointer;\n  color: var(--t-link-colour);\n  text-decoration: underline;\n\n  &:hover {\n    text-decoration: none;\n  }\n}\n\ndetails[open] summary {\n  margin-bottom: var(--t-spacing-in-group);\n}\n";

const TDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.summary = undefined;
        this.openSummary = undefined;
        this.open = false;
    }
    handleToggle(event) {
        switch (event.newState) {
            case 'open':
                this.open = true;
                break;
            case 'closed':
                this.open = false;
                break;
        }
    }
    summaryText() {
        return this.openSummary && this.open ? this.openSummary : this.summary;
    }
    render() {
        return (h(Host, { key: '74e56aecec5810161af9dd86394afcbe76c6c00b' }, h("details", { key: 'e10e060878181913ef7a2072f135eff66a23d443', onToggle: (e) => this.handleToggle(e), open: this.open }, h("summary", { key: 'e89ebf73b792eeeff99ad1886f40b645887b33fa' }, this.summaryText()), h("slot", { key: '8d524f0a4efc8ccf1afa7b95434c5c14795ad3d4' }))));
    }
};
TDetails.style = tDetailsCss;

export { TDetails as t_details };

//# sourceMappingURL=t-details.entry.js.map