/*
  全局navigation接口，组件使用到navigation时，Props接口需要继承此接口
*/
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation"

export interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}