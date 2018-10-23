# Sliders banner
Sliders banner-轮播图

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|

| width | PropTypes.number.isRequired	 |   | Sliders banner的宽度|
| height | PropTypes.number.isRequired	  |  | Sliders banner的高度|
|index|	PropTypes.number|	0| 初始选中位置|
|horizontal	|PropTypes.bool	|true|	Sliders banner是否水平方向|
|loop|	PropTypes.bool	|true	|Sliders banner是否无限循环
|autoplayTimeout|	PropTypes.number|	5	|Sliders banner 是否自动播放|
|autoplayDirection|	PropTypes.bool|	true|	Sliders banner 循环控制方向|
|ratio|	PropTypes.number|	1|	Sliders banner 缩放比例|
|cardParams|	PropTypes.object|	Sliders banner 卡片类型参数|

## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
|renderRow|	PropTypes.func.isRequired|	Sliders banner 对应item渲染视图|
|onPress|	PropTypes.func|	Sliders banner item点击事件|
|onWillChange|	PropTypes.func|		Sliders banner下一张卡片显示的时候|
|onDidChange|	PropTypes.func|		Sliders banner下一张卡片显示后|

```js
import Sliders from 'whale-rn'
  <Sliders
          style={{ backgroundColor: 'white', width: screenWidth, height: 150 }}
          dataSource={images}
          width={screenWidth}
          height={150}
          renderRow={this.renderImageRow}
          onPress={this.onPressRow}
          onWillChange={this.onWillChange}
          onDidChange={this.onDidChange}
          ratio={0.6}
          index={2}
          horizontal
          loop
          autoplayTimeout={5}
        />
```