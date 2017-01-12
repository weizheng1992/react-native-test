/**
 * Created by zhou on 16/5/28.
 *
 * 在index.js 引入一次即可 全局都能访问
 * import './config'
 */

console.disableYellowBox = true;

import React, {
    Component,
    PropTypes
} from 'react';

import {
    AppRegistry,
    BackAndroid,
    Dimensions,
    PixelRatio,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    ListView,
    Alert,
    TextInput,
    Navigator,
    Linking,
    InteractionManager,
    StatusBar
} from 'react-native';

global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;

global.AppRegistry = AppRegistry;
global.BackAndroid = BackAndroid;
global.Platform = Platform;
global.Text = Text;
global.View = View;
global.Image = Image;
global.TouchableOpacity = TouchableOpacity;
global.TouchableHighlight = TouchableHighlight;
global.ScrollView = ScrollView;
global.ListView = ListView;
global.Alert = Alert;
global.TextInput = TextInput;
global.Navigator = Navigator;
global.Linking = Linking;
global.InteractionManager = InteractionManager;
global.StatusBar = StatusBar;

global.isAndroid = Platform.OS === 'android';

/**
 * 屏幕宽高 像素密度
 */
global.WIDTH = Dimensions.get('window').width;
global.HEIGHT = Dimensions.get('window').height;
global.SCALE = PixelRatio.get();
global.ONE_PIXEL = 1 / SCALE;

/**
 * https://github.com/knowbody/react-native-platform-stylesheet
 * npm install react-native-platform-stylesheet
 * 分平台创建样式
 */
import { create } from 'react-native-platform-stylesheet';
global.Style = create;

/**
 * 分页的ListView
 */
import GiftedListView from './components/gifted-listview/GiftedListView';
global.GiftedListView = GiftedListView;


/**
 * 轮播图
 *
 * https://github.com/leecade/react-native-swiper
 * npm i react-native-swiper --save
 */
import Swiper from 'react-native-swiper';
global.Swiper=Swiper;

/**
 * 网络请求
 */
import service from './API/API';
global.service = service;

/** 
 * https://github.com/magicismight/react-native-root-siblings  * 
 * npm install react-native-root-siblings --save 
 */
import {showHUDLoading, hidenHUDLoading, showHUDMessage} from './components/react-native-HUD/HUD'
/**
 * 弹出HUDLoading 挡住下面的控件交互
 */
global.showHUDLoading = showHUDLoading;
/**
 * 隐藏HUDLoading
 */
global.hidenHUDLoading = hidenHUDLoading;
/**
 * 文字提示HUD message: string 默认2.5秒
 */
global.showHUDMessage = showHUDMessage;



/**
 * appkey
 */
global.APPKEY = 'DAB649D97E0A839C901F31D4D2E82596';
