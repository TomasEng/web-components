# t-article



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                             | Default |
| --------- | --------- | ----------- | -------------------------------- | ------- |
| `sources` | --        |             | `{ [id: string]: TSourceItem; }` | `{}`    |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)

### Depends on

- [t-source-list](../t-source-list)

### Graph
```mermaid
graph TD;
  t-article --> t-source-list
  t-source-list --> t-source
  t-source --> t-link
  t-link --> internal-style-provider
  page-components --> t-article
  style t-article fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
