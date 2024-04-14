# t-layout-header



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `siteTitle` | `site-title` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [page-home](../../pages/page-home)

### Depends on

- [t-mode-picker](../t-mode-switcher)

### Graph
```mermaid
graph TD;
  t-layout-header --> t-mode-picker
  t-mode-picker --> internal-style-provider
  t-mode-picker --> t-dropdown-menu
  t-dropdown-menu --> internal-style-provider
  page-home --> t-layout-header
  style t-layout-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
