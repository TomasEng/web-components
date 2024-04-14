# t-dropdown-menu



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type                                                                        | Default     |
| ------------------ | --------- | ----------- | --------------------------------------------------------------------------- | ----------- |
| `buttonAttributes` | --        |             | `ButtonHTMLAttributes<HTMLButtonElement> & DataAttributes & AriaAttributes` | `undefined` |
| `hue`              | `hue`     |             | `number`                                                                    | `0`         |
| `icon`             | --        |             | `VNode`                                                                     | `undefined` |
| `items`            | --        |             | `TDropdownMenuItem[]`                                                       | `[]`        |
| `label`            | `label`   |             | `VNode \| string`                                                           | `undefined` |
| `value`            | `value`   |             | `string`                                                                    | `undefined` |


## Dependencies

### Used by

 - [page-home](../../preview-app/page-home)
 - [t-mode-picker](../t-mode-switcher)

### Depends on

- [internal-style-provider](../internal-style-provider)

### Graph
```mermaid
graph TD;
  t-dropdown-menu --> internal-style-provider
  page-home --> t-dropdown-menu
  t-mode-picker --> t-dropdown-menu
  style t-dropdown-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
