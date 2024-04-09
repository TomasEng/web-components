import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-d71aeab2.js';
export { s as setNonce } from './index-d71aeab2.js';
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
  return bootstrapLazy([["t-integer-picker",[[1,"t-integer-picker",{"label":[1],"value":[2],"min":[2],"max":[2],"hue":[2]}]]],["t-select",[[1,"t-select",{"hue":[2],"label":[1],"options":[16],"value":[1]}]]],["t-textfield",[[1,"t-textfield",{"hue":[2],"label":[1],"value":[1]}]]],["t-button",[[1,"t-button",{"hue":[2]}]]],["t-hue-picker",[[1,"t-hue-picker",{"label":[1],"value":[2]}]]],["t-saturation-picker",[[1,"t-saturation-picker",{"label":[1],"value":[2]}]]],["t-switch",[[1,"t-switch",{"checked":[4],"hue":[2]}]]],["t-column",[[1,"t-column"]]],["t-context",[[4,"t-context",{"darkMode":[4,"dark-mode"],"baseHue":[2,"base-hue"],"baseChroma":[2,"base-chroma"]}]]],["t-heading",[[1,"t-heading",{"level":[2]}]]],["t-layout",[[1,"t-layout"]]],["t-row",[[1,"t-row"]]],["t-slider",[[1,"t-slider",{"max":[2],"min":[2],"step":[2],"label":[1],"value":[2]}]]],["internal-input-wrapper",[[1,"internal-input-wrapper",{"hueOffsetInTurns":[2,"hue-offset-in-turns"]}]]],["internal-style-provider",[[1,"internal-style-provider",{"hueOffsetInTurns":[2,"hue-offset-in-turns"]}]]],["page-home",[[0,"page-home",{"darkMode":[32],"baseHue":[32],"baseChroma":[32],"numberOfHues":[32]}]]]], options);
});

//# sourceMappingURL=web-components.esm.js.map