/**
 * Created by zhouyumin on 16/6/3.
 */

import {AppState} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';

import Home from './home/home_index';
import Revelation from './revelation/revelation_index';
import Cart from './cart/cart_index';
import Profile from './profile/peofile_nav';

class TabbarModel {

    constructor(normalIcon, selctIcon, title, component, selected: boolean) {
        this.normalIcon = normalIcon;
        this.selctIcon = selctIcon;
        this.title = title;
        this.component = component;
        this.selected = selected;
    }
}

const tabbarModels = [
    new TabbarModel(require('../imgs/tab_icon/home.png'), require('../imgs/tab_icon/home_active.png'), '首页', Home, false),
    new TabbarModel(require('../imgs/tab_icon/jjjx.png'), require('../imgs/tab_icon/jjjx_active.png'), '即将揭晓', Revelation, false),
    new TabbarModel(require('../imgs/tab_icon/cart.png'), require('../imgs/tab_icon/cart_active.png'), '清单', Cart,  false),
    new TabbarModel(require('../imgs/tab_icon/profile.png'), require('../imgs/tab_icon/profile_active.png'), '我的', Profile,true)
];

export default class Index extends Component {

    constructor(props) {
        super(props);

        const selctedTab = tabbarModels.filter(tabbarModel => tabbarModel.selected === true);

        if(selctedTab.length <= 0) {
            throw new Error('请选择一个默认显示的页面');
        }

        this.state = {
            selectedTab: selctedTab[0].title,
            tabbarVisible: true
        }
    }

    componentDidMount() {


        //AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    }



    render() {
        const items = tabbarModels.map(tabModel => {
            const title = tabModel.title;
            const Comp = tabModel.component;
            return (
                <TabNavigator.Item
                    key={title}
                    selected={this.state.selectedTab === title}
                    title={title}
                    renderIcon={() => <Image source={tabModel.normalIcon} style={styles.tabbar_icon}/>}
                    renderSelectedIcon={() => <Image source={tabModel.selctIcon} style={styles.tabbar_icon}/>}
                    onPress={() => this.setState({ selectedTab: title })}
                >
                    <Comp onTriggerTabbarVisible={this._triggerNavigatorTabbar.bind(this)}/>
                </TabNavigator.Item>
            );
        });

        const tabBarBottom = this.state.tabbarVisible ? 0 : -49;
        const scenePaddingBottom = this.state.tabbarVisible ? 49 : 0;
        return (
            <TabNavigator
                tabBarStyle={{bottom: tabBarBottom}}
                sceneStyle={{paddingBottom: scenePaddingBottom}}
            >
                {items}
            </TabNavigator>
        );
    }

    /**
     * 是否显示底部的Tabbar
     * @param flag
     * @private
     */
    _triggerNavigatorTabbar(flag: boolean) {
        this.setState({tabbarVisible: flag});
    }
}

const styles = Style({
    tabbar_icon: {
        width: 25,
        height:25,
        marginTop:5
    }
});
