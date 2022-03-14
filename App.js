import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountScreen from './screens/CountScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CountScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}   options={{ title: 'Hystori' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;