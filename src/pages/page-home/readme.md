# page-home



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [t-context](../../components/t-context)
- [t-layout](../../components/t-layout)
- [t-heading](../../components/t-heading)
- [t-row](../../components/t-row)
- [t-switch](../../components/t-switch)
- [t-hue-picker](../../components/t-hue-picker)
- [t-saturation-picker](../../components/t-saturation-picker)
- [t-integer-picker](../../components/t-integer-picker)
- [t-button](../../components/t-button)
- [t-column](../../components/t-column)
- [t-textfield](../../components/t-textfield)
- [t-select](../../components/t-select)

### Graph
```mermaid
graph TD;
  page-home --> t-context
  page-home --> t-layout
  page-home --> t-heading
  page-home --> t-row
  page-home --> t-switch
  page-home --> t-hue-picker
  page-home --> t-saturation-picker
  page-home --> t-integer-picker
  page-home --> t-button
  page-home --> t-column
  page-home --> t-textfield
  page-home --> t-select
  t-switch --> internal-style-provider
  t-hue-picker --> t-slider
  t-saturation-picker --> t-slider
  t-integer-picker --> internal-style-provider
  t-integer-picker --> internal-input-wrapper
  t-button --> internal-style-provider
  t-textfield --> internal-style-provider
  t-textfield --> internal-input-wrapper
  t-select --> internal-style-provider
  t-select --> internal-input-wrapper
  style page-home fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
