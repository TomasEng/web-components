import { h, r as registerInstance } from './index-d1462df2.js';
import { S as SvgTemplate } from './SvgTemplate-8e2fcbd6.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const dFilled = 'm18.19 4.75-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72v5.69a.75.75 0 0 0 1.5 0V4a.747.747 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69ZM8.408 15.591a2.25 2.25 0 0 0 3.182 0l4.305-4.305a.5.5 0 0 1 .854.353V19A1.75 1.75 0 0 1 15 20.75H5A1.75 1.75 0 0 1 3.25 19V9c0-.966.784-1.75 1.75-1.75h7.361a.5.5 0 0 1 .354.854l-4.306 4.305a2.25 2.25 0 0 0 0 3.182Z';
const dUnfilled = `
    M 20.532 3.471
    A .748 .748 0 0 1 20.75 4
    v 7.5
    a .75 .75 0 0 1 -1.5 0
    V 5.81
    l -8.72 8.72
    a .75.75 0 1 1 -1.06 -1.06
    l 8.72 -8.72
    H 12.5
    a .75 .75 0 0 1 0 -1.5
    H 20
    c .206 0 .393 .083 .529 .218
    l .001 .002 .002 .001
    Z
    M 4.75 9
    A .25 .25 0 0 1 5 8.75
    h 7
    a .75 .75 0 0 0 0 -1.5
    H 5
    A 1.75 1.75 0 0 0 3.25 9
    v 10
    c 0 .966 .784 1.75 1.75 1.75
    h 10
    A 1.75 1.75 0 0 0 16.75 19
    v -7
    a .75 .75 0 0 0 -1.5 0
    v 7
    a .25 .25 0 0 1 -.25 .25
    H 5
    a .25 .25 0 0 1 -.25 -.25
    V 9
    Z
`; //'M20.532 3.471A.748.748 0 0 1 20.75 4v7.5a.75.75 0 0 1-1.5 0V5.81l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72H12.5a.75.75 0 0 1 0-1.5H20c.206 0 .393.083.529.218l.001.002.002.001ZM4.75 9A.25.25 0 0 1 5 8.75h7a.75.75 0 0 0 0-1.5H5A1.75 1.75 0 0 0 3.25 9v10c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 16.75 19v-7a.75.75 0 0 0-1.5 0v7a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V9Z';
const ExternalLinkIcon = (_a) => {
    var { fill } = _a, rest = __rest(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: fill ? dFilled : dUnfilled, fill: "currentColor" })));
};

const tLinkCss = ".link:link{color:var(--t-link-colour)}.link:visited{color:var(--t-link-visited-colour)}.link:hover{text-decoration:none}";

const TLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.target = undefined;
        this.external = undefined;
    }
    render() {
        const target = this.target || (this.external ? '_blank' : undefined);
        return h("internal-style-provider", { key: '85621df6a226e8657ee6297fbf21f532041168fe' }, h("a", { key: 'f7724c76851df8d9c9efa0e48de207ff17a457aa', class: 'link', href: this.href, target: target }, h("slot", { key: '1df9924619999135d6263e46d70ff21b1fab1ac9' }), this.external && h(ExternalLinkIcon, null)));
    }
};
TLink.style = tLinkCss;

export { TLink as t_link };

//# sourceMappingURL=t-link.entry.js.map