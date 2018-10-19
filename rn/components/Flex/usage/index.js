import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Flex from "../index";
import Page from "../../Page";
import Label from "../../Label";

export default class FlexDemo extends React.Component {
  render() {
    const data = [
      {
        title: "row 从左到右",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "row-reverse 从右到左",
        prop: {
          direction: "row-reverse",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "column 从上到下",
        prop: {
          direction: "column",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "column-reverse 从下到上",
        prop: {
          direction: "column-reverse",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },

      {
        title: "nowrap 不换行",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" },
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "wrap 排到下一行",
        prop: {
          direction: "row",
          wrap: "wrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" },
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "wrap-reverse 排到上一行",
        prop: {
          direction: "row",
          wrap: "wrap-reverse",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" },
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },

      {
        title: "flex-start 左对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "start"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "flex-end 右对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "end"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: " center 居中对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "center"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "space-between 两端对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "between"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "space-around 全部等间距布局",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "around"
        },
        col: [
          { borderColor: "blue" },
          { borderColor: "red" },
          { borderColor: "green" }
        ]
      },
      {
        title: "flex-start 上对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "start",
          align: "start"
        },
        col: [
          { borderColor: "blue", fontSize: 20 },
          { borderColor: "red", fontSize: 25 },
          { borderColor: "green", fontSize: 30 }
        ]
      },
      {
        title: "flex-end 下对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "end",
          align: "start"
        },
        col: [
          { borderColor: "blue", fontSize: 20 },
          { borderColor: "red", fontSize: 25 },
          { borderColor: "green", fontSize: 30 }
        ]
      },
      {
        title: "center 居中对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "center",
          align: "start"
        },
        col: [
          { borderColor: "blue", fontSize: 20 },
          { borderColor: "red", fontSize: 25 },
          { borderColor: "green", fontSize: 30 }
        ]
      },
      {
        title: "stretch 上下拉伸充",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "stretch",
          align: "start"
        },
        col: [
          { borderColor: "blue", fontSize: 20 },
          { borderColor: "red", fontSize: 25 },
          { borderColor: "green", fontSize: 40 }
        ]
      },
      {
        title: "baseline 子项首行文字对齐",
        prop: {
          direction: "row",
          wrap: "nowrap",
          alignItems: "baseline",
          align: "start"
        },
        col: [
          { borderColor: "blue", fontSize: 20 },
          { borderColor: "red", fontSize: 30 },
          { borderColor: "green", fontSize: 40 }
        ]
      }
    ];
    return (
      <Page>
        <ScrollView>
          {data.map((item, index) => (
            <View>
              <Label text={item.title} />
              <Flex {...item.prop} key={index}>
                {item.col.map((colitem, indexcol) => (
                  <View key={indexcol}>
                    <Text style={[stytles.item, { ...colitem }]}>item</Text>
                  </View>
                ))}
              </Flex>
            </View>
          ))}
        </ScrollView>
      </Page>
    );
  }
}
const stytles = StyleSheet.create({
  item: {
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
    padding: 5
  }
});
