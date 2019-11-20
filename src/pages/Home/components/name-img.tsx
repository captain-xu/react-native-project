import React from 'react'
import {
  Image,
  ImageStyle,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native'

const chineseImg = require('~/assets/images/home/chinese.jpg')
const japaneseImg = require('~/assets/images/home/japanese.jpg')

interface NameImgProps {
  name: '你的名字' | '君の名は',
  style?: ImageStyle,
  onPress?: (event: GestureResponderEvent) => void
}

// 函数式组件，接收props，返回组件
const NameImg = (props: NameImgProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={props.onPress ? 0.9 : 1}>
      <Image source={props.name === '你的名字' ? chineseImg : japaneseImg} style={[styles.img, {...props.style}]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: 350
  }
})

export default NameImg

