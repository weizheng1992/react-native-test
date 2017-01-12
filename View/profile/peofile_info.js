
import NavigationBar from '../navigation_bar/navigation_bar';
import {MOVIE_API} from '../../API/API';


import PeofileNickName from './peofile_nickname'



export default class PeofileInfo extends Component {

  render(){
    return(
        <View style={styles.container}>
          <NavigationBar
                    title='个人资料'
                    onPressBackIcon={() => this._onPressBackBtn()}
                />
                {this._renderRowView()}
                <View style={[{paddingTop: 15,paddingBottom:15,alignItems: 'center',flexDirection: 'row',},styles.bottom_line]}>
                   <View style={{flex:1,}}>
                     <Text style={styles.itemLabel}>
                       ID
                     </Text>
                   </View>
                   <View style={{flex:1,}}>
                     <Text style={styles.itemNote}>
                       108739748
                     </Text>
                   </View>
                  </View>
               <TouchableOpacity
                onPress={() => this._onJumpToWeb(PeofileNickName)}
                >
                  <View style={[{paddingTop: 15,paddingBottom:15,alignItems: 'center',flexDirection: 'row',},styles.bottom_line]}>
                     <View style={{flex:1,}}>
                       <Text style={styles.itemLabel}>
                         昵称
                       </Text>
                     </View>
                     <View style={{flex:1,}}>
                       <Text style={styles.itemNote}>
                         GengChang
                       </Text>
                     </View>
                     <Image style={{ width: 24, height: 24}}
                          source={require('../../imgs/arrow_right.png')}/>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity
                onPress={() => this._onJumpToWeb(3)}
                >
                  <View style={[{paddingTop: 15,paddingBottom:15,alignItems: 'center',flexDirection: 'row',},styles.bottom_line]}>
                     <View style={{flex:1,}}>
                       <Text style={styles.itemLabel}>
                         手机号码
                       </Text>
                     </View>
                     <View style={{flex:1,}}>
                       <Text style={styles.itemNote}>
                         手机号码
                       </Text>
                     </View>
                     <Image style={{ width: 24, height: 24}}
                             source={require('../../imgs/arrow_right.png')}/>
                </View>
             </TouchableOpacity>
        </View>
    );
  }
  /**
   * UI
   */
   _renderRowView(){
     return(
       <TouchableOpacity
           onPress={() => this._onJumpToWeb(1)}
       >
           <View style={[{paddingTop: 15,paddingBottom:15,alignItems: 'center'},styles.bottom_line]}>
              <View style={{width:80,height:80}}>
                  <Image source={require('../../imgs/profile/m_head.png')} style={{width:80,height:80}}/>
                  <Image source={require('../../imgs/profile/m_carmoll.png')} style={styles.carmoll}/>
              </View>
          </View>
       </TouchableOpacity>

     );
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
  carmoll:{
    position:'absolute',
    right:0,
    bottom:0,
    width:20,
    height:20
  },
  itemLabel:{
      textAlign: 'left',
      fontSize:16,
      color:'#333333'
  },
  itemNote:{
    textAlign: 'right',
    fontSize:16,
    color:'#999999'
  }
});
