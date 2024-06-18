# component-colour-settings



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                                                                                                                            | Default     |
| ---------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `settings` | --        |             | `{ hue: number; chroma: number; numberOfHues: number; contrast: number; hueOffsetVisitedLink: number; hueOffsetCode: number; }` | `undefined` |


## Events

| Event            | Description | Type                                                                                                                                         |
| ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `changeSettings` |             | `CustomEvent<{ hue: number; chroma: number; numberOfHues: number; contrast: number; hueOffsetVisitedLink: number; hueOffsetCode: number; }>` |


## Dependencies

### Used by

 - [preview-app](..)

### Depends on

- [t-fieldset](../../components/t-fieldset)
- [t-column](../../components/t-column)
- [t-hue-picker](../../components/t-hue-picker)
- [t-saturation-picker](../../components/t-saturation-picker)
- [t-integer-picker](../../components/t-integer-picker)
- [t-slider](../../components/t-slider)

### Graph
```mermaid
graph TD;
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
  preview-app --> component-colour-settings
  style component-colour-settings fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
