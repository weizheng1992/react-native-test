import NavigationBar from '../navigation_bar/navigation_bar';

import Copyrights from './copyrights';
import AboutUs from './about_us';

export default class PeofileAddress extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
              {"txt":'揭晓通知设置',url:''},{"txt":'版权信息','url':''},{'txt':'qing','url':''},{'txt':'联系我们','url':''}])
      }
}
  render(){
    return(
      <View style={styles.container}>
          <NavigationBar
              title='设置'
              onPressBackIcon={() => this._onPressBackBtn()}
          />
          <ScrollView
            automaticallyAdjustContentInsets={false}
          >
          <TouchableOpacity
            onPress={() => this._onJumpToWeb(url)}
          >
              <View style={styles.listItem}>
                  <View style={{flex:1}}>
                      <Text style={{fontSize:16}}>
                      揭晓通知设置
                      </Text>
                  </View>
                  <Image source={require('../../imgs/arrow_right.png')} style={{width:24,height:24,}}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._onJumpToWeb(Copyrights)}
            >
                <View style={styles.listItem}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:16}}>
                          版权信息
                        </Text>
                    </View>
                    <Image source={require('../../imgs/arrow_right.png')} style={{width:24,height:24,}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._onJumpToWeb(AboutUs)}
              >
                  <View style={styles.listItem}>
                      <View style={{flex:1}}>
                          <Text style={{fontSize:16}}>
                            关于我们
                          </Text>
                      </View>
                      <Image source={require('../../imgs/arrow_right.png')} style={{width:24,height:24,}}/>
                  </View>
                </TouchableOpacity>
              <View style={styles.listItem}>
                  <View style={{flex:1}}>
                      <Text style={{fontSize:16}}>
                        清除缓存
                      </Text>
                  </View>
                <View style={{flex:1}}>
                  <Text style={{fontSize:16,color:'#666666',textAlign:'right',height:24,}}>
                      288M
                  </Text>
                </View>
              </View>
          </ScrollView>
      </View>
    )
  }

  /**
   * EVENT
   */

  _onPressBackBtn() {
      this.props.navigator && this.props.navigator.pop();
  }
  _onJumpToWeb(url){
    this.props.navigator && this.props.navigator.push({
              component: url,
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
  listItem:{
     paddingTop:16,
     paddingBottom:16,
     flexDirection:'row',
    backgroundColor: '#ffffff',
    borderBottomWidth:ONE_PIXEL,
    borderColor: '#ececec',
 },
});
