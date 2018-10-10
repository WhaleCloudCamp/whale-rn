# Progress
Progress组件,可用于展示当前进度百分比

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|progressColor|String|#0084FF|进度条颜色|
|progressAniDuration|number|300|进度条动画时长|
|progress|number|300|当前进度|
|isShowPercent|bool|false|是否显示百分比|
| style | 同View.style |  | 主样式



## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| _getProgress |  | 返回进度

```js
import Progress from 'whale-rn';
   <View style={styles.main}>
          <Progress
            ref={c => {
              this.progressBar = c;
            }}
            style={{
              marginTop: 10,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button title="减掉" onPress={this.remove} />
            <Button title="增加" onPress={this.add} />
          </View>
        </View>
      </Page>


 add = () => {
    const self = this;
    self.currProgress += 1;
    self.progressBar.progress = self.currProgress / 10;
  };

  remove = () => {
    const self = this;
    self.currProgress -= 1;
    self.progressBar.progress = self.currProgress / 10;
  };

```