## Tag组件

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title   | tag标题 | string | - |
| selected | tag是否选中 | boolean | false |
| disabled | tag是否禁用 | Object | false |
| onClick  | 点击tag的自定义事件 | (e: Object): void | - |

```js
    import Tag from "whale-rn";

    <View>
        <Tag selected={false} disabled={false} title="通用标签" />
        <Tag selected disabled={false} title="选中标签" />
        <Tag selected={false} disabled title="禁用标签" />
  </View>
```