## Button组件
点击后会触发一个操作。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`normal`、`loading`、`disabled` | string | - |
| size    | 按钮大小，可选值为`big`、`small` | string | `big`|
| title   | 按钮标题 | string | - |
| disabled| 设置禁用 | boolean | false |
| onClick | 点击反馈的自定义类名 | (e: Object): void | - |
| style   | 按钮自定义样式 | Object | - |
| textStyle | 按钮文字自定义样式 | Object | - |

```js
import Button from "whale-rn";

<View>
    <Button type="normal" size="big" title="正常按钮" />
    <Button type="loading" size="big" title="加载按钮" />
    <Button type="disabled" size="big" title="禁用按钮" />
    <Button type="normal" size="small" title="按钮" />
    <Button type="loading" size="small" title="" />
    <Button type="disabled" size="small" title="按钮" />
</View>

```