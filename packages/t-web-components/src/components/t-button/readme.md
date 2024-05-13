# t-button



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type                                                                        | Default     |
| ------------------ | --------- | ----------- | --------------------------------------------------------------------------- | ----------- |
| `buttonAttributes` | --        |             | `ButtonHTMLAttributes<HTMLButtonElement> & DataAttributes & AriaAttributes` | `undefined` |
| `hue`              | `hue`     |             | `number`                                                                    | `0`         |
| `icon`             | --        |             | `VNode`                                                                     | `undefined` |


## Dependencies

### Used by

 - [page-components](../../preview-app/page-components)
 - [t-dropdown-menu](../t-dropdown)
 - [t-layout-header](../t-layout-header)

### Depends on

- [internal-style-provider](../internal-style-provider)

### Graph
```mermaid
graph TD;
  t-button --> internal-style-provider
  page-components --> t-button
  t-dropdown-menu --> t-button
  t-layout-header --> t-button
  style t-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
