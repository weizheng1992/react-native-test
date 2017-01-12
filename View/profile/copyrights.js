import NavigationBar from '../navigation_bar/navigation_bar';


export default class PeofileAddress extends Component {

  render(){
    return(
      <View style={styles.container}>
          <NavigationBar
              title='版权信息'
              onPressBackIcon={() => this._onPressBackBtn()}
          />
          <View style={{flex:1, }}>
          <View style={styles.copyrightsInfo}>
              <Image source={require('../../imgs/profile/m_head.png')}/>
              <Text style={{fontSize:20,color:'#333333',marginTop:24,marginBottom:12}}>
                一圈夺宝
              </Text>
              <Text style={{fontSize:16,color:'#333333'}}>
                v1.0
              </Text>
            </View>
            <View  style={styles.copyrightsBottom}>
              <Text style={{textAlign:'center'}}>
                Copyright ©2016 1元夺宝 版权所有
              </Text>
            </View>
          </View>
      </View>
    )}
    /**
     * EVENT
     */

    _onPressBackBtn() {
        this.props.navigator && this.props.navigator.pop();
    }
  }
  const styles = Style({
      container: {
          flex: 1,
          backgroundColor: 'white',
          paddingLeft:15,
          paddingRight:15
      },
      copyrightsInfo:{
        marginTop:100,
         alignItems: 'center',
      },
      copyrightsBottom:{
        position:'absolute',
        bottom:10,
        alignItems: 'center',
        width:WIDTH-16
      }
  });
