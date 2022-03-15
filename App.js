import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountScreen from './screens/CountScreen';
import AllRequests from './screens/AllRequests';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CountScreen}

        />
        <Stack.Screen name="AllRequests" component={AllRequests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;