# checkbox  
checkbox组件,在两个互斥对象进行选择。

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| style | 同View.style |  | checkbox样式。
|disable|bool|false|是否可点击
|isChecked|bool |false|当前选中值
| normalImage | imgage  | 正常状态下的图片（不选则默认）
| checkedImage | imgage | 选择状态的图片 （不选则默认）
| checkedDisableImage | imgage  |disable状态下的选中图片
| normalDisableImage | imgage |disable状态下的未选中图片

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onChange |  | 点击checkbox改变状态
