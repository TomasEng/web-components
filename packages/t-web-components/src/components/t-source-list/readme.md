# t-source-list



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                             | Default |
| --------- | --------- | ----------- | -------------------------------- | ------- |
| `sources` | --        |             | `{ [id: string]: TSourceItem; }` | `{}`    |


## Dependencies

### Used by

 - [t-article](../t-article)

### Depends on

- [t-source](../t-source)

### Graph
```mermaid
graph TD;
  t-source-list --> t-source
  t-source --> t-link
  t-link --> internal-style-provider
  t-article --> t-source-list
  style t-source-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
