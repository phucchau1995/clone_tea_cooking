/*  Author: Nguyen Phuc Chau
 *  Date write:08/06/2017
 *  Version: 0.0.1
*/

//=================================import react library=================================
import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
        navigationOptions: {
            title: 'Home',

        }
    }
},
    {
        
    });

export const CollectionStack = StackNavigator({
    Windows_Collection: {
        screen: Collection,
        navigationOptions: {
            title: 'Collection'
        }
    }
});

export const SourceStack = StackNavigator({
    Windows_Collection: {
        screen: Source,
        navigationOptions: {
            title: 'Source'
        }
    }
});

export const VideoStack = StackNavigator({
    Windows_Video: {
        screen: Video,
        navigationOptions: {
            title: 'Video'
        }
    }
});

export const AccountStack = StackNavigator({
    Windows_Account: {
        screen: Account,
        navigationOptions: {
            title: 'Account'
        }
    }
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
    Source: {
        screen: SourceStack,
        navigationOptions: {
            tabbarLabel: 'Source'
        }
    },
    Video: {
        screen: VideoStack,
        navigationOptions: {
            tabbarLabel: 'Video'
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
        swipeEnabled: true
    });

