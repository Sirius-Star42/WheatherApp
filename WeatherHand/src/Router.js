import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {First, Second} from './Pages';

const Stack = createStackNavigator();

const Router = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstPage" component={First}/>
                <Stack.Screen name="SecondPage" component={Second}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Router;