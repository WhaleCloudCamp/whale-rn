## TabBar组件
位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| tabsArray | TabBarItem数组 | array | - |
| barTintColor | 标签栏背景颜色 | string | - |
| tintColor    | 选中文字颜色 | string | - |
| unselectedTintColor | 未选中文字颜色 | string | - |

```js
import TabBar from "whale-rn";

<TabBar tabsArray={[
    { title: '首页', badge: 0, icon: images.icon, selectedIcon: images.selectedIcon },
    { title: '视频', badge: 1, icon: images.icon, selectedIcon: images.selectedIcon },
    { title: '新闻', badge: 0, icon: images.icon, selectedIcon: images.selectedIcon },
    { title: '发现', badge: 0, icon: images.icon, selectedIcon: images.selectedIcon },
    { title: '我的', badge: 0, icon: images.icon, selectedIcon: images.selectedIcon }]}
/>
```

## TabBarItem组件

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| badge   | 徽标数 | string、number | - |
| onPress | 点击item触发的事件 | (e: Object): void | - |
| selected | 是否选中 | boolean | false |
| icon     | 展示图片 | image | - |
| selectedIcon | 选中后展示图片 | image | - |
| tintColor    | 选中文字颜色 | string | - |
| unselectedTintColor | 未选中文字颜色 | string | - |
| title | 标题文字 | string | - |
| key | 唯一标识 | string | - | ？


```js
import TabBarItem from "./tabBarItem";

<TabBarItem
    key={`r-${index}`}
    title={title}
    badge={badge}
    icon={icon}
    selectedIcon={selectedIcon}
    selected={this.state.selectedTab === index}
    onPress={() => this.onChangeTab(index)}
    tintColor={tintColor}
    unselectedTintColor={unselectedTintColor}
/>
```

