import { r as registerInstance, h } from './index-d71aeab2.js';

const tLayoutCss = ".wrapper{width:100%;background-color:lch(from var(--t-page-background-colour) calc(l * 0.9) c h)}.layout{background-color:var(--t-page-background-colour);box-shadow:#0003 0 4rem 4rem;box-sizing:border-box;color:var(--t-font-colour-default);margin:0 auto;max-width:1200px;min-height:100vh;padding:1rem}";

const TLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { key: '704c0c8652cebbbbf9ad634a411a61c5a1f56158', class: 'wrapper' }, h("div", { key: '3d137dab47a62a4a4968dac758c1e425e84b8aa5', class: 'layout' }, h("slot", { key: 'e264989829d2eb4b209aae03c5f2e7a28842444e' })));
    }
};
TLayout.style = tLayoutCss;

export { TLayout as t_layout };

//# sourceMappingURL=t-layout.entry.js.map