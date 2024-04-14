# t-mode-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default |
| ---------------- | ----------------- | ----------- | --------- | ------- |
| `hue`            | `hue`             |             | `number`  | `0`     |
| `systemSelected` | `system-selected` |             | `boolean` | `true`  |


## Dependencies

### Used by

 - [t-layout-header](../t-layout-header)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [t-dropdown-menu](../t-dropdown)

### Graph
```mermaid
graph TD;
  t-mode-picker --> internal-style-provider
  t-mode-picker --> t-dropdown-menu
  t-dropdown-menu --> internal-style-provider
  t-layout-header --> t-mode-picker
  style t-mode-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
