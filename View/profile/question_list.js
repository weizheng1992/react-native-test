
import NavigationBar from '../navigation_bar/navigation_bar';
import {USER_API} from '../../API/API';



export default class QuestionList extends Component {
    render(){
      return(
          <View style={styles.container}>
              <NavigationBar
                  title='常见问题'
                  onPressBackIcon={() => this._onPressBackBtn()}
              />
              <GiftedListView
                    style={styles.listview}
                    pagination={false}
                    refreshable={false}
                    onFetch={(_, callback) => this._onFetch(_, callback)}
                    rowView={(rowData, _, rowID) => this._renderRowView(rowData, undefined, rowID)}
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
     * network
     */
     _onFetch(_, callback) {
        const url =USER_API.question+'?appkey='+APPKEY;
          service.get(url)
              .then(response => {
                  if(response.ok === false) {
                      callback([]);
                      showHUDMessage(response.problem);
                  }
                  else {
                    callback(response.data.data);
                  }
              })
      }
      /**
     * UI
     */
     _renderRowView(rowData, sectionID, rowID) {
       const question =rowData.title;
       const answer =rowData.content;

       return(
         <View style={{marginBottom:8}}>
              <View style={[{flex:1,paddingTop:16,paddingBottom:16},styles.bottom_line]}>
                  <Text style={{fontSize:16,color:'#ff2104'}}>
                    {question}
                  </Text>
              </View>
              <View style={{flex:1,marginTop:16}}>
                  <Text style={{fontSize:12,color:'#666666'}}>
                    {`答: ${answer}`}
                  </Text>
              </View>
         </View>
       )
     }
  }
  const styles = Style({
  container: {
      flex: 1,
      backgroundColor: 'white',

  },
  listview: {
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
