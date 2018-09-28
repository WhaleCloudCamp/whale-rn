## Tabs组件

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