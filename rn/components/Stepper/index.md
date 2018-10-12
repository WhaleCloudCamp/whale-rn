# Stepper
Stepper组件,用作增加或者减少当前数值。
当想要对数值进行小幅度调整时，可以使用 Stepper

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|max|number|100|默认最大值|
|min|number|0|默认最小值|
|editable|bool|true|是否可编辑
|disable|bool| false|是否点击|
|defaultValue|number| |当前值默认值|
|number|number| defaultValue|当前值|
|step|number| 1|当前步数|
| styleImg | 同View.style |  | 图标的样式
| styleText | 同View.style |  | 文本的样式
| rmDisableImg | imgage  | 减图片（可点击）
| addImg | imgage |  加图片（可点击）
| rmDisableImg | imgage  | 减图片（不可点击）
| addDisablePic | imgage |  加图片（不可点击）

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onChange |  | 返回当前改变的值
| getNumber |  | 获取当前的值
| setNumber |  | 设置当前的值

```js
import Stepper from 'whale-rn'
<Stepper
        max={100}
        min={0}
        number={50}
        disable
        // addImg={require('../img/rm.png')}
        // styleImg ={{width: 100}}
        // styleText ={{width: 100}}
        step={10}
        onChange={number => {
        console.warn(number);
        }}
    />
```