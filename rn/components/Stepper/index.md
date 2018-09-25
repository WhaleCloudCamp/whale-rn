# Stepper
Stepper组件

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|max|number|100|默认最大值|
|min|number|0|默认最小值|
|disable|bool| false|是否点击|
|defaultValue|number| |当前值默认值|
|number|number| defaultValue|当前值|
|step|number| 1|当前步数|
| styleImg | 同View.style |  | 图标的样式
| styleText | 同View.style |  | 文本的样式
| normalImage | imgage  | 正常状态下的图片（不选则默认）
| checkedImage | imgage | 选择状态的图片 （不选则默认）

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onChange |  | 返回当前改变的值
| getNumber |  | 获取当前的值
| setNumber |  | 设置当前的值
