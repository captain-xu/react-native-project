import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { NavigationProps } from "~/interfaces"

// props 接口，描述该组件的props数据结构
interface ThemeProps extends NavigationProps {
  [key: string]: any
}

// state 接口，描述该组件的state数据结构
interface ThemeState {
  [key: string]: any
}

class Theme extends Component<ThemeProps, ThemeState> {

  render() {
    const arr = [{
      title: '主色',
      value: ['#FF542A', '#FF5E40', '#FF3B2D']
    }, {
      title: '辅助色',
      value: ['#383838', '#FF9634', '#9E9E9E', '#1DB6F0']
    }, {
      title: '文字色',
      value: ['#333333', '#9E9E9E', '#EAEAEA', '#C8C8C8']
    }, {
      title: '分割线、线框色',
      value: ['#EAEAEA', '#EFEFEF', '#E0E0E0', '#DFDFDF']
    }, {
      title: '背景色',
      value: ['#F3F3F3', '#FFFAF9']
    }]

    return (
      <ScrollView style={styles.container}>
        {arr.map(item => (
          <Fragment key={item.title}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.listItem}>
              {item.value.map(valueItem => (
                <View key={valueItem}>
                  <View style={[styles.colorItem, {backgroundColor: valueItem}]}></View>
                  <Text style={styles.colorText}>{valueItem}</Text>
                </View>
              ))}
            </View>
          </Fragment>
        ))}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginVertical: 16,
  },
  listItem: {
    flexDirection: 'row',
  },
  colorItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 50
  },
  colorText: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 8
  }
});

export default Theme;
