# List

## 列表

列表用于显示信息行，如联系人列表、播放列表或菜单。List 是在应用程序中广泛使用的接口元素，可以包括从基本文本到按钮、切换、图标和缩略图的内容。被包裹的元素可以是任何 HTML 元素。所有被包裹元素都会被自动添加边框。

**所有带 Item 的组件都要用 List 包裹**

|  属性  |   说明    |           类型            | 默认值 |
| :----: | :-------: | :-----------------------: | :----: |
| header |   头部    |   element,String,number   |   无   |
| lines  | item 边框 | ["full", "inset", "none"] | "full" |

```js
import List from "whale-rn";

<List header="ListExample">
  <Text>1</Text>
  <Text>2</Text>
</List>;
```
## ItemBasics 
## 基础项
这个项定义了项的基本布局，分为‘左中右’，其中‘中’又分为上下结构。可用于自定义列表项，框架中的其他Item，如Item、ItemDivider等就是依赖于它实现的。
|   属性    |                 说明                 |         类型          |   默认值    |
| :-------: | :----------------------------------: | :-------------------: | :---------: |
| leftIcon  |               左边图标               | element,String,number |     无      |
| rightIcon |   右边图标 (children 存在，则无效)   | element,String,number | 'indicator' |
|   title   |                 标题                 | element,String,number |     无      |
|  details  |               详细说明               | element,String,number |     无      |
|   note    | 右侧简短说明 (children 存在，则无效) | element,String,number |     无      |

## Item 
## 这是一个带图标的Item，继承 TouchableOpacity 的全部属性
|  属性  |   说明    |           类型            | 默认值 |
| :----: | :-------: | :-----------------------: | :----: |
|[ItemBasics的全部属性](#ItemBasics)||||


| 事件                        | 返回值 | 说明                        |
| --------------------------- | ------ | --------------------------- |
| TouchableOpacity 的所有事件 |        | TouchableOpacity 的所有事件 |
| onClick |        | TouchableOpacity 的onPress事件 |

## ItemAvatar
## 带缩略图的Item，继承于Item，拥有Item的全部属性和事件

## ItemDivider
## List的分割项，当inset 时 ItemDivider 失效，拥有ItemBasics的全部属性，但一般只需定义‘title’
|  属性  |   说明    |           类型            | 默认值 |
| :----: | :-------: | :-----------------------: | :----: |
|[ItemBasics的全部属性](#ItemBasics)||||
| title |   标题    |   element,String,number   |   无   |