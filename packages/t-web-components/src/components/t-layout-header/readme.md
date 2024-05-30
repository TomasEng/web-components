# t-layout-header



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type             | Default     |
| ----------- | ------------ | ----------- | ---------------- | ----------- |
| `navItems`  | --           |             | `TNavMenuItem[]` | `[]`        |
| `siteTitle` | `site-title` |             | `string`         | `undefined` |


## Dependencies

### Used by

 - [preview-app](../../preview-app)

### Depends on

- [t-mode-switcher](../t-mode-switcher)
- [t-button](../t-button)

### Graph
```mermaid
graph TD;
  t-layout-header --> t-mode-switcher
  t-layout-header --> t-button
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  preview-app --> t-layout-header
  style t-layout-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
