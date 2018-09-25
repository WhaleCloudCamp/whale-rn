# Navbar
Navbar组件

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|title|String|标题|标题|
|rightText|String|右文本|右文本|
|isShowDel|bool|false|是否显示左边第二个图标|
|isShowRightText|bool|false|是否显示右文本|
|isShowFirstRightIcon|bool|false|是否显示右边第一个图标
|isShowLastRightIcon|bool|false|是否显示右边边第二个图标|
|imgBackIcon|boStringol||返回图标|
|imgDelIcon|boStringol||删除图标|
|imgRightFirstIcon|boStringol||右边第一个图标|
|imgRightLasttIcon|boStringol||右边第二个图标|

| style | 同View.style |  | 主样式
| styleRightText | 同View.style |  | 右文本的样式
| styleTitle | 同View.style |  |标题的样式


## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onLeftItemPress |  | 返回点击事件
| onDelPress |  | 删除事件
| onRightFirstItemPress |  | 右边第一个图标事件
| onRightLastItemPress |  | 右边第二个图标事件
| onRightTextPress |  | 右边文本事件