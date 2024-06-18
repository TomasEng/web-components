# t-mode-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `hueoffset`      | `hueoffset`       |             | `number`  | `0`         |
| `label`          | `label`           |             | `string`  | `undefined` |
| `systemSelected` | `system-selected` |             | `boolean` | `true`      |


## Dependencies

### Used by

 - [t-layout](../t-layout)

### Depends on

- [t-dropdown-menu](../t-dropdown)

### Graph
```mermaid
graph TD;
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  t-layout --> t-mode-switcher
  style t-mode-switcher fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
