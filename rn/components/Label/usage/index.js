import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import List from "../../List";
import ItemDivider from "../../ItemDivider";
import Page from "../../Page";
import Laber from "../index";

export default class LabelExample extends Component {
  render() {
    return (
      <Page>
      <ScrollView>
        <List
          itmeStyle={{ backgroundColor: "#4CD964", padding: 20 }}
        >
        <ItemDivider title="常规" />
          <Laber type="default" size="xl" text="default_xl" />
          <Laber type="default" size="lg" text="default_lg" />
          <Laber type="default" size="md" text="default_md" />
          <Laber type="default" size="sm" text="default_sm" />
          <Laber type="default" size="xs" text="default_xs" />
        <ItemDivider title="标题" />

          <Laber type="title" size="xl" text="title_xl" />
          <Laber type="title" size="lg" text="title_lg" />
          <Laber type="title" size="md" text="title_md" />
          <Laber type="title" size="sm" text="title_sm" />
          <Laber type="title" size="xs" text="title_xs" />
          <ItemDivider title="详情" />

          <Laber type="detail" size="xl" text="detail_xl" />
          <Laber type="detail" size="lg" text="detail_lg" />
          <Laber type="detail" size="md" text="detail_md" />
          <Laber type="detail" size="sm" text="detail_sm" />
          <Laber type="detail" size="xs" text="detail_xs" />
          <ItemDivider title="警告" />

          <Laber type="danger" size="xl" text="danger_xl" />
          <Laber type="danger" size="lg" text="danger_lg" />
          <Laber type="danger" size="md" text="danger_md" />
          <Laber type="danger" size="sm" text="danger_sm" />
          <Laber type="danger" size="xs" text="danger_xs" />
        </List>
        </ScrollView>
      </Page>
    );
  }
}
