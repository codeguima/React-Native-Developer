import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { GalleryScreen } from '../screens/GalleryScreen/GalleryScreen';
import { BottomTabsRoutes } from './bottom-tabs.routes';


const { Screen, Navigator} = createStackNavigator();


export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerTintColor: 'green' }}>
            <Screen
                name='tabs'
                component={BottomTabsRoutes}
                options={{headerShown: false}}
            />
            <Screen
                name='gallery-full'
                component={GalleryScreen}
                options={{
                    title: 'Galeria Completa',
                    
                }}
            />
        </Navigator>
    )
}