## Button组件
点击后会触发一个操作。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`normal`、`normal2`、`loading`、`disabled`、`disabled` | string | - |
| size    | 按钮大小，可选值为`big`、`small` | string | `big`|
| title   | 按钮标题 | string | - |
| disabled| 设置禁用 | boolean | false |
| onClick | 点击反馈的自定义类名 | (e: Object): void | - |
| color   | 设置按钮统一背景色和边框色 | string | - |
| style   | 按钮自定义样式 | Object | - |
| textStyle | 按钮文字自定义样式 | Object | - |

```js
import Button from "whale-rn";

<View>
    <Button style={{marginTop:10}} type="normal" size="big" title="主按钮 Normal" />
    <Button style={{marginTop:10}} type="disabled" size="big" title="主按钮 Disabled" />
    <Button style={{marginTop:10}} type="loading" size="big" title="主按钮 Loading" />
    <Button style={{marginTop:10}} type="normal2" size="big" title="次按钮 Normal" />
    <Button style={{marginTop:10}} type="disabled2" size="big" title="次按钮 Disabled" />
    <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10,marginLeft:20,marginRight:20}}>
      <Button style={{marginTop:10}} type="normal" size="small" title="按钮" />
      <Button style={{marginTop:10}} type="disabled" size="small" title="按钮"/>
      <Button style={{marginTop:10}} type="loading" size="small" title="" />
      <Button style={{marginTop:10}} type="normal2" size="small" title="下载" />
      <Button style={{marginTop:10}} type="disabled2" size="small" title="下载" />
    </View>
  </View>

```