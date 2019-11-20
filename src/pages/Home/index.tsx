import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationProps } from "../../interfaces"

interface HomeProps extends NavigationProps {
  
}

class Home extends React.Component<HomeProps, any> {
  toDetail = () => {
    this.props.navigation.navigate('HomeDetail')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity onPress={this.toDetail}><Text>跳转详情</Text></TouchableOpacity>
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
  text: {
    color: '#333'
  },
});

export default Home;
