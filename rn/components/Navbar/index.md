# Navbar
Navbar组件,用于展示头部标题栏，支持自定义图标及样式
位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。
可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。
避免用过多的元素填满导航栏。一般情况下，一个返回按钮、一个标题、一个当前视图的控件就足够了；、
为图标和文字控件，提供更大的点击热区。

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