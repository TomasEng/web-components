/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TButton {
    }
}
declare global {
    interface HTMLTButtonElement extends Components.TButton, HTMLStencilElement {
    }
    var HTMLTButtonElement: {
        prototype: HTMLTButtonElement;
        new (): HTMLTButtonElement;
    };
    interface HTMLElementTagNameMap {
        "t-button": HTMLTButtonElement;
    }
}
declare namespace LocalJSX {
    interface TButton {
    }
    interface IntrinsicElements {
        "t-button": TButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "t-button": LocalJSX.TButton & JSXBase.HTMLAttributes<HTMLTButtonElement>;
        }
    }
}
