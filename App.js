import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import Home from './Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator >


    <Stack.Screen 
      name="SignupScreen" 
      component={SignupScreen}
      options={{
        headerShown:false
      }}
    />

    <Stack.Screen 
      name="LoginScreen" 
      component={LoginScreen}
      options={{
        headerShown:false
      }}
    />

    <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown:false
      }}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
