# Slider使用方法
允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度、控制音量大小。


## 代码演示
```jsx
import Slider from './Slider';

······

<View>
  <Text>Default settings</Text>
  <Slider />
</View>
```

## 属性
属性 | 类型 | 默认值 | 说明
----|-----|------|------
| min    |  Number     | 0     | 最小值 |
| max    |  Number     | 100    | 最大值 |
| step    |  Number     | 1    | 步长，取值必须大于 0，并且可被 (max - min) 整除。 |
| value    |  Number  |     | 设置当前取值。 |
| defaultValue    |  Number   | 0     | 设置初始取值。|
| disabled    |  Boolean     | false    | 值为 `true` 时，滑块为禁用状态 |
| maximumTrackTintColor  |  String     | `#108ee9`（RN)    | 底部背景色 |
| minimumTrackTintColor  |  String     | `#ddd` (RN)   | 当前选中部分的颜色 |
| showValue | Bool | false | 是否在滑竿两边显示`最大值`和`最小值` |
| thumbStyle | Style | - | 滑块样式 |

## 事件
事件 | 返回值 | 说明
----|------|------
| onChange | Noop | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 |
| onAfterChange | Noop | 与 `ontouchend` 触发时机一致，把当前值作为参数传入 |