# 使用方法

## 引用
import { Toast } from './Toast';

## 显示
Toast.makeToast(modal, time, pictrue, text);

## 关闭
Toast.close();

## 参数含义
| Params | Value | Note |
| - | :-: | :-: |
| modal | 默认传true | 无 |
| time | 'long'/'short'/'none'或者具体时间（单位：ms） | long为3500ms，short为2000ms，none为手动关闭 |
| pictrue | 'success'/'failed'/'warn'/'none'或不填 | 不传时默认显示'success'图标 |
| text | 传入要显示的文字 | 不传时默认为'消息' |