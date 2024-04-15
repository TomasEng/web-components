# page-components



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default |
| -------------- | ---------------- | ----------- | -------- | ------- |
| `baseChroma`   | `base-chroma`    |             | `number` | `0.4`   |
| `baseHue`      | `base-hue`       |             | `number` | `263`   |
| `numberOfHues` | `number-of-hues` |             | `number` | `3`     |


## Events

| Event                | Description | Type                  |
| -------------------- | ----------- | --------------------- |
| `chromaChange`       |             | `CustomEvent<number>` |
| `hueChange`          |             | `CustomEvent<number>` |
| `numberOfHuesChange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [preview-app](..)

### Depends on

- [t-heading](../../components/t-heading)
- [t-row](../../components/t-row)
- [t-hue-picker](../../components/t-hue-picker)
- [t-saturation-picker](../../components/t-saturation-picker)
- [t-integer-picker](../../components/t-integer-picker)
- [t-button](../../components/t-button)
- [t-column](../../components/t-column)
- [t-switch](../../components/t-switch)
- [t-textfield](../../components/t-textfield)
- [t-select](../../components/t-select)
- [t-dropdown-menu](../../components/t-dropdown)
- [t-link](../../components/t-link)

### Graph
```mermaid
graph TD;
  page-components --> t-heading
  page-components --> t-row
  page-components --> t-hue-picker
  page-components --> t-saturation-picker
  page-components --> t-integer-picker
  page-components --> t-button
  page-components --> t-column
  page-components --> t-switch
  page-components --> t-textfield
  page-components --> t-select
  page-components --> t-dropdown-menu
  page-components --> t-link
  t-hue-picker --> t-slider
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
  preview-app --> page-components
  style page-components fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
