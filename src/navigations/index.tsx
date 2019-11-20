import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// tab页面
import HomeIndex from '../pages/Home'
import MineIndex from '../pages/Mine'
// 子页面
import HomeScreens from './home'

export const TabNavigator = createBottomTabNavigator({
  Home: HomeIndex,
  Mine: MineIndex,
}, {
    initialRouteName: "Home",
  }
);

TabNavigator.navigationOptions = {
  header: null,
};

const AppNavigator = createStackNavigator({
  TabScreen: TabNavigator,
  ...HomeScreens
},{
  headerBackTitleVisible:false
});

export default createAppContainer(AppNavigator);