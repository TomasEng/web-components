/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ComponentHue } from "./types/ComponentHue";
export { ComponentHue } from "./types/ComponentHue";
export namespace Components {
    interface InternalStyleProvider {
        "hueOffsetInTurns": number;
    }
    interface PageHome {
    }
    interface TButton {
        "hue": ComponentHue;
    }
    interface TColumn {
    }
    interface TContext {
        "baseHue": number;
        "baseSaturation": number;
        "darkMode": boolean;
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
    interface TRow {
    }
    interface TSaturationPicker {
        "label": string;
        "value": number;
    }
    interface TSlider {
        "label": string;
        "max": number;
        "min": number;
        "step": number;
        "value": number;
    }
    interface TSwitch {
        "checked": boolean;
        "hue": number;
    }
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
declare global {
    interface HTMLInternalStyleProviderElement extends Components.InternalStyleProvider, HTMLStencilElement {
    }
    var HTMLInternalStyleProviderElement: {
        prototype: HTMLInternalStyleProviderElement;
        new (): HTMLInternalStyleProviderElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
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
    interface HTMLElementTagNameMap {
        "internal-style-provider": HTMLInternalStyleProviderElement;
        "page-home": HTMLPageHomeElement;
        "t-button": HTMLTButtonElement;
        "t-column": HTMLTColumnElement;
        "t-context": HTMLTContextElement;
        "t-heading": HTMLTHeadingElement;
        "t-hue-picker": HTMLTHuePickerElement;
        "t-integer-picker": HTMLTIntegerPickerElement;
        "t-layout": HTMLTLayoutElement;
        "t-row": HTMLTRowElement;
        "t-saturation-picker": HTMLTSaturationPickerElement;
        "t-slider": HTMLTSliderElement;
        "t-switch": HTMLTSwitchElement;
    }
}
declare namespace LocalJSX {
    interface InternalStyleProvider {
        "hueOffsetInTurns"?: number;
    }
    interface PageHome {
    }
    interface TButton {
        "hue"?: ComponentHue;
    }
    interface TColumn {
    }
    interface TContext {
        "baseHue"?: number;
        "baseSaturation"?: number;
        "darkMode"?: boolean;
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
    interface TRow {
    }
    interface TSaturationPicker {
        "label"?: string;
        "onSaturationChange"?: (event: TSaturationPickerCustomEvent<number>) => void;
        "value"?: number;
    }
    interface TSlider {
        "label"?: string;
        "max"?: number;
        "min"?: number;
        "onSliderChange"?: (event: TSliderCustomEvent<number>) => void;
        "step"?: number;
        "value"?: number;
    }
    interface TSwitch {
        "checked"?: boolean;
        "hue"?: number;
        "onSwitch"?: (event: TSwitchCustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "internal-style-provider": InternalStyleProvider;
        "page-home": PageHome;
        "t-button": TButton;
        "t-column": TColumn;
        "t-context": TContext;
        "t-heading": THeading;
        "t-hue-picker": THuePicker;
        "t-integer-picker": TIntegerPicker;
        "t-layout": TLayout;
        "t-row": TRow;
        "t-saturation-picker": TSaturationPicker;
        "t-slider": TSlider;
        "t-switch": TSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "internal-style-provider": LocalJSX.InternalStyleProvider & JSXBase.HTMLAttributes<HTMLInternalStyleProviderElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "t-button": LocalJSX.TButton & JSXBase.HTMLAttributes<HTMLTButtonElement>;
            "t-column": LocalJSX.TColumn & JSXBase.HTMLAttributes<HTMLTColumnElement>;
            "t-context": LocalJSX.TContext & JSXBase.HTMLAttributes<HTMLTContextElement>;
            "t-heading": LocalJSX.THeading & JSXBase.HTMLAttributes<HTMLTHeadingElement>;
            "t-hue-picker": LocalJSX.THuePicker & JSXBase.HTMLAttributes<HTMLTHuePickerElement>;
            "t-integer-picker": LocalJSX.TIntegerPicker & JSXBase.HTMLAttributes<HTMLTIntegerPickerElement>;
            "t-layout": LocalJSX.TLayout & JSXBase.HTMLAttributes<HTMLTLayoutElement>;
            "t-row": LocalJSX.TRow & JSXBase.HTMLAttributes<HTMLTRowElement>;
            "t-saturation-picker": LocalJSX.TSaturationPicker & JSXBase.HTMLAttributes<HTMLTSaturationPickerElement>;
            "t-slider": LocalJSX.TSlider & JSXBase.HTMLAttributes<HTMLTSliderElement>;
            "t-switch": LocalJSX.TSwitch & JSXBase.HTMLAttributes<HTMLTSwitchElement>;
        }
    }
}
