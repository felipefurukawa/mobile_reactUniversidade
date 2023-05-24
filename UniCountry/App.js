import Main from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detalhe } from "./components/Detalhe";

export default function App() {

  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main}/>
              <Stack.Screen name="Detalhe" component={Detalhe}/>
            </Stack.Navigator>
         </NavigationContainer>;
}