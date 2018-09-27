# 使用说明

## 引用
import Badge from './Badge';

## 使用
```jsx
<Badge />
<Badge dot>
    <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
</Badge>
<Badge text="new"/>
<Badge text={103} overflowCount={99} style={{ marginEnd: 10 }}/>
<Badge text={42} overflowCount={99}/>
```

## 参数含义
Params | Note | Type | Default
----|-----|------|------
text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为...，为 0 时隐藏 | string\|number | `new`
corner | 置于角落（此版本未实现） | boolean | `false`
dot | 不展示数字，只有一个小红点 | boolean | `false`
overflowCount | 展示封顶的数字值 | number | `99`