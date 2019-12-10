import {observable, action} from 'mobx';

export default class Home{
  @observable text = '首页';

  @action.bound
  changeText(value) {
    this.text = value
  }
}