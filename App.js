import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2_a from './components/Screen2_a';
import Screen2_c from './components/Screen2_c';

  const Stack = createNativeStackNavigator();

function MyStack() {
  return (
  
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen2_c}/>
      <Stack.Screen name="Notifications" component={Screen2_a} />
      <Stack.Screen name="Profile" component={Screen2_c} />
      <Stack.Screen name="Settings" component={Screen2_a} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
  
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
