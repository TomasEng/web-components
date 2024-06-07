# t-context



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description | Type     | Default                           |
| ---------------------- | ------------------------- | ----------- | -------- | --------------------------------- |
| `baseChroma`           | `base-chroma`             |             | `number` | `0.4`                             |
| `baseHue`              | `base-hue`                |             | `number` | `263`                             |
| `contrast`             | `contrast`                |             | `number` | `1`                               |
| `hueOffsetCode`        | `hue-offset-code`         |             | `number` | `DEFAULT_HUE_OFFSET_CODE`         |
| `hueOffsetVisitedLink` | `hue-offset-visited-link` |             | `number` | `DEFAULT_HUE_OFFSET_VISITED_LINK` |


## Methods

### `selectMode(mode: SelectedMode) => Promise<void>`



#### Parameters

| Name   | Type               | Description |
| ------ | ------------------ | ----------- |
| `mode` | `"system" \| Mode` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [preview-app](../../preview-app)

### Graph
```mermaid
graph TD;
  preview-app --> t-context
  style t-context fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
