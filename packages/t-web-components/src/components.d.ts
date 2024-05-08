/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColourSettings } from "./types/ColourSettings";
import { LabelPlacement } from "./types/LabelPlacement";
import { ColourSettings as ColourSettings1 } from "./components";
import { ComponentHue } from "./types/ComponentHue";
import { TArticleListItem } from "./components/t-article-list/TArticleListItem";
import { ButtonAttributes } from "./types/HTMLAttributes";
import { VNode } from "@stencil/core";
import { TDropdownMenuItem } from "./components/t-dropdown/TDropdownMenuItem";
import { TNavMenuItem } from "./components/t-layout-header/TNavMenuItem";
import { TSelectOption } from "./components/t-select/TSelectOption";
export { ColourSettings } from "./types/ColourSettings";
export { LabelPlacement } from "./types/LabelPlacement";
export { ColourSettings as ColourSettings1 } from "./components";
export { ComponentHue } from "./types/ComponentHue";
export { TArticleListItem } from "./components/t-article-list/TArticleListItem";
export { ButtonAttributes } from "./types/HTMLAttributes";
export { VNode } from "@stencil/core";
export { TDropdownMenuItem } from "./components/t-dropdown/TDropdownMenuItem";
export { TNavMenuItem } from "./components/t-layout-header/TNavMenuItem";
export { TSelectOption } from "./components/t-select/TSelectOption";
export namespace Components {
    interface ComponentColourSettings {
        "settings": ColourSettings;
    }
    interface InternalInputWrapper {
        "labelPlacement": LabelPlacement;
    }
    interface InternalStyleProvider {
        "hueOffsetInTurns": number;
    }
    interface PageAbout {
    }
    interface PageComponents {
        "colourSettings": ColourSettings1;
    }
    interface PreviewApp {
    }
    interface PreviewComponent {
        "html": string;
        "script"?: string;
    }
    interface TArticleList {
        "hue": ComponentHue;
        "items": TArticleListItem[];
    }
    interface TButton {
        "buttonAttributes": ButtonAttributes;
        "hue": ComponentHue;
    }
    interface TColumn {
    }
    interface TContext {
        "baseChroma": number;
        "baseHue": number;
        "contrast": number;
    }
    interface TDropdownMenu {
        "buttonAttributes": ButtonAttributes;
        "hue": ComponentHue;
        "icon"?: VNode;
        "items": TDropdownMenuItem[];
        "label": VNode | string;
        "value": string;
    }
    interface TFieldset {
        "legend": string;
    }
    interface THeading {
        "level": 1 | 2 | 3 | 4 | 5 | 6;
    }
    interface THuePicker {
        "label": string;
        "value": number;
    }
    interface TIntegerPicker {
        "hue": ComponentHue;
        "label": string;
        "max": number;
        "min": number;
        "value": number;
    }
    interface TLayout {
    }
    interface TLayoutHeader {
        "navItems": TNavMenuItem[];
        "siteTitle": string;
    }
    interface TLayoutMain {
        "stickyLeftbar": boolean;
    }
    interface TLink {
        "external"?: boolean;
        "href": string;
        "target"?: string;
    }
    interface TModeSwitcher {
        "hue": ComponentHue;
        "label": string;
        "systemSelected": boolean;
    }
    interface TRow {
    }
    interface TSaturationPicker {
        "label": string;
        "value": number;
    }
    interface TSelect {
        "hue": ComponentHue;
        "label": string;
        "labelPlacement": LabelPlacement;
        "options": TSelectOption[];
        "value": string;
    }
    interface TSlider {
        "label": string;
        "max": number;
        "min": number;
        "step": number;
        "value": number;
    }
    interface TSpinner {
        "title": string;
    }
    interface TSwitch {
        "checked": boolean;
        "hue": number;
    }
    interface TTextfield {
        "hue": ComponentHue;
        "label": string;
        "value": string;
    }
    interface TTooltip {
    }
}
export interface ComponentColourSettingsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLComponentColourSettingsElement;
}
export interface PageComponentsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPageComponentsElement;
}
export interface THuePickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTHuePickerElement;
}
export interface TIntegerPickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTIntegerPickerElement;
}
export interface TSaturationPickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTSaturationPickerElement;
}
export interface TSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTSliderElement;
}
export interface TSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTSwitchElement;
}
export interface TTextfieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTTextfieldElement;
}
declare global {
    interface HTMLComponentColourSettingsElementEventMap {
        "changeSettings": ColourSettings;
    }
    interface HTMLComponentColourSettingsElement extends Components.ComponentColourSettings, HTMLStencilElement {
        addEventListener<K extends keyof HTMLComponentColourSettingsElementEventMap>(type: K, listener: (this: HTMLComponentColourSettingsElement, ev: ComponentColourSettingsCustomEvent<HTMLComponentColourSettingsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLComponentColourSettingsElementEventMap>(type: K, listener: (this: HTMLComponentColourSettingsElement, ev: ComponentColourSettingsCustomEvent<HTMLComponentColourSettingsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLComponentColourSettingsElement: {
        prototype: HTMLComponentColourSettingsElement;
        new (): HTMLComponentColourSettingsElement;
    };
    interface HTMLInternalInputWrapperElement extends Components.InternalInputWrapper, HTMLStencilElement {
    }
    var HTMLInternalInputWrapperElement: {
        prototype: HTMLInternalInputWrapperElement;
        new (): HTMLInternalInputWrapperElement;
    };
    interface HTMLInternalStyleProviderElement extends Components.InternalStyleProvider, HTMLStencilElement {
    }
    var HTMLInternalStyleProviderElement: {
        prototype: HTMLInternalStyleProviderElement;
        new (): HTMLInternalStyleProviderElement;
    };
    interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {
    }
    var HTMLPageAboutElement: {
        prototype: HTMLPageAboutElement;
        new (): HTMLPageAboutElement;
    };
    interface HTMLPageComponentsElementEventMap {
        "colourSettingsChange": ColourSettings1;
    }
    interface HTMLPageComponentsElement extends Components.PageComponents, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPageComponentsElementEventMap>(type: K, listener: (this: HTMLPageComponentsElement, ev: PageComponentsCustomEvent<HTMLPageComponentsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPageComponentsElementEventMap>(type: K, listener: (this: HTMLPageComponentsElement, ev: PageComponentsCustomEvent<HTMLPageComponentsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPageComponentsElement: {
        prototype: HTMLPageComponentsElement;
        new (): HTMLPageComponentsElement;
    };
    interface HTMLPreviewAppElement extends Components.PreviewApp, HTMLStencilElement {
    }
    var HTMLPreviewAppElement: {
        prototype: HTMLPreviewAppElement;
        new (): HTMLPreviewAppElement;
    };
    interface HTMLPreviewComponentElement extends Components.PreviewComponent, HTMLStencilElement {
    }
    var HTMLPreviewComponentElement: {
        prototype: HTMLPreviewComponentElement;
        new (): HTMLPreviewComponentElement;
    };
    interface HTMLTArticleListElement extends Components.TArticleList, HTMLStencilElement {
    }
    var HTMLTArticleListElement: {
        prototype: HTMLTArticleListElement;
        new (): HTMLTArticleListElement;
    };
    interface HTMLTButtonElement extends Components.TButton, HTMLStencilElement {
    }
    var HTMLTButtonElement: {
        prototype: HTMLTButtonElement;
        new (): HTMLTButtonElement;
    };
    interface HTMLTColumnElement extends Components.TColumn, HTMLStencilElement {
    }
    var HTMLTColumnElement: {
        prototype: HTMLTColumnElement;
        new (): HTMLTColumnElement;
    };
    interface HTMLTContextElement extends Components.TContext, HTMLStencilElement {
    }
    var HTMLTContextElement: {
        prototype: HTMLTContextElement;
        new (): HTMLTContextElement;
    };
    interface HTMLTDropdownMenuElement extends Components.TDropdownMenu, HTMLStencilElement {
    }
    var HTMLTDropdownMenuElement: {
        prototype: HTMLTDropdownMenuElement;
        new (): HTMLTDropdownMenuElement;
    };
    interface HTMLTFieldsetElement extends Components.TFieldset, HTMLStencilElement {
    }
    var HTMLTFieldsetElement: {
        prototype: HTMLTFieldsetElement;
        new (): HTMLTFieldsetElement;
    };
    interface HTMLTHeadingElement extends Components.THeading, HTMLStencilElement {
    }
    var HTMLTHeadingElement: {
        prototype: HTMLTHeadingElement;
        new (): HTMLTHeadingElement;
    };
    interface HTMLTHuePickerElementEventMap {
        "hueChange": number;
    }
    interface HTMLTHuePickerElement extends Components.THuePicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTHuePickerElementEventMap>(type: K, listener: (this: HTMLTHuePickerElement, ev: THuePickerCustomEvent<HTMLTHuePickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTHuePickerElementEventMap>(type: K, listener: (this: HTMLTHuePickerElement, ev: THuePickerCustomEvent<HTMLTHuePickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTHuePickerElement: {
        prototype: HTMLTHuePickerElement;
        new (): HTMLTHuePickerElement;
    };
    interface HTMLTIntegerPickerElementEventMap {
        "integerChange": number;
    }
    interface HTMLTIntegerPickerElement extends Components.TIntegerPicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTIntegerPickerElementEventMap>(type: K, listener: (this: HTMLTIntegerPickerElement, ev: TIntegerPickerCustomEvent<HTMLTIntegerPickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTIntegerPickerElementEventMap>(type: K, listener: (this: HTMLTIntegerPickerElement, ev: TIntegerPickerCustomEvent<HTMLTIntegerPickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTIntegerPickerElement: {
        prototype: HTMLTIntegerPickerElement;
        new (): HTMLTIntegerPickerElement;
    };
    interface HTMLTLayoutElement extends Components.TLayout, HTMLStencilElement {
    }
    var HTMLTLayoutElement: {
        prototype: HTMLTLayoutElement;
        new (): HTMLTLayoutElement;
    };
    interface HTMLTLayoutHeaderElement extends Components.TLayoutHeader, HTMLStencilElement {
    }
    var HTMLTLayoutHeaderElement: {
        prototype: HTMLTLayoutHeaderElement;
        new (): HTMLTLayoutHeaderElement;
    };
    interface HTMLTLayoutMainElement extends Components.TLayoutMain, HTMLStencilElement {
    }
    var HTMLTLayoutMainElement: {
        prototype: HTMLTLayoutMainElement;
        new (): HTMLTLayoutMainElement;
    };
    interface HTMLTLinkElement extends Components.TLink, HTMLStencilElement {
    }
    var HTMLTLinkElement: {
        prototype: HTMLTLinkElement;
        new (): HTMLTLinkElement;
    };
    interface HTMLTModeSwitcherElement extends Components.TModeSwitcher, HTMLStencilElement {
    }
    var HTMLTModeSwitcherElement: {
        prototype: HTMLTModeSwitcherElement;
        new (): HTMLTModeSwitcherElement;
    };
    interface HTMLTRowElement extends Components.TRow, HTMLStencilElement {
    }
    var HTMLTRowElement: {
        prototype: HTMLTRowElement;
        new (): HTMLTRowElement;
    };
    interface HTMLTSaturationPickerElementEventMap {
        "saturationChange": number;
    }
    interface HTMLTSaturationPickerElement extends Components.TSaturationPicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTSaturationPickerElementEventMap>(type: K, listener: (this: HTMLTSaturationPickerElement, ev: TSaturationPickerCustomEvent<HTMLTSaturationPickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTSaturationPickerElementEventMap>(type: K, listener: (this: HTMLTSaturationPickerElement, ev: TSaturationPickerCustomEvent<HTMLTSaturationPickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTSaturationPickerElement: {
        prototype: HTMLTSaturationPickerElement;
        new (): HTMLTSaturationPickerElement;
    };
    interface HTMLTSelectElement extends Components.TSelect, HTMLStencilElement {
    }
    var HTMLTSelectElement: {
        prototype: HTMLTSelectElement;
        new (): HTMLTSelectElement;
    };
    interface HTMLTSliderElementEventMap {
        "sliderChange": number;
    }
    interface HTMLTSliderElement extends Components.TSlider, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTSliderElementEventMap>(type: K, listener: (this: HTMLTSliderElement, ev: TSliderCustomEvent<HTMLTSliderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTSliderElementEventMap>(type: K, listener: (this: HTMLTSliderElement, ev: TSliderCustomEvent<HTMLTSliderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTSliderElement: {
        prototype: HTMLTSliderElement;
        new (): HTMLTSliderElement;
    };
    interface HTMLTSpinnerElement extends Components.TSpinner, HTMLStencilElement {
    }
    var HTMLTSpinnerElement: {
        prototype: HTMLTSpinnerElement;
        new (): HTMLTSpinnerElement;
    };
    interface HTMLTSwitchElementEventMap {
        "switch": boolean;
    }
    interface HTMLTSwitchElement extends Components.TSwitch, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTSwitchElementEventMap>(type: K, listener: (this: HTMLTSwitchElement, ev: TSwitchCustomEvent<HTMLTSwitchElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTSwitchElementEventMap>(type: K, listener: (this: HTMLTSwitchElement, ev: TSwitchCustomEvent<HTMLTSwitchElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTSwitchElement: {
        prototype: HTMLTSwitchElement;
        new (): HTMLTSwitchElement;
    };
    interface HTMLTTextfieldElementEventMap {
        "valueChange": string;
    }
    interface HTMLTTextfieldElement extends Components.TTextfield, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTTextfieldElementEventMap>(type: K, listener: (this: HTMLTTextfieldElement, ev: TTextfieldCustomEvent<HTMLTTextfieldElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTTextfieldElementEventMap>(type: K, listener: (this: HTMLTTextfieldElement, ev: TTextfieldCustomEvent<HTMLTTextfieldElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTTextfieldElement: {
        prototype: HTMLTTextfieldElement;
        new (): HTMLTTextfieldElement;
    };
    interface HTMLTTooltipElement extends Components.TTooltip, HTMLStencilElement {
    }
    var HTMLTTooltipElement: {
        prototype: HTMLTTooltipElement;
        new (): HTMLTTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "component-colour-settings": HTMLComponentColourSettingsElement;
        "internal-input-wrapper": HTMLInternalInputWrapperElement;
        "internal-style-provider": HTMLInternalStyleProviderElement;
        "page-about": HTMLPageAboutElement;
        "page-components": HTMLPageComponentsElement;
        "preview-app": HTMLPreviewAppElement;
        "preview-component": HTMLPreviewComponentElement;
        "t-article-list": HTMLTArticleListElement;
        "t-button": HTMLTButtonElement;
        "t-column": HTMLTColumnElement;
        "t-context": HTMLTContextElement;
        "t-dropdown-menu": HTMLTDropdownMenuElement;
        "t-fieldset": HTMLTFieldsetElement;
        "t-heading": HTMLTHeadingElement;
        "t-hue-picker": HTMLTHuePickerElement;
        "t-integer-picker": HTMLTIntegerPickerElement;
        "t-layout": HTMLTLayoutElement;
        "t-layout-header": HTMLTLayoutHeaderElement;
        "t-layout-main": HTMLTLayoutMainElement;
        "t-link": HTMLTLinkElement;
        "t-mode-switcher": HTMLTModeSwitcherElement;
        "t-row": HTMLTRowElement;
        "t-saturation-picker": HTMLTSaturationPickerElement;
        "t-select": HTMLTSelectElement;
        "t-slider": HTMLTSliderElement;
        "t-spinner": HTMLTSpinnerElement;
        "t-switch": HTMLTSwitchElement;
        "t-textfield": HTMLTTextfieldElement;
        "t-tooltip": HTMLTTooltipElement;
    }
}
declare namespace LocalJSX {
    interface ComponentColourSettings {
        "onChangeSettings"?: (event: ComponentColourSettingsCustomEvent<ColourSettings>) => void;
        "settings"?: ColourSettings;
    }
    interface InternalInputWrapper {
        "labelPlacement"?: LabelPlacement;
    }
    interface InternalStyleProvider {
        "hueOffsetInTurns"?: number;
    }
    interface PageAbout {
    }
    interface PageComponents {
        "colourSettings"?: ColourSettings1;
        "onColourSettingsChange"?: (event: PageComponentsCustomEvent<ColourSettings1>) => void;
    }
    interface PreviewApp {
    }
    interface PreviewComponent {
        "html"?: string;
        "script"?: string;
    }
    interface TArticleList {
        "hue"?: ComponentHue;
        "items"?: TArticleListItem[];
    }
    interface TButton {
        "buttonAttributes"?: ButtonAttributes;
        "hue"?: ComponentHue;
    }
    interface TColumn {
    }
    interface TContext {
        "baseChroma"?: number;
        "baseHue"?: number;
        "contrast"?: number;
    }
    interface TDropdownMenu {
        "buttonAttributes"?: ButtonAttributes;
        "hue"?: ComponentHue;
        "icon"?: VNode;
        "items"?: TDropdownMenuItem[];
        "label"?: VNode | string;
        "value"?: string;
    }
    interface TFieldset {
        "legend"?: string;
    }
    interface THeading {
        "level"?: 1 | 2 | 3 | 4 | 5 | 6;
    }
    interface THuePicker {
        "label"?: string;
        "onHueChange"?: (event: THuePickerCustomEvent<number>) => void;
        "value"?: number;
    }
    interface TIntegerPicker {
        "hue"?: ComponentHue;
        "label"?: string;
        "max"?: number;
        "min"?: number;
        "onIntegerChange"?: (event: TIntegerPickerCustomEvent<number>) => void;
        "value"?: number;
    }
    interface TLayout {
    }
    interface TLayoutHeader {
        "navItems"?: TNavMenuItem[];
        "siteTitle"?: string;
    }
    interface TLayoutMain {
        "stickyLeftbar"?: boolean;
    }
    interface TLink {
        "external"?: boolean;
        "href"?: string;
        "target"?: string;
    }
    interface TModeSwitcher {
        "hue"?: ComponentHue;
        "label"?: string;
        "systemSelected"?: boolean;
    }
    interface TRow {
    }
    interface TSaturationPicker {
        "label"?: string;
        "onSaturationChange"?: (event: TSaturationPickerCustomEvent<number>) => void;
        "value"?: number;
    }
    interface TSelect {
        "hue"?: ComponentHue;
        "label"?: string;
        "labelPlacement"?: LabelPlacement;
        "options"?: TSelectOption[];
        "value"?: string;
    }
    interface TSlider {
        "label"?: string;
        "max"?: number;
        "min"?: number;
        "onSliderChange"?: (event: TSliderCustomEvent<number>) => void;
        "step"?: number;
        "value"?: number;
    }
    interface TSpinner {
        "title"?: string;
    }
    interface TSwitch {
        "checked"?: boolean;
        "hue"?: number;
        "onSwitch"?: (event: TSwitchCustomEvent<boolean>) => void;
    }
    interface TTextfield {
        "hue"?: ComponentHue;
        "label"?: string;
        "onValueChange"?: (event: TTextfieldCustomEvent<string>) => void;
        "value"?: string;
    }
    interface TTooltip {
    }
    interface IntrinsicElements {
        "component-colour-settings": ComponentColourSettings;
        "internal-input-wrapper": InternalInputWrapper;
        "internal-style-provider": InternalStyleProvider;
        "page-about": PageAbout;
        "page-components": PageComponents;
        "preview-app": PreviewApp;
        "preview-component": PreviewComponent;
        "t-article-list": TArticleList;
        "t-button": TButton;
        "t-column": TColumn;
        "t-context": TContext;
        "t-dropdown-menu": TDropdownMenu;
        "t-fieldset": TFieldset;
        "t-heading": THeading;
        "t-hue-picker": THuePicker;
        "t-integer-picker": TIntegerPicker;
        "t-layout": TLayout;
        "t-layout-header": TLayoutHeader;
        "t-layout-main": TLayoutMain;
        "t-link": TLink;
        "t-mode-switcher": TModeSwitcher;
        "t-row": TRow;
        "t-saturation-picker": TSaturationPicker;
        "t-select": TSelect;
        "t-slider": TSlider;
        "t-spinner": TSpinner;
        "t-switch": TSwitch;
        "t-textfield": TTextfield;
        "t-tooltip": TTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-colour-settings": LocalJSX.ComponentColourSettings & JSXBase.HTMLAttributes<HTMLComponentColourSettingsElement>;
            "internal-input-wrapper": LocalJSX.InternalInputWrapper & JSXBase.HTMLAttributes<HTMLInternalInputWrapperElement>;
            "internal-style-provider": LocalJSX.InternalStyleProvider & JSXBase.HTMLAttributes<HTMLInternalStyleProviderElement>;
            "page-about": LocalJSX.PageAbout & JSXBase.HTMLAttributes<HTMLPageAboutElement>;
            "page-components": LocalJSX.PageComponents & JSXBase.HTMLAttributes<HTMLPageComponentsElement>;
            "preview-app": LocalJSX.PreviewApp & JSXBase.HTMLAttributes<HTMLPreviewAppElement>;
            "preview-component": LocalJSX.PreviewComponent & JSXBase.HTMLAttributes<HTMLPreviewComponentElement>;
            "t-article-list": LocalJSX.TArticleList & JSXBase.HTMLAttributes<HTMLTArticleListElement>;
            "t-button": LocalJSX.TButton & JSXBase.HTMLAttributes<HTMLTButtonElement>;
            "t-column": LocalJSX.TColumn & JSXBase.HTMLAttributes<HTMLTColumnElement>;
            "t-context": LocalJSX.TContext & JSXBase.HTMLAttributes<HTMLTContextElement>;
            "t-dropdown-menu": LocalJSX.TDropdownMenu & JSXBase.HTMLAttributes<HTMLTDropdownMenuElement>;
            "t-fieldset": LocalJSX.TFieldset & JSXBase.HTMLAttributes<HTMLTFieldsetElement>;
            "t-heading": LocalJSX.THeading & JSXBase.HTMLAttributes<HTMLTHeadingElement>;
            "t-hue-picker": LocalJSX.THuePicker & JSXBase.HTMLAttributes<HTMLTHuePickerElement>;
            "t-integer-picker": LocalJSX.TIntegerPicker & JSXBase.HTMLAttributes<HTMLTIntegerPickerElement>;
            "t-layout": LocalJSX.TLayout & JSXBase.HTMLAttributes<HTMLTLayoutElement>;
            "t-layout-header": LocalJSX.TLayoutHeader & JSXBase.HTMLAttributes<HTMLTLayoutHeaderElement>;
            "t-layout-main": LocalJSX.TLayoutMain & JSXBase.HTMLAttributes<HTMLTLayoutMainElement>;
            "t-link": LocalJSX.TLink & JSXBase.HTMLAttributes<HTMLTLinkElement>;
            "t-mode-switcher": LocalJSX.TModeSwitcher & JSXBase.HTMLAttributes<HTMLTModeSwitcherElement>;
            "t-row": LocalJSX.TRow & JSXBase.HTMLAttributes<HTMLTRowElement>;
            "t-saturation-picker": LocalJSX.TSaturationPicker & JSXBase.HTMLAttributes<HTMLTSaturationPickerElement>;
            "t-select": LocalJSX.TSelect & JSXBase.HTMLAttributes<HTMLTSelectElement>;
            "t-slider": LocalJSX.TSlider & JSXBase.HTMLAttributes<HTMLTSliderElement>;
            "t-spinner": LocalJSX.TSpinner & JSXBase.HTMLAttributes<HTMLTSpinnerElement>;
            "t-switch": LocalJSX.TSwitch & JSXBase.HTMLAttributes<HTMLTSwitchElement>;
            "t-textfield": LocalJSX.TTextfield & JSXBase.HTMLAttributes<HTMLTTextfieldElement>;
            "t-tooltip": LocalJSX.TTooltip & JSXBase.HTMLAttributes<HTMLTTooltipElement>;
        }
    }
}
