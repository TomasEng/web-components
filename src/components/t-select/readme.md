# t-select



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type              | Default     |
| --------- | --------- | ----------- | ----------------- | ----------- |
| `hue`     | `hue`     |             | `number`          | `0`         |
| `label`   | `label`   |             | `string`          | `undefined` |
| `options` | --        |             | `TSelectOption[]` | `undefined` |
| `value`   | `value`   |             | `string`          | `undefined` |


## Dependencies

### Used by

 - [page-home](../../pages/page-home)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [internal-input-wrapper](../internal-input-wrapper)

### Graph
```mermaid
graph TD;
  t-select --> internal-style-provider
  t-select --> internal-input-wrapper
  page-home --> t-select
  style t-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
