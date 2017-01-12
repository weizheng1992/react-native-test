
import NavigationBar from '../navigation_bar/navigation_bar';
import {USER_API} from '../../API/API';


import peofileSet from './peofile_set';

export default class PeofileAddress extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:''
    }
  }
  render(){
    return(
      <View style={styles.container}>
          <NavigationBar
              title='联系我们'
              onPressBackIcon={() => this._onPressBackBtn()}
          />
          <ScrollView>
              <View style={{flex:1}}>
                    <View style={[{marginBottom:16},styles.bottom_line]}>
                      <Text style={{marginBottom:16,marginTop:16}}>
                          <Text style={{fontSize:16,color:'#ff2104'}}>
                          在线留言
                          </Text>
                          <Text style={{fontSize:12,color:'#666666'}}>
                          （我们将于12小时之前回复您）
                          </Text>
                      </Text>
                      <TextInput multiline={true} style={{backgroundColor:'#ececec',height:160,marginBottom:36}}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}/>


                    <TouchableOpacity style={styles.redBtn}   onPress={() => this._save()}>
                      <Text style={{fontSize:16,color:'#ffffff'}}>
                        提交
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[{marginBottom:16},styles.bottom_line,styles.top_line]}>

                    <Text style={{marginBottom:16,marginTop:16}}>
                        <Text style={{fontSize:16,color:'#ff2104'}}>
                          联系方式
                        </Text>
                        <Text style={{fontSize:12,color:'#666666'}}>
                        （24小时在线服务）
                        </Text>
                    </Text>
                    <Text style={{marginBottom:16}}>
                        <Text style={{fontSize:16,color:'#333333'}}>
                          联系方式：
                        </Text>
                        <Text style={{fontSize:16,color:'#4186ff'}}>
                          400-888-888
                        </Text>
                    </Text>
                    <Text style={{marginBottom:16}}>
                        <Text style={{fontSize:16,color:'#333333'}}>
                          联系方式：
                        </Text>
                        <Text style={{fontSize:16,color:'#4186ff'}}>
                          400-888-888
                        </Text>
                    </Text>
                  </View>
              </View>
          </ScrollView>
      </View>
    );
  }
  /**
   * EVENT
   */

  _onPressBackBtn() {
      this.props.navigator && this.props.navigator.pop();
  }
  _save(){
      showHUDLoading();
      let url =USER_API.feedback;
      let data={'appkey':APPKEY,'udid':'123456','uuid':'HSHSIHIFAUINNSNAFKSKJFNKFKFNFNFNK','content':this.state.text,userId:'263'};
      service.post(url, JSON.stringify(data),{headers: {'Content-Type': 'application/json'}}).then(response => {
        if(response.ok === false) {
            callback([]);
            //showHUDMessage(response.problem);
        }
        else {
            hidenHUDLoading();
            showHUDMessage('提交成功');
            this.props.navigator && this.props.navigator.push({
                      component: peofileSet,
              })
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
    top_line: {
      borderTopColor: '#ddd',
      borderTopWidth: ONE_PIXEL
  },
  redBtn:{
      width:WIDTH,
      height: 40,
       alignItems: 'center',
       justifyContent: 'center',
       alignSelf: 'center',
       backgroundColor:'#ff2104'
  }
});
