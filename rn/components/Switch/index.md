# switch
switch组件(开关选择器)，需要表示开关状态/两种状态之间的切换时使用

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| checkStatu | bool | false  | 当前是否选中
| disableStatu | bool  | false | 当前是否可以点击

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onCheckChangeListener | fun | 点击switch改变状态

```js
import Switch from 'whale-rn'
 <Switch
              checkStatu
              disableStatu={false}
              onCheckChangeListener={isCheck => {
                if (isCheck) {
                  console.log('选中');
                } else {
                  console.log('未选中');
                }
              }}
            />
```