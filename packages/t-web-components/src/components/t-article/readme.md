# t-article



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                             | Default       |
| --------- | --------- | ----------- | -------------------------------- | ------------- |
| `heading` | `heading` |             | `string`                         | `undefined`   |
| `sources` | --        |             | `{ [id: string]: TSourceItem; }` | `{}`          |
| `text`    | --        |             | `{ sourcesHeading: string; }`    | `defaultText` |


## Methods

### `getSourceOrder() => Promise<string[]>`



#### Returns

Type: `Promise<string[]>`




## Dependencies

### Depends on

- [t-heading](../t-heading)
- [t-source-list](../t-source-list)

### Graph
```mermaid
graph TD;
  t-article --> t-heading
  t-article --> t-source-list
  t-heading --> t-link
  t-source-list --> t-source
  t-source --> t-link
  style t-article fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
