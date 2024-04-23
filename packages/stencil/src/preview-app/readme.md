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
  t-button --> internal-style-provider
  page-about --> t-layout-main
  page-about --> t-heading
  page-about --> t-link
  t-layout-main --> internal-style-provider
  t-link --> internal-style-provider
  page-components --> t-layout-main
  page-components --> component-colour-settings
  page-components --> t-heading
  page-components --> t-button
  page-components --> t-column
  page-components --> t-switch
  page-components --> t-integer-picker
  page-components --> t-textfield
  page-components --> t-select
  page-components --> t-dropdown-menu
  page-components --> t-link
  page-components --> t-article-list
  page-components --> t-row
  component-colour-settings --> t-fieldset
  component-colour-settings --> t-column
  component-colour-settings --> t-hue-picker
  component-colour-settings --> t-saturation-picker
  component-colour-settings --> t-integer-picker
  t-hue-picker --> t-slider
  t-slider --> internal-input-wrapper
  t-saturation-picker --> t-slider
  t-integer-picker --> internal-style-provider
  t-integer-picker --> internal-input-wrapper
  t-switch --> internal-style-provider
  t-textfield --> internal-style-provider
  t-textfield --> internal-input-wrapper
  t-select --> internal-style-provider
  t-select --> internal-input-wrapper
  t-article-list --> internal-style-provider
  style preview-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
