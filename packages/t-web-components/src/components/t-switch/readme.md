# t-switch



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default |
| --------- | --------- | ----------- | --------- | ------- |
| `checked` | `checked` |             | `boolean` | `false` |
| `hue`     | `hue`     |             | `number`  | `0`     |


## Events

| Event    | Description | Type                   |
| -------- | ----------- | ---------------------- |
| `switch` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [internal-style-provider](../internal-style-provider)

### Graph
```mermaid
graph TD;
  t-switch --> internal-style-provider
  page-components --> t-switch
  style t-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
