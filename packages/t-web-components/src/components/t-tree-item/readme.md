# t-tree-item



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `href`   | `href`    |             | `string` | `null`      |
| `label`  | `label`   |             | `string` | `undefined` |


## Events

| Event        | Description | Type                      |
| ------------ | ----------- | ------------------------- |
| `labelClick` |             | `CustomEvent<MouseEvent>` |


## Methods

### `focusOnLink() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getLastVisibleSubItem() => Promise<HTMLTTreeItemElement | null>`



#### Returns

Type: `Promise<HTMLTTreeItemElement>`



### `getNextVisibleItem() => Promise<HTMLTTreeItemElement | null>`



#### Returns

Type: `Promise<HTMLTTreeItemElement>`



### `getPreviousVisibleItem() => Promise<HTMLTTreeItemElement | null>`



#### Returns

Type: `Promise<HTMLTTreeItemElement>`



### `getRoot() => Promise<HTMLTTreeElement>`



#### Returns

Type: `Promise<HTMLTTreeElement>`



### `getSubItems() => Promise<NodeListOf<HTMLTTreeItemElement>>`



#### Returns

Type: `Promise<NodeListOf<HTMLTTreeItemElement>>`



### `getVisibleSubItems() => Promise<HTMLTTreeItemElement[]>`



#### Returns

Type: `Promise<HTMLTTreeItemElement[]>`



### `isExpanded() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `isFocusable() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `isTopLevel() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `isVisible() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `setFocusable(focusable: boolean) => Promise<boolean>`



#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `focusable` | `boolean` |             |

#### Returns

Type: `Promise<boolean>`




## Dependencies

### Used by

 - [t-table-of-contents](../t-table-of-contents)

### Depends on

- [t-link-or-button](../t-link-or-button)

### Graph
```mermaid
graph TD;
  t-tree-item --> t-link-or-button
  t-link-or-button --> t-link
  t-link-or-button --> t-button
  t-link --> internal-style-provider
  t-button --> internal-style-provider
  t-table-of-contents --> t-tree-item
  style t-tree-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
