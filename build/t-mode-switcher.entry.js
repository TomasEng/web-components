import { h, r as registerInstance } from './index-d1462df2.js';
import { S as SvgTemplate } from './SvgTemplate-8e2fcbd6.js';
import { s as state, a as selectMode } from './store-9af57529.js';

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
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
const dFilled$2 = 'M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061l1.415-1.414ZM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.413Z';
const dUnfilled$2 = 'M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061l1.415-1.414ZM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.413Z';
const SunIcon = (_a) => {
    var { fill } = _a, rest = __rest$2(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: fill ? dFilled$2 : dUnfilled$2, fill: "currentColor" })));
};

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
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
const dFilled$1 = 'M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Z';
const dUnfilled$1 = 'M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Zm1.747 2.016c.117.605.179 1.23.179 1.869 0 5.385-4.365 9.75-9.75 9.75a9.803 9.803 0 0 1-1.87-.18A8.25 8.25 0 1 0 16.57 5.13Z';
const MoonIcon = (_a) => {
    var { fill } = _a, rest = __rest$1(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: fill ? dFilled$1 : dUnfilled$1, fill: "currentColor" })));
};

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
const dFilled = 'M9.814 2.823a.75.75 0 0 1 .73-.573h2.913a.75.75 0 0 1 .729.573l.459 1.89c.217.08.43.167.637.265l1.675-1.02a.75.75 0 0 1 .92.11l2.056 2.054a.75.75 0 0 1 .11.92l-1.02 1.676c.097.207.185.42.264.637l1.89.46a.75.75 0 0 1 .573.728v2.914a.75.75 0 0 1-.573.729l-1.89.459a7.69 7.69 0 0 1-.265.637l1.02 1.675a.75.75 0 0 1-.11.92l-2.054 2.056a.75.75 0 0 1-.92.11l-1.676-1.02c-.207.097-.42.185-.637.264l-.46 1.89a.75.75 0 0 1-.728.573h-2.914a.75.75 0 0 1-.729-.573l-.459-1.89a7.725 7.725 0 0 1-.637-.264l-1.675 1.02a.75.75 0 0 1-.92-.11l-2.056-2.055a.75.75 0 0 1-.11-.92l1.02-1.676a7.707 7.707 0 0 1-.264-.637l-1.89-.46a.75.75 0 0 1-.573-.728v-2.914a.75.75 0 0 1 .573-.729l1.89-.459c.079-.217.167-.43.265-.637l-1.02-1.675a.75.75 0 0 1 .11-.92l2.054-2.056a.75.75 0 0 1 .92-.11l1.676 1.02c.207-.097.42-.185.637-.264l.46-1.89ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z';
const dUnfilled = 'M10.543 2.25a.75.75 0 0 0-.729.573l-.459 1.89c-.217.08-.43.167-.637.265l-1.675-1.02a.75.75 0 0 0-.92.11L4.066 6.121a.75.75 0 0 0-.11.92l1.02 1.676c-.097.207-.185.42-.264.637l-1.89.46a.75.75 0 0 0-.573.728v2.914a.75.75 0 0 0 .573.729l1.89.459c.079.217.167.43.265.637l-1.02 1.675a.75.75 0 0 0 .11.92l2.054 2.056a.75.75 0 0 0 .92.11l1.676-1.02c.207.097.42.185.637.264l.46 1.89a.75.75 0 0 0 .728.573h2.914a.75.75 0 0 0 .729-.573l.459-1.89c.217-.079.43-.167.637-.264l1.675 1.02a.75.75 0 0 0 .92-.11l2.056-2.055a.75.75 0 0 0 .11-.92l-1.02-1.676a7.69 7.69 0 0 0 .264-.637l1.89-.46a.75.75 0 0 0 .573-.728v-2.914a.75.75 0 0 0-.573-.729l-1.89-.459a7.693 7.693 0 0 0-.265-.637l1.02-1.675a.75.75 0 0 0-.11-.92l-2.054-2.056a.75.75 0 0 0-.92-.11l-1.676 1.02a7.706 7.706 0 0 0-.637-.264l-.46-1.89a.75.75 0 0 0-.728-.573h-2.914Zm.172 3.221.418-1.721h1.734l.418 1.721a.75.75 0 0 0 .513.541c.407.122.796.285 1.163.483a.75.75 0 0 0 .747-.02l1.526-.93 1.221 1.22-.93 1.527a.75.75 0 0 0-.02.747c.198.367.36.756.483 1.163a.75.75 0 0 0 .541.513l1.721.418v1.734l-1.72.418a.75.75 0 0 0-.542.513 6.207 6.207 0 0 1-.483 1.163.75.75 0 0 0 .02.747l.93 1.526-1.22 1.221-1.527-.93a.75.75 0 0 0-.747-.02 6.21 6.21 0 0 1-1.163.483.75.75 0 0 0-.513.541l-.418 1.721h-1.734l-.418-1.72a.75.75 0 0 0-.513-.542 6.21 6.21 0 0 1-1.163-.483.75.75 0 0 0-.747.02l-1.526.93-1.221-1.22.93-1.527a.75.75 0 0 0 .02-.747 6.206 6.206 0 0 1-.483-1.163.75.75 0 0 0-.541-.513l-1.721-.418v-1.734l1.721-.418a.75.75 0 0 0 .541-.513c.122-.407.285-.796.483-1.163a.75.75 0 0 0-.02-.747l-.93-1.526 1.22-1.221 1.527.93a.75.75 0 0 0 .747.02c.367-.198.756-.36 1.163-.483a.75.75 0 0 0 .513-.541ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z';
const CogIcon = (_a) => {
    var { fill } = _a, rest = __rest(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: fill ? dFilled : dUnfilled, fill: "currentColor" })));
};

const tModeSwitcherCss = ".icon{scale:1.5}.label{margin-left:0.5em}";

const TModeSwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.systemSelected = true;
        this.label = undefined;
    }
    render() {
        const icon = state.mode === 'light' ? h(SunIcon, { class: 'icon' }) : h(MoonIcon, { fill: true, class: 'icon' });
        return h("internal-style-provider", { key: '9d43765e7daea01c19c5d4b6f3f837259006d77d', hueOffsetInTurns: this.hue }, h("t-dropdown-menu", { key: 'd65f77762d69954bbd4e4a3154d783fd0fa1f467', icon: icon, label: this.label, buttonAttributes: { title: 'Velg modus' }, items: [
                {
                    label: 'Automatisk',
                    action: () => this.selectMode('system'),
                    selected: state.selectedMode === 'system',
                    icon: h(CogIcon, null),
                    buttonAttributes: { title: 'Bruk samme innstilling som nettleseren' }
                },
                {
                    label: 'Lys modus',
                    action: () => this.selectMode('light'),
                    selected: state.selectedMode === 'light',
                    icon: h(SunIcon, null),
                    buttonAttributes: { title: 'Velg lys modus' }
                },
                {
                    label: 'Mørk modus',
                    action: () => this.selectMode('dark'),
                    selected: state.selectedMode === 'dark',
                    icon: h(MoonIcon, null),
                    buttonAttributes: { title: 'Velg mørk modus' }
                },
            ] }));
    }
    selectMode(mode) {
        selectMode(mode);
    }
};
TModeSwitcher.style = tModeSwitcherCss;

export { TModeSwitcher as t_mode_switcher };

//# sourceMappingURL=t-mode-switcher.entry.js.map