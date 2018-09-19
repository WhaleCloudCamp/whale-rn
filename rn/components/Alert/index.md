# Modal.alert(title, content, actions?)
## 警告弹窗,包含无按钮, 确认框, 多按钮情况。

|  属性   |              说明              |  类型  | 默认值 |
| :-----: | :----------------------------: | :----: | :----: |
|  title  |              标题              | String |   无   |
| content |            提示信息            | String |   无   |
| actions | 按钮组, {text, onPress, style} | Array  |   无   |

ModalBasics.remove(Modal.alert(title, content, actions?))可以在外部关闭 Alert

```js
import Modal from "whale-rn";

const modalKey = Modal.alert(text, content, defaultBtns);
ModalBasics.remove(modalKey);
```
