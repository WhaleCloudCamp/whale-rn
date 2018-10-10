# AreaSelect
AreaSelect组件,用于省市区三级选择

## 属性
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|data|json数组|无|区域数据|
|side|string|bottom|弹窗位置|
|modalOpacity|number|0.7|透明度|
| containerStyle | 同View.style |  | 底部背景框样式


## 事件
| 事件 | 返回值 | 说明 |
|---|---|---|
| onCancel |  | 取消按钮事件
| onSure | x1,x2,x3分别为当前省市区的下标位置 | 确认按钮事件

```js
import AreaSelect from "whale-rn";

getView(side, modal, modalOpacity = 0.7) {
    const modalVIew = (
      <AreaSelect
        containerStyle={{ height: 230 }}
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
        data={areaDataSouce.CityZoneCode.China}
        onCancel={() => {
          this.modalDrawerView && this.modalDrawerView.close();
        }}
        onSure={(x1, x2, x3) => {
          let area = this.dataSouce.Province[x1].name
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].name)
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].Area[x3].name);

          this.setState({
            address: area,
          });
          console.warn(area);
          this.modalDrawerView && this.modalDrawerView.close();
        }}
      />
    );
    return ModalBasics.show(modalVIew);
  }
}


```