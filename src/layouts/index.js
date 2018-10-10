import { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import router from 'umi/router';
import ModalTarget from "../../rn/components/ModalTarget";
import NavBar from "../../rn/components/NavBar";
import Modal from "../../rn/components/Modal";
import umiconfig from "../../.umirc.js";

const pages = umiconfig.routes[0].routes;
class App extends Component {
  componentDidMount() {
    console.log("mount");
  }
  onCellPress(item,target) {
    router.push(item.path);
    target.close();
  }
  showDrawerView(side, modal = true, modalOpacity = 0.7) {
    const modalView = (
      <Modal.DrawerView
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
      >
        <View
          style={{
            minWidth: 200,
            minHeight: 260,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "100vh"
          }}
        >
          <ScrollView>
            {pages.map(item => (
              <TouchableOpacity
                style={{ paddingHorizontal: 15, paddingVertical: 10 }}
                onPress={() => this.onCellPress(item,this.modalDrawerView)}
                key={item.path}
              >
                <Text>{item.path.split("/")[1]}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal.DrawerView>
    );
    return Modal.show(modalView);
  }
  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    return (
      <div style={{ height: "100vh" }}>
        <ModalTarget>
          <NavBar
            title={pathname.split("/")[1]} //标题
            style={{ backgroundColor: "#0C83FF" }} //主样式
            styleRightText={{ color: "white" }} //右文本样式
            styleTitle={{ color: "white" }} //标题样式
            isShowBk //是否显示返回键
            imgBackIcon={require("./menu.png")} //左边第一个图标
            // imgDelIcon={require('../img/icon_fh.png')}//左边第二个图标
            // imgRightFirstIcon={require('../img/icon_fh.png')}//右边第一个图标
            // imgRightLasttIcon={require('../img/icon_fh.png')}//右边第二个图标

            onLeftItemPress={
              //返回点击事件
              () => this.showDrawerView("left", false)
            }
            onDelPress={
              //删除事件
              () => {
                console.warn("删除事件");
              }
            }
            onRightFirstItemPress={
              //右边第一个图标事件
              () => {
                console.warn("右边第一个图标事件");
              }
            }
            onRightLastItemPress={
              //右边第二个图标事件
              () => {
                console.warn("右边第二个图标事件");
              }
            }
          />
          {children}
        </ModalTarget>
      </div>
    );
  }
}

export default App;
