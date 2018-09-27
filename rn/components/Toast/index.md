# 使用说明

## 引用
import { Toast } from './Toast';

## 显示
```
Toast.toastSuccess(time, text, side);
Toast.toastFail(time, text, side);
Toast.toastWarn(time, text, side);
Toast.toastText(time, text, side);
```

## 关闭
Toast.close();

## 参数含义
| Params | Value | Note |
| - | :-: | :-: |
| time | `long`/`short`/`none`或者具体时间（单位：ms） | long为`3500ms`，short为`2000ms`，none为手动关闭 |
| text | 传入要显示的文字 | 不传时默认为`成功`、`失败`、`警告`或`消息` |
| side | `top`/`bottom` | 不传或默认时，显示在中央 |