# t-link



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `external`  | `external`  |             | `boolean` | `undefined` |
| `focusable` | `focusable` |             | `boolean` | `true`      |
| `href`      | `href`      |             | `string`  | `undefined` |
| `hueoffset` | `hueoffset` |             | `number`  | `0`         |
| `target`    | `target`    |             | `string`  | `undefined` |


## Events

| Event       | Description | Type                      |
| ----------- | ----------- | ------------------------- |
| `linkClick` |             | `CustomEvent<MouseEvent>` |


## Methods

### `focusOnAnchor() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"link"` |             |


## Dependencies

### Used by

 - [preview-app](../../preview-app)
 - [t-heading](../t-heading)
 - [t-link-or-button](../t-link-or-button)
 - [t-source](../t-source)
 - [t-source-ref](../t-source-ref)

### Graph
```mermaid
graph TD;
  preview-app --> t-link
  t-heading --> t-link
  t-link-or-button --> t-link
  t-source --> t-link
  t-source-ref --> t-link
  style t-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
