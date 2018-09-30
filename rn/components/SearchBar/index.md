## SearchBar组件
一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

### 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：双11特卖。
- 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，比如：列出一些最近搜索的关键词。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| showChoose  | 是否显示选择区域 | boolean | false |
| showCancel  | 是否显示取消区域 | boolean | true |
| value       | 搜索栏文字 | string | - |
| placeholder | 搜索栏提示文字 | string | 搜索 |
| onSubmit    |  submit 事件 (点击键盘的 enter)  | (val: string): void |    |
| onChange    |    change 事件的回调     | (val: string): void |    |
| onFocus     |    focus 事件的回调     | (): void |    |
| onCancel    | 点击`取消`按钮触发 (不再自动清除输入框的文字) | (val: string): void |    |


```js
import SearchBar from "whale-rn";

<View>
    <View style={{marginTop:20}}>
      <SearchBar showChoose showCancel />
    </View>
    <View style={{marginTop:20}}>
      <SearchBar showChoose={false} showCancel value='我是输入内容'/>
    </View>
    <View style={{marginTop:20}}>
      <SearchBar showChoose showCancel={false} />
    </View>
    <View style={{marginTop:20}}>
      <SearchBar showChoose={false} showCancel={false} />
    </View>
  </View>

```