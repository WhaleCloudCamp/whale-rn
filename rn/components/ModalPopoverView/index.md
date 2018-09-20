# ModalPopoverView

content, view, direction, align, showArrow,popoverStyle
| 属性 | 说明 | 类型 | 默认值 |
| :-----: | :----------------------------: | :----: | :----: |
| content | 弹出窗内容 | React.Element | 无 |
| view | 弹出窗的定位 | String | 无 |
| direction | 弹窗窗的方向 | ['down', 'up', 'right', 'left'] | 无 |
| align | 弹窗窗的方向 | ['start', 'center', 'end'] | down |
| showArrow | 是否显示箭头 | Array | true |
| popoverStyle | 弹窗窗的方向 | ViewPropTypes.style | 无 |


```js
import Modal from "whale-rn";

<TouchableOpacity
  ref="downstart"
  onPress={() => Modal.Popover(this.refs["downstart"], "down", "start", true)}
/>;
```
