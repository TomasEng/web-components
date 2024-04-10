# t-mode-picker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                | Default   |
| ---------------- | ----------------- | ----------- | ------------------- | --------- |
| `hue`            | `hue`             |             | `number`            | `0`       |
| `mode`           | `mode`            |             | `"dark" \| "light"` | `'light'` |
| `systemSelected` | `system-selected` |             | `boolean`           | `true`    |


## Dependencies

### Used by

 - [page-home](../../pages/page-home)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [t-button](../t-button)

### Graph
```mermaid
graph TD;
  t-mode-picker --> internal-style-provider
  t-mode-picker --> t-button
  t-button --> internal-style-provider
  page-home --> t-mode-picker
  style t-mode-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
