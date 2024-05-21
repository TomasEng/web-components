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
- [component-documentation](../component-documentation)

### Graph
```mermaid
graph TD;
  page-components --> t-layout-main
  page-components --> component-colour-settings
  page-components --> t-heading
  page-components --> component-documentation
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
  t-heading --> t-link
  t-link --> internal-style-provider
  component-documentation --> t-heading
  component-documentation --> t-column
  component-documentation --> t-details
  component-documentation --> t-tabs
  component-documentation --> t-tab
  component-documentation --> t-code
  component-documentation --> preview-iframe
  component-documentation --> component-preview
  component-documentation --> t-row
  t-tabs --> t-panel
  t-code --> t-panel
  preview-app --> page-components
  style page-components fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
