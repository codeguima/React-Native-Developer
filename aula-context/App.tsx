import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreens';
import { UserScreen } from './src/screens/UserScreen/UserScreen';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { UserContextProvider } from './src/contexts/userContexts';


const Stack = createStackNavigator();

export type RootStackParamList ={
  Home: undefined;
  User: { username : string };
};


export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={HomeScreen}/>
        <Stack.Screen name = 'User' component={UserScreen}/>
      </Stack.Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}

