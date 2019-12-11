import Home from './home';


export default class {
  public home: any = {}

  constructor(initState = {}) {
    this.home = new Home();
  }
}