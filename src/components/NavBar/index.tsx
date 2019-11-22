import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import config from '~/config';

interface NavBarProps {
  title: string,
  hasLeft?: boolean,
  leftPress?: Function,
  right?: any,
}

const backIcon = require('~/assets/images/common/back-icon.png')

export const NavBar = (props: NavBarProps) => (
  <View style={styles.container}>
    <View>
      {props.hasLeft &&
        <TouchableWithoutFeedback>
          <Image source={backIcon} />
        </TouchableWithoutFeedback>
      }
    </View>
    <View style={styles.titleWrap} pointerEvents={'none'}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
    <View>
      {props.right || null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 44,
    marginTop: config.STATUSBAR_HEIGHT,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 99
  },
  titleWrap: {
    position: 'absolute',
    width: config.width,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  titleText: {
    color: '#333',
    fontSize: 18,
  }
})
