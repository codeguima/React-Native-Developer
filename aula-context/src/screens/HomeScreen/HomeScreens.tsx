import {useState, useContext} from 'react';
import { View, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { UserContext } from '../../contexts/userContexts';

type HomeScreenProps ={
  route: StackNavigationProp<RootStackParamList, 'Home'>;
}

export function HomeScreen({route}: HomeScreenProps) {
  const [inputText, setInputText] = useState('');
  const userContext = useContext(UserContext);
  
  const navigateToUserScreen =()=>{
    userContext?.save(inputText);
    route.navigate('User', {username: inputText});
  };


  return (
    <View >
        <TextInput
          placeholder='Digite seu Nome...'
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title='logar' onPress={navigateToUserScreen} />

    </View>
  );
}