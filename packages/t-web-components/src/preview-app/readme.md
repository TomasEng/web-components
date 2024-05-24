# preview-app



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [t-context](../components/t-context)
- [t-layout](../components/t-layout)
- [t-layout-header](../components/t-layout-header)
- [page-about](page-about)
- [page-components](page-components)

### Graph
```mermaid
graph TD;
  preview-app --> t-context
  preview-app --> t-layout
  preview-app --> t-layout-header
  preview-app --> page-about
  preview-app --> page-components
  t-layout-header --> t-mode-switcher
  t-layout-header --> t-button
  t-mode-switcher --> internal-style-provider
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> internal-style-provider
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  t-button --> internal-style-provider
  page-about --> t-layout-main
  page-about --> t-heading
  page-about --> t-link
  t-layout-main --> internal-style-provider
  t-heading --> t-link
  t-link --> internal-style-provider
  page-components --> t-layout-main
  page-components --> component-colour-settings
  page-components --> t-heading
  page-components --> component-documentation
  component-colour-settings --> t-fieldset
  component-colour-settings --> t-column
  component-colour-settings --> t-hue-picker
  component-colour-settings --> t-saturation-picker
  component-colour-settings --> t-integer-picker
  component-colour-settings --> t-slider
  t-hue-picker --> t-slider
  t-slider --> internal-input-wrapper
  t-saturation-picker --> t-slider
  t-integer-picker --> internal-style-provider
  t-integer-picker --> internal-input-wrapper
  component-documentation --> t-heading
  component-documentation --> t-column
  component-documentation --> t-details
  component-documentation --> t-tabs
  component-documentation --> t-tab
  component-documentation --> t-code
  component-documentation --> preview-iframe
  component-documentation --> component-preview
  component-documentation --> t-row
  t-tabs --> t-panel
  t-code --> t-panel
  t-code --> t-button
  preview-iframe --> t-iframe
  style preview-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
