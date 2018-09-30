import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FooterBtn from '../FooterButtons';

export default class AlertContent extends Component {
  render() {
    let { title, content, actions, children, onCallback } = this.props;
    return (
      <View
        style={{
          width: 270,
          position: 'relative',
        }}
      >
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 7,
            alignItems: 'center',
            paddingTop: 15,
            borderWidth: 0,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              paddingTop: 6,
              paddingBottom: 15,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: 18,
                color: '#000',
                textAlign: 'center',
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 0,
              paddingBottom: 13,
              paddingLeft: 15,
              paddingRight: 15,
              overflow: 'scroll',
            }}
          >
            <Text style={{ overflow: 'hidden', color: '#888' }}>{content}</Text>
            {children}
          </View>
          <View
            style={{
              width: 270,
            }}
          >
            <FooterBtn actions={actions} onCallback={onCallback} />
          </View>
        </View>
      </View>
    );
  }
}
