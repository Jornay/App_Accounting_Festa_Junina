import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer  independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash" 
                    component={SplashScreen} 
                    options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;