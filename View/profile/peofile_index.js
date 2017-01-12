/**
 * Created by weizheng on 16/11/16.
 */
import NavigationBar from '../navigation_bar/navigation_bar';
import {MOVIE_API} from '../../API/API';

import ProfileInfo from './peofile_info';
import ProfileSet from './peofile_set';
import ContactUs from './contact_us';
import QuestionList from './question_list'

export default class Profile extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          celebrityID:1054521,
          celebrity: null,
          dataSource: ds.cloneWithRows([
                  {"txt":'收货地址',url:''},{"txt":'设置','url':ProfileSet},{'txt':'常见问题','url':QuestionList},{'txt':'联系我们','url':ContactUs}])
      }
  }
  componentDidMount() {
  //this._onfetch();
    }
    render() {
        const content =
             <View style={{flex: 1}}>
                <ListView
                   dataSource={this.state.dataSource}
                     automaticallyAdjustContentInsets={false}
                      renderRow={this._renderRowView.bind(this)}
                 />
             </View>;

      return (
          <View style={styles.container}>
                {this._renderBsicInfo()}
                <View style={styles.mTab}>
                    <View style={{flex:1, alignItems: 'center',}}>
                       <Image source={require('../../imgs/profile/m_zajx.png')} style={[styles.mgb8,{width:36,height:36}]}/>
                        <Text >正在进行</Text>
                    </View>
                        <View style={{flex:1, alignItems: 'center',}}>
                       <Image source={require('../../imgs/profile/m_zjjl.png')}   style={[styles.mgb8,{width:36,height:36}]}/>
                       <Text >已经揭晓</Text>
                   </View>
                            <View style={{flex:1, alignItems: 'center',}}>
                           <Image source={require('../../imgs/profile/m_sd.png')}  style={[styles.mgb8,{width:36,height:36}]}/>
                        <Text >夺宝记录</Text>
                    </View>
              </View>
              {this._renderSepLine()}
              {content}
          </View>
      );
    }

    /**
     * 基本信息
     */
    _renderBsicInfo() {
        const model = this.state.celebrity;
        // const gender = `性别: ${model.gender}`;
        // const bornPlace = `出生地: ${model.born_place}`;
        // const name_en = `外文名: ${model.aka_en.join('/')}`;
        // const other_name = model.aka.join('/');

        return (

            <View style={styles.basic_info_container}>

              <View style={styles.headBack}>
                   <Image source={require('../../imgs/profile/m_head_back.png')} style={styles.headBackImg}/>
              </View>

                  <TouchableOpacity
                     activeOpacity={0.8}
                                 underlayColor='#ddd'
                                 onPress={() => this._onSelectCell()}
                                 style={styles.head}
                     >
                      <View style={{flexDirection:'row', justifyContent: 'center',alignItems  :'center',}}>

                            <View style={{flex:1, alignItems  :'center',}}>
                                 <Image source={require('../../imgs/profile/m_head.png')}/>
                                 <Text style={styles.headName}>gengchang</Text>
                            </View>

                             <Image source={require('../../imgs/profile/m_head_arrow.png')} style={{width:24,height:24,marginRight:16,}}/>

                      </View>
                   </TouchableOpacity>
                   <TouchableOpacity
                     onPress={() => this._toMsg()}
                     style={styles.mMsg}
                      >
                       <View >
                            <Image source={require('../../imgs/profile/m_msg.png')}   />
                       </View>
                    </TouchableOpacity>
            </View>
        );
    }
    /*
    *item list
   */
    _renderRowView(rowData){
      var url=rowData.url
      return (
        <TouchableOpacity
          onPress={() => this._onJumpToWeb(url)}
        >
            <View style={styles.listItem}>
                <View style={{flex:1,marginLeft:16}}>
                    <Text style={{fontSize:16}}>
                      {rowData.txt}
                    </Text>
                </View>
                <Image source={require('../../imgs/arrow_right.png')} style={{width:24,height:24,marginRight:16}}/>
            </View>
          </TouchableOpacity>
        )
    }
  /***
  *line
  ****/
    _renderSepLine() {
      return (
          <View style={styles.sepLine}/>
      );
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


    /**
     * 点击导航栏右上角搜索按钮
     * @private
     */
    _onPressNavigationBtn() {
        this.props.navigator && this.props.navigator.push({
            component: MovieSearch,
            isModal: true
        })
    }

    /**
     * 点击头像信息跳转
     *
     */
     _onSelectCell() {
      this.props.navigator && this.props.navigator.push({
            component: ProfileInfo
      })
    }
    _onJumpToWeb(url){
      this.props.navigator && this.props.navigator.push({
                component: url,
        })
    }
    _toMsg(){
      this.props.navigator && this.props.navigator.push({
                component: ContactUs,
        })
    }
}
const arrowImg=24/375*WIDTH;
const styles = Style({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    listview: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        flex: 1
    },
    mMsg:{
     position:'absolute',
     right:16,
     top:8,
    transform: [{'translate':[0,0,1]}]
   },
   headBack:{
     width:WIDTH,
       height:250/375*WIDTH,
   },
   headBackImg:{
        width:WIDTH,
      height:250/375*WIDTH,
   },
   head:{
      width:WIDTH,
      height:250/375*WIDTH,
     justifyContent: 'center',
     alignItems  :'center',
     backgroundColor: 'rgba(183,183,183,0.30)',
     flexDirection:'row',
     position:'absolute',
     top:0,
     left:0
   },
   headName:{
     color:'#fff',
     fontSize:20,
   },
   arrow:{
     position:'absolute',
        right:16,
        top:(250/375*WIDTH-arrowImg)/2
   },
   mTab:{
     paddingTop:16,
     paddingBottom:16,
     flexDirection:'row',
     backgroundColor: '#ffffff',
   },
   mgb8: {
      marginBottom: 8
    },
    listItem:{
       paddingTop:16,
       paddingBottom:16,
       flexDirection:'row',
      backgroundColor: '#ffffff',
      borderWidth:ONE_PIXEL,
      borderColor: '#ececec',
   },
   sepLine: {
        height: 10,
        backgroundColor: '#ddd'
    },
});
