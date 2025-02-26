'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { type ColourSettings, type ComponentColourSettingsCustomEvent, type TButtonCustomEvent, type TFloatingElementCustomEvent, type TLinkCustomEvent, type TLinkOrButtonCustomEvent, type TTreeItemCustomEvent } from "t-web-components";
import { ComponentColourSettings as ComponentColourSettingsElement, defineCustomElement as defineComponentColourSettings } from "t-web-components/dist/components/component-colour-settings.js";
import { ComponentDocumentation as ComponentDocumentationElement, defineCustomElement as defineComponentDocumentation } from "t-web-components/dist/components/component-documentation.js";
import { ComponentPreview as ComponentPreviewElement, defineCustomElement as defineComponentPreview } from "t-web-components/dist/components/component-preview.js";
import { InternalInputWrapper as InternalInputWrapperElement, defineCustomElement as defineInternalInputWrapper } from "t-web-components/dist/components/internal-input-wrapper.js";
import { PreviewApp as PreviewAppElement, defineCustomElement as definePreviewApp } from "t-web-components/dist/components/preview-app.js";
import { PreviewComponent as PreviewComponentElement, defineCustomElement as definePreviewComponent } from "t-web-components/dist/components/preview-component.js";
import { PreviewIframe as PreviewIframeElement, defineCustomElement as definePreviewIframe } from "t-web-components/dist/components/preview-iframe.js";
import { TArticleList as TArticleListElement, defineCustomElement as defineTArticleList } from "t-web-components/dist/components/t-article-list.js";
import { TArticle as TArticleElement, defineCustomElement as defineTArticle } from "t-web-components/dist/components/t-article.js";
import { TBoxList as TBoxListElement, defineCustomElement as defineTBoxList } from "t-web-components/dist/components/t-box-list.js";
import { TBox as TBoxElement, defineCustomElement as defineTBox } from "t-web-components/dist/components/t-box.js";
import { TBreadcrumbs as TBreadcrumbsElement, defineCustomElement as defineTBreadcrumbs } from "t-web-components/dist/components/t-breadcrumbs.js";
import { TButton as TButtonElement, defineCustomElement as defineTButton } from "t-web-components/dist/components/t-button.js";
import { TCode as TCodeElement, defineCustomElement as defineTCode } from "t-web-components/dist/components/t-code.js";
import { TColumn as TColumnElement, defineCustomElement as defineTColumn } from "t-web-components/dist/components/t-column.js";
import { TContext as TContextElement, defineCustomElement as defineTContext } from "t-web-components/dist/components/t-context.js";
import { TDetails as TDetailsElement, defineCustomElement as defineTDetails } from "t-web-components/dist/components/t-details.js";
import { TDropdownMenu as TDropdownMenuElement, defineCustomElement as defineTDropdownMenu } from "t-web-components/dist/components/t-dropdown-menu.js";
import { TFieldset as TFieldsetElement, defineCustomElement as defineTFieldset } from "t-web-components/dist/components/t-fieldset.js";
import { TFloatingElement as TFloatingElementElement, defineCustomElement as defineTFloatingElement } from "t-web-components/dist/components/t-floating-element.js";
import { THeading as THeadingElement, defineCustomElement as defineTHeading } from "t-web-components/dist/components/t-heading.js";
import { THuePicker as THuePickerElement, defineCustomElement as defineTHuePicker } from "t-web-components/dist/components/t-hue-picker.js";
import { TIframe as TIframeElement, defineCustomElement as defineTIframe } from "t-web-components/dist/components/t-iframe.js";
import { TIntegerPicker as TIntegerPickerElement, defineCustomElement as defineTIntegerPicker } from "t-web-components/dist/components/t-integer-picker.js";
import { TLayoutNavItem as TLayoutNavItemElement, defineCustomElement as defineTLayoutNavItem } from "t-web-components/dist/components/t-layout-nav-item.js";
import { TLayoutNav as TLayoutNavElement, defineCustomElement as defineTLayoutNav } from "t-web-components/dist/components/t-layout-nav.js";
import { TLayout as TLayoutElement, defineCustomElement as defineTLayout } from "t-web-components/dist/components/t-layout.js";
import { TLinkOrButton as TLinkOrButtonElement, defineCustomElement as defineTLinkOrButton } from "t-web-components/dist/components/t-link-or-button.js";
import { TLink as TLinkElement, defineCustomElement as defineTLink } from "t-web-components/dist/components/t-link.js";
import { TModeSwitcher as TModeSwitcherElement, defineCustomElement as defineTModeSwitcher } from "t-web-components/dist/components/t-mode-switcher.js";
import { TPanel as TPanelElement, defineCustomElement as defineTPanel } from "t-web-components/dist/components/t-panel.js";
import { TRow as TRowElement, defineCustomElement as defineTRow } from "t-web-components/dist/components/t-row.js";
import { TSaturationPicker as TSaturationPickerElement, defineCustomElement as defineTSaturationPicker } from "t-web-components/dist/components/t-saturation-picker.js";
import { TSelect as TSelectElement, defineCustomElement as defineTSelect } from "t-web-components/dist/components/t-select.js";
import { TSlider as TSliderElement, defineCustomElement as defineTSlider } from "t-web-components/dist/components/t-slider.js";
import { TSourceList as TSourceListElement, defineCustomElement as defineTSourceList } from "t-web-components/dist/components/t-source-list.js";
import { TSourceRef as TSourceRefElement, defineCustomElement as defineTSourceRef } from "t-web-components/dist/components/t-source-ref.js";
import { TSource as TSourceElement, defineCustomElement as defineTSource } from "t-web-components/dist/components/t-source.js";
import { TSpinner as TSpinnerElement, defineCustomElement as defineTSpinner } from "t-web-components/dist/components/t-spinner.js";
import { TSwitch as TSwitchElement, defineCustomElement as defineTSwitch } from "t-web-components/dist/components/t-switch.js";
import { TTab as TTabElement, defineCustomElement as defineTTab } from "t-web-components/dist/components/t-tab.js";
import { TTableOfContents as TTableOfContentsElement, defineCustomElement as defineTTableOfContents } from "t-web-components/dist/components/t-table-of-contents.js";
import { TTabs as TTabsElement, defineCustomElement as defineTTabs } from "t-web-components/dist/components/t-tabs.js";
import { TTextfield as TTextfieldElement, defineCustomElement as defineTTextfield } from "t-web-components/dist/components/t-textfield.js";
import { TTooltip as TTooltipElement, defineCustomElement as defineTTooltip } from "t-web-components/dist/components/t-tooltip.js";
import { TTreeItem as TTreeItemElement, defineCustomElement as defineTTreeItem } from "t-web-components/dist/components/t-tree-item.js";
import { TTree as TTreeElement, defineCustomElement as defineTTree } from "t-web-components/dist/components/t-tree.js";

type ComponentColourSettingsEvents = { onChangeSettings: EventName<ComponentColourSettingsCustomEvent<ColourSettings>> };

export const ComponentColourSettings: StencilReactComponent<ComponentColourSettingsElement, ComponentColourSettingsEvents> = /*@__PURE__*/ createComponent<ComponentColourSettingsElement, ComponentColourSettingsEvents>({
    tagName: 'component-colour-settings',
    elementClass: ComponentColourSettingsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onChangeSettings: 'changeSettings' } as ComponentColourSettingsEvents,
    defineCustomElement: defineComponentColourSettings
});

type ComponentDocumentationEvents = NonNullable<unknown>;

export const ComponentDocumentation: StencilReactComponent<ComponentDocumentationElement, ComponentDocumentationEvents> = /*@__PURE__*/ createComponent<ComponentDocumentationElement, ComponentDocumentationEvents>({
    tagName: 'component-documentation',
    elementClass: ComponentDocumentationElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as ComponentDocumentationEvents,
    defineCustomElement: defineComponentDocumentation
});

type ComponentPreviewEvents = NonNullable<unknown>;

export const ComponentPreview: StencilReactComponent<ComponentPreviewElement, ComponentPreviewEvents> = /*@__PURE__*/ createComponent<ComponentPreviewElement, ComponentPreviewEvents>({
    tagName: 'component-preview',
    elementClass: ComponentPreviewElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as ComponentPreviewEvents,
    defineCustomElement: defineComponentPreview
});

type InternalInputWrapperEvents = NonNullable<unknown>;

export const InternalInputWrapper: StencilReactComponent<InternalInputWrapperElement, InternalInputWrapperEvents> = /*@__PURE__*/ createComponent<InternalInputWrapperElement, InternalInputWrapperEvents>({
    tagName: 'internal-input-wrapper',
    elementClass: InternalInputWrapperElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as InternalInputWrapperEvents,
    defineCustomElement: defineInternalInputWrapper
});

type PreviewAppEvents = NonNullable<unknown>;

export const PreviewApp: StencilReactComponent<PreviewAppElement, PreviewAppEvents> = /*@__PURE__*/ createComponent<PreviewAppElement, PreviewAppEvents>({
    tagName: 'preview-app',
    elementClass: PreviewAppElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as PreviewAppEvents,
    defineCustomElement: definePreviewApp
});

type PreviewComponentEvents = NonNullable<unknown>;

export const PreviewComponent: StencilReactComponent<PreviewComponentElement, PreviewComponentEvents> = /*@__PURE__*/ createComponent<PreviewComponentElement, PreviewComponentEvents>({
    tagName: 'preview-component',
    elementClass: PreviewComponentElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as PreviewComponentEvents,
    defineCustomElement: definePreviewComponent
});

type PreviewIframeEvents = NonNullable<unknown>;

export const PreviewIframe: StencilReactComponent<PreviewIframeElement, PreviewIframeEvents> = /*@__PURE__*/ createComponent<PreviewIframeElement, PreviewIframeEvents>({
    tagName: 'preview-iframe',
    elementClass: PreviewIframeElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as PreviewIframeEvents,
    defineCustomElement: definePreviewIframe
});

type TArticleEvents = NonNullable<unknown>;

export const TArticle: StencilReactComponent<TArticleElement, TArticleEvents> = /*@__PURE__*/ createComponent<TArticleElement, TArticleEvents>({
    tagName: 't-article',
    elementClass: TArticleElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TArticleEvents,
    defineCustomElement: defineTArticle
});

type TArticleListEvents = NonNullable<unknown>;

export const TArticleList: StencilReactComponent<TArticleListElement, TArticleListEvents> = /*@__PURE__*/ createComponent<TArticleListElement, TArticleListEvents>({
    tagName: 't-article-list',
    elementClass: TArticleListElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TArticleListEvents,
    defineCustomElement: defineTArticleList
});

type TBoxEvents = NonNullable<unknown>;

export const TBox: StencilReactComponent<TBoxElement, TBoxEvents> = /*@__PURE__*/ createComponent<TBoxElement, TBoxEvents>({
    tagName: 't-box',
    elementClass: TBoxElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TBoxEvents,
    defineCustomElement: defineTBox
});

type TBoxListEvents = NonNullable<unknown>;

export const TBoxList: StencilReactComponent<TBoxListElement, TBoxListEvents> = /*@__PURE__*/ createComponent<TBoxListElement, TBoxListEvents>({
    tagName: 't-box-list',
    elementClass: TBoxListElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TBoxListEvents,
    defineCustomElement: defineTBoxList
});

type TBreadcrumbsEvents = NonNullable<unknown>;

export const TBreadcrumbs: StencilReactComponent<TBreadcrumbsElement, TBreadcrumbsEvents> = /*@__PURE__*/ createComponent<TBreadcrumbsElement, TBreadcrumbsEvents>({
    tagName: 't-breadcrumbs',
    elementClass: TBreadcrumbsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TBreadcrumbsEvents,
    defineCustomElement: defineTBreadcrumbs
});

type TButtonEvents = { onButtonClick: EventName<TButtonCustomEvent<MouseEvent>> };

export const TButton: StencilReactComponent<TButtonElement, TButtonEvents> = /*@__PURE__*/ createComponent<TButtonElement, TButtonEvents>({
    tagName: 't-button',
    elementClass: TButtonElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onButtonClick: 'buttonClick' } as TButtonEvents,
    defineCustomElement: defineTButton
});

type TCodeEvents = NonNullable<unknown>;

export const TCode: StencilReactComponent<TCodeElement, TCodeEvents> = /*@__PURE__*/ createComponent<TCodeElement, TCodeEvents>({
    tagName: 't-code',
    elementClass: TCodeElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TCodeEvents,
    defineCustomElement: defineTCode
});

type TColumnEvents = NonNullable<unknown>;

export const TColumn: StencilReactComponent<TColumnElement, TColumnEvents> = /*@__PURE__*/ createComponent<TColumnElement, TColumnEvents>({
    tagName: 't-column',
    elementClass: TColumnElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TColumnEvents,
    defineCustomElement: defineTColumn
});

type TContextEvents = NonNullable<unknown>;

export const TContext: StencilReactComponent<TContextElement, TContextEvents> = /*@__PURE__*/ createComponent<TContextElement, TContextEvents>({
    tagName: 't-context',
    elementClass: TContextElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TContextEvents,
    defineCustomElement: defineTContext
});

type TDetailsEvents = NonNullable<unknown>;

export const TDetails: StencilReactComponent<TDetailsElement, TDetailsEvents> = /*@__PURE__*/ createComponent<TDetailsElement, TDetailsEvents>({
    tagName: 't-details',
    elementClass: TDetailsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TDetailsEvents,
    defineCustomElement: defineTDetails
});

type TDropdownMenuEvents = NonNullable<unknown>;

export const TDropdownMenu: StencilReactComponent<TDropdownMenuElement, TDropdownMenuEvents> = /*@__PURE__*/ createComponent<TDropdownMenuElement, TDropdownMenuEvents>({
    tagName: 't-dropdown-menu',
    elementClass: TDropdownMenuElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TDropdownMenuEvents,
    defineCustomElement: defineTDropdownMenu
});

type TFieldsetEvents = NonNullable<unknown>;

export const TFieldset: StencilReactComponent<TFieldsetElement, TFieldsetEvents> = /*@__PURE__*/ createComponent<TFieldsetElement, TFieldsetEvents>({
    tagName: 't-fieldset',
    elementClass: TFieldsetElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TFieldsetEvents,
    defineCustomElement: defineTFieldset
});

type TFloatingElementEvents = { onClickOutside: EventName<TFloatingElementCustomEvent<MouseEvent>> };

export const TFloatingElement: StencilReactComponent<TFloatingElementElement, TFloatingElementEvents> = /*@__PURE__*/ createComponent<TFloatingElementElement, TFloatingElementEvents>({
    tagName: 't-floating-element',
    elementClass: TFloatingElementElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onClickOutside: 'clickOutside' } as TFloatingElementEvents,
    defineCustomElement: defineTFloatingElement
});

type THeadingEvents = NonNullable<unknown>;

export const THeading: StencilReactComponent<THeadingElement, THeadingEvents> = /*@__PURE__*/ createComponent<THeadingElement, THeadingEvents>({
    tagName: 't-heading',
    elementClass: THeadingElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as THeadingEvents,
    defineCustomElement: defineTHeading
});

type THuePickerEvents = { onHueChange: EventName<CustomEvent<number>> };

export const THuePicker: StencilReactComponent<THuePickerElement, THuePickerEvents> = /*@__PURE__*/ createComponent<THuePickerElement, THuePickerEvents>({
    tagName: 't-hue-picker',
    elementClass: THuePickerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onHueChange: 'hueChange' } as THuePickerEvents,
    defineCustomElement: defineTHuePicker
});

type TIframeEvents = NonNullable<unknown>;

export const TIframe: StencilReactComponent<TIframeElement, TIframeEvents> = /*@__PURE__*/ createComponent<TIframeElement, TIframeEvents>({
    tagName: 't-iframe',
    elementClass: TIframeElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TIframeEvents,
    defineCustomElement: defineTIframe
});

type TIntegerPickerEvents = { onIntegerChange: EventName<CustomEvent<number>> };

export const TIntegerPicker: StencilReactComponent<TIntegerPickerElement, TIntegerPickerEvents> = /*@__PURE__*/ createComponent<TIntegerPickerElement, TIntegerPickerEvents>({
    tagName: 't-integer-picker',
    elementClass: TIntegerPickerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onIntegerChange: 'integerChange' } as TIntegerPickerEvents,
    defineCustomElement: defineTIntegerPicker
});

type TLayoutEvents = NonNullable<unknown>;

export const TLayout: StencilReactComponent<TLayoutElement, TLayoutEvents> = /*@__PURE__*/ createComponent<TLayoutElement, TLayoutEvents>({
    tagName: 't-layout',
    elementClass: TLayoutElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TLayoutEvents,
    defineCustomElement: defineTLayout
});

type TLayoutNavEvents = NonNullable<unknown>;

export const TLayoutNav: StencilReactComponent<TLayoutNavElement, TLayoutNavEvents> = /*@__PURE__*/ createComponent<TLayoutNavElement, TLayoutNavEvents>({
    tagName: 't-layout-nav',
    elementClass: TLayoutNavElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TLayoutNavEvents,
    defineCustomElement: defineTLayoutNav
});

type TLayoutNavItemEvents = NonNullable<unknown>;

export const TLayoutNavItem: StencilReactComponent<TLayoutNavItemElement, TLayoutNavItemEvents> = /*@__PURE__*/ createComponent<TLayoutNavItemElement, TLayoutNavItemEvents>({
    tagName: 't-layout-nav-item',
    elementClass: TLayoutNavItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TLayoutNavItemEvents,
    defineCustomElement: defineTLayoutNavItem
});

type TLinkEvents = { onLinkClick: EventName<TLinkCustomEvent<MouseEvent>> };

export const TLink: StencilReactComponent<TLinkElement, TLinkEvents> = /*@__PURE__*/ createComponent<TLinkElement, TLinkEvents>({
    tagName: 't-link',
    elementClass: TLinkElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onLinkClick: 'linkClick' } as TLinkEvents,
    defineCustomElement: defineTLink
});

type TLinkOrButtonEvents = { onElementClick: EventName<TLinkOrButtonCustomEvent<MouseEvent>> };

export const TLinkOrButton: StencilReactComponent<TLinkOrButtonElement, TLinkOrButtonEvents> = /*@__PURE__*/ createComponent<TLinkOrButtonElement, TLinkOrButtonEvents>({
    tagName: 't-link-or-button',
    elementClass: TLinkOrButtonElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onElementClick: 'elementClick' } as TLinkOrButtonEvents,
    defineCustomElement: defineTLinkOrButton
});

type TModeSwitcherEvents = NonNullable<unknown>;

export const TModeSwitcher: StencilReactComponent<TModeSwitcherElement, TModeSwitcherEvents> = /*@__PURE__*/ createComponent<TModeSwitcherElement, TModeSwitcherEvents>({
    tagName: 't-mode-switcher',
    elementClass: TModeSwitcherElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TModeSwitcherEvents,
    defineCustomElement: defineTModeSwitcher
});

type TPanelEvents = NonNullable<unknown>;

export const TPanel: StencilReactComponent<TPanelElement, TPanelEvents> = /*@__PURE__*/ createComponent<TPanelElement, TPanelEvents>({
    tagName: 't-panel',
    elementClass: TPanelElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TPanelEvents,
    defineCustomElement: defineTPanel
});

type TRowEvents = NonNullable<unknown>;

export const TRow: StencilReactComponent<TRowElement, TRowEvents> = /*@__PURE__*/ createComponent<TRowElement, TRowEvents>({
    tagName: 't-row',
    elementClass: TRowElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TRowEvents,
    defineCustomElement: defineTRow
});

type TSaturationPickerEvents = { onSaturationChange: EventName<CustomEvent<number>> };

export const TSaturationPicker: StencilReactComponent<TSaturationPickerElement, TSaturationPickerEvents> = /*@__PURE__*/ createComponent<TSaturationPickerElement, TSaturationPickerEvents>({
    tagName: 't-saturation-picker',
    elementClass: TSaturationPickerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onSaturationChange: 'saturationChange' } as TSaturationPickerEvents,
    defineCustomElement: defineTSaturationPicker
});

type TSelectEvents = NonNullable<unknown>;

export const TSelect: StencilReactComponent<TSelectElement, TSelectEvents> = /*@__PURE__*/ createComponent<TSelectElement, TSelectEvents>({
    tagName: 't-select',
    elementClass: TSelectElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TSelectEvents,
    defineCustomElement: defineTSelect
});

type TSliderEvents = { onSliderChange: EventName<CustomEvent<number>> };

export const TSlider: StencilReactComponent<TSliderElement, TSliderEvents> = /*@__PURE__*/ createComponent<TSliderElement, TSliderEvents>({
    tagName: 't-slider',
    elementClass: TSliderElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onSliderChange: 'sliderChange' } as TSliderEvents,
    defineCustomElement: defineTSlider
});

type TSourceEvents = NonNullable<unknown>;

export const TSource: StencilReactComponent<TSourceElement, TSourceEvents> = /*@__PURE__*/ createComponent<TSourceElement, TSourceEvents>({
    tagName: 't-source',
    elementClass: TSourceElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TSourceEvents,
    defineCustomElement: defineTSource
});

type TSourceListEvents = NonNullable<unknown>;

export const TSourceList: StencilReactComponent<TSourceListElement, TSourceListEvents> = /*@__PURE__*/ createComponent<TSourceListElement, TSourceListEvents>({
    tagName: 't-source-list',
    elementClass: TSourceListElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TSourceListEvents,
    defineCustomElement: defineTSourceList
});

type TSourceRefEvents = NonNullable<unknown>;

export const TSourceRef: StencilReactComponent<TSourceRefElement, TSourceRefEvents> = /*@__PURE__*/ createComponent<TSourceRefElement, TSourceRefEvents>({
    tagName: 't-source-ref',
    elementClass: TSourceRefElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TSourceRefEvents,
    defineCustomElement: defineTSourceRef
});

type TSpinnerEvents = NonNullable<unknown>;

export const TSpinner: StencilReactComponent<TSpinnerElement, TSpinnerEvents> = /*@__PURE__*/ createComponent<TSpinnerElement, TSpinnerEvents>({
    tagName: 't-spinner',
    elementClass: TSpinnerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TSpinnerEvents,
    defineCustomElement: defineTSpinner
});

type TSwitchEvents = { onSwitch: EventName<CustomEvent<boolean>> };

export const TSwitch: StencilReactComponent<TSwitchElement, TSwitchEvents> = /*@__PURE__*/ createComponent<TSwitchElement, TSwitchEvents>({
    tagName: 't-switch',
    elementClass: TSwitchElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onSwitch: 'switch' } as TSwitchEvents,
    defineCustomElement: defineTSwitch
});

type TTabEvents = NonNullable<unknown>;

export const TTab: StencilReactComponent<TTabElement, TTabEvents> = /*@__PURE__*/ createComponent<TTabElement, TTabEvents>({
    tagName: 't-tab',
    elementClass: TTabElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TTabEvents,
    defineCustomElement: defineTTab
});

type TTableOfContentsEvents = NonNullable<unknown>;

export const TTableOfContents: StencilReactComponent<TTableOfContentsElement, TTableOfContentsEvents> = /*@__PURE__*/ createComponent<TTableOfContentsElement, TTableOfContentsEvents>({
    tagName: 't-table-of-contents',
    elementClass: TTableOfContentsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TTableOfContentsEvents,
    defineCustomElement: defineTTableOfContents
});

type TTabsEvents = NonNullable<unknown>;

export const TTabs: StencilReactComponent<TTabsElement, TTabsEvents> = /*@__PURE__*/ createComponent<TTabsElement, TTabsEvents>({
    tagName: 't-tabs',
    elementClass: TTabsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TTabsEvents,
    defineCustomElement: defineTTabs
});

type TTextfieldEvents = { onValueChange: EventName<CustomEvent<string>> };

export const TTextfield: StencilReactComponent<TTextfieldElement, TTextfieldEvents> = /*@__PURE__*/ createComponent<TTextfieldElement, TTextfieldEvents>({
    tagName: 't-textfield',
    elementClass: TTextfieldElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onValueChange: 'valueChange' } as TTextfieldEvents,
    defineCustomElement: defineTTextfield
});

type TTooltipEvents = NonNullable<unknown>;

export const TTooltip: StencilReactComponent<TTooltipElement, TTooltipEvents> = /*@__PURE__*/ createComponent<TTooltipElement, TTooltipEvents>({
    tagName: 't-tooltip',
    elementClass: TTooltipElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TTooltipEvents,
    defineCustomElement: defineTTooltip
});

type TTreeEvents = NonNullable<unknown>;

export const TTree: StencilReactComponent<TTreeElement, TTreeEvents> = /*@__PURE__*/ createComponent<TTreeElement, TTreeEvents>({
    tagName: 't-tree',
    elementClass: TTreeElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TTreeEvents,
    defineCustomElement: defineTTree
});

type TTreeItemEvents = { onLabelClick: EventName<TTreeItemCustomEvent<MouseEvent>> };

export const TTreeItem: StencilReactComponent<TTreeItemElement, TTreeItemEvents> = /*@__PURE__*/ createComponent<TTreeItemElement, TTreeItemEvents>({
    tagName: 't-tree-item',
    elementClass: TTreeItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onLabelClick: 'labelClick' } as TTreeItemEvents,
    defineCustomElement: defineTTreeItem
});
