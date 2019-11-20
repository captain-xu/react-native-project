import React, { Component } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import NameImg from '../components/name-img'
import { NavigationProps } from "~/interfaces"

interface HomeDetailProps extends NavigationProps {
  [key: string]: any
}

interface HomeDetailState {
  [key: string]: any
}

class HomeDetail extends Component<HomeDetailProps, HomeDetailState> {
  // 配置导航栏信息
  static navigationOptions = ({ navigation }) => {
    return {
      // 通过navigation.getParam('name')或navigation.state.params
      title: navigation.getParam('name'),
    };
  };

  render() {
    const {name} = this.props.navigation.state.params
    return (
      <SafeAreaView>
        <NameImg name={name} />
      </SafeAreaView>
    );
  }
};

export default HomeDetail;
