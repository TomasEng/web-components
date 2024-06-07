# component-documentation



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type                                                                                                                            | Default     |
| ---------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `colourSettings` | --        |             | `{ hue: number; chroma: number; numberOfHues: number; contrast: number; hueOffsetVisitedLink: number; hueOffsetCode: number; }` | `undefined` |
| `examples`       | --        |             | `ComponentExample[]`                                                                                                            | `undefined` |
| `name`           | `name`    |             | `string`                                                                                                                        | `undefined` |


## Dependencies

### Used by

 - [page-components](../page-components)

### Depends on

- [t-heading](../../components/t-heading)
- [t-column](../../components/t-column)
- [t-details](../../components/t-details)
- [t-tabs](../../components/t-tabs)
- [t-tab](../../components/t-tab)
- [t-code](../../components/t-code)
- [preview-iframe](../preview-iframe)
- [component-preview](../component-preview)
- [t-row](../../components/t-row)

### Graph
```mermaid
graph TD;
  component-documentation --> t-heading
  component-documentation --> t-column
  component-documentation --> t-details
  component-documentation --> t-tabs
  component-documentation --> t-tab
  component-documentation --> t-code
  component-documentation --> preview-iframe
  component-documentation --> component-preview
  component-documentation --> t-row
  t-heading --> t-link
  t-tabs --> t-panel
  t-code --> t-panel
  t-code --> t-button
  preview-iframe --> t-iframe
  page-components --> component-documentation
  style component-documentation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
