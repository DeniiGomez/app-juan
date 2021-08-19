import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native'

import { colors, sizes } from '../../styles/index'

const imgCareer = require('resources/images/img-career.png')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontFamily: 'Lato-Regular',
    fontSize: sizes.title3
  }
})

export const Career = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={colors.red}
      />
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <Text
          style={styles.title}
        >
          Encuentra una carrera que quieras estudiar.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            backgroundColor: colors.gray3,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: 'transparent',
              color: colors.gray,
              fontSize: sizes.title3,
              fontFamily: 'Lato-Bold'
            }}
            placeholderTextColor={colors.gray2}
            placeholder="Buscar..."
          />
        </View>
        <ScrollView
          contentContainerStyle={{padding: 20, }}
        >
          <View
            style={{
              borderRadius: 8,
              backgroundColor: colors.white,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: {width:0, height:2},
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 7,
            }}
          >
            <Image
              source={imgCareer}
              style={{
                height: 200,
              }}
              resizeMode='contain'
            />
            <View
              style={{
                padding: 15,
              }}
            >
              <Text
                style={{
                  fontSize: sizes.title2,
                  fontFamily: 'Lato-Bold',
                  color: colors.gray,
                  marginBottom: 5,
                }}
              >
                Odontologia
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: sizes.body,
                    fontFamily: 'Lato-Regular',
                    color: colors.gray,
                    textDecorationLine: 'underline'
                  }}
                >
                  Saber más
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
