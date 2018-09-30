# TextAreal
TextAreal组件,文本输入区域，分为三种类型｛accross ||vertical ||acrossvertical｝

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|chooseType|string|accross|选择textArea的样式|

| styleAcrossMain | 同View.style |  | 横向textArea主样式
| styleAcrossTitle | 同View.style |  | 横向textArea 标题样式
| styleAcrossInput | 同View.style |  | 横向textArea 输入框样式
| styleAcrossHint | 同View.style |  | 横向textArea 限制字段样式
| acrossTitle | string | 默认标题  | 横向textArea 左侧标题
| acrossMax | number | 默认值500  | 横向textArea 输入框输入最大长度
| acrossInputTint | string | 默认值为请输入  | 横向textArea 输入框提示语

| styleVerticalMain | 同View.style |  | 竖向textArea主样式
| styleVerticalTitle | 同View.style |  |  竖向textArea 标题样式
| styleVerticalInput | 同View.style |  |  竖向textArea 输入框样式
| styleVerticalHint | 同View.style |  |  竖向textArea 限制字段样式
| verticalTitle | string | 默认标题  |  竖向textArea 左侧标题
| verticalMax | number | 默认值500  |  竖向textArea 输入框输入最大长度
| verticalInputTint | string | 默认值为请输入  |  竖向textArea 输入框提示语


| styleAVMain | 同View.style |  | 竖向样式2textArea主样式
| styleAVTitle | 同View.style |  |  竖向样式2textArea 标题样式
| styleAVTitleView | 同View.style |  |  竖向样式2textArea 标题样式
| styleAVAreaTitle | 同View.style |  |  竖向样式2textArea 区域文字样式
| styleAVImg | 同View.style |  |  竖向样式2textArea 返回图片样式
| styleAVInput | 同View.style |  |  竖向样式2textArea 输入框样式

| avTitle | string | 默认标题  |  竖向textArea 左侧标题
| avMax | number | 默认值500  |  竖向textArea 输入框输入最大长度
| avInputTint | string | 默认值为请输入  |  竖向textArea 输入框提示语


## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onChangeText |  | 返回输入文本
| onChangeArea |  | 返回区域文本

