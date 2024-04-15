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

 - [page-components](../../preview-app/page-components)

### Depends on

- [t-slider](../t-slider)

### Graph
```mermaid
graph TD;
  t-saturation-picker --> t-slider
  page-components --> t-saturation-picker
  style t-saturation-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
