# List
## 列表，会为所有子元素增加边框

## 所有带Item的组件都要用List包裹

|  属性   |              说明              |  类型  | 默认值 |
| :-----: | :----------------------------: | :----: | :----: |
|  header  |              头部              | element,String,number |   无   |
|  lines  |              item边框              | ["full", "inset", "none"] |   "full"   |

```js
import List from "whale-rn";

<List header="ListExample">
<Text>1</Text>
<Text>2</Text>
</List>
```


inset时 ItemDivider失效