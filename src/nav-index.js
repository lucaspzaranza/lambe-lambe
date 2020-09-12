import React, {useState, useContext} from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import {AuthContextProvider} from './context/auth-context'

import BottomTab from './tab-navigator'

export default props => {
    const [logged, setLogged] = useState(false)

    return (
        <SafeAreaView style={{flex: 1}}>
            <AuthContextProvider value={{logged, setLogged}}>
                <NavigationContainer>
                    <BottomTab/>
                </NavigationContainer>            
            </AuthContextProvider>
        </SafeAreaView>
    )
}