# page-components



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type                                                                       | Default     |
| ---------------- | --------- | ----------- | -------------------------------------------------------------------------- | ----------- |
| `colourSettings` | --        |             | `{ hue: number; chroma: number; numberOfHues: number; contrast: number; }` | `undefined` |


## Events

| Event                  | Description | Type                                                                                    |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `colourSettingsChange` |             | `CustomEvent<{ hue: number; chroma: number; numberOfHues: number; contrast: number; }>` |


## Dependencies

### Used by

 - [preview-app](..)

### Depends on

- [t-layout-main](../../components/t-layout-main)
- [component-colour-settings](../component-colour-settings)
- [t-heading](../../components/t-heading)
- [t-button](../../components/t-button)
- [t-column](../../components/t-column)
- [t-switch](../../components/t-switch)
- [t-integer-picker](../../components/t-integer-picker)
- [t-textfield](../../components/t-textfield)
- [t-select](../../components/t-select)
- [t-dropdown-menu](../../components/t-dropdown)
- [t-link](../../components/t-link)
- [t-article-list](../../components/t-article-list)
- [t-spinner](../../components/t-spinner)
- [t-row](../../components/t-row)

### Graph
```mermaid
graph TD;
  page-components --> t-layout-main
  page-components --> component-colour-settings
  page-components --> t-heading
  page-components --> t-button
  page-components --> t-column
  page-components --> t-switch
  page-components --> t-integer-picker
  page-components --> t-textfield
  page-components --> t-select
  page-components --> t-dropdown-menu
  page-components --> t-link
  page-components --> t-article-list
  page-components --> t-spinner
  page-components --> t-row
  t-layout-main --> internal-style-provider
  component-colour-settings --> t-fieldset
  component-colour-settings --> t-column
  component-colour-settings --> t-hue-picker
  component-colour-settings --> t-saturation-picker
  component-colour-settings --> t-integer-picker
  component-colour-settings --> t-slider
  t-hue-picker --> t-slider
  t-slider --> internal-input-wrapper
  t-saturation-picker --> t-slider
  t-integer-picker --> internal-style-provider
  t-integer-picker --> internal-input-wrapper
  t-button --> internal-style-provider
  t-switch --> internal-style-provider
  t-textfield --> internal-style-provider
  t-textfield --> internal-input-wrapper
  t-select --> internal-style-provider
  t-select --> internal-input-wrapper
  t-dropdown-menu --> internal-style-provider
  t-link --> internal-style-provider
  t-article-list --> internal-style-provider
  preview-app --> page-components
  style page-components fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
