# Activity Indication使用方法
活动指示器。 表明某个任务正在进行中。


## 代码演示
```jsx
import ActivityIndication from './ActivityIndication';

······

<ActivityIndication color="white" />
<ActivityIndication size="large" />
<ActivityIndication text="正在加载" />
this.modalKey = ModalBasics.show(<ActivityIndication toast />);
this.modalKey = ModalBasics.show(<ActivityIndication toast text="正在加载" />);

······

ModalBasics.remove(modalKey);
```

## 属性
| 属性 | 类型 | 默认值 | 说明 |
| :-: | :-: | :-: | :-: |
|  animating  | boolean  | true  | 显隐状态 |
|  size  | string  | small  | spinner大小，可选`small`/`large` |
|  toast  | boolean  | false  | loading样式类型 |
|  text  | string |  -   | loading文本 |
|  color | string  | gray  | spinner颜色 |
|  side  | string  | `row` | 非Toast样式时的文本位置，可选`row`/`column` |