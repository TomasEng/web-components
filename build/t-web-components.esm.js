import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-d1462df2.js';
export { s as setNonce } from './index-d1462df2.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    const scriptElm = BUILD.scriptDataOpts
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? (scriptElm || {})['data-opts'] || {} : {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["preview-app",[[0,"preview-app",{"baseHue":[32],"baseChroma":[32],"numberOfHues":[32],"contrast":[32],"urlHash":[32],"url":[32]}]]],["t-article",[[4,"t-article",{"sources":[16],"sourcesHeading":[1,"sources-heading"],"heading":[1],"getSourceOrder":[64]}]]],["t-source-ref",[[1,"t-source-ref",{"sourceId":[1,"source-id"],"getSourceId":[64]}]]],["t-select",[[1,"t-select",{"hue":[2],"label":[1],"options":[16],"value":[1],"labelPlacement":[1,"label-placement"]}]]],["t-textfield",[[1,"t-textfield",{"hue":[2],"label":[1],"value":[1]}]]],["t-article-list",[[1,"t-article-list",{"hue":[2],"items":[16]}]]],["t-switch",[[1,"t-switch",{"checked":[4],"hue":[2]}]]],["preview-component",[[0,"preview-component",{"html":[1],"script":[1],"hue":[2],"chroma":[2]}]]],["t-spinner",[[1,"t-spinner",{"spinnerTitle":[1,"spinner-title"]}]]],["t-dropdown-menu",[[1,"t-dropdown-menu",{"hue":[2],"label":[1],"value":[1],"buttonAttributes":[16],"items":[16],"icon":[16],"expanded":[32],"focusedIndex":[32]}]]],["t-hue-picker",[[1,"t-hue-picker",{"label":[1],"value":[2]}]]],["t-integer-picker",[[1,"t-integer-picker",{"label":[1],"value":[2],"min":[2],"max":[2],"hue":[2]}]]],["t-saturation-picker",[[1,"t-saturation-picker",{"label":[1],"value":[2]}]]],["t-source",[[1,"t-source",{"source":[16],"pagesText":[16]}]]],["t-code",[[1,"t-code",{"language":[1],"code":[1],"panel":[4]}]]],["t-layout-main",[[4,"t-layout-main",{"stickyLeftbar":[4,"sticky-leftbar"],"leftbarOpen":[32]}]]],["t-tabs",[[1,"t-tabs",{"selectedIndex":[32],"focusableIndex":[32]}]]],["component-preview",[[0,"component-preview",{"componentTestCode":[16]}]]],["preview-iframe",[[0,"preview-iframe",{"componentTestCode":[16],"hue":[2],"chroma":[2]}]]],["t-link",[[1,"t-link",{"href":[1],"target":[1],"external":[4]}]]],["internal-input-wrapper",[[1,"internal-input-wrapper",{"labelPlacement":[1,"label-placement"]}]]],["page-components",[[0,"page-components",{"colourSettings":[16]}]]],["t-layout-header",[[0,"t-layout-header",{"siteTitle":[1,"site-title"],"navItems":[16],"navOpen":[32]}]]],["page-about",[[0,"page-about"]]],["t-source-list",[[0,"t-source-list",{"sources":[16]}]]],["t-tooltip",[[1,"t-tooltip",{"open":[32]}]]],["t-context",[[4,"t-context",{"baseHue":[2,"base-hue"],"baseChroma":[2,"base-chroma"],"contrast":[2],"selectMode":[64]}]]],["t-layout",[[4,"t-layout"]]],["t-column",[[1,"t-column"]]],["t-panel",[[1,"t-panel"]]],["component-documentation",[[0,"component-documentation",{"name":[1],"examples":[16],"colourSettings":[16]}]]],["t-fieldset",[[1,"t-fieldset",{"legend":[1]}]]],["component-colour-settings",[[0,"component-colour-settings",{"settings":[16]}]]],["t-button",[[1,"t-button",{"hue":[2],"buttonAttributes":[16],"icon":[16]}]]],["t-mode-switcher",[[1,"t-mode-switcher",{"hue":[2],"systemSelected":[4,"system-selected"],"label":[1]}]]],["t-details",[[1,"t-details",{"summary":[1],"openSummary":[1,"open-summary"],"open":[32]}]]],["t-row",[[1,"t-row"]]],["t-tab",[[4,"t-tab",{"heading":[1],"name":[1]}]]],["t-heading",[[1,"t-heading",{"level":[2]}]]],["t-slider",[[1,"t-slider",{"max":[2],"min":[2],"step":[2],"label":[1],"value":[2]}]]],["t-floating-element",[[1,"t-floating-element",{"placement":[1],"visible":[4]}]]],["internal-style-provider",[[1,"internal-style-provider",{"hueOffsetInTurns":[2,"hue-offset-in-turns"]}]]]], options);
});

//# sourceMappingURL=t-web-components.esm.js.map