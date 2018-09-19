# Modal.prompt(title, content, actions?,defaultValue?,placeholders?)

## 输入弹窗

|     属性     |          说明           |  类型  | 默认值 |
| :----------: | :---------------------: | :----: | :----: |
|    title     |          标题           | String |   无   |
|   content    |        提示信息         | String |   无   |
|   actions    | 按钮组, {text, onPress} | Array  |   无   |
| defaultValue |      输入框默认值       | String |   无   |
| placeholders |      输入框暗提示       | String |   无   |

ModalBasics.remove(Modal.prompt(title, content, actions?,defaultValue?,placeholders?))可以在外部关闭 Prompt（无返回值）

点击事件触发，会携带一个参数（当前输入框的值），执行按钮组事件 onPress

```js
import Modal from "whale-rn";

const modalKey = Modal.prompt(title, content, defaultBtns);
ModalBasics.remove(modalKey);
```
