import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';

export const BaseStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
