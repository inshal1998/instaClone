import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import NewPostScreen from './src/Screens/NewPostScreen';
import LoginScreen from './src/Screens/LoginScreen';
import testComponents from './testComponents';

const Stack = createNativeStackNavigator();

const SignedInStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={HomeScreen} screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="testComponents" component={testComponents} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default SignedInStack

const styles = StyleSheet.create({})
