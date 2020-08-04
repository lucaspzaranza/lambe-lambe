/*import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/feed'

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintcolor }) =>
                <Icon name='user' size={30} color={tintcolor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed', 
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator*/

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/feed'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch(route.name)
                {
                    case 'Home':
                        iconName = 'home'
                    break;

                    case 'Camera':
                        iconName = 'camera'
                    break;

                    case 'Profile':
                        iconName = 'user'
                    break;
                }

                return <Icon name={iconName} size={size} color={color} /> 
            },
        })}
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'dimgray',
            showLabel: false,
            labelStyle: { fontSize: 10 },
            
        }} initialRouteName="Home">
        <Tab.Screen name="Home" component={Feed}
            options={{title:'Home'}}/>
        <Tab.Screen name="Camera" component={Feed}
            options={{title:'Camera'}}/>
        <Tab.Screen name="Profile" component={Feed}
            options={{title:'Profile'}}/>
    </Tab.Navigator>
)