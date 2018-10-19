## NoticeBar组件
在导航栏下方，一般用作系统提醒、活动提醒等通知。

## API
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon    | 通告栏图标 | Image |   -  |
| title   | 通告栏标题 | string | - |
| showClose | 通告栏是否显示关闭 | boolean | false |
| onClick | 点击通告栏反馈的自定义事件 | (e: Object): void | - |
| style   | 通告栏背景自定义样式 | Object | - |
| textStyle | 通告栏文字自定义样式 | Object | - |
| styleBar | 通告栏滚动背景自定义样式 | Object | - |
| styleLeftImgView | 广播图标背景自定义样式 | Object | - |
| disScrolled | 是否滚动 | bool | true |
| time | 完成滚动时间（根据长度） | number | 5000 |

```js
import NoticeBar from "whale-rn";

 <NoticeBar
          title="这条通告栏不带关闭按钮这条通告栏不带关闭按钮这条通告栏不带关闭按钮"
          showClose={false}
          onClick={() => {
            console.warn('点击');
          }}
        />

```