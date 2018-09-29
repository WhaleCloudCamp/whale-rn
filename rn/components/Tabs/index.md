## Tabs组件
用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| barTintColor | 标签页背景颜色 | string | - |
| tintColor    | 选中文字颜色 | string | - |
| unselectedTintColor | 未选中文字颜色 | string | - |

```js
    import Tabs from "whale-rn";

    <View>
        <Tabs />
    </View>
```

## TabItem组件

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| onPress | 点击item触发的事件 | (e: Object): void | - |
| selected | 是否选中 | boolean | false |
| tintColor    | 选中文字颜色 | string | - |
| unselectedTintColor | 未选中文字颜色 | string | - |
| title | 标题文字 | string | - |
| key | 唯一标识 | string | - | ？

```js

    import tabItem from "./tabItem";

    <TabItem
        title="选项"
        selected={this.state.selectedTab === 1}
        onPress={() => this.onChangeTab(1)}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
    />
```