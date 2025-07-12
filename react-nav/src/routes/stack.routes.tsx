import { createStackNavigator} from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { GalleryScreen } from '../screens/GalleryScreen/GalleryScreen';


const { Screen, Navigator} = createStackNavigator();


export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    headerTintColor:'green',
                    headerShown: true // para aparecer ou não o nome a tela
                }}
            />
            <Screen
                name='gallery'
                component={GalleryScreen}
                options={{
                    title: 'Galeria',
                    headerTintColor:'green',
                    headerShown: true // para aparecer ou não o nome a tela
                }}
            />
        </Navigator>
    )
}