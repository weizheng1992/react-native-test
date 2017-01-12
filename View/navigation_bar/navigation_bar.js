/**
 * Created by zhou on 16/6/4.
 */

const rightBtnSize = 44;
const rightIconSize = 24;

const backIcon = require('../../imgs/bgb_back.png');

export default class NavigationBar extends Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        rightIcon: React.PropTypes.number,
        rightTitle:React.PropTypes.string,
        onPressRightIcon: React.PropTypes.func,
        onPressBackIcon: React.PropTypes.func,
        rightTitleColor: React.PropTypes.string,
    };

    static defaultProps = {
        title: '',
        rightTitleColor:'#333333'
    };

    render() {
        // 判断右Item的类型
          var onlyRightIcon = false; // 是否只是图片
          if (this.props.rightTitle && this.props.rightIcon) {
              onlyRightIcon = true;
          } else if (this.props.rightIcon) {
            onlyRightIcon = true;
          }
        // 右侧图片title都没有的情况下
         var noneRight = false;
         if (!(this.props.rightTitle) && !(this.props.rightIcon)) {
           noneRight = true;
         }

        const rightBtn =

        !noneRight ? <TouchableOpacity
                    style={styles.rightBtn}
                    activeOpacity={0.75}
                    onPress={() => this.props.onPressRightIcon()}
                    >
            { // 右侧是图片还是文字
              onlyRightIcon
              ? <Image style={styles.btn_icon}
                         source={this.props.rightIcon}/>
              : <Text style={[styles.rightTitle,{color: this.props.rightTitleColor}]}>
                 {this.props.rightTitle}
                </Text>
            }
         </TouchableOpacity>
         : null
        const backBtn = this.props.onPressBackIcon ? (
            <TouchableOpacity
                style={styles.backBtn}
                activeOpacity={0.75}
                onPress={() => this.props.onPressBackIcon()}
            >
                <Image
                    source={backIcon}
                    style={styles.btn_icon}/>
            </TouchableOpacity>
        ) : null;

        return (
            <View style={styles.container}>
                <View style={styles.title_content}>
                    <Text
                        style={styles.title_font}
                        numberOfLines={1}
                    >{this.props.title}</Text>
                </View>
                <View style={styles.bottom_line}/>
                {rightBtn}
                {backBtn}
            </View>
        );
    }
}

const styles = Style({
    container: {
        backgroundColor: 'white',
        ios: {
            height: 64
        },
        android: {
            height: 48
        }
    },
    title_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ios: {
            marginTop: 20
        },
        marginHorizontal: 45
    },
    title_font: {
        fontSize: 17,
        fontWeight: '600'
    },
    rightBtn: {
        width: rightBtnSize,
        height: rightBtnSize,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 5,
        ios: {
            top: (44 - rightBtnSize) * 0.5 + 20
        },
        android: {
            top: (48 - rightBtnSize) * 0.5
        }
    },
    backBtn: {
        width: rightBtnSize,
        height: rightBtnSize,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 5,
        ios: {
            top: (44 - rightBtnSize) * 0.5 + 20
        },
        android: {
            top: (48 - rightBtnSize) * 0.5
        }
    },
    btn_icon: {
        width: rightIconSize,
        height: rightIconSize
    },
    bottom_line: {
        height: ONE_PIXEL,
        backgroundColor: '#B2B2B2'
    },
    rightTitle:{
        fontSize:16,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 5,
        top:10
    }
});
