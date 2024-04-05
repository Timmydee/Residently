import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/splashScreen/SplashScreen'
import LoginScreen from '../screens/loginScreen/LoginScreen'
import UserListScreen from '../screens/userListScreen/UserListScreen'

const Stack = createStackNavigator()

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='splash' component={SplashScreen} options={{ headerShown: false}} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name='UserList' component={UserListScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigator