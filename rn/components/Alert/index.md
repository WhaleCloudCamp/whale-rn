# Modal.alert(title, content, actions?)

## 警告弹窗,包含无按钮, 确认框, 多按钮情况。

警告弹窗是为用户提供特定的操作或者操作列表的方法。还可以用来向用户提供必读的重要提示，或者对接下来的操作作出选择。
从页面表现来说，警告弹窗是属于一种简易浮窗，只为了快速通知或者让用户快速选择。需要用户停留时间更长，做更多操作交互的，可以选择使用[Modal]('../Modal')

|  属性   |              说明              |  类型  | 默认值 |
| :-----: | :----------------------------: | :----: | :----: |
|  title  |              标题              | String |   无   |
| content |            提示信息            | String |   无   |
| actions | 按钮组, {text, onPress, style} | Array  |   无   |

ModalBasics.remove(Modal.alert(title, content, actions?))可以在外部关闭 Alert

```js
import Modal from "whale-rn";
const defaultBtns = [
  { text: "取消", onPress: () => console.log("取消") },
  { text: "确定" }
];
const modalKey = Modal.alert(text, content, defaultBtns);
ModalBasics.remove(modalKey);
```
在按钮被触发时，会调用``onPress``事件，若无定义该事件，则默认调用关闭弹出窗。


![12](../../sketch/alert.png)