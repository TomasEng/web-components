# t-dropdown-menu



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute   | Description | Type                                                                        | Default     |
| ------------------ | ----------- | ----------- | --------------------------------------------------------------------------- | ----------- |
| `buttonAttributes` | --          |             | `ButtonHTMLAttributes<HTMLButtonElement> & DataAttributes & AriaAttributes` | `undefined` |
| `hueoffset`        | `hueoffset` |             | `number`                                                                    | `0`         |
| `items`            | --          |             | `TDropdownMenuItem[]`                                                       | `[]`        |
| `label`            | `label`     |             | `VNode \| string`                                                           | `undefined` |
| `value`            | `value`     |             | `string`                                                                    | `undefined` |
| `variant`          | `variant`   |             | `"default" \| "link" \| "transparent" \| "without-background"`              | `'default'` |


## Dependencies

### Used by

 - [t-mode-switcher](../t-mode-switcher)

### Depends on

- [t-floating-element](../t-floating-element)
- [t-button](../t-button)

### Graph
```mermaid
graph TD;
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  t-mode-switcher --> t-dropdown-menu
  style t-dropdown-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
