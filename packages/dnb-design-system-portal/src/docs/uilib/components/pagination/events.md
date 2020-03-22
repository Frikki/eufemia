---
showTabs: true
---

## Events

| Events       | Description                                                                                                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `on_change`  | _(optional)_ will be called for every page change, regardless if the mode is `mode="infinity"` or not. Returns an object with number of useful properties and methods. Se below for more details.                                                                                        |
| `on_startup` | _(optional)_ Only on **infinity** mode. Will be called once the component is ready for interaction. Returns an object with number of useful properties and methods. Se below for more details. **NB:** Will be called again as soon as we reset the content by calling `resetContent()`. |
| `on_load`    | _(optional)_ Only on **infinity** mode. Will be called on every page interaction, also on the very first interaction. Returns an object with number of useful properties and methods. Se below for more details.                                                                         |

## Returned object

Events has a number of useful methods to change / manipulate the content.

### Pagination mode

```jsx
<Pagination
  on_change={({ page, setContent }) => {
    setContent(page, ReactComponent)
  }}
/>
```

- `page` the current page number
- `setContent` use it to add update a page including content: `setContent(pageNo, ReactComponent)`

### Infinity mode

```jsx
<Pagination
  mode="infinity"
  on_change={({ page, setContent }) => {
    setContent(page, ReactComponent)
  }}
/>
```

- `page` the current page number
- `setContent` use it to add update a page including content: `setContent(pageNo, ReactComponent)`
- `updateContent` use it to change content inside an existing page: `updateContent(pageNo, ReactComponent)`
- `resetContent` use it to invalidate all internal pages: `resetContent()`
- `endInfinity` use it to tell the infinity pagination to end the infinity scrolling interaction. Use this handler to end the infinity scrolling procedure, in case the page_count is unknown: `endInfinity(pageNo)`
- `items` internal stored pages
