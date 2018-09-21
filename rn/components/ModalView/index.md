# ModalView
所有弹出窗的父类，所有子类需要实现buildProps,renderContent.


## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| style | 同View.style |  | 浮层样式。
| modal | bool | true | 值为true，需要手动关闭。false时，点击其他空白区域关闭。
| modalOpacity | number |  | 浮层非内容区域透明度, 值从 0 到 1, 透明度从全透明到不透明。默认值在 Theme 中设置。

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onAppearCompleted |  | 在弹窗显示完毕时调用。
| onDisappearCompleted |  | 在弹窗隐藏完毕后调用。
| onCloseRequest | 当前弹出窗 | 在点击内容之外的半透明区域或按返回键(Android only)时调用（需要在这个函数中手动跳用close方法关闭）
