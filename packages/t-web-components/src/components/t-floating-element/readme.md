# t-floating-element



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                     | Default |
| ----------- | ----------- | ----------- | ---------------------------------------- | ------- |
| `placement` | `placement` |             | `"bottom" \| "left" \| "right" \| "top"` | `'top'` |
| `visible`   | `visible`   |             | `boolean`                                | `false` |


## Events

| Event          | Description | Type                      |
| -------------- | ----------- | ------------------------- |
| `clickOutside` |             | `CustomEvent<MouseEvent>` |


## Dependencies

### Used by

 - [t-dropdown-menu](../t-dropdown)
 - [t-tooltip](../t-tooltip)

### Graph
```mermaid
graph TD;
  t-dropdown-menu --> t-floating-element
  t-tooltip --> t-floating-element
  style t-floating-element fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
