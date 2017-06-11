/*  Author: Nguyen Phuc Chau
 *  Date write:08/06/2017
 *  Version: 0.0.1
*/

//=================================import react library=================================
import React, { Component } from 'react';
import { Text, View, Platform,Image,Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

//=================================import js file=======================================
import Home from './Components/Screens/Home/Home';
import Collection from './Components/Screens/Collection/Collection';
import Source from './Components/Screens/Source/Source';
import Video from './Components/Screens/Video/Video';
import Account from './Components/Screens/Account/Account';
import DetailFood from './Components/Screens/CommonScreen/DetailFood';
import SignIn from './Components/Screens/Account/SignIn';
import Register from './Components/Screens/Account/Register';

//=================================import picture for temporary UI===========================
import userIcon from './Images/icon/user.png';
import homeIcon from './Images/icon/home.png';
import collectionIcon from './Images/icon/collection.png';
import videoIcon from './Images/icon/video.png';
import sourceIcon from './Images/icon/source.png';

//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
//=================================StackNavigator=======================================
export const HomeStack = StackNavigator({
    Windows_Home: {
        screen: Home,
        name: 'Home',
        navigationOptions: {
            title: 'Home',

        }
    }
},
    {
        initialRouteName: 'Windows_Home',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
    });

export const CollectionStack = StackNavigator({
    Windows_Collection: {
        screen: Collection,
        name: 'Collection',
        navigationOptions: {
            title: 'Collection'
        }
    }
}, {
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
    }
);

export const SourceStack = StackNavigator({
    Windows_Collection: {
        screen: Source,
        name: 'Source',
        navigationOptions: {
            title: 'Source',
            header: null,
        }
    }
}, {
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
    });

export const VideoStack = StackNavigator({
    Windows_Video: {
        screen: Video,
        name: 'Video',

        navigationOptions: {
            title: 'Video'
        }
    },
    Windows_Details: {
        screen: DetailFood,
        name: 'DetailFood',

        navigationOptions: {
            title: 'DetailFood'
        }
    },
}, {
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
    });

export const AccountStack = StackNavigator({
    Windows_Account: {
        screen: Account,
        name: 'Account',
        navigationOptions: {
            title: 'Account',
            header: null,
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
        }
    },
    Windows_SignIn: {
        screen: SignIn,
        name: 'SignIn',
        navigationOptions: {
            title: 'Đăng Nhập',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
        }
    },
    Windows_SignUp: {
        screen: Register,
        name: 'SignUp',
        navigationOptions: {
            title: 'Đăng Ký',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
        }
    },
    Windows_Details: {
        screen: DetailFood,
        name: 'DetailFood',
        navigationOptions: {
            header: null,
        }
    },
}, {
        initialRouteName: 'Windows_Account',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    });
//=================================Tabbar=======================================
export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabbarLabel: '',
            tabBarIcon: (<Image style={{ width: 15, height: 15 }} source={homeIcon}/>),
            showIcon: true,
            
        }
    },
    Collection: {
        screen: CollectionStack,
        navigationOptions: {
            tabbarLabel: 'Collection',
            tabBarIcon: (<Image style={{ width: 15, height: 15 }} source={collectionIcon}/>),
            showIcon: true
        }
    },
    Video: {
        screen: VideoStack,
        navigationOptions: {
            tabbarLabel: 'Video',
            tabBarIcon: (<Image style={{ width: 15, height: 15 }} source={videoIcon}/>),
            showIcon: true
        }
    },
    Source: {
        screen: SourceStack,
        navigationOptions: {
            tabbarLabel: 'Source',
            tabBarIcon: (<Image style={{ width: 15, height: 15 }} source={sourceIcon}/>),
            showIcon: true
        }
    },
    Account: {
        screen: AccountStack,
        navigationOptions:  {
            tabbarLabel: 'Tài khoản',
            title: 'Tài khoản',
            tabBarIcon: (<Image style={{ width: 15, height: 15 }} source={userIcon}/>),
            showIcon: true
        }
    },
},
    {
         
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: '#ff6699',
                height:40,
                width:width
            },
            labelStyle: {
                fontSize: 10
            },
            tabStyle:{
            },
            scrollEnabled: false,
            showIcon:'true',
            activeTintColor: 'green',
            inactiveTintColor: 'green',
        },
        initialRouteName: 'Home',
        swipeEnabled: false,
        lazy: true,
        animationEnabled: true,
    });

