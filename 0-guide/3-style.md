# 样式管理

::: tip 描述
使用 `BEM ` 方法组织定义样式，以便结构化、唯一，避免样式冲突互相污染等，详情查看[bem](http://getbem.com/introduction/)
:::

## `BEM`

> `block-name__element-name--modifier-name`: 模块名 + 元素名 + 修饰器名

```css
.menu {}
.menu--fixed{}
.menu_item{}
.menu_item--active{}
.menu_item--dsiabled{}
```

### `Blocks`

独立的实体模块， 如 `header`，`container`， `menu`， `checkbox`， `input`， `footer`等
### `Elements`

模块的一部分，与模块紧密关联

如 `header title`，`menu item`， `list item`， `checkbox caption` 等
### `Modifiers`

模块或元素的修饰标志，用来表示外观或行为。

如 `disabled`, `highlighted`, `checked`, `fixed`, `color yellow`, `active`, `size big` 等

