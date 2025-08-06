import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { GalleryScreen } from "../screens/GalleryScreen/GalleryScreen";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

const {Navigator, Screen} = createBottomTabNavigator()

export function BottomTabsRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                    title: 'Início',
                }}
            />
            <Screen 
                name='gallery'
                component={GalleryScreen}
                options={{
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons
                            name='view-gallery'
                            color='green'
                            size={size}
                        />
                    ),
                    title:'Galeria'
                }}
            />
            
        </Navigator>
    )
}
