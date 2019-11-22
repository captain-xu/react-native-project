import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';

const searchIcon = require('~/assets/images/common/search.png')

interface NavRightProps {
  toMyList: (event: GestureResponderEvent) => void,
  toSearchList:  (event: GestureResponderEvent) => void
}

const NavRight = (props: NavRightProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.toSearchList} style={{marginRight: 20}}>
        <Image source={searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.toMyList}>
        <Text style={styles.text}>{`我的\n家电`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    color: '#333'
  },
});

export default NavRight;
