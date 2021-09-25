import React, { useEffect, useState, useContext } from 'react'

import { CareerContext } from '../../context/career/CareerContext'

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


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { BackNavigation } from '../navbar/BackNavigation'
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
  },
  wrapper: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
  },
  search: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    backgroundColor: colors.gray3,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    color: colors.gray,
    fontSize: sizes.title3,
    fontFamily: 'Lato-Bold',
  },
  card: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: colors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 7,
  },
  titleCard: {
    fontSize: sizes.title2,
    fontFamily: 'Lato-Bold',
    color: colors.gray,
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  link: {
    fontSize: sizes.body,
    fontFamily: 'Lato-Regular',
    color: colors.gray,
    textDecorationLine: 'underline'
  }
})

export const Career = ({ navigation }) => {

  const { careers, getCareers } = useContext(CareerContext)
  const [items, setItems] = useState([])

  useEffect(() => {
    getCareers()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={colors.red}
      />
      <BackNavigation title="Carreras" color={colors.white}/>
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
        style={styles.wrapper}
      >
        <View
          style={styles.search}
        >
          <TextInput
            style={styles.inputField}
            placeholderTextColor={colors.gray2}
            placeholder="Buscar..."
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            color={colors.gray2}
            size={sizes.title3}
          />
        </View>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20, }}
        >
          {careers.map((item, index) => (
            <View
              key={index}
              style={styles.card}
            >
              <Image
                source={imgCareer}
                style={{height: 200,}}
                resizeMode='contain'
              />
              <View
                style={{padding: 15,}}
              >
                <Text
                  style={styles.titleCard}
                >
                  {item.nombre}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Information', {name: item.nombre, id: item.id})}
                >
                  <Text
                    style={styles.link}
                  >
                    Conocer más
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
