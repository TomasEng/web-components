# t-source-ref



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `sourceid` | `sourceid` |             | `string` | `undefined` |


## Methods

### `getSourceId() => Promise<string>`



#### Returns

Type: `Promise<string>`




## Dependencies

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
  t-source --> t-link
  style t-source-ref fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
