import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {BaseStatusBar, NavBar} from '~/components'
import NavRight from './components/nav-right'

class Mine extends Component{
  private toMyList = () => {
    console.log('我的家电')
  }

  private toSearchList = () => {
    console.log('搜索')
  }

  render() {
    return (
      <View>
        <BaseStatusBar backgroundColor="#fff" />
        <NavBar title="大家电" right={<NavRight toMyList={this.toMyList} toSearchList={this.toSearchList} />} />
        <Text style={styles.text}>Mine</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: '#333'
  },
});

export default Mine;
