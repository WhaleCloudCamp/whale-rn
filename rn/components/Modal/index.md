# Modal 模态框

这个类将所有弹出窗做了一个封装调用，作为 Modal 的统一对外接口。
在项目开发中，总是会有一些辅助性交互式的 UI 界面，比如警告、提示、服务端反馈、菜单、选择器等，它们并不在页面的布局流中，而是在需要某些条件的触发之后，才会被加载到页面上。又会在某些条件下，从页面布局中被销毁。
我们将开发中比较常用的弹出窗口做了封装，如 Alert、Prompt、Toast、ActionSheet、ImagePreview 等。
同时也暴露出了几种定义好的弹出窗，如 Modal.View(全屏)、Modal.ModalDrawerView（抽屉）等，用于满足用户创建自定义弹窗的需求。这样在编写自定义弹窗时，就只需要关心弹窗的内容，而不需要过于关注弹出窗的管理。

| 方法   | 参数                  | 返回值   | 说明                            |
| ------ | --------------------- | -------- | ------------------------------- |
| show   | overlayView           | modalKey | 显示弹出窗, 返回唯一的 modalKey |
| remove | modalKey              |          | 移除弹出窗, 输入参数 modalKey   |
| alert  | [详见](#Modal.alert)  | modalKey | 警告弹窗                        |
| prompt | [详见](#Modal.prompt) | modalKey | 输入弹窗                        |

| 属性            | 类型  | 默认值 | 说明                                |
| --------------- | ----- | ------ | ----------------------------------- |
| [View](#Modal.View) | class |        | 弹窗组件                            |
| [DrawerView](#Modal.DreawerView) | class |        | 拖拉效果弹窗组件, 继承自 Modal.View |

## Modal.alert

### Modal.alert(title, content, actions?)警告弹窗,包含无按钮, 确认框, 多按钮情况。

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

## Modal.prompt

### Modal.prompt(title, content, actions?) 输入弹窗

|  属性   |          说明           |  类型  | 默认值 |
| :-----: | :---------------------: | :----: | :----: |
|  title  |          标题           | String |   无   |
| content |        提示信息         | String |   无   |
| actions | 按钮组, {text, onPress} | Array  |   无   |
| defaultValue |      输入框默认值       | String |   无   |
| placeholders |      输入框暗提示       | String |   无   |

ModalBasics.remove(Modal.prompt(title, content, actions?,defaultValue?,placeholders?))可以在外部关闭 Prompt（无返回值）

点击事件触发，会携带一个参数（当前输入框的值），执行按钮组事件 onPress

```js
import Modal from "whale-rn";

const modalKey = Modal.prompt(title, content, defaultBtns);
ModalBasics.remove(modalKey);
```
## Modal.popover
### 定点提示 

（只有展示功能，点击其他区域关闭，需要其他功能，可使用Modal.PopoverView）

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
  onPress={() => Modal.popover(this.refs["downstart"], "down", "start", true)}
/>;
```


## Modal.View
所有弹出窗的父类，所有子类需要实现buildProps,renderContent.

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| style | 同View.style |  | 浮层样式。
| modal | bool | true | 值为true，需要手动关闭。false时，点击其他空白区域关闭。
| overlayOpacity | number |  | 浮层非内容区域透明度, 值从 0 到 1, 透明度从全透明到不透明。默认值在 Theme 中设置。

| 事件 | 返回值 | 说明 |
|---|---|---|
| onAppearCompleted |  | 在弹窗显示完毕时调用。
| onDisappearCompleted |  | 在弹窗隐藏完毕后调用。
| onCloseRequest | 当前弹出窗 | 在点击内容之外的半透明区域或按返回键(Android only)时调用（需要在这个函数中手动跳用close方法关闭）



## Modal.DreawerView
所有抽屉类组件的父类,继承自ModalView，所有继承子类需要实现renderChildren

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| ModalView的所有属性 |  |  | 组件继承ModalView组件的全部属性。
| side | string | 'bottom' | 抽屉的位置。top,bottom,left,right
| containerStyle | 同View.style |  | 抽屉样式