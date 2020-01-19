import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { NavigationProps } from "~/interfaces"
import { Button, Dialog } from 'opt-rn-components';

interface ButtonPageProps extends NavigationProps {
  [key: string]: any
}

interface ButtonPageState {
  [key: string]: any
}

class ButtonPage extends Component<ButtonPageProps, ButtonPageState> {
  onButtonPress = (content) => {
    Dialog.show({
      title: '点击了',
      content: content,
      onCancel: () => {},
      onConfirm: () => {},
    })
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#fff', marginBottom: 50}}>
          <Button type='primary' style={{minWidth: 124}} onPress={() => this.onButtonPress('按钮')}>按钮</Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#fff', marginBottom: 50}}>
          <Button type='disabled' style={{minWidth: 124}}>不可点击</Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#fff', marginBottom: 50}}>
          <Button type='secondary' style={{minWidth: 124}} onPress={() => this.onButtonPress('次要按钮')}>次要按钮</Button>
          <Button type='primary' style={{minWidth: 124}} onPress={() => this.onButtonPress('按钮')}>按钮</Button>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 50}}>
          <Button type='secondary' style={{flex: 1}} onPress={() => this.onButtonPress('次要按钮')}>次要按钮</Button>
          <Button type='primary' style={{flex: 1}} onPress={() => this.onButtonPress('按钮')}>按钮</Button>
        </View>
        <View style={{marginBottom: 50}}>
          <Button type='primary' onPress={() => this.onButtonPress('主操作按钮')}>主操作按钮</Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#fff', marginBottom: 50}}>
          <Button type='secondary' size='sm' hollow style={{borderRadius: 20, marginRight: 20}} onPress={() => this.onButtonPress('删除物品')}>删除物品</Button>
          <Button type='primary' size='sm' hollow style={{borderRadius: 20}} onPress={() => this.onButtonPress('重选型号')}>重选型号</Button>
        </View>
      </ScrollView>
    );
  }
};

export default ButtonPage;
