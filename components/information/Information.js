import React from 'react'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { colors, sizes } from '../../styles'
import { BackNavigation } from '../navbar/BackNavigation'
const imgInfo = require('resources/images/img-info.png')

import { Definition } from '../definition/Definition'
import { Courses } from '../courses/Courses'

const Tab = createMaterialTopTabNavigator()

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    flex: 1,
  },
  wrapper: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    marginTop: 10,
    padding: 20,
  },
  img: {
    borderRadius: 8,
    height: 200,
    width: 'auto'
  }
})

export const Information = ({ route }) => {
  
  const { name } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='dark-content' 
        backgroundColor={colors.yellow}
      />
      <BackNavigation title={name} color={colors.gray}/>
      <View style={styles.wrapper}>
        <Image
          source={imgInfo}
          style={styles.img}
          resizeMode='contain'
        />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.gray,
            tabBarLabelStyle: {
              fontSize: sizes.body, 
              textTransform: 'none',
              fontFamily: 'Lato-Regular',
            },
            tabBarIndicatorStyle: {
              backgroundColor: colors.yellow, 
              height: 2,
            },
            tabBarItemStyle: {color: 'red'},
            tabBarScrollEnabled: true,
            tabBarStyle: {elevation: 0,}
          }}
        >
          <Tab.Screen 
            name='Definition' 
            component={Definition}
            options={{
              tabBarLabel: 'Definición'
            }}
          />
          <Tab.Screen 
            name='Courses' 
            component={Courses}
            options={{
              tabBarLabel: 'Cursos'
            }}
          />
          <Tab.Screen 
            name='Courses2' 
            component={Courses}
            options={{
              tabBarLabel: 'Actividades'
            }}
          />
          <Tab.Screen 
            name='Courses3' 
            component={Courses}
            options={{
              tabBarLabel: 'Ambito laboral'
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  )
}
