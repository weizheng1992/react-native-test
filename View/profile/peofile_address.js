
import NavigationBar from '../navigation_bar/navigation_bar';
import {MOVIE_API} from '../../API/API';


export default class PeofileAddress extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        celebrityID:1054521,
        celebrity: null,
        dataSource: null
    }
}
componentDidMount() {
//this._onfetch();
  }
  render(){
    return(
      <View style={styles.container}>
          <NavigationBar
              title='收货地址'
              onPressBackIcon={() => this._onPressBackBtn()}
              rightTitle='管理'
              rightTitleColor='#ff2104'
              onPressRightIcon={() => this._onPressNavigationBtn()}
          />
      </View>
    )
  }
  /**
   * EVENT
   */

  _onPressBackBtn() {
      this.props.navigator && this.props.navigator.pop();
  }

  /**
     * 点击导航栏右上角保存按钮
     * @private
     */
    _onPressNavigationBtn() {
        this.props.navigator && this.props.navigator.push({
            component: MovieSearch,
            isModal: true
        })
    }
  /**
   * 点击list 对应跳转
  *
  ****/
    _onJumpToWeb(url){
      this.props.navigator && this.props.navigator.push({
                component: url,
        })
    }
    /**
     * network
     */

    _onfetch() {

      const url = MOVIE_API.celebrity + 1054521;
      service.get(url)
          .then(response => {
              if(response.ok === false) {
                  showHUDMessage(response.problem);
              }
              else {
                  hidenHUDLoading();
                  this.setState({celebrity: response.data})
              }
          })
    }
}


const styles = Style({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft:15,
        paddingRight:15
    },
    bottom_line: {
      borderBottomColor: '#ddd',
      borderBottomWidth: ONE_PIXEL
  },
});
