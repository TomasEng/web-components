# t-textfield



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `hue`    | `hue`     |             | `number` | `0`         |
| `label`  | `label`   |             | `string` | `undefined` |
| `value`  | `value`   |             | `string` | `undefined` |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `valueChange` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [internal-input-wrapper](../internal-input-wrapper)

### Graph
```mermaid
graph TD;
  t-textfield --> internal-style-provider
  t-textfield --> internal-input-wrapper
  page-components --> t-textfield
  style t-textfield fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
