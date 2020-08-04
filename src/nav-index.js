import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import BottomTab from './tab-navigator'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <BottomTab/>
        </NavigationContainer>
    </SafeAreaView>
)