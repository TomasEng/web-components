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

 - [page-components](../../preview-app/page-components)
 - [t-mode-switcher](../t-mode-switcher)

### Depends on

- [internal-style-provider](../internal-style-provider)
- [t-floating-element](../t-floating-element)
- [t-button](../t-button)

### Graph
```mermaid
graph TD;
  t-dropdown-menu --> internal-style-provider
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  t-button --> internal-style-provider
  page-components --> t-dropdown-menu
  t-mode-switcher --> t-dropdown-menu
  style t-dropdown-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
