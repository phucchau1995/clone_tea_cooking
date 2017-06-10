/*  Author: Nguyen Phuc Chau
 *  Date write:08/06/2017
 *  Version: 0.0.1
*/

//=================================import react library=================================
import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

//=================================import js file=======================================
import Home from './Components/Screens/Home/Home';
import Collection from './Components/Screens/Collection/Collection';
import Source from './Components/Screens/Source/Source';
import Video from './Components/Screens/Video/Video';
import Account from './Components/Screens/Account/Account';

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
},{
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
    }
},{
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
    }
},{
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
    });

//=================================Tabbar=======================================
export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabbarLabel: ''
        }
    },
    Collection: {
        screen: CollectionStack,
        navigationOptions: {
            tabbarLabel: 'Collection'
        }
    },
    Video: {
        screen: VideoStack,
        navigationOptions: {
            tabbarLabel: 'Video'
        }
    },
    Source: {
        screen: SourceStack,
        navigationOptions: {
            tabbarLabel: 'Source'
        }
    },
    Account: {
        screen: AccountStack,
        navigationOptions: {
            tabbarLabel: 'Account'
        }
    },
},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: '#ccc',
            },
            labelStyle: {
                fontSize: 10
            },
            activeTintColor: 'green',
            inactiveTintColor: 'green',
        },
        initialRouteName: 'Home',
        swipeEnabled: false,
        lazy: false,
        animationEnabled: true,
    });

