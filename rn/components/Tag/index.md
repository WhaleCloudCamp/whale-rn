## Tag组件
进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。

### 规则
- 标签文字必须显示完全。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title   | tag标题 | string | - |
| selected | tag是否选中 | boolean | false |
| disabled | tag是否禁用 | Object | false |
| onClick  | 点击tag的自定义事件 | (e: Object): void | - |

```js
import Tag from "whale-rn";

<Tag selected={false} disabled={false} title="通用标签" />
<Tag selected disabled={false} title="选中标签" />
<Tag selected={false} disabled title="禁用标签" />

```
