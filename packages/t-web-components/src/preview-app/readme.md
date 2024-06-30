# preview-app



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [t-context](../components/t-context)
- [t-layout](../components/t-layout)
- [t-layout-nav](../components/t-layout-nav)
- [t-layout-nav-item](../components/t-layout-nav-item)
- [t-link](../components/t-link)
- [component-colour-settings](component-colour-settings)
- [t-heading](../components/t-heading)
- [component-documentation](component-documentation)

### Graph
```mermaid
graph TD;
  preview-app --> t-context
  preview-app --> t-layout
  preview-app --> t-layout-nav
  preview-app --> t-layout-nav-item
  preview-app --> t-link
  preview-app --> component-colour-settings
  preview-app --> t-heading
  preview-app --> component-documentation
  t-layout --> t-mode-switcher
  t-layout --> t-button
  t-mode-switcher --> t-dropdown-menu
  t-dropdown-menu --> t-floating-element
  t-dropdown-menu --> t-button
  component-colour-settings --> t-fieldset
  component-colour-settings --> t-column
  component-colour-settings --> t-hue-picker
  component-colour-settings --> t-saturation-picker
  component-colour-settings --> t-integer-picker
  component-colour-settings --> t-slider
  t-hue-picker --> t-slider
  t-slider --> internal-input-wrapper
  t-saturation-picker --> t-slider
  t-integer-picker --> internal-input-wrapper
  t-heading --> t-link
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
