# Input
对 `TextInput` 的简单封装，添加了验证功能

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| validate | validate数组包含的对象 可以是{ pattern: string(正则表达式字符串), message: string(报错信息) }类型，也可以是函数，当为函数时，入参为 text:string， 返回 { error: bool(是否错误), message: string(报错信息) } | array | 无 |
| validateCallBack | 当验证完成时调用该函数, 入参为(error: bool, message) | function | 无 |
> `Input` 支持 `TextInput` 所有属性

## Usage
使用 `Input` 替代 `TextInput` 就好  

```js
const phonePatter = '^1\\d{10}$';
const phoneValidateCallback = (error, message) => {
  console.log(error, message);
}
<Input
  style={{ flex: 1 }}
  placeholder="请输入手机号"
  validate={[{ pattern: phonePatter, message: '手机号错误' }]}
  validateCallBack={this.phoneValidateCallback}
/>
```
[样例1](./usage/index.js)  
[样例2](../InputItem/index.js)  
[样例3](../InputItem/usage/index.js)
