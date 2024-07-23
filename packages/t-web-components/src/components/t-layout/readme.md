# t-layout



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description | Type                                                  | Default       |
| ------------------- | ------------------- | ----------- | ----------------------------------------------------- | ------------- |
| `leftbarvisibility` | `leftbarvisibility` |             | `"hidden" \| "largescreenonly" \| "visible"`          | `'visible'`   |
| `sitetitle`         | `sitetitle`         |             | `string`                                              | `undefined`   |
| `stickyleftbar`     | `stickyleftbar`     |             | `boolean`                                             | `false`       |
| `text`              | --                  |             | `{ expandSidebar: string; collapseSidebar: string; }` | `defaultText` |


## Dependencies

### Used by

 - [preview-app](../../preview-app)

### Depends on

- [t-mode-switcher](../t-mode-switcher)
- [t-button](../t-button)

### Graph
```mermaid
graph TD;
  t-layout --> t-mode-switcher
  t-layout --> t-button
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  preview-app --> t-layout
  style t-layout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
