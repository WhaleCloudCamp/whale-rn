## NoticeBar组件

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon    | 通告栏图标 | Image |   -  |
| title   | 通告栏标题 | string | - |
| showClose | 通告栏是否显示关闭 | boolean | false |
| onClick | 点击通告栏反馈的自定义事件 | (e: Object): void | - |
| style   | 通告栏背景自定义样式 | Object | - |
| textStyle | 通告栏文字自定义样式 | Object | - |

```js
import NoticeBar from "whale-rn";

<NoticeBar
    title="这是通告栏的标题这是通告栏的标题这是通告栏的标题这是通告栏的标题"
    showClose={true}
  />

```