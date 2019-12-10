import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { NavigationProps } from "~/interfaces"
import NameImg from './components/name-img'

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
  // 构造函数，可以不写
  constructor(props) {
    // super 指代父类(这里是Component)的构造函数, 在调用 super() 之前，无法在构造函数中使用 this
    // 必须在constructor()调用super()方法，否则新建实例时会报错，因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工，如果不调用super方法；子类就得不到this对象。
    super(props)
    // 初始化state
    this.state = {
      name: '你的名字'
    }
  }

  private changeName = (name, text) => {
    if (name === this.state.name) {
      // 调用setState时，无论数据有没有发生改变，都会调用render，这里需要加下判断
      return
    }
    this.props.home.changeText(text)
    // setState 改变state数据
    this.setState({name}, () => {
      // 这里是回调，在这里想干啥干啥
    })
  }

  private toDetail = () => {
    // 路由跳转
    this.props.navigation.navigate('HomeDetail', {name: this.state.name})
  }

  render() {
    const { name } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>{this.props.home.text}</Text>
        <Text style={styles.nameText}>{name}</Text>
        {/* 组件 */}
        <NameImg name={name} onPress={this.toDetail} />
        <View style={styles.changeBtnWrap}>
          <TouchableOpacity onPress={() => this.changeName('你的名字', '首页')}><Text>你的中文名</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeName('君の名は', '最初のページ')}><Text>你的日文名</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    color: '#333',
    marginBottom: 20
  },
  changeBtnWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  }
});

export default Home;
