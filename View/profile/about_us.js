import NavigationBar from '../navigation_bar/navigation_bar';
import {USER_API} from '../../API/API';

// import HTMLView  from 'react-native-htmlview';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      content:''
    }
  }
  componentDidMount() {
      this._onfetch();
    }
    render(){
      return(
        <View style={styles.container}>
            <NavigationBar
                title='关于我们'
                onPressBackIcon={() => this._onPressBackBtn()}
            />
              <ScrollView>
                  {/* <HTMLView  value={this.state.content}/> */}
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
    _onfetch(){
      const url =USER_API.about;
        service.get(url)
            .then(response => {
                if(response.ok === false) {
                    callback([]);
                    //showHUDMessage(response.problem);
                }
                else {
                    this.setState({content: response.data.data})
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
});
