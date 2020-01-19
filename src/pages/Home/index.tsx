import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { NavigationProps } from "~/interfaces"

import { Button } from 'opt-rn-components';
import config from '~/config';

// props 接口，描述该组件的props数据结构
interface HomeProps extends NavigationProps {
  [key: string]: any
}

// state 接口，描述该组件的state数据结构
interface HomeState {
  [key: string]: any
}

// 类组件，需要继承React的Component或PureComponent
@inject('home')
@observer
class Home extends Component<HomeProps, HomeState> {
  jumpPage = (router) => {
    this.props.navigation.navigate(router)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button type='primary' onPress={() => this.jumpPage('Button')}>按钮</Button>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: config.STATUSBAR_HEIGHT
  },
});

export default Home;
