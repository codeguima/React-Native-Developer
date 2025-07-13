import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes} from './drawer.routes';


//caixa de contextos de rotas
export function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}