# t-saturation-picker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `label`  | `label`   |             | `string` | `undefined` |
| `value`  | `value`   |             | `number` | `undefined` |


## Events

| Event              | Description | Type                  |
| ------------------ | ----------- | --------------------- |
| `saturationChange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [component-colour-settings](../../preview-app/component-colour-settings)

### Depends on

- [t-slider](../t-slider)

### Graph
```mermaid
graph TD;
  t-saturation-picker --> t-slider
  t-slider --> internal-input-wrapper
  component-colour-settings --> t-saturation-picker
  style t-saturation-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
