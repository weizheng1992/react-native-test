import NavigationBar from '../navigation_bar/navigation_bar';
import {MOVIE_API} from '../../API/API';

export default class PeofileNickName extends Component {

  render() {
          return (
              <View style={styles.container}>
                  <NavigationBar
                      title='昵称'
                      onPressBackIcon={() => this._onPressBackBtn()}
                      rightTitle='保存'
                      rightTitleColor='#ff2104'
                      onPressRightIcon={() => this._onPressNavigationBtn()}
                  />
                  <View style={[{flexDirection: 'row',alignItems: 'center'},styles.bottom_line]}>
                    <View style={{flex:1}}>
                      <TextInput style={{matginTop:30,backgroundColor:'#fff',borderWidth:0}} />
                    </View>
                    <Image source={require('../../imgs/profile/clear_txt.png')} style={{width:28,height:28,marginLeft:10}}/>
                  </View>
              </View>
   );
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
