# t-source-ref



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type     | Default     |
| ---------- | ----------- | ----------- | -------- | ----------- |
| `sourceId` | `source-id` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [t-tooltip](../t-tooltip)
- [t-link](../t-link)
- [t-source](../t-source)

### Graph
```mermaid
graph TD;
  t-source-ref --> t-tooltip
  t-source-ref --> t-link
  t-source-ref --> t-source
  t-tooltip --> t-floating-element
  t-link --> internal-style-provider
  t-source --> t-link
  page-components --> t-source-ref
  style t-source-ref fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
