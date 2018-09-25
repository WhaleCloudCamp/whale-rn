# MenuPicker

Menu 和 Select 的核心功能，支持 1 级或者 2 级。

| 属性         | 说明                                            | 类型                                                         | 默认值 |
| ------------ | ----------------------------------------------- | ------------------------------------------------------------ | ------ |
| fromBounds   | 弹出窗的位置坐标，可通过 view.measure 获取      | Object                                                       | 无     |
| data         | 数据                                            | Array<{label: ReactNode, value, disabled?, children<data>?}> | []     |
| level        | 菜单级数，可选 1/2                              | number                                                       | 2      |
| value        | 初始值，一级和二级筛选数据的 value 组成的数组。 | Array                                                        |        |
| onChange     | 选择后的回调函数                                | (item: Object): void                                         | 无     |
| height       | 筛选组件的最大高度                              | number                                                       | 500    |
| width        | 筛选组件的宽度                                  | number                                                       | 375    |
| popoverStyle | 弹出窗样式                                      | style                                                        | {}     |
| textAlign    | 选择项文字对齐方式                              | ['left','center','right']                                    | 375    |

## data 数据结构

```js
//这个值对应data中的value值
const value = ["a", "3"];
const data = [
  {
    label: "菜单1",
    value: "a",
    children: [
      { label: "子菜单1", value: "0" },
      { label: "子菜单2", value: "1" },
      { label: "子菜单3", value: "2" },
      { label: "子菜单4", value: "3" }
    ]
  },
  {
    label: "菜单2",
    value: "1",
    children: [
      { label: "子菜单1", value: "0" },
      { label: "子菜单2", value: "1" }
    ]
  },
    ...
];
```
