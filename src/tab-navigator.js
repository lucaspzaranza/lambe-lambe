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

export default MenuNavigator

// Passando mais props dentro de um Stack.Screen, ex: funcs
<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>

*/

import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/feed'
import AddPhoto from './screens/add-photo'
import Profile from './screens/profile'
import Login from './screens/login'
import Register from './screens/register'

import AuthContext from './context/auth-context'

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

export default props => {
    const {logged} = useContext(AuthContext)    

    const AuthScreenSelector = () => {     
        return (                 
            <Stack.Navigator initialRouteName="Login">        
                <Stack.Screen name="Login" options={{title:'Login'}}
                    component={Login}/>                            
                <Stack.Screen name="Register" options={{title:'Register'}}
                    component={Register}/>            
            </Stack.Navigator>
        )
    }

    return (                
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch(route.name)
                    {
                        case 'Home':
                            iconName = 'home'
                        break;

                        case 'AddPhoto':
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
            <Tab.Screen name="AddPhoto" component={AddPhoto}
                options={{title:'Add Photo'}}/>                   
            <Tab.Screen name="Profile" options={{title:'Profile'}}
                component={logged? Profile: AuthScreenSelector}/>                                                                          
        </Tab.Navigator>                            
    )
}