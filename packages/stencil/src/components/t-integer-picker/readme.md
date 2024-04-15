# t-integer-picker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `hue`    | `hue`     |             | `number` | `undefined` |
| `label`  | `label`   |             | `string` | `undefined` |
| `max`    | `max`     |             | `number` | `undefined` |
| `min`    | `min`     |             | `number` | `undefined` |
| `value`  | `value`   |             | `number` | `undefined` |


## Events

| Event           | Description | Type                  |
| --------------- | ----------- | --------------------- |
| `integerChange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [internal-input-wrapper](../internal-input-wrapper)

### Graph
```mermaid
graph TD;
  t-integer-picker --> internal-style-provider
  t-integer-picker --> internal-input-wrapper
  page-components --> t-integer-picker
  style t-integer-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
