import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';



//caixa de contextos de rotas
export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}