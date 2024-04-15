# t-hue-picker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `label`  | `label`   |             | `string` | `undefined` |
| `value`  | `value`   |             | `number` | `undefined` |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `hueChange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [t-slider](../t-slider)

### Graph
```mermaid
graph TD;
  t-hue-picker --> t-slider
  page-components --> t-hue-picker
  style t-hue-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
