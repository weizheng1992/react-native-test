/**
 * Created by zhou on 16/6/4.
 */

import {HOME_API} from '../../API/API';

export default class Home extends Component {
  constructor(props) {
     super(props);
     this.state = {
       bannerData:null,
       tabData:null,
       listData:new ListView.DataSource({
         rowHasChanged: ((row1, row2) => row1 !== row2)
       })
     };
   }
   componentDidMount() {
     let topshow=HOME_API.topshow;
     let ranking=HOME_API.ranking;
     service.get(topshow).then(response => {
         if (response.ok === false) {
             alert(response.problem);
         } else {
           this.setState({
             bannerData: response.data.data,
           });
         }
     });
     service.get(ranking).then(response => {
         if (response.ok === false) {
             alert(response.problem);
         } else {
           this.setState({
             tabData: response.data.data,
           });
         }
     });
     this.getRankingList('1')
   }
   render() {
     var banner;
     var tab;
     if(!this.state.bannerData) {
       banner = (<Image source={require('../../imgs/loading_icon_back.png')} style={{width:WIDTH,height:200, resizeMode:'stretch'}} />)
     } else {
       banner = (
        <Swiper height={200} autoplay autoplayTimeout={5} autoplayDirection paginationStyle={{
            bottom: 5, left: null, right: 10
        }}>
          {
            this.state.bannerData.map((data, i) => {
              return (<Image key={i} source={{uri: data.image}} style={styles.bannerItem} defaultSource={require('../../imgs/loading_icon_back.png')} />)
            })
          }
        </Swiper>
       )
     }
      if(this.state.tabData) {
        tab = (
          <ScrollableTabView style={{marginTop:10,paddingTop:10,flex:1,backgroundColor:'#ffffff'}}
            renderTabBar={() => <DefaultTabBar underlineColor='#FF2104' />}
            tabBarActiveTextColor='#FF2104'
            onChangeTab={(obj) => {
              this.getRankingList(this.state.tabData[obj.i].id)
            }
          }>
            {
              this.state.tabData.map((data, i) => {
                return (
                  <ListView key={i} tabLabel={data.name} style={{flex:1}}
                    dataSource={this.state.listData}
                    renderRow={(data) => {
                      return (
                        <View>
                          <Image source={{ uri: data.icon }} style={{ width: 53,height: 81 }} />
                        </View>
                      );
                  }} />
                )
              })
            }
          </ScrollableTabView>
        )
      }
      return (
        <ScrollView style={{backgroundColor:'#efefef'}}>
          {banner}
          <View style={styles.quickButton}>
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
              <Image source={require('../../imgs/home/icon_fenlei.png')} />
              <Text style={{marginTop:9,fontSize:16}}>分类</Text>
            </View>
            <Image source={require('../../imgs/rect.png')} />
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
              <Image source={require('../../imgs/home/icon_tuijian.png')} />
              <Text style={{marginTop:9,fontSize:16}}>推荐</Text>
            </View>
            <Image source={require('../../imgs/rect.png')} />
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
              <Image source={require('../../imgs/home/icon_question.png')} />
              <Text style={{marginTop:9,fontSize:16}}>常见问题</Text>
            </View>
          </View>
            {tab}
        </ScrollView>
        )
    }

  getRankingList(id) {
    service.get("http://emall.eteclab.com/api/v1/rankingList?rankingId="+id).then(response => {
        if (response.ok === false) {
            alert(response.problem);
        } else {
          this.setState({
            listData: this.state.listData.cloneWithRows(response.data),
          });
        }
    });
  }
}

const styles = Style({
    container: {
        flex: 1,
        backgroundColor: '#987654'
    },
    bannerItem: {
      height:200,
      resizeMode:'stretch',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    quickButton: {
      backgroundColor:'#ffffff',
      paddingTop:15,
      paddingBottom:15,
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }
});
