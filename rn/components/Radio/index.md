# radio
radio组件,支持自定义图标，可设置当前状态，用于在多个备选项中选中单个状态。

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|isChecked|bool|false|初始化点击状态|
|disabled|bool|false|初始化点击是否可以点击|
| style | 同View.style |  | radio
| normalImage | imgage  | 正常状态下的图片（不选则默认）
| checkedImage | imgage | 选择状态的图片 （不选则默认）

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onChange |  | 点击checkbox改变状态
