import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { GalleryScreen } from '../screens/GalleryScreen/GalleryScreen';


const {Navigator, Screen} = createDrawerNavigator();


export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{title:'Inicio'}}
            />
            <Screen
                name='gallery'
                component={GalleryScreen}
                options={{title: 'Galeria'}}
            />
        </Navigator>
    )
}