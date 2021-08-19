import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Routes from './Routes' 

export const StackNav = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Routes.Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Career'
        component={Routes.Career}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

