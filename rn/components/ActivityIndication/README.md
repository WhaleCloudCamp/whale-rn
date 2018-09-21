# 使用方法

## 引用
import ActivityIndication from './ActivityIndication';

## 显示
ModalBasics.show(<ActivityIndication color="white" />);

## 关闭
ModalBasics.remove(modalKey);

## 参数含义
| Params | Note | Type | Default |
| :-: | :-: | :-: | :-: |
|  animating  | 显隐状态 | boolean  | true  |
|  size  | spinner大小，可选`small`/`large` | string  | small  |
|  toast  | loading样式类型 | boolean  | false  |
|  text  | loading文本 | string |  -   |
|  color | spinner颜色 | string  | gray  |