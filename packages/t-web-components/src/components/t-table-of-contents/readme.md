# t-table-of-contents



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `label`  | `label`   |             | `string` | `undefined` |


## Dependencies

### Depends on

- [t-tree-item](../t-tree-item)
- [t-tree](../t-tree)

### Graph
```mermaid
graph TD;
  t-table-of-contents --> t-tree-item
  t-table-of-contents --> t-tree
  t-tree-item --> t-link-or-button
  t-link-or-button --> t-link
  t-link-or-button --> t-button
  style t-table-of-contents fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
