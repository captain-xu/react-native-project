import {
  Dimensions,
  Platform
} from 'react-native'


// 判断是否iphone x
export function isIphoneX() {
  const {width, height} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === 812 || width === 812) || (height === 896 || width === 896))
  );
}