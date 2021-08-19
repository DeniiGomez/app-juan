import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import { colors, sizes } from 'styles/index'
const logo = require('resources/images/logo-colegio.jpeg')
const fondo = require('resources/images/fondo.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize: sizes.title1,
    color: colors.gray,
    fontFamily: 'Lato-Bold',
    textAlign: 'center'
  },
  logo: {
    height: 150,
    marginBottom: 10,
  }
})

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={colors.white}
      />
      <Image
        source={fondo}
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}
        resizeMode='cover'
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingVertical: 80,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image 
            source={logo} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            Sistema de Orientación Vocacional CMAA
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: colors.white,
            //borderWidth: 1,
            padding: 10,
            borderRadius: 4,
          }}
          onPress={() => navigation.navigate('Career')}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: sizes.title3,
              fontFamily: 'Lato-Regular'
            }}
          >
            Empezar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
