# t-hue-picker



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default     |
| ------------ | ------------- | ----------- | --------- | ----------- |
| `label`      | `label`       |             | `string`  | `undefined` |
| `value`      | `value`       |             | `number`  | `undefined` |
| `withOffset` | `with-offset` |             | `boolean` | `false`     |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `hueChange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [component-colour-settings](../../preview-app/component-colour-settings)

### Depends on

- [t-slider](../t-slider)

### Graph
```mermaid
graph TD;
  t-hue-picker --> t-slider
  t-slider --> internal-input-wrapper
  component-colour-settings --> t-hue-picker
  style t-hue-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
