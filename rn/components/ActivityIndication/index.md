# 使用方法

## 引用
import ActivityIndication from './ActivityIndication';

## 显示
this.modalKey = ModalBasics.show(<ActivityIndication color="white" />);
this.modalKey = ModalBasics.show(<ActivityIndication size="large" />);
this.modalKey = ModalBasics.show(<ActivityIndication text="正在加载" />);
this.modalKey = ModalBasics.show(<ActivityIndication toast />);
this.modalKey = ModalBasics.show(<ActivityIndication toast text="正在加载" />);

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