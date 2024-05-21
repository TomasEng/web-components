import { r as registerInstance, h } from './index-d1462df2.js';

const tLayoutCss = ".wrapper{width:100%;background-color:oklch(\r\n    calc(0.5 + var(--t-mode-colour-scaling) * 0.3)\r\n    calc(var(--t-base-colour-chroma) * 0.1)\r\n    var(--t-base-colour-hue)\r\n  )}.layout{--background-base:var(--t-page-background-colour);--main-background:color-mix(in oklch, var(--background-base) 90%, var(--t-background-background-colour));--top-shadow:inset color-mix(in oklch, var(--background-base) 90%, white) 0 1px 0;--bottom-shadow:inset color-mix(in oklch, var(--background-base) 90%, black) 0 -1px 0;--back-shadow:#0003 0 0 4rem;box-sizing:border-box;color:var(--t-font-colour-default);margin:0 auto;max-width:var(--t-page-max-width);min-height:100vh;padding-top:1rem;padding-bottom:2rem}@media (max-width: 900px){.layout{padding-top:0}}";

const TLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { key: '3f3ac4554dfbd999b056884aaa620ed9ec44467f', class: 'wrapper' }, h("div", { key: 'd6b09b0c84ff5a98b22a75c9579af89904e246d7', class: 'layout' }, h("slot", { key: '03ce501413e7260fc36e2eb9be64eacbb23b8a14', name: 'header' }), h("slot", { key: 'e9f5b086831d7b95ffd9dff99bce4c2e1da96823', name: 'main' })));
    }
};
TLayout.style = tLayoutCss;

export { TLayout as t_layout };

//# sourceMappingURL=t-layout.entry.js.map