/**
 * Simple app with web view functionality
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

import {HomeScreen} from './Home';
import {WebViewScreen} from './WebViewScreen';

function App() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#262A82',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="WebView" 
          component={WebViewScreen}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
