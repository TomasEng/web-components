# t-mode-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `hue`            | `hue`             |             | `number`  | `0`         |
| `label`          | `label`           |             | `string`  | `undefined` |
| `systemSelected` | `system-selected` |             | `boolean` | `true`      |


## Dependencies

### Used by

 - [t-layout-header](../t-layout-header)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [t-dropdown-menu](../t-dropdown)

### Graph
```mermaid
graph TD;
  t-mode-switcher --> internal-style-provider
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> internal-style-provider
  t-layout-header --> t-mode-switcher
  style t-mode-switcher fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
